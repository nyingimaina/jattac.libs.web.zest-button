---
title: The opt-in keyboard-focus streak
covers: UI/ZestButton.tsx, Styles/ZestButton.module.css, UI/hooks/useZestConfig.ts
covers-hash: ee4162a61d82105da8c4
---

# The opt-in keyboard-focus streak

## Overview

The **focus streak** (also called the focus sheen) is a decorative light band that sweeps across a button when a keyboard user moves focus onto it. It helps people who move around with the Tab key see which control has focus on a screen full of buttons.

It is **off by default**. Turn it on per button with the optional `focusSheen` field on the existing `zest` object:

```tsx
<ZestButton zest={{ focusSheen: true }}>Save draft</ZestButton>
```

A button that does not pass `focusSheen` (or passes `false`) renders and behaves exactly as it does today.

The streak is **decoration only**. The button's existing **focus ring** — the glow drawn around a focused control — stays the primary focus signal. Turning the streak on does not change the button's role, accessible name, on/off state or click behaviour.

What you will see when it works:

- a diagonal light band at about 45 degrees;
- travelling from the button's top-right area towards its bottom-left;
- across the whole button in about 0.6 seconds, once per focus arrival, then gone;
- clipped to the button's rounded shape, so it never paints outside the edge;
- painted on top of the button, with no extra element and no change to its size, text position or layout.

## Before you start

- Install the package: `npm i jattac.libs.web.zest-button`.
- Import the button as the default export:

```tsx
import ZestButton from 'jattac.libs.web.zest-button';
```

- Nothing else is required. The focus cue itself is CSS only: it adds no dependency, provider, listener or timer, and a code trigger uses a tiny state helper that keeps no timer or listener either. A button that is not opted in has no extra DOM and no extra CSS match.

## Step by step

1. Add `focusSheen: true` to the button's `zest` object (see the [split button](#a-split-button) example below if the button also has a menu).
2. Optionally choose the look with the usual options. The streak follows them:
   - `buttonStyle`: `'solid' | 'outline' | 'text' | 'dashed'`;
   - `visualOptions.variant`: `'standard' | 'success' | 'danger'`;
   - `theme`: `'light' | 'dark' | 'system'`.
3. Press Tab to move focus onto the button. One sweep plays.
4. Move focus away and back. The sweep plays again. Clicking the button with the mouse does not play it.

## Examples

### A regular button

```tsx
<ZestButton zest={{ focusSheen: true, buttonStyle: 'outline' }}>
  Save draft
</ZestButton>
```

Tab to the button and the band crosses it once. Clicking it with the mouse does not play the band. Moving focus away and back plays it again.

### A split button

A **split button** is one control with two segments: a main action and a chevron that opens a menu. Create one by adding `dropdownOptions` (see [the split-button feature record](../zest-button-dropdown-options/BRS.md)).

```tsx
<ZestButton
  zest={{
    focusSheen: true,
    dropdownOptions: [{ label: 'Export as PDF' }],
  }}
>
  Export as CSV
</ZestButton>
```

Focusing **either** the main action or the chevron plays one sweep across the whole split control, including the other segment. There are never two per-segment bands. Both segments keep their focus rings, the clip follows the rounded outer corners, and the open menu is unaffected: it is rendered outside the control (in a **portal**, a separate layer on the page), so it is not clipped, covered or hidden.

Moving focus from the main segment to the chevron during the same visit does not start a second sweep; leaving the control and returning does.

### Triggering the streak from code

A host can play the same streak on a button that is **not** focused by giving the button a `sheenTrigger` value (a string or a number). Every change of that value plays one sweep; the value present on the button's first render plays nothing.

```tsx
const [syncToken, setSyncToken] = useState(0);

<ZestButton zest={{ sheenTrigger: syncToken }}>Sync now</ZestButton>
<button onClick={() => setSyncToken((token) => token + 1)}>Trigger the streak</button>
```

- It works with or without `focusSheen` (omitted, `false` or `true`).
- On a split button it sweeps the whole control, exactly like the focus streak.
- It plays on a disabled or busy button too, without making the button usable, changing its busy state, or firing its click handler. The focus streak itself still never applies to a disabled button.
- Changing the value again while a sweep is playing restarts it from the beginning; there is no queue and the last change wins.
- No ref, imperative handle or boolean reset is needed: a new value is the whole API.

Under `prefers-reduced-motion: reduce` the programmatic sweep is switched off as well, with no override.

## Scenarios

### Every style, variant and theme

The streak is visible on all four button styles (`solid`, `outline`, `text`, `dashed`) and all three variants (`standard`, `success`, `danger`), in both light and dark themes.

