---
title: AI Knowledge Graph
covers: AGENTS.md
covers-hash: 10622e884f0ab941d0e1
---

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

## ZestButton dropdown options (split button)

### Purpose
`zest.dropdownOptions` renders `ZestButton` as a split button: the existing button segment keeps firing its default `onClick` directly, plus a chevron segment that opens a menu of independent secondary actions.

### Location
`UI/ZestButton.tsx` (additive types + 3 small mandatory edits — see Known Pitfalls), `UI/ZestDropdownMenu.tsx`, `UI/ZestDropdownMenuItem.tsx`, `Styles/ZestButton.module.css` (new rules appended).

### Callers
Any consumer passing `zest={{ dropdownOptions: [...] }}` to `ZestButton`.

### Callees
`@radix-ui/react-dropdown-menu` (positioning, dismiss, a11y, keyboard nav — `modal={false}` explicitly, see Known Invariants). Reuses `useBusyState`/`useConfirmation` (one hook instance per menu item, via `ZestDropdownMenuItem`) and `useZestConfig`/`useThemeDetection` (main button, unchanged).

### Dependencies
`@radix-ui/react-dropdown-menu` (new peer+dev dependency, externalized in `rollup.config.mjs` exactly like `react-icons`).

### Configuration
`zest.dropdownAriaLabel` (default `"More options"`) — the chevron's accessible name, since it has no visible text.

### Known Invariants
- `DropdownMenu.Root` **must** stay `modal={false}`. Radix's default (`modal: true`) `aria-hide`s everything outside the menu *including the trigger button itself* while open — wrong for a split button, whose trigger must stay reachable. Discovered via a failing `getByRole` test, not assumed; see decision-log 2026-07-28.
- The `force-light`/`force-dark` theme class must be applied to **both** the trigger and `DropdownMenu.Content` separately — Radix portals `Content` outside the trigger's DOM subtree, so a theme class scoped only to the trigger never reaches the portaled menu.
- `ZestButton.tsx`'s render, when `dropdownOptions` is absent/empty, must stay byte-identical to pre-dropdown behavior — enforced by extracting the existing `<button>` JSX into a `buttonElement` const reused in both render branches, and covered by two explicit regression tests in `__tests__/ZestButton.test.tsx`.

### Known Pitfall
Three lines of *existing* `ZestButton.tsx` logic were deliberately edited (not just added to) for this feature, each BRS-mandated:
1. `isDisabled` extended with `anyDropdownItemBusy` (whole control disables while any menu item is busy)
2. The `isDefault` Enter-key `useEffect`'s guard/deps gained `dropdownOpen` (Enter must not re-trigger the main action while the menu is open)
3. The return statement was restructured (button JSX extracted to a variable) to avoid duplicating markup across the two render paths

All three are no-ops when `dropdownOptions` is absent (the new state variables never leave their default `false`), but any future editor touching `isDisabled` or the `isDefault` effect should know these three lines exist and why.

### Test Coverage
`__tests__/ZestDropdownMenuItem.test.tsx`, `__tests__/ZestDropdownMenu.test.tsx`, and a `describe("dropdownOptions (split button)")` block in `__tests__/ZestButton.test.tsx`. 81 tests total in the suite (up from 52), 97.21% line coverage (up from 95.38%).

