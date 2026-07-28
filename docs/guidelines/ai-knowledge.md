# AI Knowledge Graph

Purpose:

Maintain a continuously evolving architectural memory of this repository.

This document is not documentation for humans.

It is persistent memory for future AI agents.

---

# Instructions

Every completed task MUST update this file if new knowledge is discovered.

This MUST happen BEFORE implementation and AGAIN after implementation.

---

# Format

Every component entry MUST follow this format:

```
## [ComponentName]

### Purpose
[One sentence]

### Location
[File path]

### Callers
[List of callers]

### Callees
[List of callees]

### Dependencies
[List of dependencies]

### Publishes
[List of events]

### Consumes
[List of events]

### Configuration
[Configuration sources]

### Database
[Tables, queries]

### Known Invariants
[Business rules that MUST NOT change]

### Known Pitfall
[Things easy to break]

### Thread Safety
[Concurrency considerations]

### Transaction Boundaries
[Transaction scope]

### Security Assumption
[Auth assumptions]

### Performance Characteristics
[Known traits]

### Test Coverage
[What is tested, what is not]
```

---

# Entries

<!-- Add component entries below this line -->

## Jest test infrastructure

### Purpose
Test tooling for this repo (a React component library: `UI/`, `Styles/`, built via Rollup) — was entirely absent before 2026-07-28 (`package.json`'s `test` script was a no-op stub, no Jest deps/config existed).

### Location
`jest.config.js`, `jest.setup.js`, `tsconfig.jest.json` (all repo root). Tests live in `__tests__/`, mirroring `UI/`'s structure (e.g. `__tests__/ZestButton.test.tsx` tests `UI/ZestButton.tsx`; `__tests__/hooks/*.test.ts` test `UI/hooks/*.ts`).

### Callers
`npm test` (`package.json`), `scripts/verify-post.ps1` (runs `npx jest --coverage --coverageReporters=json-summary` directly, not via the npm script), CI (if/when added — none exists yet).

### Callees
`ts-jest` (via `tsconfig.jest.json`), `jest-environment-jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `identity-obj-proxy` (CSS Modules stub).

### Dependencies
All added as devDependencies only: `jest`, `@types/jest`, `ts-jest`, `jest-environment-jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `identity-obj-proxy`.

### Configuration
`coverageReporters: ['json-summary', 'text', 'lcov']` — the `json-summary` entry is load-bearing; `scripts/verify-post.ps1` reads `coverage/coverage-summary.json` directly and fails silently (0% coverage) without it. `coverage/` is gitignored; `test-reports/coverage-baseline.json` is not (intentionally committed, per `AI_TEST_CONFIGURATION.md`).

### Known Invariants
- Test files MUST NOT live inside `UI/`. `tsconfig.json`'s `include` is `UI/**/*.ts(x)`, and `@rollup/plugin-typescript` (used by `rollup.config.mjs` for the production build) type-checks everything matching that glob — not just files reachable from the `UI/index.ts` entry point. A `*.test.tsx` file co-located inside `UI/` will fail type-check against the production `tsconfig.json` (which has no jest/testing-library ambient types) and pollute `npm run build`'s output with TS diagnostics, even though it's never actually bundled into `dist/`. This was hit and fixed during initial setup (see decision-log 2026-07-28).
- `tsconfig.jest.json` (not `tsconfig.json`) supplies the `types` compiler option (`jest`, `node`, `@testing-library/jest-dom`) needed for jest-dom's ambient matcher types (`toBeInTheDocument`, etc.) to resolve. A triple-slash `/// <reference types="@testing-library/jest-dom" />` in `global.d.ts` was tried first and did NOT reliably work with this project's Jest 30 / `@types/jest` 30 combination — don't reintroduce that approach without re-verifying it actually resolves.
- `jest.setup.js` stubs `window.matchMedia` globally (jsdom doesn't implement it) because `UI/hooks/useThemeDetection.ts` calls it unconditionally on every render — any test that renders `ZestButton` (directly or indirectly) will throw `TypeError: window.matchMedia is not a function` without this stub. Individual tests (e.g. `__tests__/hooks/useThemeDetection.test.ts`) may still override `window.matchMedia` locally per-test; that's expected and doesn't conflict (each Jest test *file* gets a fresh jsdom global environment).

### Known Pitfall
`scripts/verify-pre.ps1` / `scripts/verify-post.ps1` hardcode `$projectRoot` — originally pointed at a `lattice-web-light` subfolder that doesn't exist in this repo (copied from a different project's version of these scripts); fixed 2026-07-28 to `$projectRoot = $repoRoot`. If these scripts are ever copied into yet another repo, check this first.

### Test Coverage
As of 2026-07-28: 52 tests across 9 suites, covering every file currently in `UI/`'s public surface (`ZestButton.tsx` incl. busy/confirm/keyboard flows, all 4 hooks, `ZestButtonConfigContext.ts`, `ZestButtonConfigProvider.tsx`, `SpinnerIcon.tsx`, `semanticTypeButtonConfigDefaults.tsx`). 95.38% lines / 94.76% statements / 97.36% functions / 85.23% branches. Baseline recorded in `test-reports/coverage-baseline.json`.

## Revenue (report page)

### Purpose
Displays a paginated table of revenue-generating orders with a running Total footer, and exports the same data to Excel.

### Location
`app/account/business-performance-reports/revenue/UI/Revenue.tsx`

### Callers
Rendered via `app/account/business-performance-reports/revenue/page.tsx` (Next.js route entry).

### Callees
`RevenueReportLogic` (State), `ResponsiveTable` (`jattac.libs.web.responsive-table`), `AmountDisplay`, `ReportBar`, `exportStyledXlsx`, `getCustomerDisplayValue`.

### Dependencies
`RevenueApiAccessor.getRevenuesByArbitraryDatesAsync` (backend: `lattice`, controller `Revenues`). `IReportDataPoint` is the shared DTO across all business-performance-reports (revenue, and others) — do not add revenue-specific fields to it without checking other report consumers.

### Configuration
None.

### Database
None directly — reads via `RevenueApiAccessor`.

### Known Invariants
- `IReportDataPoint` has only one date field (`dated`) — there is no separate "order date" vs. "paid date". A "Paid At" concept was requested but deliberately deferred (see `BRS.md` in this folder) pending a data-source decision; do not repurpose `dated` for that without explicit instruction.
- The Amount column and Total footer render via `AmountDisplay` (count-up + pulse animation), not plain `formatAsMoneyNoCode` text — Tax/Discount intentionally remain plain text; don't "fix" this into consistency without checking the BRS (it's a deliberate scope boundary, not an oversight).
- Customer column falls back to `formatPhoneNumber({phoneNumber})` when `customerName` is empty — see `getCustomerDisplayValue.ts`.

