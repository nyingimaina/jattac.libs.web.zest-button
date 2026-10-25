---
title: Critical Paths
covers: docs/guidelines/AI_E2E_TESTING.md, __tests__/, UI/toggleStyle/, UI/hooks/useToggleStyle.ts
covers-hash: 65667fe77d792e7ce3f5
---

# Critical Paths

## Overview

A **critical path** is a user-facing behaviour that must never break. If it breaks, an
app that uses this package breaks in a way its users notice immediately.

This repository is a React component library, not a server application. It has no
payments, database, authentication or external service of its own. Its critical paths are
the behaviours a consumer's screen relies on when it renders a `ZestButton`, a
`ZestDropdownMenu` or a `ZestIcon`.

This page lists those paths and the tests that currently protect them. It is for
contributors changing the library. A change that makes one of these paths fail is not
ready, even if the rest of the suite is green.

## Before you start

- Run the suite with `npm test` (Jest with coverage). The tests live in `__tests__/` and
  mirror `UI/`; the production `tsconfig.json` includes only `UI/`, `Styles/` and
  `global.d.ts`, so the test files are outside the published build.
- There is **no browser end-to-end harness** in this repository: `package.json` has Jest
  with `jest-environment-jsdom`, and no Playwright or Cypress dependency. The checklist
  below is therefore protected by component and hook tests that drive the rendered DOM,
  not by a real browser.
- When a browser harness is added, the scenarios below become its first specs, per
  `docs/guidelines/AI_E2E_TESTING.md`.

## How to identify a critical path

For this library, a path is critical if it:

- changes whether or how a consumer's action runs (a click or a keyboard press);
- changes the feedback during or after an async action (busy, success, failure);
- removes a confirmation step or changes when it fires the action;
- changes the built-in semantic types or their icons;
- changes keyboard or screen-reader behaviour;
- changes what the published package exports, or how it resolves under React 18/19 and a
  bundler.

## Paths and where they are protected

### 1. A click runs the consumer's action

- [x] A plain click calls `onClick`.
- [x] A disabled button does not call `onClick`.
- [x] A busy button ignores extra clicks (`preventRageClick`).
- [x] An `isDefault` button also runs on an Enter press, once, and not while the dropdown
      menu is open.
- [x] The toggle's Enter handling does not flip twice when the key repeats.

Protected by `__tests__/ZestButton.test.tsx`, `__tests__/ZestButtonToggle.test.tsx` and
`__tests__/hooks/useToggleState.test.ts`.

### 2. Async feedback

- [x] A promise-returning `onClick` puts the button in the busy state and shows the
      spinner.
- [x] The busy state lasts at least `minBusyDurationMs` (500 ms by default).
- [x] A resolved promise shows the success check (when enabled) and a rejected promise
      shows the failure X and the shake.
- [x] Success and failure reset after `autoResetAfterMs`.
- [x] A consumer-supplied `aria-busy` still overrides the internal value.

Protected by `__tests__/ZestButton.test.tsx`, `__tests__/hooks/useBusyState.test.ts` and
the async cases in `__tests__/semanticTypeIcons.test.tsx`.

### 3. Confirmation

- [x] The first click shows the confirmation label with a countdown; it does not call
      `onClick`.
- [x] A second click within the timeout calls `onClick`.
- [x] Letting the countdown expire returns the original label and runs the failure path.
- [x] A button with `confirmOptions` but no `onClick` warns instead of crashing.

Protected by `__tests__/ZestButton.test.tsx` and
`__tests__/hooks/useConfirmation.test.ts`.

### 4. Semantic types and standard icons

- [x] Every built-in type name exists and has a default entry.
- [x] Every built-in type uses a library-drawn icon; the icon appears exactly once.
- [x] Local and provider overrides replace the built-in icon rather than adding a second
      one.
- [x] An unknown icon name renders nothing and does not throw, including inherited
      `Object.prototype` names.
- [x] All 47 icons render safe SVG: no script, image, link, inline event handler or
      `dangerouslySetInnerHTML`.
- [x] The SVG is decorative (`aria-hidden`, not focusable) and inherits the text colour.
- [x] Merging the built-in defaults with an app's `ZestButtonConfigProvider` settings edits
      neither one: a frozen provider config and the built-in table are unchanged after
      rendering.

Protected by `__tests__/semanticTypeButtonConfigDefaults.test.tsx`,
`__tests__/semanticTypeIcons.test.tsx`, `__tests__/ZestIcon.test.tsx`,
`__tests__/zestIconPerformance.test.tsx` and `__tests__/hooks/useZestConfig.test.ts`.

### 5. Toggle mode

- [x] A toggle renders `aria-pressed`; a non-toggle does not.
- [x] Controlled (`pressed`) wins over self-managed (`defaultPressed`).
- [x] The pressed look and check mark follow the value.
- [x] The check mark can sit at `start` or `end` and coexists with a type icon.
- [x] The toggle still flips on the confirming click when confirmation is configured.

