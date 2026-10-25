# BRS — React 19, onwards, and Vite support

## Metadata

| Field | Value |
|-------|-------|
| Status | Complete |
| Task Type | Other (packaging / compatibility / bug fix) |
| Author | opencode (collaborating with repo owner) |
| Created | 2026-09-23 |
| Last Updated | 2026-09-23 |
| Approved | Yes — user selected Option C ("explicit tested-version set"), instructed "do it", then added "support vite", 2026-09-23 |

### Implementation notes

See `test-reports/CHANGE_MANIFEST_react-19-vite.md` for the file list. All 10 acceptance criteria satisfied; 111/111 tests pass under both React 18.3.1 and React 19.3.0; `verify-post.ps1` reports `RESULT: COMPLETE` with coverage 98.68% lines (the pre-existing HEAD coverage gap below the 97.21% baseline was closed with two targeted `useBusyState` tests, matching the precedent set by the dropdown-options feature); `tsc --noEmit` and `npm run build` clean under `@types/react@19`; a Vite 5 + React 19 SSR build consuming the `npm pack`ed tarball rendered both button forms (`SMOKE_OK`). The key empirical finding: the ESM bundle had been inlining React 18's JSX runtime (`react/jsx-runtime` was not in rollup's `external`), which React 19 rejects (element brand renamed to `react.transitional.element`) — fixed by externalizing the JSX-runtime subpaths. No `UI/**` runtime code changed.

---

## Problem Statement

### Current State

