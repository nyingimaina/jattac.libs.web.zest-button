---
title: Using the ZestButton on/off toggle
covers: UI/ZestButton.tsx, UI/hooks/useToggleState.ts, Styles/ZestButton.module.css, UI/index.ts
covers-hash: bf05f9bb01485eb3823d
---

# Using the ZestButton on/off toggle

## Overview

A **toggle** is a button that remembers whether it is *on* or *off*. Think of the **Bold** button in a text editor: you click it, it stays pressed in, and you click it again to release it.

`ZestButton` can now work this way. You switch it on by adding one optional setting, `zest.toggleOptions`. Buttons that do not use it look and behave exactly as before.

When the toggle is **on**, the button shows:

- a *pressed* look (it sits slightly inset instead of lifted), and
- a small animated **check mark**.

The check mark means the state is not shown by colour alone, so people who cannot tell colours apart can still read it. Screen readers do not read the check mark. They hear that the button is **"pressed"** (the HTML attribute `aria-pressed` carries this).

This page is for developers who install the library and use `ZestButton` in their apps. The toggle is a mode of the normal button, not a separate sliding switch.

## Before you start

- You need the package installed: `npm i jattac.libs.web.zest-button`.
- You need a version that includes toggle mode. Toggle mode arrived in 1.6.0; 1.7.0 added the
  wider set of semantic types and the library-drawn icons, and 1.8.0 (current) adds central
  toggle styling.
- Import the button as the default export:

```tsx
import ZestButton from 'jattac.libs.web.zest-button';
```

The types `ToggleOptions` and `ToggleCheckPosition` are exported from the same package if you need them.

## Step by step

1. Add `toggleOptions` to the button's `zest` prop. An empty object is enough: `zest={{ toggleOptions: {} }}`. The button now starts **off** and looks after itself.
2. Decide who owns the on/off value:
   - **Let the button own it** (simplest): optionally set `defaultPressed: true` to start on.
   - **Let your app own it** ("controlled"): pass `pressed` and update it in `onPressedChange`.
3. Optionally set `checkPosition` to `'start'` (default) or `'end'` to choose which side of the label the check mark sits on.
4. Click the button. It flips between on and off, and `onPressedChange` is called with the new value.

### The options

| Option | Type | Default | What it does |
|--------|------|---------|--------------|
| `pressed` | `boolean` | not set | The value you control. When you give it, the button only changes when *you* pass a new value. It wins over `defaultPressed`. |
| `defaultPressed` | `boolean` | `false` | Starting value when the button manages itself. |
| `onPressedChange` | `(pressed: boolean) => void` | not set | Called with the new value each time an enabled toggle is clicked or activated by keyboard. |
| `checkPosition` | `'start' \| 'end'` | `'start'` | Which end of the button holds the check mark. Any other value falls back to `'start'`. |
| `style` | `ZestToggleStyle` | not set | Looks for this toggle only. See [Styling toggle buttons](../zest-button-toggle-style/guide.md). |

## Examples

### A self-managed toggle

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';

export const ItalicToggle = () => (
  <ZestButton zest={{ toggleOptions: { defaultPressed: false } }}>
    Italic
  </ZestButton>
);
```

What you should see: a normal "Italic" button. After one click it looks pressed and a check mark animates in at the start. After a second click the check mark is gone and the button looks normal again.

### A controlled toggle with the check mark at the end

```tsx
import React, { useState } from 'react';
import ZestButton from 'jattac.libs.web.zest-button';

export const BoldToggle = () => {
  const [bold, setBold] = useState(false);

  return (
    <>
      <ZestButton
        zest={{
          toggleOptions: {
            pressed: bold,
            onPressedChange: setBold,
            checkPosition: 'end',
          },
        }}
      >
        Bold
      </ZestButton>
      <p>Bold is {bold ? 'on' : 'off'}</p>
    </>
  );
};
```

What you should see: the text under the button changes between "Bold is off" and "Bold is on" as you click, and the button's check mark appears on the right of the label when on.

### A toggle with an icon

The check mark has its own fixed-size slot at the start or the end, so it does not replace your icons. Put the check on the side opposite your icon if you want the icon and check apart.

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';
import { FaBell } from 'react-icons/fa';

export const NotifyToggle = () => (
  <ZestButton
    zest={{
      visualOptions: { iconRight: <FaBell /> },
      toggleOptions: { defaultPressed: true, checkPosition: 'start' },
    }}
  >
    Notify me
  </ZestButton>
);
```

What you should see: the button starts on, with a check mark before the label and the bell after it.

### A toggle with a semantic type

A semantic type supplies an icon and a starting look; the toggle adds the on/off state.
Put the type and the toggle in the same `zest` object:

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';