### jsdom/Radix testing gotchas (apply to any future test that opens a ZestButton dropdown)
- jsdom has **no `PointerEvent` constructor at all**. Radix's `DropdownMenu.Trigger` opens on `pointerdown`, not `click` — a plain `.click()` never opens it. `jest.setup.js` polyfills `window.PointerEvent` plus `Element.prototype.{has,set,release}PointerCapture`/`scrollIntoView`. Tests must dispatch `fireEvent.pointerDown` (+`pointerUp`) on the trigger to open it, not `.click()`.
- jsdom has no `ResizeObserver` either — also polyfilled in `jest.setup.js` (Radix's Popper-based content measurement needs it).
- `ZestDropdownMenu`'s `open` prop is fully controlled. A `jest.fn()` passed as `onOpenChange` that doesn't feed back into a real `open` state will never actually open the menu, regardless of whether Radix's internal toggle logic fired correctly — tests asserting the open *result* (not just that the callback fired) need a real state-backed wrapper component.

## Standard icons and semantic type defaults

### Purpose
`ZestButton` ships 47 built-in semantic names and draws every one of their icons itself as inline SVG, so a button created with only `zest={{ semanticType: 'search' }}` gets an icon, variant, style and behaviour that match the rest of the interface. `ZestIcon` exposes the same drawings to the rest of the app.

### Location
`UI/zestIcons.tsx` (35 SVG drawings, the `BuiltInIconName` union, `ZEST_ICON_ELEMENTS`, `ZEST_ICON_NAMES`, `getZestIconElement`), `UI/ZestIcon.tsx` (public wrapper and `ZestIconSize`), `UI/semanticTypeButtonConfigDefaults.tsx` (the 47 defaults), `UI/ZestButton.tsx` (`SemanticType` union), `Styles/ZestButton.module.css` (`.zestIcon*`), `UI/index.ts` (exports `ZestIcon`).

### Callers
`ZestButton` through `useZestConfig`; consumers through `zest.semanticType`, `zest.visualOptions.iconLeft/iconRight`, dropdown-item `semanticType`, or `<ZestIcon>` in their own controls.

### Callees
`getZestIconElement(name)` for every lookup. No icon package is used for these 47 drawings. The busy spinner is still `FaSpinner` from `react-icons/fa6`, so `react-icons` remains a peer dependency.

### Dependencies
None added; the drawings are plain React elements.

### Configuration
`semanticType`, `semanticTypeDefaults`, `defaultProps`, and local `visualOptions`. Precedence is global `defaultProps` -> built-in type defaults -> provider `semanticTypeDefaults` -> local `zest` (`UI/hooks/useZestConfig.ts`). Custom types come from TypeScript module augmentation of `CustomZestSemanticTypes`; augmentation supplies the name, the provider supplies the defaults.

### Known Invariants
- Exactly 47 built-in names, in `UI/ZestButton.tsx` and in the defaults map: the 19 original entries keep their original order, then 28 new ones.
- 35 unique drawings serve the 47 names. Aliases (`add`/`new`, `save`/`submit`, `edit`/`update`, `delete`/`remove`, `cancel`/`close`, `view`/`details`, `refresh`/`reload`) share one module-level element instance; `view`/`details`/`next` also share the right arrow, and `export`/`import` reuse the download/upload art.
- Every SVG uses `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `strokeWidth="2"`, round caps/joins, `aria-hidden="true"` and `focusable="false"`.
- `getZestIconElement` uses `Object.prototype.hasOwnProperty.call`, so unknown and inherited names (`toString`, `__proto__`, ...) return `null` instead of rendering or throwing.
- `deepMerge` must preserve untouched React-element references; tests assert the shared icon instance survives re-renders, provider merges and local overrides. An override (local or provider `iconLeft`) replaces the built-in icon rather than adding a second one.
- `next` is the only new type using `iconRight`; every other new type uses `iconLeft`. Only the 8 async new types (`send`, `login`, `logout`, `approve`, `reject`, `archive`, `export`, `import`) pin `minBusyDurationMs: 500`; no new type asks for confirmation.
- `ZestIcon` sizes: `sm` = 1rem, `md` = 1.25rem, `lg` = 1.5rem; a number is `rem`; any other string is used as `font-size`. An unknown name renders `null`.
- Only `ZestIcon` and its prop types are public from `UI/index.ts`; `BuiltInIconName`/`ZEST_ICON_NAMES`/`getZestIconElement` are internal.
- Bundle cost: `dist/index.esm.js` went from 65,106 to 79,993 bytes (+14,887), under the 15,000-byte cap; the drawings are bundled, while the old `react-icons/fa`/`fa6` imports were external either way.

### Test Coverage
`__tests__/semanticTypeButtonConfigDefaults.test.tsx`, `__tests__/semanticTypeIcons.test.tsx`, `__tests__/ZestIcon.test.tsx`, `__tests__/zestIconPerformance.test.tsx`, plus new cases in `__tests__/ZestButton.test.tsx`, `__tests__/ZestButtonToggle.test.tsx` and `__tests__/hooks/useZestConfig.test.ts`. Full suite at this revision: 18 suites / 225 tests, `tsc --noEmit` exit 0.

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
As of 2026-07-28: 52 tests across 9 suites, covering every file currently in `UI/`'s public surface (`ZestButton.tsx` incl. busy/confirm/keyboard flows, all 4 hooks, `ZestButtonConfigContext.ts`, `ZestButtonConfigProvider.tsx`, `SpinnerIcon.tsx`, `semanticTypeButtonConfigDefaults.tsx`). 95.38% lines / 94.76% statements / 97.36% functions / 85.23% branches. Baseline recorded in `test-reports/coverage-baseline.json`. Superseded by the dropdown-options feature's test additions above (81 tests, 97.21% lines as of the same date), then by the React 19/Vite and semantic-types/icons work: 18 suites / 225 tests as of 2026-10-25.

## React 19 / Vite packaging support

### Purpose
Makes the published package work under React 19 and with bundlers (Vite, Next.js, webpack, Rollup), and makes the declared React support explicit.

### Location
`package.json` (`peerDependencies.react`/`react-dom`, new `"exports"` map), `rollup.config.mjs` (both `external` arrays), `__tests__/packagePeerDependencies.test.ts`, `__tests__/buildExternalization.test.ts`, `docs/features/react-19-support/BRS.md`.

### Callers
Every consumer of the published package — in particular React 19 apps built with Vite.

### Callees
None (build/packaging only; no `UI/**` runtime code changed).

### Dependencies
None added.

### Configuration
`peerDependencies.react` and `peerDependencies.react-dom` are `">=18.0.0"` (were `">=16.8.0"`). `"exports"` maps `.` → `types`/`import`/`require`, with `./dist/*` and `./package.json` passthroughs. `rollup.config.mjs` JS-bundle `external` now includes `react/jsx-runtime` and `react/jsx-dev-runtime` (the `.d.ts` bundle external was updated to match).

### Known Invariants
- **`react/jsx-runtime` and `react/jsx-dev-runtime` MUST stay in `rollup.config.mjs`'s JS-bundle `external` array.** If they are removed, `@rollup/plugin-node-resolve`/`commonjs` inline React's JSX runtime into `dist/`. The inlined runtime emits `Symbol.for('react.element')` (React 19 expects `Symbol.for('react.transitional.element')` → throws *"A React Element from an older version of React was rendered"*, React error #525) and reads `React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner` (removed in React 19). This was a real, shipped bug until 2026-09-23. Guarded by `__tests__/buildExternalization.test.ts`.
- `peerDependencies.react` and `react-dom` MUST remain in lockstep and MUST satisfy `19.0.0` and future majors (`>=18.0.0` chosen deliberately over a caret-union so React 20 is not blocked). Guarded by `__tests__/packagePeerDependencies.test.ts`.
- The `"exports"` map MUST keep the `"./dist/*"` passthrough so existing deep imports don't break.

### Known Pitfall
- `dist/` is gitignored but is what `npm pack` publishes; a stale `dist/` will ship an inlined JSX runtime. Always `npm run build` before packing/publishing.
- The `styleInject` helper in the bundle guards `typeof document === 'undefined'`, so importing the package during SSR does not throw — but it also means no styles are injected server-side (unchanged, out of scope).
- jest/`@types/react` are pinned to 18 in `devDependencies`; React 19 verification is a temporary `npm install --no-save react@19 react-dom@19 @types/react@19 @types/react-dom@19` run, then restore with `npm install`.

### Test Coverage
`__tests__/packagePeerDependencies.test.ts` (range + `exports` map assertions, hand-rolled `>=`/`^`/`||` matcher — no `semver` dependency) and `__tests__/buildExternalization.test.ts` (asserts the rollup `external` array covers the JSX-runtime subpaths). As of 2026-09-23: 111 tests / 13 suites, 98.68% lines (two tests were also added to `__tests__/hooks/useBusyState.test.ts` to close a pre-existing coverage gap below the 97.21% baseline). Verified empirically: full suite passes under React 19.3.0 and React 18.3.1; a Vite 5 + React 19 SSR build consuming the packed tarball renders both the plain and split buttons (`SMOKE_OK`).