1. `package.json` declares `peerDependencies.react` and `peerDependencies.react-dom` as `">=16.8.0"`. That range *permits* React 19 but also silently claims support for React 16.8 and 17 — both EOL and never exercised by this repository's test suite.
2. **`rollup.config.mjs` externalizes `react` but not `react/jsx-runtime` / `react/jsx-dev-runtime`.** `@rollup/plugin-node-resolve` + `@rollup/plugin-commonjs` therefore inline React 18's JSX runtime into the published bundle (`dist/index.esm.js` lines 7–37 contain `reactJsxRuntime_production_min`). That inlined runtime:
   - emits elements branded `Symbol.for('react.element')`, while React 19 brands elements `Symbol.for('react.transitional.element')` and throws *"A React Element from an older version of React was rendered"* (React error #525);
   - reads `React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner`, an internal that React 19 removed.
   The result is that the published ESM bundle — the entry point Vite and other bundlers consume — is broken under React 19. React's own guidance for this class of bug is to externalize the JSX runtime subpaths.

### Desired State

- The declared peer range is an intentional statement of support: React 18 (current tested baseline) and React 19, open-ended upward ("and onwards").
- The published bundle never inlines a React runtime: `react/jsx-runtime` and `react/jsx-dev-runtime` are external, so the consumer's React version is always used.
- `package.json` exposes a modern `"exports"` map so Vite (and Node/bundler resolution generally) resolves the ESM entry, CJS entry, and types deterministically.
- The library renders correctly under React 19 in a Vite consumer, verified empirically.

### Why

Consumers on React 19 (increasingly the default in Vite projects) currently get a broken render from this package. Making the range explicit without fixing the inlined runtime would advertise support that does not actually work.

---

## Business Value / Impact

React 19 is the current stable major and Vite is the dominant React app bundler. Today this package's ESM output fails under React 19 regardless of the declared peer range, which blocks adoption for every Vite + React 19 consumer. Fixing the JSX-runtime externalization makes the package genuinely React-version-agnostic (works on 18 and 19), and the explicit peer range makes that support discoverable.

---

## Acceptance Criteria

### 1: React 19 is declared

- **Given** the published `package.json`
- **When** a consumer resolves the peer range for `react` and `react-dom`
- **Then** `19.0.0` satisfies both ranges

### 2: Range is open-ended for future majors

- **Given** the declared peer range
- **When** a future major version (e.g. `20.0.0`) is resolved against it
- **Then** it satisfies both ranges (no upper bound), so "onwards" holds

### 3: React 18 remains supported

- **Given** the declared peer range
- **When** `18.2.0` is resolved against it
- **Then** it satisfies both ranges (existing React 18 consumers are not broken)

### 4: Untested, EOL versions are no longer claimed

- **Given** the declared peer range
- **When** `16.8.0` or `17.0.0` is resolved against it
- **Then** it does not satisfy the range

### 5: JSX runtime is never inlined

- **Given** a production build produced by `npm run build`
- **When** `dist/index.esm.js` and `dist/index.cjs.js` are inspected
- **Then** neither contains an inlined React JSX runtime (no `reactJsxRuntime_production_min`, no `Symbol.for('react.element')`, no `ReactCurrentOwner` reference), and the ESM bundle imports its JSX factory from `react/jsx-runtime`

### 6: Vite resolves the package

- **Given** the published package installed into a Vite + React 19 consumer
- **When** the consumer imports the package and builds with Vite
- **Then** the build resolves the ESM entry (via the `"exports"` map / `module` field), bundles the library without inlining React, and succeeds

### 7: Renders under React 19

- **Given** `react@19` / `react-dom@19` installed
- **When** `ZestButton` is rendered (Jest/jsdom) and the built bundle is exercised
- **Then** it renders without the "older version of React" error and without touching removed internals

### 8: Types build under React 19

- **Given** `@types/react@19` / `@types/react-dom@19` installed
- **When** `npm run build` runs
- **Then** it completes with no new TypeScript diagnostics and emits `dist/index.d.ts`

### 9: Regression guard

- **Given** the guard tests in `__tests__/packagePeerDependencies.test.ts` and `__tests__/buildExternalization.test.ts`
- **When** the peer range is changed to exclude 19 / add an upper bound / exclude 18 / re-include 16.8/17, **or** the JSX-runtime subpaths are removed from `rollup.config.mjs`'s `external` array
- **Then** the corresponding test fails with a message naming the violated criterion

### 10: Documentation states support

- **Given** `README.md`, `documentation/breaking-changes.md`, and `documentation/development.md`
- **When** a consumer looks for supported React versions / bundler support
- **Then** the supported React range (`>=18.0.0`), tested majors (18, 19), and Vite compatibility are stated

---

## Out of Scope

- Any change to `UI/**` runtime code (none is expected to be needed).
- Any change to the public API surface, props, types, or exports.
- Adding CI pipelines or a multi-version test matrix.
- Changing the `@radix-ui/react-dropdown-menu` or `react-icons` peer ranges.
- Migrating this repository's own tests from Jest to Vitest, or adding Vitest as a repo test runner. (The word "vitest" was confirmed by the user to mean **Vite**.)
- Bumping the package `version` (released separately per repo convention) — a major bump is required before this range reaches consumers and is noted in the breaking-changes log.
- Testing against React 16.8/17 (intentionally dropped as EOL/untested).
- Fixing CSS-in-JS injection for SSR (the injected `<style>` still assumes a `document`; unchanged behaviour, out of scope).
- Adding new runtime dependencies; the guard tests hand-roll their checks.

---

## Technical Design

### Files modified

| File | Change |
|------|--------|
| `package.json` | (a) `peerDependencies.react` / `react-dom`: `">=16.8.0"` → `">=18.0.0"`. (b) Add a `"exports"` map (`.` → types/import/require, plus `"./dist/*"` and `"./package.json"` passthroughs). |
| `rollup.config.mjs` | Add `react/jsx-runtime` and `react/jsx-dev-runtime` to the JS bundle `external` array (and the `.d.ts` bundle `external` array for consistency). |
| `README.md` | State supported React range and Vite compatibility in the Installation note. |
| `documentation/breaking-changes.md` | New entry documenting the peer-floor change (planned major). |
| `documentation/development.md` | Note tested React majors; correct the stale "no test scripts" note. |

### Files added

| File | Purpose |
|------|---------|
| `docs/features/react-19-support/BRS.md` | This document |
| `__tests__/packagePeerDependencies.test.ts` | Regression guard for ACs 1–4 (and the `exports` map) |
| `__tests__/buildExternalization.test.ts` | Regression guard for AC 5 (asserts the rollup `external` array covers the JSX runtime subpaths) |

### Files with added tests

| File | Change |
|------|--------|
| `__tests__/hooks/useBusyState.test.ts` | Two added tests closing a **pre-existing** coverage gap (dev-mode duration warnings; auto-reset clearing a pending fail timeout) so `verify-post.ps1`'s no-coverage-regression gate passes. Not a behaviour change. |

### `exports` map

```json
"exports": {
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.esm.js",
    "require": "./dist/index.cjs.js"
  },
  "./dist/*": "./dist/*",
  "./package.json": "./package.json"
}
```

The `"./dist/*"` passthrough preserves any existing deep imports, so adding `"exports"` does not remove access that consumers have today. `"types"` is listed first so TypeScript resolves declarations under `node16`/`bundler` module resolution (required by modern Vite/TS setups).

### Range semantics

`">=18.0.0"` is chosen over a caret-union (`"^18.0.0 || ^19.0.0"`) specifically to satisfy AC 2: a caret range would block React 20. The floor of 18 reflects the oldest major this repository tests; 16.8/17 are dropped per AC 4.

### Externalization

Rollup's `external` for the JS bundle becomes:

```js
external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime', 'react-icons/fa', 'react-icons/fa6', '@radix-ui/react-dropdown-menu'],
```

This makes the ESM output emit `import { jsx, jsxs, Fragment } from "react/jsx-runtime"` and use the consumer's React, which is correct on both 18 and 19.

### Verification method (ACs 6–8)

- **React 19:** temporarily install `react@19 react-dom@19 @types/react@19 @types/react-dom@19`, run the full suite + build + `tsc --noEmit`, capture raw output, then restore the React 18 dev dependencies.
- **Vite:** in a scratch directory (outside the repo), create a minimal Vite + React 19 app that imports the built package, run `vite build`, and confirm the library is bundled with React external and no inlined JSX runtime. The scratch project is a verification harness only; it is not committed and adds no dependency to this repo.

---

## Edge Cases

### `react-dom` is a peer but not imported

**Scenario:** The library never imports `react-dom` directly.
**Expected:** `react-dom` is kept in lockstep with `react`; both ranges change identically so consumers never get a mismatched pair.

### React 19's stricter `@types/react`

**Scenario:** `@types/react@19` removed the global `JSX` namespace and tightened `ReactNode`.
**Expected:** The source references only `React.FC`, `React.ReactNode`, and `React.ButtonHTMLAttributes`, and declares `children` explicitly where needed — no type changes expected. Verified empirically in AC 8; if a diagnostic appears, the fix is minimal and composition-first, and this BRS is updated.

### A consumer on React 16.8/17

**Scenario:** Existing consumer still on React 16.8/17 upgrades this package.
**Expected:** npm reports an unmet peer dependency. Intentional (AC 4); documented in breaking-changes.md.

### Consumer relying on deep imports

**Scenario:** A consumer imports `jattac.libs.web.zest-button/dist/...` directly.
**Expected:** Still resolves — the `"./dist/*"` passthrough in `"exports"` preserves it.

### ESM `.js` extension under Node ESM

**Scenario:** Node's native ESM loader loads `dist/index.esm.js` (a `.js` file with ESM syntax, package has no `"type": "module"`).
**Expected:** Unchanged from today; the package targets bundlers (Vite/webpack), which honour the `"exports"`/`module` fields. Not a regression introduced by this task.

---

## Dependencies

### Internal

- Existing Jest + ts-jest + React Testing Library setup (`jest.config.js`, `tsconfig.jest.json`).
- Existing build (`rollup.config.mjs`).

### External

- None new to the repository. Vite is installed only in a scratch verification harness.

---

## Risks and Open Questions

### Risks

- **React 19 verification is point-in-time**, not permanently automated (no CI). Mitigated by the permanent guard tests (declaration + externalization) and documented tested majors.
- **Peer-floor narrowing is technically breaking** for 16.8/17 consumers. Mitigated by documenting it as a planned major and not bumping the version in this task.
- **Adding `"exports"` can change resolution** for some consumers. Mitigated by the `"./dist/*"` and `"./package.json"` passthroughs; `module`/`main` remain for legacy resolvers.

### Open Questions

- None blocking. Whether to add CI / a version matrix is deferred (Out of Scope).

---

## Regression Prevention

### New Tests Required

- `__tests__/packagePeerDependencies.test.ts` — against the real `package.json`:
  1. `19.0.0` satisfies `react` and `react-dom` ranges (AC 1)
  2. `20.0.0` satisfies both ranges (AC 2)
  3. `18.2.0` satisfies both ranges (AC 3)
  4. `16.8.0` and `17.0.0` do not satisfy either range (AC 4)
- `__tests__/buildExternalization.test.ts` — asserts the `rollup.config.mjs` JS bundle `external` array contains `react/jsx-runtime` and `react/jsx-dev-runtime` (AC 5 guard; the actual inlining is verified empirically by inspecting the build output).

  Range checks are hand-rolled (`>=X.Y.Z` parsing) to avoid adding a `semver` dependency.

### Behaviour Preservation

- The full existing suite is re-run unchanged under React 18 (baseline) and React 19 (verification). No test expectations are altered.

---

## Definition of Done

- [x] BRS approved by user
- [x] All acceptance criteria pass
- [x] All tests pass (new + existing) — output captured
- [x] `npm run build` clean; `dist` contains no inlined JSX runtime
- [x] Vite + React 19 smoke build succeeds
- [x] No regressions
- [x] No unsolicited changes outside BRS scope
- [x] Code matches existing patterns
- [x] Change manifest produced
- [x] Self review passed with all PASS items
- [x] `docs/guidelines/ai-knowledge.md` and `docs/guidelines/decision-log.md` updated