### Known Pitfall
`ResponsiveTable`'s row hover styling has no dedicated prop — it's done via the `IResponsiveTablePlugin.getRowProps` hook (see `rowHoverPolishPlugin` in `Revenue.tsx`), which is a mild coupling to the library's plugin contract. If `jattac.libs.web.responsive-table` changes that plugin API, this hover styling breaks silently (no compile error, just no hover effect).

### Thread Safety
N/A (client-side React component).

### Test Coverage
`Revenue.test.tsx` covers: untouched baseline columns (Contact Id, Mode, Order Number, Total sum), new columns (Store, Tax, Discount, Account), Customer name/phone fallback, and `AmountDisplay` usage on Amount/Total. `getCustomerDisplayValue.test.ts` covers the fallback logic in isolation. Row entrance animation and hover polish are not covered by automated tests (visual/interaction behavior; verified manually).

### Update 2026-07-27 — pagination fix + store filter

`RevenueReportLogic.fetchDataAsync` (`State/RevenueReportLogic.ts`) previously fetched exactly one page (`page: 1, pageSize: 40`) and returned — the Total footer only ever reflected the first 40 records in the date range for any vendor with more volume than that. It now loops, calling the same endpoint with an incrementing `page`, accumulating every page's rows into `repository.allData`. ~~Stopping the first time a page comes back shorter than `pageSize`~~ — **superseded, see the correction below: this stopping condition was itself wrong.** The full loop, not just the last page, is what the Total footer and Excel export both read from `repository.allData`, so both are now correct for any result-set size. `RevenueReportLogic.test.ts` pins this (baseline: single short page fetches once; new: multi-page accumulation, correct Total across pages).

