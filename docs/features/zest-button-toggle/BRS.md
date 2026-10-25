---
title: BRS — ZestButton on/off toggle mode
covers: UI/ZestButton.tsx, UI/hooks/useToggleState.ts, Styles/ZestButton.module.css, __tests__/ZestButtonToggle.test.tsx
covers-hash: 75279f6cb9f1ca071573
---

# BRS — ZestButton on/off toggle mode

## Metadata

| Field | Value |
|-------|-------|
| Status | Complete |
| Task Type | Feature (additive) |
| Version | 1.6.0 |

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

## Out of scope

Sliding switch control, exclusive toggle groups, custom on/off icons, persisting the value.
