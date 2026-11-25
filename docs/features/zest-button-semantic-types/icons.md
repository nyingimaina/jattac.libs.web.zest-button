---
title: Using ZestIcon and the standard icons
covers: UI/ZestIcon.tsx, UI/zestIcons.tsx, Styles/ZestButton.module.css, UI/index.ts
covers-hash: 6b263f1ed98b6c762832
---

# Using ZestIcon and the standard icons

## Overview

The library draws its own icons. There are **35 different drawings**, shared by the
**47 built-in semantic type names**, and you can use the same drawings anywhere in your
app through the public `ZestIcon` component.

Every drawing is an **inline SVG**: the picture is written directly into the page instead
of being loaded from an image file or an icon font. That means:

- it takes its colour from the surrounding text (`currentColor`), so it works in light,
  dark and custom themes without extra work;
- it stays sharp at any size;
- it needs no network request and no extra icon package;
- it is one consistent style: a 24 by 24 unit grid, 2-unit stroke, no fill and rounded
  line ends and corners.

The built-in semantic types use these drawings automatically. `ZestIcon` is for the other
places you need an icon: toolbars, menu items, status rows, or a button whose icon you
want to choose yourself.

```tsx
import { ZestIcon } from 'jattac.libs.web.zest-button';

<ZestIcon name="search" />
```

This page is for developers using the package. It covers the public component and its
props. The list of names is in the
[built-in type reference](./type-reference.md); how a type applies an icon to a button is
in [Using ZestButton semantic types](./guide.md).

## Before you start

- You need `jattac.libs.web.zest-button` version **1.7.0 or later**; `ZestIcon` is new in
  that version.
- Import it as a named export. The default export is still `ZestButton`:

```tsx
import ZestButton, { ZestIcon } from 'jattac.libs.web.zest-button';
```

- `ZestIconProps` and `ZestIconSize` are exported as types if you need them.
- The icon names are the same as the semantic type names. You do not need a separate
  icon-name list to get started.
- The library still uses Font Awesome for the busy spinner, so keep the `react-icons`
  peer dependency installed. `ZestIcon` does not use Font Awesome.

## Step by step

1. Choose a name from the [built-in type reference](./type-reference.md). For example,
   `filter`.
2. Render `ZestIcon` with that name:

   ```tsx
   <ZestIcon name="filter" />
   ```

3. If you need a different size, add `size`:

   ```tsx
   <ZestIcon name="filter" size="lg" />
   ```

   `size` accepts `'sm'`, `'md'`, `'lg'`, a number (treated as `rem`) or any valid CSS
   length string.

4. Put the icon where you need it. Inside a button, pass it through `iconLeft` or
   `iconRight`:

   ```tsx
   <ZestButton zest={{ visualOptions: { iconLeft: <ZestIcon name="filter" /> } }}>
     Filter
   </ZestButton>
   ```

5. If the icon is the only content of a control, give the control an accessible name.
   The icon is hidden from screen readers, so it cannot provide that name:

   ```tsx
   <ZestButton aria-label="Filter" zest={{ visualOptions: { iconLeft: <ZestIcon name="filter" /> } }} />
   ```

6. Run the app. You should see the icon at the current text size and colour. It needs no
   wrapper, stylesheet or provider.

### The props

| Prop | Type | Default | What it does |
| :--- | :--- | :--- | :--- |
| `name` | `string` | required | Which built-in drawing to show. Unknown names render nothing. |
| `size` | `'sm' \| 'md' \| 'lg' \| number \| string` | `1em` | `sm` = 1rem, `md` = 1.25rem, `lg` = 1.5rem. A number is used as `rem`; a string is used as the CSS `font-size` (for example `'2rem'`). |
| `className` | `string` | `''` | Extra class name added to the wrapper `<span>`, for your own styling. |

The SVG itself is always `width="1em"` and `height="1em"`, so it follows the wrapper's
font size. The wrapper is an inline-flex `<span>` with `line-height: 1`.

## Examples

### Sizes side by side

