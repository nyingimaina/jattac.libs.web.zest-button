# BRS — ZestButton dropdown options (split button)

## Metadata

| Field | Value |
|-------|-------|
| Status | Complete |
| Task Type | Feature |
| Author | Claude (collaborating with repo owner) |
| Created | 2026-07-28 |
| Last Updated | 2026-07-28 |
| Approved | Yes — user approved full scope as drafted, 2026-07-28 |

### Implementation notes

See `test-reports/CHANGE_MANIFEST_dropdown-options.md` for the full file list, four implementation deviations from this document's original Technical Design (each empirically discovered, not guessed), and the coverage-regression fix. All 9 acceptance criteria satisfied; 81/81 tests pass; coverage 97.21% (up from the prior 95.38% baseline).

---

## Problem Statement

**As a** developer using ZestButton, **I want** a way to attach a set of optional secondary actions to a button that already has one obvious default action, **so that** the button visually communicates "there's more here" and gives users a dedicated, discoverable way to reach those alternatives without cluttering the UI with several separate buttons.

---

## Business Value / Impact

Several places in Jattac products need "primary action + a few situational alternatives" (e.g. Save / Save & Close / Save As, Export / Export as CSV / Export as PDF). Today that either forces multiple separate buttons or a bespoke one-off menu per screen. A first-class ZestButton capability makes this consistent, accessible, and reusable everywhere ZestButton already is.

---

## Acceptance Criteria

### 1: Split-button rendering

- **Given** `zest.dropdownOptions` is a non-empty array
- **When** `ZestButton` renders
- **Then** it renders as two visually-fused segments sharing one pill shape: the existing button content/behavior on the left, and a chevron ("more options") segment on the right, separated by a subtle divider
- **And** when `dropdownOptions` is absent or empty, `ZestButton` renders exactly as it does today — zero visual or behavioral change (this is the core regression constraint for every other AC)

### 2: Main segment always fires the default action directly

- **Given** the split-button variant is rendered
- **When** the user clicks/taps/keyboard-activates the main (left) segment
- **Then** it behaves exactly like today's `ZestButton` `onClick` — no menu involvement, no extra click required. The dropdown never intercepts or delays the primary action.

### 3: Chevron segment opens/closes the menu