### Correction 2026-07-27 (later same day) — "short page = last page" was wrong; only an empty page is reliable

Verified against the live `dailies_expenses` dev DB (via Rowster) after the user noticed a real API response (`page=1&pageSize=40&collapseOrderWithMultipleLineItemsIntoSingleRecord=true`) returned only 6 rows for a vendor ("The Laundry Cart (TLC)", `VendorId=70c69028-19d6-4b7e-9d68-e574afc33b7d`) that actually has 10,703 non-cancelled orders / 14,563 line items in that date range.

**Root cause**: `OrderDataPointReader.GetOrderPriceDataPoints` (`dailies-backend`) applies SQL-level `LIMIT`/`OFFSET` paging against the joined **`OrderHeader` + `OrderLineItem`** result set (raw line items, `OrderDataPointReader.cs:444-449`) — then `RevenueReader.cs:179-192` collapses those (already-paged) line items down to one row per distinct `OrderHeaderId` **in C#, after** the SQL page was fetched. So a "page" of 40 raw line-item rows collapses to however many *distinct orders* happen to be in that particular 40-row slice — verified directly: the first 40 line items for the reproduction vendor collapsed to 28 distinct orders, and the next 40 raw line items (offset 40) collapsed to another 28, with far more data beyond that. A collapsed page being shorter than `pageSize` says nothing about whether more data exists — it's simply a near-certainty on every single page whenever collapse is requested.

**Fix**: `RevenueReportLogic.fetchDataAsync`'s loop condition changed from `while (latestPage.length === this.#pageSize)` to `while (latestPage.length > 0)` — keep fetching until the backend returns a genuinely empty page. An empty raw-line-item page reliably collapses to an empty page too (0 collapses to 0), so this is the only condition that's actually safe. Costs one extra trailing request per report run (the final page that comes back empty) in exchange for correctness.

**Verification**: `RevenueReportLogic.test.ts` rewritten — every test's mocked page sequence now ends with an explicit empty page, and a new dedicated regression test asserts the loop continues past a short-but-non-empty page (`pageOf(6)` followed by more data) rather than stopping there.

**Known limitation, not addressed here**: this doesn't fix the deeper architectural mismatch (SQL pagination operating on raw line items while the client-facing unit of pagination is collapsed orders) — it only makes the web client resilient to it by always fetching to true exhaustion. A `pageSize`-many-orders-per-page guarantee would require the backend to paginate post-collapse (e.g., by distinct `OrderHeaderId`) instead. Not raised with the user as in-scope for this task; flagging here for future reference if pagination performance (many small trailing requests) ever becomes a concern.

Also added: a store/location filter, mirroring `ExpenseListLogic`'s `selectedStoreIds`/`applyStoreFilter` pattern exactly (`app/account/vendor/expenses/expense-list/State/ExpenseListLogic.ts`). `RevenueReportRepository.selectedStoreIds: string[]` defaults to `[]`, which is sent as `vendorLocationIds` on every page request — an empty array is this codebase's established convention for "no location filter = all stores" (confirmed via `ExpenseListLogic`/`ExpenseList.tsx`'s identical `SelectWrapper isMulti` control), not an explicit list of every store id. `storeOptions` is fetched once in `initializeAsync` via `StoresApiAccessor.getAllForVendorAsync({ vendorId })` (vendor id from `Authentication.getVendorIdOrDefaultGroupIdAsync()`). The filter control (`Revenue.tsx`) only renders when `storeOptions.length > 1`, same guard as `ExpenseList.tsx`. Changing the selection calls `applyStoreFilter`, which resets accumulated data/page counter and re-runs the full paginated fetch scoped to the new selection.

Removed the `react-infinite-scroll-component` import from `Revenue.tsx` — it was imported but never rendered/wired to anything; the pagination fix above fetches all pages eagerly up front instead of on-scroll, so it isn't needed. Repo-wide grep found no other file importing this package, but the `package.json` dependency itself was left untouched — removing dependencies is an explicit Absolute Prohibition in `AI_ARCHITECTURE.md` unless the user asks for it, regardless of apparent usage.

### Update 2026-07-27 (later same day) — store filter placement + alignment

Moved the store filter from its own standalone block below `ReportBar` into `ReportBar`'s date-picker row itself, per explicit user request ("why isn't it on a flex row with date filter"). Added a new optional `ReportBar` prop, `extraFilters?: ReactNode`, rendered inside the same `styles.inputFieldsContainer` flex row as `DatePickerWrapper` (`ReportBar.tsx`) — additive, defaults to nothing, so `SalesReport.tsx`/`AppContacts.tsx` (`ReportBar`'s other two callers) are unaffected. Added `data-testid="report-filters-row"` to that container as a test hook (`ReportBar.test.tsx`, new).

Also switched the store filter's label from a hand-rolled `<span className={styles.filterLabel}>` (copied from `ExpenseList.tsx`'s pattern) to `FormControlGroup`/`FormLabel` (`app/Forms/Form/UI/Form.tsx`) — the same components `DatePickerWrapper` itself uses internally for its own "Date" label. The two controls now sitting in the same row need matching label markup to align vertically; `ExpenseList.tsx`'s filter row has no date picker as a row-mate, so its raw-span pattern was never tested against this alignment requirement. `FormLabel` defaults to appending a required-field `*`; passed `optional` here since the store filter is genuinely optional (empty selection = all stores), unlike `DatePickerWrapper`'s "Date" label. Revenue's own `filterGroup`/`filterLabel` CSS classes were removed from `Revenue.module.css` as now-dead (nothing references them anymore).

