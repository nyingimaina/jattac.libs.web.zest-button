---
title: Styling toggle buttons from one place
covers: UI/toggleStyle/, UI/hooks/useToggleStyle.ts, UI/ZestButtonConfigContext.ts, UI/ZestButtonConfigProvider.tsx, UI/ZestButton.tsx, UI/index.ts
covers-hash: f52e1bbfd417b809c6ad
---

# Styling toggle buttons from one place

## Overview

A **toggle** is a `ZestButton` that stays pressed when it is on, like a Bold button in an editor (see [Using the on/off toggle](../zest-button-toggle/guide.md)). Since version 1.8.0 you can set the exact look of every toggle in your app in **one place**: the `styles.toggle` setting of `ZestButtonConfigProvider`. Configure once, apply everywhere.

You can set **any CSS property** (colours, sizes, borders, shadows, transitions and so on), separately for:

- the **off** and **on** states,
- **hover**, **focus**, **disabled** and **busy**,
- the **light** and **dark** themes,
- each button **size** (`sm`, `md`, `lg`) and **variant** (`standard`, `success`, `danger`).

Values are used exactly as you write them, so `"14px"` stays `14px`.

This page is for developers who use `ZestButton` toggles. The setting is additive: an app that does not pass `styles` looks exactly as before. Only toggles are styled today. Plain, danger and outline buttons are not touched by `styles.toggle`. The setting sits under `styles.toggle` so other button kinds can get their own section later; the code has no other section yet.

## Before you start

- Install version 1.8.0 or newer: `npm i jattac.libs.web.zest-button`.
- The buttons you want styled must be toggles, meaning they have `zest.toggleOptions` (an empty object `{}` is enough). Buttons without it ignore all of this.
- Import:

```tsx
import ZestButton, { ZestButtonConfigProvider } from 'jattac.libs.web.zest-button';
```

The types `ZestToggleStyle`, `ZestToggleStyleLayer`, `ZestToggleStateLooks`, `ZestToggleStyleLook`, `ZestToggleStyleValue` and `ZestButtonStyles` are exported from the same package.

## Step by step

1. Wrap your app (or one section) in `ZestButtonConfigProvider`.
2. Pass `config={{ styles: { toggle: { ... } } }}`.
3. Inside `toggle`, add a **look** for each state you care about. A look is an object of CSS property names and values, for example `{ background: '#0a7', color: '#fff' }`.
4. Render your toggles with `zest={{ toggleOptions: {} }}`.

Define the config object outside your component, or memoise it. A new object on every render makes the styles recompute each time.

### The states

| Key | When it applies |
|-----|-----------------|
| `off` | The toggle is off (`aria-pressed="false"`). |
| `on` | The toggle is on (`aria-pressed="true"`). |
| `hoverOff` / `hoverOn` | The pointer is over an enabled toggle that is off / on. Only on devices that can really hover, so a tap cannot leave it stuck. |
| `focus` | Keyboard focus is on the toggle (`:focus-visible`). No focus rule is made unless you give this. |
| `disabled` | The toggle is disabled. |
| `busy` | The toggle is busy (`aria-busy="true"`). |

`disabled` and `busy` rules come after the others, so they win over `on`/`off` and hover.

### Two special properties

`checkColor` and `checkSize` do not style the button. They style the **check mark**: `checkColor` sets its colour, and `checkSize` sets its width and height.

### Property names

Use camelCase (`borderRadius`) or kebab-case (`'border-radius'`). They mean the same thing and are written once. Custom properties such as `'--my-gap'` are accepted too.

### How layers combine (precedence)

From weakest to strongest:

1. The built-in look.
2. `toggle` itself (all toggles).
3. `sizes[size]`.
4. `variants[variant]`.
5. The per-button `zest.toggleOptions.style`.

Properties from different layers **merge**. A size that sets `fontSize` and a variant that sets `background` are both applied. If two layers set the same property, the stronger layer wins. Inside one layer, `light` / `dark` beats the same state without a theme.

## Examples

### One look for the whole app