```tsx
import React from 'react';
import { ZestIcon } from 'jattac.libs.web.zest-button';

export const IconSizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <ZestIcon name="settings" size="sm" />
    <ZestIcon name="settings" size="md" />
    <ZestIcon name="settings" size="lg" />
    <ZestIcon name="settings" size={2} />
    <ZestIcon name="settings" size="2.5rem" />
  </div>
);
```

What you should see: the same three-slider settings drawing five times, growing from
1rem to 2.5rem. The stroke thickness grows with the drawing; it stays proportional.

### Inside a button, next to a label

```tsx
import React from 'react';
import ZestButton, { ZestIcon } from 'jattac.libs.web.zest-button';

export const DownloadButton = ({ url }: { url: string }) => (
  <ZestButton
    zest={{ visualOptions: { iconLeft: <ZestIcon name="download" /> } }}
    onClick={() => window.open(url, '_blank')}
  >
    Download report
  </ZestButton>
);
```

What you should see: a normal button with the arrow-into-a-tray drawing before the label,
with the same spacing the built-in types use.

### An icon-only button with a visible accessible name

```tsx
import React from 'react';
import ZestButton, { ZestIcon } from 'jattac.libs.web.zest-button';

export const MoreButton = ({ onClick }: { onClick: () => void }) => (
  <ZestButton
    aria-label="More actions"
    onClick={onClick}
    zest={{ visualOptions: { iconLeft: <ZestIcon name="more" /> } }}
  />
);
```

What you should see: a button containing only the three-dots drawing. A screen reader
announces "More actions, button". If you removed `aria-label`, the control would have no
name at all, because the SVG is decorative.

### Colouring an icon with your own class

```tsx
import React from 'react';
import { ZestIcon } from 'jattac.libs.web.zest-button';
import styles from './StatusRow.module.css';

export const StatusRow = () => (
  <p>
    <ZestIcon name="warning" className={styles.warningIcon} /> Storage is almost full
  </p>
);
```

```css
/* StatusRow.module.css */
.warningIcon {
  color: #b42318;
}
```

What you should see: the warning triangle in your red, at the same size as the sentence.
The drawing itself has no fill and uses `currentColor`, so a `color` on the wrapper (or on
any ancestor) changes every stroke.

### An icon in a menu item

```tsx
import React from 'react';
import ZestButton, { ZestIcon } from 'jattac.libs.web.zest-button';

export const ExportMenu = () => (
  <ZestButton
    zest={{
      semanticType: 'export',
      dropdownOptions: [
        {
          label: 'Download JSON',
          icon: <ZestIcon name="download" />,
          onClick: () => {},
        },
      ],
    }}
  >
    Export
  </ZestButton>
);
```

What you should see: an "Export" button with a download icon, plus a chevron. The menu
item repeats the same download drawing before its label.

## Scenarios

### Matching the button around it

The icons use the text colour, so they automatically match the `standard`, `success` and
`danger` variants and the light/dark theme. You do not pass a colour.

### Sizing relative to text

When `size` is omitted, the wrapper uses `font-size: 1em`. The SVG then fills one line of
the current text. Inside a `ZestButton`, that is the button's font size. This is why a
built-in type's icon lines up with its label without a size being set anywhere.

### Using the same drawing in several places

The drawings are created once and shared. Rendering `<ZestIcon name="search" />` in ten
places is safe; React handles the same element description in multiple positions. The
component does not clone or mutate the drawing.

### Server rendering

The icon is plain markup with no effects, state or browser APIs, so it renders during
server-side rendering like any other SVG. There is nothing to hydrate beyond React's
normal work.

## Edge cases

- **Unknown name.** `getZestIconElement` returns `null`, and `ZestIcon` returns `null`.
  Nothing is rendered, no placeholder and no error. This includes names inherited from
  `Object.prototype` such as `toString`, because the lookup checks the map's own keys.
