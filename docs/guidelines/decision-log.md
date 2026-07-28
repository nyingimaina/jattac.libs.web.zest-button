# Decision Log

Purpose:

Record architectural and implementation decisions for future reference.

This document is not documentation for humans.

It is persistent memory for future AI agents.

---

# Instructions

Every task that involves a decision MUST add an entry.

Entries MUST be added BEFORE implementation begins.

---

# Format

```
## [YYYY-MM-DD] Decision Title

### Requested

[What the user asked for]

### Options Considered

1. [Option A] — [pros/cons]
2. [Option B] — [pros/cons]
3. [Option C] — [pros/cons]

### Chosen

[Which option was chosen]

### Rationale

[Why this option was chosen]

### Trade-offs

[What was sacrificed, what was gained]

### Reversible

[Yes/No — and what it would take to reverse]
```

---

# Decisions

<!-- Add decision entries below this line -->

## [2026-07-28] Wire up Jest test infrastructure (no prior tests existed)

### Requested

"get jest wired up, no half measures" — this component library had zero test tooling (`package.json`'s `test` script was a no-op stub). Preceded by a session establishing/fixing this repo's BRS-gated AI workflow (fixed `scripts/verify-pre.ps1`/`verify-post.ps1`'s hardcoded `lattice-web-light` project path, confirmed throughout that `git remote.origin.url` was never at risk from any of it). Full scope: `BRS.md` (repo root).

### Options Considered

1. `ts-jest` vs `babel-jest` for TS transform — chosen `ts-jest`: this project is TypeScript-first with no Babel config anywhere (Rollup build uses `@rollup/plugin-typescript` directly), so `ts-jest` matches the existing toolchain rather than introducing a second transform pipeline.
2. Test file location: co-located next to source (as originally drafted in the BRS) vs. a separate `__tests__/` tree — co-location was tried first and reverted. `tsconfig.json`'s `include: ["UI/**/*.ts", "UI/**/*.tsx", ...]` is read by `@rollup/plugin-typescript` for type-check diagnostics on `npm run build`, not just for what actually gets bundled from the `UI/index.ts` entry graph — a co-located `*.test.tsx` file failed type-check against the production tsconfig (no jest/testing-library types there) and polluted the build output with TS diagnostics. Moved all test files to `__tests__/`, mirroring `UI/`'s structure, rather than modifying `tsconfig.json` (explicitly out of scope per the BRS).
3. jest-dom matcher types: triple-slash `/// <reference types="@testing-library/jest-dom" />` in `global.d.ts` vs. a dedicated `tsconfig.jest.json` with an explicit `types` compiler option — the triple-slash approach didn't work reliably against this project's Jest 30 / `@types/jest` 30 combination (TS resolved `expect()`'s return type without ever merging in jest-dom's `Matchers` interface augmentation). Chose the dedicated `tsconfig.jest.json` (extends `tsconfig.json`, adds `types: ["jest","node","@testing-library/jest-dom"]`), used only via `jest.config.js`'s `transform` option — production `tsconfig.json` stays untouched.
4. Scope of tests written: minimal smoke tests vs. full behavioral coverage of the current public surface — chosen full coverage (all 4 hooks, config context/provider, `SpinnerIcon`, `semanticTypeButtonConfigDefaults`, and the complete `ZestButton` component including busy/confirm/keyboard-Enter flows), per the user's explicit "no half measures" and the global TDD rule to freeze existing behaviour with real tests, not placeholders.

### Chosen

Options 1, 2 (the `__tests__/` variant), 3 (the `tsconfig.jest.json` variant), and 4 (full coverage) — all as amended in `BRS.md`'s "Amendments during implementation" section.

### Rationale

Each deviation from the original BRS draft was discovered empirically (by actually running `npm run build` and the test suite, not assumed) and fixed with the smallest change that didn't touch files explicitly marked out-of-scope (`tsconfig.json`).

### Trade-offs

`tsconfig.jest.json` is a second TypeScript config file to keep in sync conceptually with `tsconfig.json` (it `extends` it, so most drift risk is limited to the `types` array and `include` list). Test files living in `__tests__/` rather than beside their source is a minor discoverability cost, offset by avoiding any change to the production build's type-checking surface.

### Reversible

Yes — every changed/added file is listed in `test-reports/CHANGE_MANIFEST_jest-wiring.md`. No file under `UI/`/`Styles/` (production source) was touched. Revert by removing the new devDependencies, `jest.config.js`, `jest.setup.js`, `tsconfig.jest.json`, `__tests__/`, `BRS.md`, and the `coverage/` line in `.gitignore`, and restoring `package.json`'s `test` script.

## [2026-07-26] Revenue report: new columns + polish animations

### Requested

Add a few columns to the Revenue report and give it "delight, polish, dopamine, playful but corporate grade" animations.

### Options Considered

1. Build new animation components from scratch — full creative control, but duplicates `AmountDisplay`/`AnimatedMount`-style patterns already in the codebase; violates "never introduce a second pattern when one already exists" (AI_STYLE_GUIDE.md).
2. Reuse existing `AmountDisplay` (count-up + pulse) and `ResponsiveTable`'s built-in `animationProps`/plugin system — matches existing patterns, minimal new code.
3. Add a confetti/celebration effect (codebase has `TaskComplete` with `canvas-confetti`) — rejected as out of scope; appropriate for one-off task completion, not a report checked daily.

### Chosen

Option 2. "Paid At" was descoped mid-implementation: `IReportDataPoint` has no field distinct from `dated`, and the user will supply the correct data source in a follow-up feature — the existing Date column was left untouched rather than guessing.

### Rationale

Reusing `AmountDisplay` and `ResponsiveTable`'s native `animationProps`/`getRowProps` plugin hook keeps the change small, consistent with existing UI conventions, and avoids fighting a third-party table component's internals.

### Trade-offs

Row-hover styling depends on `ResponsiveTable`'s `IResponsiveTablePlugin.getRowProps` hook rather than a first-class prop — slightly more coupled to that library's plugin API surface than a simple className prop would be.

### Reversible

Yes — fully contained to `Revenue.tsx`, its new `getCustomerDisplayValue.ts` helper, and one new CSS module. Revert by reverting the commit(s) on this feature branch.

## [2026-07-27] Revenue report: fix pagination undercount + add store filter

### Requested

Mobile's "income" report and the web Revenue report were showing different totals for identical date-range filters. Investigation (see `BRS.md` Round 2 in this folder) traced this to four causes; the user approved fixing all of them, plus explicitly asked for a new store filter on the web report ("by default select all stores but allow owner to cherry pick"). This entry covers the two causes that live in `lattice-web-light`: the pagination undercount, and the missing store filter (the other two causes — a request-flag mismatch and a client-side filter divergence — are `Fua-Mobile`-side changes, tracked in that repo's own commit history since it has no BRS-gate).

### Options Considered

1. Raise `pageSize` to a very large bounded number in a single request, instead of looping pages — fewer round-trips, but silently caps out again if a vendor ever exceeds that bound, reintroducing the same class of bug at a higher threshold rather than actually fixing it.
2. Loop `page`/`pageSize:40` until a short page comes back, accumulating every row — matches how the existing pagination mechanism was clearly intended to be used (the backend already supports arbitrarily many pages), no arbitrary cap reintroduced.
3. For the store filter: build a new bespoke multi-select component — rejected, `ExpenseListLogic`/`ExpenseList.tsx` already has the exact same shape of filter (`selectedStoreIds: string[]`, `SelectWrapper isMulti`, empty selection = no filter = all stores) shipped and tested.
4. For "default all stores selected": explicitly populate `selectedStoreIds` with every store id up front, so each store visibly shows as selected — rejected in favor of option 5, since it diverges from the one existing precedent in this codebase for the exact same filter shape.
5. For "default all stores selected": leave `selectedStoreIds` empty by default (this codebase's established meaning of "no filter"), which produces the same practical outcome (every store's revenue shown) without inventing a second convention for what "no filter selected" means.

### Chosen

Option 2 for pagination. Options 3 and 5 for the store filter — mirrors `ExpenseListLogic`'s pattern exactly, including the "empty selection = all stores" convention, per `AI_STYLE_GUIDE.md`'s "never introduce a second pattern when one already exists."

### Rationale

The pagination bug is a correctness defect in a financial report — this repo's own stated priority order (`AI_WORKFLOW.md`) puts correctness above performance, so looping every page is preferred over any bounded-`pageSize` shortcut that could recreate the same bug at a larger scale. The store filter reuses an existing, tested, shipped pattern rather than inventing a new one, keeping the change small and consistent.

### Trade-offs

Fetching many pages sequentially for a very large date range is slower than a single large request would be — accepted, since correctness outranks performance here and the existing `pageSize:40` mechanism was left as-is rather than also being redesigned in the same change (that would have been a second, unrelated change bundled into a bug fix). The "empty selection = all stores" convention means the store filter UI does not visually show every store pre-checked on load (it shows the "All Stores" placeholder instead) — functionally equivalent, but a literal reading of "select all stores by default" would expect visible pre-checked chips; flagged to the user as an explicit, deliberate interpretation rather than an oversight.

### Reversible

Yes. The pagination fix and store-filter data-layer wiring landed in one commit (`fix: Revenue report fetches every page instead of only page 1 (40 rows)`) since they share the same method; the store-filter UI (SelectWrapper control + CSS) is a separate, independently revertible commit on top — reverting it alone leaves the pagination fix and the "no filter = all stores" default behavior intact, just without the UI to narrow the selection.

## [2026-07-27] Revenue report: correct the pagination "last page" heuristic (found via live DB verification)

### Requested

User ran the real API request by hand (`curl .../get-revenues-by-arbitrary-dates?page=1&pageSize=40&collapseOrderWithMultipleLineItemsIntoSingleRecord=true`) against a vendor with substantial order history and got only 6 rows back, and asked for it to be verified against the actual database using Rowster rather than assumed correct.

### Options Considered

1. Trust the earlier fix (Option 2 above: stop when a page is shorter than `pageSize`) and assume 6 rows was simply the correct total for that vendor/range — rejected once Rowster confirmed 10,703 non-cancelled orders / 14,563 line items exist for that exact vendor and date range in `dailies_expenses`.
2. Investigate the discrepancy by reconstructing the backend's actual join/order/paging logic directly against the live dev database — chosen; revealed that the first 40 raw line items (SQL-level page 1) collapse to 28 distinct orders, and the next 40 (page 2) collapse to another 28, proving the "short page = done" heuristic was wrong from the start, not just wrong in this one instance.
3. Fix by having the backend paginate post-collapse instead (page by distinct `OrderHeaderId`) — correct long-term fix, but a `dailies-backend` change outside the scope the user approved for this task (only lattice-web-light/Fua-Mobile client changes), and outside this repo's own BRS anyway (that repo has its own BRS-gated workflow).
4. Fix client-side by changing the loop's stopping condition to "stop only on a fully empty page" — chosen; doesn't require any backend change, works correctly regardless of how unevenly a collapsed page's size varies, at the cost of one extra trailing request per report run.

### Chosen

Option 2 to diagnose, Option 4 to fix.

### Rationale

The backend collapses multiple line items of one order into a single row *after* SQL-level paging (`OrderDataPointReader.cs`'s `LIMIT`/`OFFSET` on the raw `OrderHeader`+`OrderLineItem` join, then `RevenueReader.cs`'s C#-side `GroupBy(OrderHeaderId)`). A page's post-collapse row count is therefore not a proxy for "is there more data" — only a genuinely empty page reliably means so, since 0 raw rows can only collapse to 0.

### Trade-offs

Every report run now always makes one extra trailing request that returns nothing, to confirm exhaustion — a small, fixed cost accepted in exchange for actual correctness (the alternative, the previous "short page" heuristic, was silently wrong on what is apparently the common case for any vendor with realistic order volume, not an edge case).

### Reversible

Yes — confined to `RevenueReportLogic.fetchDataAsync`'s loop condition and its test file.

## [2026-07-27] Revenue report: remove pagination entirely instead of patching it again

### Requested

After the previous fix (stop only on an empty page), user asked why the report paginates at all, given the fetch-everything-before-rendering usage pattern and mobile's own precedent of not paginating this endpoint.

### Options Considered

1. Keep the empty-page-terminated loop from the prior fix — technically correct now, but still makes many sequential round-trips (potentially hundreds for a high-volume vendor) for zero benefit, since nothing consumes individual pages incrementally.
2. Raise `pageSize` to a very large bounded number — still an arbitrary cap, still leaves a "what if a vendor exceeds this" question open, still requires the loop/collapse reasoning to exist at all.
3. Remove pagination entirely — send no `page`/`pageSize`, let the backend return everything in one response (already a supported, existing code path: `OrderDataPointReader.cs`'s `shouldPage` check skips `LIMIT`/`OFFSET` when both are omitted; `ApiAccessor.ts` already omits paging query params cleanly when both are `undefined`). Matches how `Fua-Mobile`'s `revenue_api_caller.dart` has always called this identical endpoint.

### Chosen

Option 3.

### Rationale

`Revenue.tsx` already needs the complete result set before it renders anything — there is no incremental/lazy-loading UI on this screen that pagination could actually serve. Given that, pagination was pure overhead: many round-trips, plus the entire page/collapse mismatch bug class from the previous two decision-log entries. Removing it converges web onto the exact same request shape mobile already uses against this endpoint, which is both simpler and more consistent across clients.

### Trade-offs

A vendor with a very large date range and high order volume now pays for one large query/response instead of many small ones. Not treated as a new risk: it's already the status quo for mobile hitting this same endpoint, and the user separately declined to address mobile's equivalent unbounded-fetch behavior as out of scope earlier in this investigation — extending web to match that same accepted trade-off, not introducing a new one.

### Reversible

Yes — confined to `RevenueReportLogic.fetchDataAsync`/`RevenueReportRepository` (removed the now-meaningless `latestPage` field) and their test file.

## [2026-07-27] Revenue report: client-side store-filter cache instead of re-fetching per toggle

### Requested

User: "It fetches data from backend even when data is available client side... unfiltering via the one store also means doing another server side fetch, which is a painful wait. If data is available client side for a store, then do client side filter, and cache full dataset so restore once filter turned off or if additional stores added to filter can be almost instantaneous." Also asked how to handle the date-range filter in this scheme ("do we disable it so cache remains truthful?").

### Options Considered

1. Keep re-fetching per store-filter change, just make it faster (bigger cache on the backend, etc.) — doesn't address the actual ask (zero network calls for filter toggles) and adds backend complexity for no real gain.
2. Cache the full dataset once fetched; filter client-side; **disable** the date range control while a filtered view is showing, to keep the cache's date-range scope unambiguous — rejected: unnecessarily restrictive, and unnecessary once the cache invariant is chosen correctly (option 3 achieves the same safety without disabling anything).
3. Decouple cache validity from store selection entirely: the cache (`fullData`) is always the complete, unfiltered set for the *current date range*; a date-range change always invalidates and refetches it (ignoring whatever store filter is active when the request is made); a store-filter change only ever re-derives the displayed view from the existing cache, never touches the network. The date picker/Run Report stays fully enabled throughout.

### Chosen

Option 3.

### Rationale

Directly answers the user's own question: nothing needs to be disabled, because the cache's validity is scoped to the date range alone, and store selection is a pure display-layer concern that never invalidates it. This is also the minimal change — no new UI state, no disabled controls to explain to the user.

### Also decided (raised during design, confirmed with user)

- **Filter join key**: client-side filtering needs to match rows to selected stores. `ReportDataPoint` only exposed `vendorLocationDisplayLabel` (text), not an ID. Considered matching by label (ships immediately, small risk if two locations ever share a label) vs. adding a real `vendorLocationId` to the backend DTO (fully correct, matches how the server itself already filters, but is a `dailies-backend` change under that repo's own BRS gate). **User chose the backend change** — tracked in `dailies-backend`'s own decision-log for the same date.
- **Busy flag**: while designing this, found `RevenueReportLogic` never actually set `repository.busy` anywhere (`fetchDataAsync`/`initializeAsync` never wrapped work in `this.runner(...)`), so `Revenue.tsx`'s loading overlay never showed during any fetch — including the one remaining network call in this new design (the date-range refetch). **User confirmed bundling this fix in**, since it directly closes a race (toggle the store filter while a date-range refetch is still in flight) that the new design would otherwise leave open.

### Trade-offs

Every date-range change now fetches the complete unfiltered dataset regardless of any active store filter — previously, a narrow store filter meant a narrower *server* query. More data over the wire/in memory in exchange for instant filter toggling after that one fetch. Consistent with (and compounds) the earlier decision to remove pagination entirely and always fetch everything in one request.

Depends on the `dailies-backend` `VendorLocationId` change shipping first — sequencing risk noted in this feature's `BRS.md`.

### Reversible

Yes — confined to `RevenueReportRepository` (new `fullData` field), `RevenueReportLogic` (`fetchDataAsync`/`applyStoreFilter`/`updateReportArgs`/new `#filterByStores`), `IReportDataPoint.ts` (new `vendorLocationId` field), and their tests.

