# BRS — Wire up Jest test infrastructure for ZestButton

## Metadata

| Field | Value |
|-------|-------|
| Status | Complete |
| Task Type | Feature |
| Author | Claude (collaborating with repo owner) |
| Created | 2026-07-28 |
| Last Updated | 2026-07-28 |
| Approved | Yes — user approved full scope as drafted, 2026-07-28 |

### Amendments during implementation (discovered, not re-approved individually — logged per "Updating the BRS")

1. **Test file location changed from co-located to `__tests__/`.** `tsconfig.json`'s `include` is `UI/**/*.ts(x)`, and `@rollup/plugin-typescript` type-checks everything matching that glob (not just files reachable from the `UI/index.ts` entry) — co-locating `*.test.tsx` inside `UI/` made `npm run build` emit TS diagnostics for every jest-dom matcher, since the production `tsconfig.json` has no test types. Fixed by moving all 9 test files to a new `__tests__/` directory (mirroring `UI/`'s structure, importing from `../UI/...`) instead of touching `tsconfig.json`. Verified with a clean `npm run build` — no diagnostics, only the pre-existing unrelated "mixing named and default exports" warning remains.
2. **Added `tsconfig.jest.json`** (extends `tsconfig.json`, adds `"types": ["jest", "node", "@testing-library/jest-dom"]`) and pointed `jest.config.js`'s `transform` at it. Needed because `@testing-library/jest-dom`'s ambient matcher types (`toBeInTheDocument`, etc.) weren't resolving through a plain `ts-jest` preset with this project's Jest 30 / `@types/jest` 30 combination — a triple-slash reference in `global.d.ts` was tried first and didn't work reliably; the `types` compiler option is the unambiguous, TS-endorsed mechanism. `tsconfig.json` itself remains untouched, per the original Out of Scope.
3. **Added `coverage/` to `.gitignore`.** Generated test output wasn't previously ignored; leaving it untracked-but-unignored is exactly the kind of half measure this task was meant to avoid.

---

## Problem Statement

**Current State:** This is a React component library (`UI/`, `Styles/`) built with Rollup/TypeScript. `package.json`'s `test` script is a no-op stub (`echo "No tests specified..."`). No Jest config, no test dependencies, zero test files exist. `AI_TEST_CONFIGURATION.md` (this repo's own policy) requires every project to have test reporting configured with a `json-summary` coverage reporter, and the global TDD rule requires a real test project to exist. Running `verify-post.ps1` confirms Jest executes but finds 0 tests.

**Desired State:** Jest is fully wired up — installed, configured for this TS/React/CSS-Modules stack, producing coverage reports the existing `verify-pre.ps1`/`verify-post.ps1` scripts can consume (`coverage/coverage-summary.json` via `json-summary`) — and the entire current public surface of the library (the exported button, its config provider/context, all hooks, the spinner, and the semantic-type defaults table) has real, assertion-specific behavioural tests, not placeholders.

**Why:** Requested explicitly: "get jest wired up, no half measures." A config-only setup with zero real tests would leave the coverage/regression gates in `AI_TESTING.md` meaningless (nothing to regress against) and wouldn't satisfy the global TDD rule to freeze current behaviour with tests.

---

## Business Value / Impact

Establishes a real regression safety net for this library before any future feature/bug work touches it, and unblocks the BRS-gated workflow's Phase 0 (Test Reporting Configuration) and coverage-regression gate, both of which currently fail.

---

## Acceptance Criteria

### 1: Jest toolchain installed and configured

- **Given** a fresh `npm install`
- **When** `npx jest --coverage --coverageReporters=json-summary` is run
- **Then** it executes against `.test.ts`/`.test.tsx` files under `UI/`, using `jest-environment-jsdom`, `ts-jest` for TypeScript, and a CSS-Modules stub (so `import styles from "*.module.css"` resolves)
- **And** `coverage/coverage-summary.json` and `coverage/lcov.info` are produced (satisfies `AI_TEST_CONFIGURATION.md`)
- **And** `npm test` (updated script) runs the same thing

### 2: `useThemeDetection` hook is tested

- **Given** `window.matchMedia` reporting light or dark
- **When** the hook is rendered (via `renderHook`)
- **Then** it returns the matching initial theme, and updates when the media-query change listener fires

