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