- **Given** the split-button variant is rendered
- **When** the user clicks/taps/keyboard-activates (Enter/Space) the chevron segment
- **Then** a menu listing `dropdownOptions` opens, positioned relative to the button with automatic collision/flip handling (opens upward instead of downward, or shifts horizontally, when there's insufficient viewport space) — provided by `@radix-ui/react-dropdown-menu`, not hand-rolled
- **And** clicking the chevron again, pressing Escape, or clicking/tapping outside closes it
- **And** the chevron rotates/reflects open vs. closed state visually (CSS-only transition, no animation library)

### 4: Each menu item is independent but DRY

- **Given** a `dropdownOptions` entry with its own `busyOptions`/`successOptions`/`confirmOptions`
- **When** that item is activated
- **Then** it goes through the *same* `useBusyState`/`useConfirmation` hooks the main button already uses — each item is its own hook instance (via a new internal `ZestDropdownMenuItem` sub-component, since React's rules of hooks forbid calling hooks in a loop at the parent level), not a re-implementation of busy/confirm logic
- **And** an item with no `busyOptions`/`confirmOptions` behaves like a plain synchronous menu action: selecting it calls `onClick` and closes the menu immediately (today's Radix default)
- **And** an item with `busyOptions.handleInternally` (default `true`, matching the main button's existing default) keeps the menu open on that row, shows the same spinner/checkmark/shake feedback the main button uses, then closes automatically once the success/fail state settles
- **And** an item with `confirmOptions` keeps the menu open through the full "Confirm X (5s)" countdown flow (identical semantics to the main button's confirm flow today), only closing once the confirmed action actually runs or the countdown expires

### 5: Full accessibility

- **Given** the split-button variant
- **Then** the chevron trigger has `aria-haspopup="menu"`, `aria-expanded`, and an accessible name (`zest.dropdownAriaLabel`, default `"More options"`, always overridable since it has no visible text)
- **And** the menu uses proper `role="menu"`/`role="menuitem"` semantics (via Radix, not authored by hand)
- **And** keyboard interaction works fully: Tab reaches the chevron as a separate stop after the main button, Enter/Space opens it, Arrow Up/Down moves between items, Escape closes and returns focus to the chevron
- **And** while the menu is open, the existing `isDefault` document-level Enter-key listener (`UI/ZestButton.tsx`'s `useEffect` that clicks `buttonRef` on Enter) is suppressed — Enter while the menu is open must operate on the highlighted menu item (Radix's own behavior), not re-trigger the main action underneath it

### 6: Mobile-first, desktop-aware

- **Given** the split-button variant on a touch viewport
- **Then** the chevron segment meets a minimum 44×44px touch target (WCAG 2.5.5 / matches the intent of the prior "improve ZestButton mobile hit area" work), even at `size="sm"`
- **And** on desktop/pointer input, the chevron segment is visually proportionate to the button's `size` (`sm`/`md`/`lg`) rather than always occupying the mobile-minimum footprint

### 7: Visual integration with the existing variant system

- **Given** any combination of `visualOptions.variant` (`standard`/`success`/`danger`), `size` (`sm`/`md`/`lg`), `buttonStyle` (`solid`/`outline`/`text`/`dashed`), and `theme` (`light`/`dark`/`system`)
- **Then** the chevron segment and the menu itself render consistently themed — no hardcoded colors independent of the variant/theme system (this is the concrete gap identified in `jattac.Libs.Web.OverflowMenu`, which hardcodes teal via Framer Motion inline styles that can't be overridden; this feature must not repeat that mistake)

### 8: Disabled/busy propagation across the whole control

- **Given** the split-button variant
- **When** the main segment is busy (internally-handled async click in flight) OR any menu item is busy
- **Then** the *entire* control (main segment + chevron) is disabled — no firing a second action from either segment while one is already in flight
- **And** the existing `disabled` prop, when explicitly passed, disables both segments as it does today for the single button

### 9: New dependency

- **Given** this feature requires menu positioning/dismiss/a11y mechanics
- **Then** `@radix-ui/react-dropdown-menu` is added as a `peerDependency` + `devDependency`, and added to both `external` arrays in `rollup.config.mjs` — following the exact precedent already established for `react-icons` in this repo, so it's never bundled into `dist/` and consumers control their own version
- **And** no other new dependency is introduced (no Framer Motion, no `@radix-ui/react-popover` — this repo's existing CSS-module + hooks approach covers everything else)

---

## Out of Scope

- Nested/submenus (dropdown items are a flat list; `jattac.Libs.Web.OverflowMenu` supports nesting, this feature does not need to and will not)
- Any change to `jattac.Libs.Web.OverflowMenu` itself, or reusing it as a dependency (evaluated and rejected — see decision log)
- A "menu-only" button mode where the main segment doesn't have its own default action — every split button has a real default action per the user's stated requirement
- Reordering/drag-and-drop of menu items
- Icons-within-menu-items styling beyond what `semanticType`/`icon` already provide on the main button today
- Any change to `ZestButton`'s existing (non-dropdown) behavior — AC 1's "zero change when `dropdownOptions` is absent" is the hard boundary

---

## Technical Design

### New dependency

| Package | Type | Purpose |
|---|---|---|
| `@radix-ui/react-dropdown-menu` | `peerDependency` + `devDependency`, externalized in `rollup.config.mjs` | Menu positioning (collision/flip), dismiss-on-outside-click/Escape, WAI-ARIA menu semantics, keyboard nav — used directly (not via `jattac.Libs.Web.OverflowMenu`) |

### New types (`UI/ZestButton.tsx`, additive)

```ts
export interface ZestDropdownOption {
  key?: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  semanticType?: SemanticType;
  onClick?: (e: Event) => void | Promise<void>;
  busyOptions?: BusyOptions;
  successOptions?: SuccessOptions;
  confirmOptions?: ConfirmOptions;
}
```

`ZestCustomProps` gains two new optional fields: `dropdownOptions?: ZestDropdownOption[]` and `dropdownAriaLabel?: string` (default `"More options"`).

### New files

```
UI/ZestDropdownTrigger.tsx      — the chevron segment; wraps Radix's DropdownMenu.Trigger (asChild) around ZestButton's own themed button markup
UI/ZestDropdownMenuItem.tsx     — one menu row; internally calls useBusyState/useConfirmation exactly like ZestButton.tsx does today (AC 4's DRY-via-shared-hooks requirement)
UI/hooks/useDropdownDisclosure.ts — thin wrapper around Radix's open/onOpenChange state, exposing the open flag ZestButton.tsx needs to suppress the isDefault Enter-key effect (AC 5)
Styles/ZestButton.module.css    — extended (not replaced) with chevron/menu/divider classes, matching this repo's existing CSS-module + identity-obj-proxy-testable approach
```

### Modified files

- `UI/ZestButton.tsx` — additive only: renders the chevron trigger + menu when `dropdownOptions` is present; the `isDefault` `useEffect` gains the open-menu guard from AC 5. No existing branch of the current render/click logic changes when `dropdownOptions` is absent (AC 1).
- `package.json` — new peer/dev dependency.
- `rollup.config.mjs` — `@radix-ui/react-dropdown-menu` added to both `external` arrays (JS bundle config and the `.d.ts` bundle config), matching the existing `react`/`react-dom`/`react-icons` entries exactly.

### Pattern precedent

`jattac.Libs.Web.OverflowMenu` (sibling repo, `D:\work\nyingi\code\systems\jattac-web-libs\jattac.Libs.Web.OverflowMenu`) already depends on `@radix-ui/react-dropdown-menu` in production — this is a proven, already-trusted-in-this-org package, just consumed directly instead of through that repo's opinionated (non-themeable) wrapper.

---

## Edge Cases

### Menu item busy while main button is also mid-confirmation
**Scenario:** User opens the menu while the main button's own `confirmOptions` countdown is active.
**Expected:** AC 8 disables the whole control while *busy*, but a pending confirm countdown on the main segment is not "busy" (mirrors today's single-button semantics, where `wasSuccessful`/`wasFailed`/`internalBusy` — not `awaitingConfirm` — drive `isDisabled`). The menu remains openable during a pending confirm; opening it does not cancel the main segment's countdown.

### Zero dropdownOptions after filtering
**Scenario:** Caller passes `dropdownOptions: []` (explicit empty array, not `undefined`).
**Expected:** Same as AC 1's "absent" case — no chevron segment rendered. An empty array is not treated differently from `undefined`.

### Rapid open/close while a menu item is busy
**Scenario:** A menu item's async `onClick` is in flight (menu held open by AC 4); user presses Escape or clicks outside.
**Expected:** The menu closes on dismissal regardless of the in-flight promise — the promise still runs to completion and still updates that item's busy/success/fail state internally, it's just not visible until/unless the menu is reopened. No dangling state or memory leak (existing `useBusyState`/`useConfirmation` cleanup-on-unmount behavior, already tested in `__tests__/hooks/`, covers this as long as the item component doesn't literally unmount when the menu closes — confirm during implementation whether Radix unmounts closed menu content by default, and force-mount if so, so item state survives close/reopen within one page session).

---

## Dependencies

### Internal
- Builds on the existing `useBusyState`/`useConfirmation`/`useZestConfig` hooks and `Styles/ZestButton.module.css` conventions — no changes required to any of them.

### External
- `@radix-ui/react-dropdown-menu` (new, see Technical Design).

---

## Risks and Open Questions

### Risks
- Radix's `DropdownMenu.Content` renders into a portal by default — needs a sensible default portal target (`document.body`) with an optional override prop for consumers using shadow DOM/iframes, otherwise CSS custom properties (theme forcing) that rely on ancestor selectors may not reach the portaled menu. Needs verifying during implementation, not just assumed.
- `@radix-ui/react-dropdown-menu`'s peer range for React needs checking against this repo's `react: ">=16.8.0"` peer floor before finalizing the `package.json` entry — if Radix's floor is higher (e.g. requires React 16.8+ hooks, which is fine, but some Radix packages have crept their stated minimums up in recent majors), the two peer ranges must be reconciled or documented as a floor bump.

### Open Questions
- None blocking — flagged risks above will be resolved empirically during implementation (installed, checked, and reported), not guessed.

---

## Regression Prevention

### For Features

**New Tests Required:**
- Every AC above (1–9) gets at least one behavioral test in `__tests__/ZestButton.test.tsx` or a new `__tests__/ZestDropdownMenuItem.test.tsx` / `__tests__/hooks/useDropdownDisclosure.test.ts`, following this repo's existing test conventions (real assertions, fake timers for confirm/busy timing, `identity-obj-proxy` for CSS modules).
- A dedicated regression test asserting AC 1's "zero behavior change when `dropdownOptions` is absent" — re-running (not duplicating) a representative slice of the existing 52-test suite against a build with the new prop wired in but unused.

---

## Definition of Done

- [ ] BRS approved by user
- [ ] All acceptance criteria pass (new tests green, full existing 52-test suite still green)
- [ ] `npm run build` clean (no new TS diagnostics, no new bundle-size surprises from an accidentally-inlined Radix dependency — verify `external` actually excluded it)
- [ ] No coverage regression from the current baseline (`test-reports/coverage-baseline.json`)
- [ ] No unsolicited changes outside this BRS's scope
- [ ] Code matches existing patterns (hooks-per-concern, CSS modules, `identity-obj-proxy`-testable styling)
- [ ] Change manifest produced
- [ ] Self review passed with all PASS items
- [ ] `docs/guidelines/ai-knowledge.md` and `docs/guidelines/decision-log.md` updated