### 3: `useBusyState` hook is tested

- **Given** various `busyOptions`/`successOptions`
- **When** `startBusy`/`endBusy(true|false)` are called
- **Then** `internalBusy`/`wasSuccessful`/`wasFailed` transition correctly, failure auto-clears after the fixed 400ms shake window, and success/failure auto-reset after `autoResetAfterMs` (using fake timers)

### 4: `useConfirmation` hook is tested

- **Given** `confirmOptions` with a label and timeout
- **When** `startConfirmation` is called
- **Then** `awaitingConfirm` becomes true and `currentChildren` shows the countdown label, ticking down each second
- **And** the timeout auto-fires `stopConfirmation` + `onConfirmFail` when it reaches zero
- **And** `stopConfirmation` resets state immediately when called directly

### 5: `useZestConfig` hook is tested

- **Given** combinations of global default props, built-in semantic defaults, provider-level semantic overrides, and local props
- **When** the hook resolves effective config for a `semanticType`
- **Then** precedence is local > provider semantic override > built-in semantic default > global default, deep-merged (matching `deepMerge` behaviour, including nested `visualOptions`)

### 6: Config context/provider are tested

- **Given** a component using `useZestButtonConfig()`
- **When** rendered without a `ZestButtonConfigProvider`
- **Then** it receives `undefined`
- **And When** rendered inside `ZestButtonConfigProvider config={...}`
- **Then** it receives that exact config object

### 7: `SpinnerIcon` is tested

- **Given** `SpinnerIcon` is rendered
- **Then** it renders an SVG with the `animate-spin` class

### 8: `semanticTypeButtonConfigDefaults` is tested

- **Given** the exported defaults map
- **Then** representative entries (`save`, `delete`, `cancel`) have the documented `variant`/`buttonStyle`/icon presence, and `delete`/`remove` carry `confirmOptions`

### 9: `ZestButton` component is tested (the main surface)

- **Given** the rendered button
- **Then**:
  - renders children and forwards native button attributes
  - plain `onClick` fires when `busyOptions.handleInternally` is false/unset appropriately per defaults (`handleInternally` defaults to `true`)
  - with `handleInternally: true`, clicking triggers busy state, awaits the async `onClick`, then shows success (checkmark) or failure (shake) based on resolve/reject, respecting `minBusyDurationMs`
  - `preventRageClick` blocks re-clicks while busy, and blocks clicks after success/fail when configured
  - `confirmOptions` flow: first click shows the confirm label + countdown, second click (while awaiting) proceeds to the real click handler, and letting the countdown expire cancels and calls `onConfirmFail`
  - `isDefault` wires a document-level Enter-key listener that clicks the button, and does not fire when disabled/not focused-textarea guard conditions apply
  - `disabled`/`aria-busy` prop overrides are respected in the disabled/busy computation

### 10: Coverage baseline established

- **Given** the full suite passes
- **When** `verify-post.ps1` is run
- **Then** it reports Test Execution PASS and establishes `test-reports/coverage-baseline.json` (no regression possible on first run)

---

## Out of Scope