### Update 2026-07-27 (later same day) — store filter dropdown z-index

The store filter's `SelectWrapper` menu was rendering behind `ResponsiveTable`'s sticky column headers. Root cause: react-select's own default menu `z-index` is exactly `1`, and `jattac.libs.web.responsive-table`'s sticky header CSS also uses `z-index:1` (confirmed by grepping the library's bundled CSS — it's the *only* z-index rule the library defines) — two sibling elements at the same z-index, so paint/stacking order (not intent) decides which wins.

Added `SelectWrapper`'s new `menuZIndex?: number` prop (`SelectWrapper.tsx`) — merges a `{ menu: (base) => ({ ...base, zIndex: menuZIndex }) }` override into react-select's `styles` prop, additive alongside the existing `menuPortal` override used only when `menuPortalTarget` is set (unrelated code path, untouched). Revenue's store filter now passes `menuZIndex={2}` — the minimum value that reliably wins against the table's `1`.

**Test-writing pitfall worth recording**: react-select (emotion-based) applies custom `styles` overrides via a *generated stylesheet class*, not an inline `style` attribute — asserting `element.style.zIndex` in a test will silently read empty string regardless of whether the override is actually applied. Assert via `window.getComputedStyle(element).zIndex` instead (confirmed both the override, `"2"`/`"5"` in tests, and the react-select default, `"1"`, this way — `SelectWrapper.test.tsx`'s two new tests do this correctly, and this note exists so a future test for any `styles`-prop-driven behavior on this component doesn't repeat the mistake).

### Update 2026-07-27 (later same day) — pagination removed entirely, single unbounded fetch

Superseding both pagination entries above: `RevenueReportLogic.fetchDataAsync` no longer paginates at all. It makes exactly one call to `RevenueApiAccessor.getRevenuesByArbitraryDatesAsync` with no `page`/`pageSize`, and the backend (`OrderDataPointReader.cs`'s `shouldPage` check) returns the entire unbounded result set in that single response — the same way the mobile client has always called this endpoint (`revenue_api_caller.dart` never sent `page`/`pageSize` either).

**Why paging never earned its keep here**: `Revenue.tsx` already needs the *complete* result set before it renders anything (Total footer, Excel export, and the grid all read from the fully-loaded `repository.allData`) — there is no lazy/incremental consumer of individual pages on this screen, so paging bought nothing except many additional round-trips and the page/collapse mismatch bug documented in the correction entry above. Removing it entirely, rather than continuing to patch the loop's stopping condition, eliminates that whole class of bug by construction (one request, one collapse operation, nothing to reason about page-by-page).

`RevenueReportRepository.latestPage` was removed (dead field — nothing reads a "current page" concept anymore; only `allData`, the complete set, is meaningful now). `RevenueReportLogic.test.ts` rewritten again: no more page-sequence mocking, one mocked response per test, plus an explicit assertion that `page`/`pageSize` are never sent.

**Known limitation, carried forward from the earlier correction**: this doesn't change the backend at all — a vendor with a very large date range and high order volume still pays for one very large query/response instead of many small ones. Accepted the same way mobile already accepts it for the identical endpoint (mobile's own unbounded-fetch risk was raised and explicitly deferred by the user earlier in this same investigation) — not treated as a new risk introduced here, since it's already the status quo for the other client hitting this endpoint.

