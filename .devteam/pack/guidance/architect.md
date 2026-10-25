Stack: a React component library (TypeScript, Rollup, CSS Modules, Vitest). Layout: components in `UI/components/<Component>/` (the component, its `.module.css`, its types), shared helpers, hooks and styles in `UI/shared/`, tests in `tests/` (never inside the folders the build compiles), documentation in `docs/`, release scripts in `scripts/`.

- Name the public surface in the design: every export that is added, changed or removed from `UI/index.ts`, with its prop types. Anything not exported is private and may change freely.
- Say what each component costs: the dependencies it needs (prefer none; a new one must be a peer dependency or tiny, with the reason recorded), whether it keeps state, and how it behaves with a hundred times more data (paging, virtualization, memoization). Name the budget in `.size-limit.json` if the change could move it.
- Peer dependencies (`react`, `react-dom`, and any UI library the components wrap) are listed in `peerDependencies` with a range and are external in the Rollup config, including `react/jsx-runtime`. Never put them in `dependencies`.
- Styles are CSS Modules injected into the bundle (consumers import no CSS). Themes use CSS variables with light, dark and system values; sizes in `rem`; mobile first.
- The package output is dual: `dist/index.cjs` and `dist/index.mjs` with `index.d.ts` and `index.d.mts`, a `"use client"` banner, `"sideEffects": false`, and an `exports` map with `types` first. Do not change the build output layout without a decision.
- Scope must include the documentation pages the change touches and `docs/breaking-changes.md` for a breaking change. Changing `package.json` dependencies is allowed only when the design names the change and the reason.


## About this existing project

This is an existing project that was not created by DevTeam. Extend it; never recreate or restructure it. Follow the conventions already in its code, and reuse what is already there.

- Library (an npm package, TypeScript): in `.`. Its scripts: build, dev, test.
- Features live in: `UI`.
- Shared code lives in: `Styles`.

Not set up in this project (so nothing proves these yet):
- Package check (attw and publint): attw and publint are not installed, so nothing checks that the package works for everyone who installs it.
- Install and import the packed library: Nothing installs the packed library into a scratch project and imports it (no scripts/consumer-smoke.mjs).
- Size budget: The project has no .size-limit.json, so this check has nothing to run.
- Documentation is complete: The project has no scripts/check-docs.mjs, so this check has nothing to run.
Where you touch code, add automated tests for it (write the test for the existing behaviour first, then change the code). Do not create the missing scaffolding unless the request asks for it.

Notes from a survey of the project:

# Survey: jattac.libs.web.zest-button (v1.5.3)

## What it is
- A published npm React component library (not an app): `ZestButton` with async busy/success/error feedback, built-in confirmation flow, optional split-button dropdown (Radix), semantic types (primary/danger etc.), theming via CSS Modules.
- Layout is flat at repo root (no `src/`):
  - `UI/` – components: `ZestButton.tsx` (main, ~380 lines), `ZestDropdownMenu(.Item).tsx`, `SpinnerIcon.tsx`, `ZestButtonConfigProvider/Context`, `semanticTypeButtonConfigDefaults.tsx`.
  - `UI/hooks/` – `useBusyState`, `useConfirmation`, `useThemeDetection`, `useZestConfig` (merges provider config with per-button `zest` prop).
  - `UI/index.ts` – the public API barrel (default `ZestButton`, `ZestButtonConfigProvider`, context exports).
  - `Styles/ZestButton.module.css` – all styling; CSS is injected into the JS bundle (no separate CSS file for consumers).
  - `__tests__/` – Jest tests, mirrors `UI/` (hooks in `__tests__/hooks/`).
  - `documentation/` (api, configuration, features, examples, breaking-changes, development) – shipped in the npm package.
  - `docs/guidelines/` – mandatory AI/contributor policy; `test-reports/` – generated verify reports and change manifests.
- Consumers call `ZestButton`; the button uses the hooks and optionally the Provider's config. No backend, no data access.

## Build / test / run
- `npm install`, then `npm run build` (rollup -> `dist/index.cjs.js`, `dist/index.esm.js`, `dist/index.d.ts`), `npm run dev` (rollup watch), `npm test` (`jest --coverage`, jsdom, ts-jest with `tsconfig.jest.json`, CSS mapped to identity-obj-proxy).
- No lint script found. No dev server/demo app found; "run" means build and consume from another project.
- `scripts/verify-pre.ps1` / `verify-post.ps1` (and `bootstrap.ps1/.sh`) write HTML reports to `test-reports/`; `.githooks/` has commit-msg, pre-commit (blocks >1MB files, secrets, .env), pre-merge-commit, pre-push. Whether hooks are auto-enabled (core.hooksPath) is not found; bootstrap scripts presumably do it, not verified.
- Peer deps: react >=18, react-dom, react-icons ^5, @radix-ui/react-dropdown-menu ^2. Dev types are React 18.
- CI config: not found.

## Conventions
- Policy lives in `AGENTS.md` / `docs/guidelines/AI_*.md` (11 docs to read first): strict TDD (failing test before production code, regression test for every bug), minimal diffs, no unrelated renames/reformatting/reordering, no deleting "unused" code. Also `BRS.md`, `DIRECTIVES.md`, `WORKPLAN.md`, `docs/guidelines/decision-log.md`.
- Global user rule: add new methods/wrappers rather than editing existing method bodies.
- Component files are PascalCase `.tsx`; hooks are `useXxx.ts`; one test file per source file named `<Source>.test.ts(x)`.
- Custom props are grouped under a single `zest` prop (`ZestCustomProps`) on `ZestButtonProps`, which extends the native button props.
- Styling: CSS Modules, `rem` units (px only for borders), mobile-first, CSS variables for theming; dropdown theme defaults to system preference.
- Every feature needs docs updates (README + `documentation/`); keep `package.json` keywords/metadata tidy. Commit messages follow conventional style (`feat(zest-button): ...`, `fix(...)`), enforced by the commit-msg hook (rules not read).
- Errors/data access: not applicable beyond the busy-state error handling in `useBusyState`.

## Fragile / surprising
- `rollup.config.mjs` `external` lists must include `react/jsx-runtime` and `react/jsx-dev-runtime` (React 19 / Vite support). `__tests__/buildExternalization.test.ts` regex-parses the config source (first `external: [...]` array = JS bundle), so reformatting that config can break the test.
- `__tests__/packagePeerDependencies.test.ts` also pins package.json peer-dependency shape; check it before changing deps.
- Bundle is built with `inject: true`, so CSS is runtime-injected; `dist/` and `coverage/` are gitignored.
- Rollup produces two outputs from the same entry (JS and `.d.ts`); externals are duplicated in both configs and must be kept in sync.
- Version in `package.json` is bumped by hand in "feat: bumped version" commits; publishing process is not found.
- Docs disagree on repo URL (`jattac/` vs `nyingimaina/` in package.json) and `documentation/development.md` lists fewer files than exist; it is slightly stale.
- Current branch `feature/react-19-support`; `.devteam/` is untracked tooling and not part of the project.