```tsx
import React from 'react';
import ZestButton, { ZestButtonConfigProvider } from 'jattac.libs.web.zest-button';

const config = {
  styles: {
    toggle: {
      off: { background: 'transparent', borderRadius: '0.5rem' },
      on: { background: '#0a7', color: '#fff', checkColor: '#fff' },
      hoverOn: { background: '#086' },
      dark: { on: { background: '#0c9' } },
      sizes: { lg: { off: { fontSize: '1.25rem' } } },
      variants: { danger: { on: { background: '#c00' } } },
    },
  },
};

export const App = () => (
  <ZestButtonConfigProvider config={config}>
    <ZestButton zest={{ toggleOptions: {} }}>Bold</ZestButton>
    <ZestButton zest={{ toggleOptions: {}, visualOptions: { variant: 'danger' } }}>Mute</ZestButton>
  </ZestButtonConfigProvider>
);
```

What you should see: "Bold" is transparent with rounded corners while off. When clicked it turns green with white text and a white check mark, and a darker green when a mouse hovers it. "Mute" turns red when on. In a dark theme the on colour is a lighter green.

### Pixel-exact sizes and a focus ring

```tsx
const config = {
  styles: {
    toggle: {
      off: { height: '36px', paddingInline: '14px', fontSize: '14px' },
      on: { checkSize: '14px', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)' },
      focus: { outline: '2px solid var(--my-accent)', outlineOffset: '2px' },
    },
  },
};
```

What you should see: every toggle is 36px high, the check mark is 14px, and a keyboard user sees your ring when tabbing to it. Define `--my-accent` in your own CSS.

### Override one button

```tsx
<ZestButton zest={{ toggleOptions: { style: { on: { background: 'rebeccapurple' } } } }}>
  Pin
</ZestButton>
```

What you should see: when on, only this button is purple. Its other properties still come from the provider. This also works with no provider at all.

## Scenarios

- **Light and dark.** `light` and `dark` apply only in that theme. With the button's `theme` left at `'system'`, the look follows the operating system. A colour set only under `light` leaves the dark theme at the built-in look.
- **Many toggles.** Toggles with the same resulting look share one set of rules in a single `<style>` element in the page head. The rules are removed when the last toggle using them goes away.
- **Nested providers.** The inner provider's `styles` replace the outer one's. Anything the inner one leaves out falls back to the built-in look, not to the outer provider. I confirmed this from how the context value is passed; I did not run a nested example.

## Edge cases

- **Unsafe or invalid values are dropped one by one.** A value is ignored if it contains `;`, `{`, `}`, `<`, `>`, a backslash, a comment, `url(`, `expression(`, `@import`, `javascript:`, a control character, unbalanced brackets or quotes, or is over 500 characters. Other properties in the same look still apply. Numbers must be finite. A property name that is not letters, digits and hyphens is dropped.
- **Unknown names.** A property the browser does not know is passed through and the browser ignores it. Unknown size or variant names under `sizes` / `variants` are ignored.
- **Bad input never throws.** If the settings cannot be read, the toggle keeps its built-in look.
- **No hover rule for disabled toggles.** Hover looks exclude disabled buttons.
- **Server rendering.** The rules are added in the browser only, so a server-rendered page shows the built-in look until the browser runs.

## Pitfalls

- **Forgetting `toggleOptions`.** Without it the button is not a toggle and is never styled by this.
- **Using `url()`.** It is rejected on purpose, so a `url(...)` background will not apply. Use a colour or gradient, or style that part in your own CSS.
- **Expecting plain buttons to change.** Only toggles are styled in this release.
- **Expecting an outer provider to fill gaps.** See nested providers above.
- **Telling on from off by colour alone.** The check mark and `aria-pressed` are not changed by styling, but keep your on and off looks different in more than hue.

## Best practices

- Put app-wide colours in CSS variables and refer to them (`var(--my-accent)`) so toggles follow your theme.
- Set the common look at the top level, then use `sizes` and `variants` only for differences.
- Use the per-button `style` sparingly, for one-off exceptions.
- Set a `focus` look that is clearly visible on every background.

## See also

- [Using the ZestButton on/off toggle](../zest-button-toggle/guide.md)
- [Using ZestButton semantic types](../zest-button-semantic-types/guide.md)
- [Configuration: Toggle Styling](../../../documentation/configuration.md#toggle-styling)
- [Breaking changes: version 1.8.0](../../../documentation/breaking-changes.md)
