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

## [2026-07-28] ZestButton dropdown options (split button), via @radix-ui/react-dropdown-menu

### Requested

"make the button support dropdown options so that in instances where a button may be used for a default action and optional others, then we show in ui that this is possible and provide a hit area to bring up option." Clicking the main segment always fires the default action directly; each dropdown item independent but DRY as possible; mobile-first, desktop-aware; full a11y; leverage a headless menu library if one fits, to avoid hand-rolling popup positioning. Full scope: `docs/features/zest-button-dropdown-options/BRS.md`.

### Options Considered

1. Reuse the sibling repo `jattac.Libs.Web.OverflowMenu` (`D:\work\nyingi\code\systems\jattac-web-libs\jattac.Libs.Web.OverflowMenu`) directly — rejected. Its trigger is a fixed 48×48 circular "kebab" icon-button with hover styling hardcoded via Framer Motion **inline styles** (`whileHover={{ color: '#016a80', ... }}`), which cannot be overridden by external CSS — no way to theme it into ZestButton's variant/dark-mode system without forking. It's also architecturally a standalone floating "more actions" button, not a chevron segment meant to fuse onto another button, and its `src/index.tsx` doesn't export the internals (`MenuRow`, the Radix wiring) separately, so there's no seam to reuse just the mechanics.
2. `@floating-ui/react` (generic positioning + a-la-carte interaction hooks) — viable, but a lower-level primitive than needed; would mean hand-assembling menu semantics (roles, type-ahead, keyboard nav) that a menu-specific library already provides.
3. `@radix-ui/react-dropdown-menu`, used directly (not via `OverflowMenu`'s wrapper) — chosen. Same package `OverflowMenu` already depends on in production (proven in this org already), but consumed via its `asChild` composition model so ZestButton drives its own trigger element and full styling, inheriting only positioning/dismiss/a11y/keyboard-nav mechanics. No Framer Motion needed — CSS-only transitions match this repo's existing animation approach.

### Chosen

Option 3.

### Rationale

`asChild` composition is the deciding factor: it gets the exact same battle-tested Radix positioning/a11y engine `OverflowMenu` already uses in this org, without inheriting that component's fixed skin, Framer Motion dependency, or lack of theme/variant props.

### Trade-offs (each found empirically while implementing, not guessed — see `test-reports/CHANGE_MANIFEST_dropdown-options.md` and `docs/guidelines/ai-knowledge.md`'s "ZestButton dropdown options" entry for detail)

- Radix's `DropdownMenu.Root` defaults to `modal: true`, which `aria-hide`s the trigger itself while its own menu is open — wrong for a split button; explicitly set `modal={false}`.
- Radix portals `DropdownMenu.Content` outside the trigger's DOM subtree, so a theme-override class scoped only to the trigger doesn't reach it — applied the theme class to both.
- jsdom has no `PointerEvent` constructor at all, and Radix's trigger opens on `pointerdown` not `click` — required three jsdom polyfills in `jest.setup.js` (`PointerEvent`, pointer-capture methods, `scrollIntoView`).
- First full test run showed a real aggregate coverage regression (95.38% → 95.12%) even though all new code was well-tested — a large, decently-but-not-perfectly-covered addition dilutes a weighted-average baseline. Fixed by adding 8 more targeted tests (3 of them for **pre-existing, untouched** `ZestButton.tsx` branches that happened to be uncovered already) rather than treating the dip as acceptable noise, since `AI_TESTING.md` has zero tolerance for any regression.

### Reversible

Yes — no file under `UI/`/`Styles/` had an *existing* line rewritten, only 3 small, explicitly BRS-mandated additions to existing conditions (see `ai-knowledge.md`'s "Known Pitfall" entry for exactly which 3 lines and why). Full file list in `test-reports/CHANGE_MANIFEST_dropdown-options.md`.

## [2026-07-28] Fix verify-post.ps1 silently skipping BRS compliance; align verify-pre.ps1's approval regex

### Requested

User noticed `verify-post.ps1`'s report looked "ok with there not being a BRS" and asked why that wasn't flagged as an issue.

### Options Considered

1. Leave it — the caller is expected to always pass `-BRSPath` — rejected, since nothing enforces that, and the whole point of this phase is to catch exactly this kind of omission.
2. Auto-discover the most-recently-modified `BRS.md` when `-BRSPath` isn't passed (mirroring `verify-pre.ps1`'s existing Phase 1 logic exactly), and make "no BRS found" or "found but not approved" a `FAIL`, never a silent `SKIPPED` — chosen.

### Chosen

Option 2, applied to `verify-post.ps1`'s Phase 3.

### Rationale

A script whose entire purpose is enforcing this repo's BRS-gated policy must never be able to report `RESULT: COMPLETE` while staying silent about BRS compliance just because an optional parameter was omitted. `verify-pre.ps1` already had the correct auto-discovery pattern; `verify-post.ps1` just never reused it.

### Also found and fixed while testing this change

Both scripts' approval-detection regex only recognized `Status: Approved` (or the equivalent markdown-table row), not `Status: Complete` — even though `AI_BRS.md`'s own template defines `Complete` as a later, valid lifecycle stage that can only be reached *after* approval. Running the fixed `verify-post.ps1` against this session's own (by-then-`Complete`) BRS immediately exposed this as a false negative. Fixed both scripts' regexes to accept either value.

### Trade-offs

None identified — this only makes both scripts stricter/more accurate, never looser.

### Reversible

Yes — confined to `scripts/verify-pre.ps1`'s Phase 1 and `scripts/verify-post.ps1`'s Phase 3 regex/discovery logic.

