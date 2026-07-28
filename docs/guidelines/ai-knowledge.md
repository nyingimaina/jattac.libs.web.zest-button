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
As of 2026-07-28: 52 tests across 9 suites, covering every file currently in `UI/`'s public surface (`ZestButton.tsx` incl. busy/confirm/keyboard flows, all 4 hooks, `ZestButtonConfigContext.ts`, `ZestButtonConfigProvider.tsx`, `SpinnerIcon.tsx`, `semanticTypeButtonConfigDefaults.tsx`). 95.38% lines / 94.76% statements / 97.36% functions / 85.23% branches. Baseline recorded in `test-reports/coverage-baseline.json`. Superseded by the dropdown-options feature's test additions above (81 tests, 97.21% lines as of the same date).