Protected by `__tests__/ZestButtonToggle.test.tsx` and
`__tests__/hooks/useToggleState.test.ts`.

### 6. Toggle styling from the provider

The `styles.toggle` setting of `ZestButtonConfigProvider` (and the per-button
`toggleOptions.style`) changes how toggles look. It must never change how they behave.

- [x] A toggle inside a styled provider gets the configured look through a
      `data-zest-toggle-style` attribute; a plain button does not.
- [x] A toggle outside any provider, and a provider with an empty `styles` section, render
      exactly as before.
- [x] `defaultProps` and `semanticTypeDefaults` keep working next to `styles`.
- [x] Size, variant (including the variant a semantic type supplies) and theme feed the
      look; theme `'system'` follows the operating system live.
- [x] A per-button style changes only that button and updates on re-render.
- [x] Heavy styling keeps `aria-pressed`, click and Space/Enter, the `aria-hidden` check
      and the check position. A disabled styled toggle is still not operable.
- [x] A hostile value (for example one with `;`, `{` or `url(`) never becomes an extra
      rule, element or property.
- [x] A hostile config does not unmount the button or throw.
- [x] 100 styled toggles share one rule set; unmounting releases it and leaves no style
      element behind.
- [x] A config object recreated on every render keeps the same style id (no flicker).

Protected by `__tests__/ZestButtonToggleStyle.test.tsx`,
`__tests__/ZestButtonToggleStyleCharacterization.test.tsx`,
`__tests__/hooks/useToggleStyle.test.tsx`,
`__tests__/toggleStyle/compileToggleStyle.test.ts` and
`__tests__/toggleStyle/toggleStyleSheet.test.ts`.
`__tests__/toggleStyle/documentation.test.ts` checks that the published documentation
mentions the feature.

### 7. Split buttons and overflow menus

- [x] With no `dropdownOptions`, the rendered button is unchanged.
- [x] The main segment runs the main action; the chevron opens the menu.
- [x] Each menu item runs its own busy, success, failure and confirmation machinery.
- [x] The control disables while an item is busy.
- [x] The menu is non-modal, themed independently, and can be given a minimum width.
- [x] Without an explicit width, the menu follows the width of the split button as it is
      resized, ignores a reported width of zero, and stops watching when the button is
      removed.

Protected by `__tests__/ZestButton.test.tsx`, `__tests__/ZestDropdownMenu.test.tsx` and
`__tests__/ZestDropdownMenuItem.test.tsx`.

### 8. Packaging and compatibility

- [x] `react` and `react-dom` peers accept React 18 and React 19 and reject 16.8/17.
- [x] `rollup.config.mjs` externalizes `react/jsx-runtime` and `react/jsx-dev-runtime`.
- [x] The published bundle does not inline a React JSX runtime.
- [ ] `package.json` marks only CSS files as having side effects (`"sideEffects":
      ["**/*.css"]`) so bundlers can drop unused code. No test checks this yet, and the
      box stays open until one does.

Protected by `__tests__/packagePeerDependencies.test.ts` and
`__tests__/buildExternalization.test.ts`. The actual bundle content is checked at release
time, because the tests read the configuration rather than build the package.

## Adding a new path

1. Add the scenario above, with the outcome a user expects.
2. Write a test in the matching `__tests__/` suite. Follow the existing patterns: real
   assertions, fake timers for busy/confirm timing, and `identity-obj-proxy` for CSS
   modules.
3. Mark the scenario `- [x]` only after the test passes in a full run.
4. If a browser harness is added later, promote the scenario to an end-to-end spec rather
   than deleting the component test.

## Edge cases

- **Passing tests do not prove the bundle is small or tree-shakeable.** Bundle size and
  externalization are release checks; this page tracks behaviour.
- **jsdom is not a browser.** Layout, real pointer events and CSS animation are not
  exercised. The split-button tests polyfill `PointerEvent` and `ResizeObserver`; do not
  read that as browser coverage.
- **A removed path must be removed here too.** If a behaviour is deliberately dropped,
  update this checklist and the BRS that introduced it; do not leave a checked box for
  behaviour that no longer exists.

## See also

- [E2E testing policy](../guidelines/AI_E2E_TESTING.md) — the repository rule this page
  implements.
- [Testing policy](../guidelines/AI_TESTING.md) — test-first expectations.
- [Test configuration](../guidelines/AI_TEST_CONFIGURATION.md) — Jest setup and coverage
  baseline.
- [Using ZestButton semantic types](../features/zest-button-semantic-types/guide.md) — the
  behaviour behind path 4.
- [Using the ZestButton on/off toggle](../features/zest-button-toggle/guide.md) — the
  behaviour behind path 5.
- [Styling toggle buttons from one place](../features/zest-button-toggle-style/guide.md) —
  the behaviour behind path 6.
- [Dropdown options feature record](../features/zest-button-dropdown-options/BRS.md) — the
  behaviour behind path 7.
