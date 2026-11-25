---
title: BRS — ZestButton on/off toggle mode
covers: UI/ZestButton.tsx, UI/hooks/useToggleState.ts, UI/hooks/useToggleStyle.ts, Styles/ZestButton.module.css, __tests__/ZestButtonToggle.test.tsx
covers-hash: f6348e5f18277e663e3b
---

# BRS — ZestButton on/off toggle mode

## Metadata

| Field | Value |
|-------|-------|
| Status | Complete |
| Task Type | Feature (additive) |
| Version | 1.6.0 (behaviour unchanged in 1.7.0 and 1.8.0) |

## Summary

`ZestButton` gets an optional toggle mode via `zest.toggleOptions` (`pressed`, `defaultPressed`, `onPressedChange`, `checkPosition`). When on, the button shows a pressed look and a small animated check mark at the `start` (default) or `end`; it renders `aria-pressed` and stays a `button` (no `role="switch"`). It is additive: without `toggleOptions` the markup is unchanged.

## Decisions

- Toggle mode on ZestButton rather than a separate switch control.
- Pressed look plus a check mark (not colour alone); the check is `aria-hidden` and distinct from the async success checkmark.
- Controlled (`pressed`) wins over self-managed (`defaultPressed`).
- If `onClick` fails the toggle keeps its flipped value; apps needing otherwise control `pressed`.
- With `confirmOptions` the flip happens only on the confirming click; disabled or busy buttons ignore clicks.
- No new dependency; the check is an inline SVG. Animations are disabled under `prefers-reduced-motion`.

## Files

`UI/ZestButton.tsx`, `UI/hooks/useToggleState.ts`, `Styles/ZestButton.module.css`, `__tests__/ZestButtonToggle.test.tsx`, `__tests__/hooks/useToggleState.test.ts`, and the pages under `documentation/`.

## Current state in 1.7.0

The 1.7.0 feature widened `SemanticType` on the same `ZestButton.tsx` from 19 to 47
built-in names and replaced every built-in type's Font Awesome icon with a library-drawn
inline SVG. Toggle mode itself is unchanged: `toggleOptions`, `useToggleState`,
`ToggleCheck`, `aria-pressed` and the fixed check-mark slot all behave as described above.
A type's icon and the toggle check coexist; the check is inserted at `start` or `end` and
does not replace the icon. `__tests__/ZestButtonToggle.test.tsx` and the semantic-type
icon tests cover the combined case, and the guide shows it under "A toggle with a semantic
type".

## Current state in 1.8.0

`ToggleOptions` gained one optional field, `style` (a `ZestToggleStyle`), and
`ZestButton.tsx` now calls the `useToggleStyle` hook. When a toggle has a generated look,
the button carries a `data-zest-toggle-style` attribute and the check mark SVG carries
`data-zest-toggle-check`; a toggle with no provider styles and no `style` renders as
before. Nothing about `aria-pressed`, `pressed` / `defaultPressed`, `onPressedChange`,
`checkPosition` or the keyboard handling changed. The new behaviour has its own record:
[Styling toggle buttons from one place](../zest-button-toggle-style/guide.md).

## Current state: the opt-in focus streak

The focus-streak feature adds one optional `zest.focusSheen` boolean to the same
`ZestButton.tsx` and new CSS in the shared stylesheet. It does not change toggle mode: a
toggle that does not opt in renders and behaves exactly as before. A toggle that does opt
in keeps its pressed look (`toggleOn`) and its focus ring while the streak plays, and its
`aria-pressed`, click and keyboard handling are unchanged. The focus streak has its own
record: [The opt-in keyboard-focus streak](../zest-button-focus-sheen/guide.md).

## Out of scope

Sliding switch control, exclusive toggle groups, custom on/off icons, persisting the value.

## See also

- [Using the ZestButton on/off toggle](./guide.md) — the developer guide for this record.
- [The opt-in keyboard-focus streak](../zest-button-focus-sheen/guide.md) — the extra
  keyboard-focus cue a toggle can opt into.
- [Styling toggle buttons from one place](../zest-button-toggle-style/guide.md) — set the
  exact look of every toggle from `ZestButtonConfigProvider`.
- [Using ZestButton semantic types](../zest-button-semantic-types/guide.md) — combine a
  toggle with a built-in icon and colour.
- [Built-in semantic type reference](../zest-button-semantic-types/type-reference.md) —
  the 47 type names.
- [API reference: `ToggleOptions`](../../../documentation/api.md#toggleoptions) — the
  published prop reference.