- Does not add E2E tests or Playwright — this is a component library with no running app/server; `docs/e2e/critical-paths.md` and the E2E gate remain inapplicable per `AI_E2E_TESTING.md`.
- Does not change any production behaviour in `UI/*` — tests only, freezing current behaviour as-is (bugs/quirks in current code, e.g. the fixed 400ms shake timeout, are captured as-is, not "fixed").
- Does not add Storybook, visual regression, or a11y-specific tooling.
- Does not touch `rollup.config.mjs` or the build/publish pipeline.
- Does not modify `tsconfig.json` (test files are compiled by `ts-jest` directly using existing `compilerOptions`; they are not added to the build's `include`, so nothing new ships in `dist`).
- Does not fix the pre-existing `verify-pre.ps1` Phase 7/8 mismatches (they assume a Next.js `app/` folder structure) — separate concern from test wiring, noted previously.

---

## Technical Design

### Dependencies added (devDependencies only)

| Package | Purpose |
|---|---|
| `jest` | test runner |
| `@types/jest` | TS types for `describe`/`it`/`expect` |
| `ts-jest` | TypeScript transform for Jest |
| `jest-environment-jsdom` | DOM environment (Jest 28+ split this out) |
| `@testing-library/react` | component rendering + `renderHook` |
| `@testing-library/jest-dom` | DOM matchers (`toBeDisabled`, etc.) |
| `identity-obj-proxy` | stubs CSS Modules imports (`styles.foo` → `"foo"`) |

### Configuration files (new)

- `jest.config.js` — `preset: 'ts-jest'`, `testEnvironment: 'jest-environment-jsdom'`, `setupFilesAfterEnv: ['<rootDir>/jest.setup.js']`, `moduleNameMapper` for `*.css` → `identity-obj-proxy`, `coverageReporters: ['json-summary', 'text', 'lcov']`.
- `jest.setup.js` — `require('@testing-library/jest-dom')`.

### `package.json` change

- `"test": "jest --coverage"` (replaces the stub).

### Test files (new, co-located next to what they test, matching this repo's existing "file lives beside its source" layout)

```
UI/hooks/useThemeDetection.test.ts
UI/hooks/useBusyState.test.ts
UI/hooks/useConfirmation.test.ts
UI/hooks/useZestConfig.test.ts
UI/ZestButtonConfigContext.test.tsx
UI/ZestButtonConfigProvider.test.tsx
UI/SpinnerIcon.test.tsx
UI/semanticTypeButtonConfigDefaults.test.tsx
UI/ZestButton.test.tsx
```

### Execution order (decomposition, per `AI_WORKFLOW.md` Step 7)

1. **Unit A** — toolchain + config (`package.json`, `jest.config.js`, `jest.setup.js`). Verify `jest` runs (0 tests, exit non-zero is expected/fine at this point).
2. **Unit B** — hook tests (4 files). Run suite green before moving on.
3. **Unit C** — context/provider tests (2 files). Run suite green.
4. **Unit D** — component tests (`SpinnerIcon`, `semanticTypeButtonConfigDefaults`, `ZestButton`). Run suite green.
5. Run `verify-post.ps1` to establish the coverage baseline and confirm the full policy pipeline is satisfied end-to-end.

---

## Edge Cases

### Rage-click prevention while busy
**Scenario:** User clicks rapidly while an internally-handled async `onClick` is in flight.
**Expected:** Only the first click starts the busy flow; subsequent clicks during busy are no-ops per `preventRageClick`.

### Confirm countdown reaching exactly zero
**Scenario:** `confirmOptions.timeoutSecs` elapses without a second click.
**Expected:** `stopConfirmation()` runs and `onConfirmFail` fires exactly once (verified with fake timers, not real waits).

### `useZestConfig` with no semantic type and no global config
**Scenario:** `ZestButton` used with no `zest` prop at all, no provider.
**Expected:** Hook returns an empty-ish config object; defaults inside `ZestButton` itself (`variant = "standard"`, etc.) apply.

---

## Dependencies

### Internal
- None — additive only, no existing code changes.

### External
- None.

---

## Risks and Open Questions

### Risks
- `ts-jest` + this repo's `tsconfig.json` (`module: ESNext`) may require ts-jest's automatic CJS override; if diagnostics fail, the fix is scoped to `jest.config.js` transform options only, not `tsconfig.json` itself.
- Timer-based hooks (`useBusyState`, `useConfirmation`) require Jest fake timers to avoid flaky/slow real-time waits; tests will use `jest.useFakeTimers()`.

### Open Questions
- None blocking — will flag inline if `ts-jest`/`tsconfig` interaction needs a config tweak beyond what's listed above.

---

## Regression Prevention

### For Features
**New Tests Required:** All listed in Acceptance Criteria 2–9 above — this BRS's own scope *is* the regression suite (no prior tests existed to preserve).

---

## Definition of Done

- [ ] BRS approved by user
- [ ] All acceptance criteria pass (`npx jest --coverage` green, 0 failures)
- [ ] `coverage/coverage-summary.json` generated
- [ ] `verify-post.ps1` run and establishes `test-reports/coverage-baseline.json`
- [ ] No production code in `UI/*` modified
- [ ] Change manifest produced
- [ ] Self review passed with all PASS items
- [ ] Remote URL (`origin` → `https://github.com/nyingimaina/jattac.libs.web.zest-button.git`) verified unchanged after `npm install`