- **Solid buttons** use a light (white) band on their darker fills. The one exception is the dark-theme success (green) button, where a white band would not stand out, so it uses a dark contrasting band instead. In every solid case the band reaches at least 3:1 contrast against the button's own colour at its brightest point.
- **Outline, text and dashed buttons** use the button's own colour, so the band does not disappear against a light page or a dark page: the label/text colour on a regular button, and the variant's border colour on a split control.
- The colour follows the button's **forced** light or dark theme as well as the operating-system preference, not only `prefers-color-scheme`.
- The band is translucent and sits behind the label, so the label stays readable during the sweep and the button's normal colours return when it ends.

### On a toggle

A toggle is a button with `toggleOptions` (see [Using the ZestButton on/off toggle](../zest-button-toggle/guide.md)). A toggle can opt in like any other button. In its on state it keeps its pressed look and its focus ring while the streak plays; the streak never replaces either.

```tsx
<ZestButton zest={{ focusSheen: true, toggleOptions: {} }}>Bold</ZestButton>
```

### Set it for the whole app

`focusSheen` is an ordinary `zest` field, so the provider's `defaultProps` can set it once for every button in scope. A single button can still opt out with `focusSheen: false`. See [Configuration: focus streak defaults](../../../documentation/configuration.md#focus-streak-defaults).

```tsx
<ZestButtonConfigProvider config={{ defaultProps: { focusSheen: true } }}>
  {/* every button below inherits the streak */}
  <ZestButton>Save draft</ZestButton>
  <ZestButton zest={{ focusSheen: false }}>Skip</ZestButton>
</ZestButtonConfigProvider>
```

### Reduced motion

People who set `prefers-reduced-motion: reduce` get no streak at all from either the focus or the programmatic trigger: the band is not shown for a regular button or a split button, and no prop overrides it. Without that preference the streak plays normally. This follows the same accessibility setting that already switches off the other button animations.

## Edge cases

- **Mixed screens.** Only buttons that pass `focusSheen: true` play the streak; the option never leaks to another button.
- **Turning it off at runtime.** If the option becomes `false` while a sweep is playing, the layer is removed and no band remains.
- **Mouse clicks.** The sweep is tied to keyboard focus (the CSS `:focus-visible` state), so clicking with the mouse does not play it. A mouse click followed by a Tab focus plays exactly one sweep.
- **Re-focusing.** Each focus arrival starts a fresh sweep; a second layer is never stacked on the same control.
- **Sizes.** Very small and very large buttons get the same continuous diagonal sweep; the band is sized in percentages, not fixed pixels, and does not resize the button.
- **Lost focus.** The band cannot be left visible on a button that has lost focus.
- **Split focus moves.** Moving between the main segment and the chevron during one visit keeps one overlay; leaving the control and coming back starts a new sweep.

## Pitfalls

- **Opting in everywhere.** A sweep on every button can become noisy. Opt in only where keyboard focus needs to stand out, or use the provider default where the whole app needs it.
- **Replacing the focus ring.** Do not remove or soften the focus ring because the streak exists. The streak is an extra cue and is switched off for reduced motion; the ring is the reliable signal.
- **Expecting a screen-reader announcement.** The streak is purely visual. Screen readers still get the normal button name, role and state, with nothing added.
- **Older browsers and split controls.** A split control detects focus on either segment with the CSS `:has()` selector. A browser that does not support `:has()` will not play the split sweep; the regular-button sweep uses only `:focus-visible`.
- **A custom clipping wrapper.** Do not wrap the split control in your own `overflow: hidden` box: it would cut the focus rings. The library clips the band itself, with the overlay's own rounded corners.

## Best practices

- Keep the focus ring visible; treat the streak as an extra cue, not a replacement.
- Set `focusSheen: true` in the provider's `defaultProps` when the whole app needs the cue, instead of repeating it on every button.
- Leave it off by default on dense screens where every button would otherwise animate.
- Test with `prefers-reduced-motion: reduce` turned on to confirm the control is still usable without the band.

## See also

- [Using the ZestButton on/off toggle](../zest-button-toggle/guide.md) — how `toggleOptions` works, and how the streak sits with a pressed toggle.
- [Split button feature record](../zest-button-dropdown-options/BRS.md) — how `dropdownOptions`, the chevron and the menu work together.
- [Using ZestButton semantic types](../zest-button-semantic-types/guide.md) — the type names and their default looks, which the streak follows.
- [Configuration: focus streak defaults](../../../documentation/configuration.md#focus-streak-defaults) — set the option once through the provider.
- [Features: Keyboard Focus Streak](../../../documentation/features.md#keyboard-focus-streak) — the short feature summary.
- [Recipe 10: An Opt-In Keyboard-Focus Streak](../../../documentation/examples.md#recipe-10-an-opt-in-keyboard-focus-streak) — a copy-paste example.
- [`focusSheen` API reference](../../../documentation/api.md#focussheen) — the prop table entry.
- [`sheenTrigger` API reference](../../../documentation/api.md#sheentrigger) — play the streak from code.
- [Critical paths](../../e2e/critical-paths.md) — the behaviours that must not break.