export const FavouriteToggle = () => (
  <ZestButton
    aria-label="Favourite"
    zest={{
      semanticType: 'favorite',
      toggleOptions: { defaultPressed: false, checkPosition: 'end' },
    }}
  />
);
```

What you should see: a button with the heart icon and no visible text. When on, it looks
pressed and a check mark appears at the end, after the heart. The check mark does not
replace the heart. See
[Using ZestButton semantic types](../zest-button-semantic-types/guide.md) for the type
names and their default looks.

## Scenarios

### Works with every style, variant and size

The pressed look is defined for the `solid`, `outline`, `text` and `dashed` button styles. It keeps the colour of the `standard`, `success` and `danger` variants. Sizes `sm`, `md` and `lg` all work.

### Works with a confirmation step

If you also set `confirmOptions`, the **first click only starts the confirmation**. The toggle flips on the **confirming** click, not before.

### Works with an async `onClick`

If the button has an `onClick` and `busyOptions.handleInternally` is on, the toggle flips on the click, then the busy spinner runs as usual. While the button is busy it is disabled, so extra clicks are ignored.

### Works with the keyboard-focus streak

A toggle can opt into the [focus streak](../zest-button-focus-sheen/guide.md) with `focusSheen: true`. When it plays, the toggle keeps its pressed look and its focus ring; the streak is an extra cue only. A toggle that does not opt in is unchanged.

```tsx
<ZestButton zest={{ toggleOptions: {}, focusSheen: true }}>Bold</ZestButton>
```

### Setting shared defaults

`toggleOptions` merges with the rest of your `ZestButtonConfigProvider` settings, like other `zest` options. Setting it for a type also makes that type a toggle. For example, to make every `favorite` button a toggle with the check mark at the end:

```tsx
<ZestButtonConfigProvider
  config={{ semanticTypeDefaults: { favorite: { toggleOptions: { checkPosition: 'end' } } } }}
>
  {/* your app */}
</ZestButtonConfigProvider>
```

See [Configuration](../../../documentation/configuration.md) for the provider.

## Edge cases

- **Disabled buttons.** A disabled toggle ignores clicks. If it is on, it keeps the dimmed look and still reads as pressed.
- **Holding Enter.** Holding Enter makes browsers repeat the click. The toggle ignores the repeats, so one press flips it once.
- **Rapid clicks.** Back-to-back clicks each flip the value once, even before React has re-rendered.
- **Both `pressed` and `defaultPressed`.** `pressed` wins and `defaultPressed` is ignored.
- **Bad `checkPosition`.** An unknown value (for example from untyped code) is treated as `'start'`; the check mark is never hidden because of it.
- **Reduced motion.** The stylesheet contains a `prefers-reduced-motion` rule for the toggle animations. I read the rule but did not run it in a browser.
- **Split buttons.** In the code, the toggle settings apply only to the main button, not to the dropdown arrow or its menu items.

## Pitfalls

- **Controlled but never updated.** If you pass `pressed` and do not change it in `onPressedChange`, the button will never appear to change. Either store the value and update it, or use `defaultPressed` instead.
- **Putting `toggleOptions` in `defaultProps`.** In the provider's `defaultProps` it turns **every** button in scope into a toggle. Set it on `semanticTypeDefaults` or on single buttons instead.
- **Failed `onClick`.** If your `onClick` throws or rejects, the toggle **keeps** its flipped value. If your app needs it to flip back, control `pressed` yourself and set it as you choose.
- **Your own `aria-pressed`.** The toggle sets `aria-pressed` itself, after your other props, so a value you pass directly on the button is replaced.
- **Do not use `role="switch"`.** The component stays a plain `button`. Do not add `role="switch"`; the `aria-pressed` value is what screen readers use.

## Best practices

- Give the button a label that names the *thing* ("Bold", "Notify me") rather than the action ("Turn on bold"). The pressed state already says whether it is on.
- Use a toggle for an on/off setting that takes effect right away. For a one-shot action, use a normal button.
- Use `pressed` plus `onPressedChange` when other parts of your screen depend on the value.

## Not included

These are outside this feature: a sliding switch control, groups where only one toggle can be on, custom on/off icons, and saving the value between visits. Also note: the check mark animates in; I found no separate exit animation in the code, so it disappears when the toggle turns off.

## See also

- [Feature record (BRS) for the toggle](./BRS.md)
- [The opt-in keyboard-focus streak](../zest-button-focus-sheen/guide.md) — the extra
  keyboard-focus cue a toggle can opt into.
- [Styling toggle buttons from one place](../zest-button-toggle-style/guide.md) — set the
  look of every toggle centrally.
- [Using ZestButton semantic types](../zest-button-semantic-types/guide.md) — combine a
  toggle with a built-in icon and colour.
- [Built-in semantic type reference](../zest-button-semantic-types/type-reference.md) —
  the 47 type names.
- [API reference: `ToggleOptions`](../../../documentation/api.md#toggleoptions)
- [Cookbook: Recipe 6, an on/off toggle button](../../../documentation/examples.md#recipe-6-an-onoff-toggle-button)
- [Configuration and provider defaults](../../../documentation/configuration.md)
- [Breaking changes notes](../../../documentation/breaking-changes.md)