- **A typo is silent.** `name` is typed as `string`, not as a union of the 47 names, so
  TypeScript accepts a misspelling and the browser shows nothing. Check the
  [type reference](./type-reference.md) or compare with a rendered button.
- **Case matters.** `Search` is not the same as `search`; the former renders nothing.
- **An invalid `size` string.** A value such as `"huge"` is not a valid CSS `font-size`.
  The browser ignores it and the icon keeps the inherited size. Use a name, a number, or
  a length such as `"1.5rem"`.
- **A zero or negative number.** `size={0}` produces `font-size: 0rem`, so the icon
  disappears. Numbers are treated as `rem`, not pixels.
- **A number is not a pixel value.** `size={24}` means `24rem`, not 24 pixels. For 24
  pixels, use `size="24px"`.
- **`className` lands on the wrapper, not the `<svg>`.** Style the wrapper (for example
  `color` or `display`), or target the `svg` inside it from your own stylesheet.
- **The icon component is always decorative.** It sets `aria-hidden="true"` and
  `focusable="false"` on the SVG. You cannot make the drawing itself the accessible name;
  name the control instead.
- **Only `ZestIcon` is public.** `BuiltInIconName`, `ZEST_ICON_ELEMENTS`,
  `ZEST_ICON_NAMES` and `getZestIconElement` live in `UI/zestIcons.tsx` but are not
  exported from the package root (`UI/index.ts`). Import from the package, not from a
  deep file path.

## Pitfalls

- **Using an icon-only control without a name.** Because the icon is hidden from screen
  readers, the control becomes unnamed. Add `aria-label` to the button, or a visually
  hidden text label.
- **Copying Font Awesome class names.** The old built-in icons used `<i>`/`<svg>` markup
  with Font Awesome classes. `ZestIcon` output is plain `<svg>`; those selectors and
  classes do nothing to it.
- **Choosing a random name and assuming it exists.** Not every word is drawn. `edit` and
  `update` exist; `pencil` does not. Use the reference list.
- **Reaching for `ZestIcon` when a semantic type already fits.** For a button whose action
  is one of the 47, `zest={{ semanticType: 'search' }}` also gives you the colour variant,
  style and behaviour. `ZestIcon` only gives you the drawing.
- **Expecting the icon to announce itself.** It never does. This is deliberate: a
  decorative drawing should not be read twice next to a label.
- **Importing `ZEST_ICON_NAMES` from the package root.** It is internal. If you need a
  list in your app, build one from the names in the
  [reference](./type-reference.md), or rely on the semantic types.

## Best practices

- Use a semantic type first; use `ZestIcon` when you need the drawing outside a
  `ZestButton`, or when you intentionally replace a type's icon.
- Keep the icon's colour inherited. Passing a colour through CSS keeps light and dark
  themes consistent.
- Pick a size token (`sm`, `md`, `lg`) for repeated UI, and a length string for a one-off
  exact size.
- Pair every icon with text, or give the control an `aria-label`.
- Reuse these drawings instead of mixing icon packs in one toolbar; the shared grid and
  stroke are what make the interface look made together.
- When you replace a built-in type's icon, pass the complete replacement:
  `visualOptions: { iconLeft: <ZestIcon name="upload" /> }`. Your value wins over the
  built-in icon.

## See also

- [Built-in semantic type reference](./type-reference.md) — the 47 names and the icon
  each one uses.
- [Using ZestButton semantic types](./guide.md) — let a type supply the icon and the rest.
- [Customising semantic types](./customising.md) — replace an icon locally or app-wide.
- [Using the ZestButton on/off toggle](../zest-button-toggle/guide.md) — the toggle check
  mark is a separate drawing from the type icon.
- [Styling toggle buttons from one place](../zest-button-toggle-style/guide.md) — the
  check mark's colour and size (`checkColor`, `checkSize`) are set there.
- [`ZestIcon` API reference](../../../documentation/api.md#zesticon) and
  [Recipe 7: reusing the standard icons](../../../documentation/examples.md#recipe-7-reusing-the-standard-icons)
  — the published documentation for consumers.