### Update 2026-07-27 (later same day) — client-side store-filter cache; busy flag fixed

The store filter used to reset and re-fetch from the server on every selection change — a real, user-reported wait for large date ranges, even though the full (unfiltered) dataset for the current range is typically already sitting in the browser. `RevenueReportRepository` gained `fullData: IReportDataPoint[]` — the cache, always the complete unfiltered set for the *current date range*. `allData` keeps its existing meaning (the displayed/filtered view `Revenue.tsx` reads).

`RevenueReportLogic.fetchDataAsync` no longer sends `vendorLocationIds` at all (server-side location filtering is retired from this client entirely) — it populates `fullData` and derives `allData` via the new private `#filterByStores(data, storeIds)` (empty `storeIds` → unfiltered; else `data.filter(row => storeIds.includes(row.vendorLocationId))`). `applyStoreFilter` no longer resets/refetches — it's now synchronous, setting `selectedStoreIds` and recomputing `allData` from the already-cached `fullData`, zero network calls. `updateReportArgs` (date-range change) still clears `fullData`/`allData` (invalidates the cache) but leaves `selectedStoreIds` untouched, so the next fetch's `allData` correctly re-applies whatever filter was already active.

**Depends on `dailies-backend`'s `VendorLocationId` addition** (added the same date — see that repo's `ai-knowledge.md`) — filtering matches on the real ID, not `vendorLocationDisplayLabel` (a narrow but real correctness risk: two locations could theoretically share an identical display label). Do not deploy this ahead of that backend change, or `vendorLocationId` will be empty on real responses and any non-empty filter selection will silently match nothing.

**Also fixed**: `fetchDataAsync` is now wrapped in `this.runner(...)`, so `repository.busy` actually toggles — previously it was never set anywhere in this class, so `Revenue.tsx`'s `FrostedGlassOverlay show={logic.repository.busy}` never actually showed during a fetch.

**Trade-off, explicitly accepted**: every date-range change now always fetches the complete unfiltered dataset regardless of any active store filter — more data over the wire/held in memory than the old server-filtered approach, in exchange for instant filter toggling after that one fetch. Consistent with the same direction already taken when pagination was removed entirely (see above).

### Update 2026-07-27 (later same day) — mobile-first layout review

Checked `jattac.libs.web.responsive-table`'s type defs and bundled CSS directly: the table already has built-in mobile card view (`mobileBreakpoint`, defaults 600px) handled entirely in JS (no CSS media queries in the bundle at all — confirmed by grepping for `@media` in the compiled output, zero matches). `PageContainer.module.css` already has its own `@media (max-width: 600px)` block and, more importantly, `.parentPageChildren` (where every report's content, including Revenue's, renders) is already `flex: 1; overflow-y: auto` — the page already provides its own natural scroll; `Revenue.tsx`'s `maxHeight` on `ResponsiveTable` creates a second, nested scroll region inside that, which is exactly the same pattern every *other* table in this codebase already uses (`SmsLogTable.tsx`, `LgEventsList.tsx` ×2, `OutreachQueueTable.tsx` — all pair a `maxHeight="calc(100vh - Npx)"` with `enablePageLevelStickyHeader`).

**Found and fixed one concrete gap**: `Revenue.tsx`'s `ResponsiveTable` had `maxHeight` but was missing `enablePageLevelStickyHeader` — every other sibling table with a `maxHeight` prop in this codebase pairs the two. Added it, matching that established pattern exactly (one-line addition, no new pattern introduced).

**Did not find further concrete layout bugs to fix.** `ReportBar`'s `.inputFieldsContainer` is already `display:flex; flex-wrap:wrap`, which already stacks gracefully on narrow viewports without needing an explicit mobile-first rewrite. No automated browser-viewport check was performed in this session (no browser-automation tool was available) — this was a code-level review, not a live visual verification. If real mobile rendering issues turn up, they should be diagnosed from an actual device/viewport check rather than further speculative CSS changes here.

