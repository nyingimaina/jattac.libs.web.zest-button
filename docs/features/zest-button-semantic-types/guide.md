---
title: Using ZestButton semantic types
covers: UI/ZestButton.tsx, UI/semanticTypeButtonConfigDefaults.tsx, UI/hooks/useZestConfig.ts, UI/index.ts
covers-hash: f7c930dcbd8d24250fc6
---

# Using ZestButton semantic types

## Overview

A **semantic type** is a name for what a button *means*, such as `save`, `search` or
`delete`. Instead of describing the look of the button each time, you give it the name
of the action and the library supplies the matching icon, colour **variant** (the
standard, success or danger colour scheme), **button style** (solid, outline, text or
dashed) and sensible behaviour.

Version 1.7.0 ships **47 built-in semantic types**. The first 19 are the original set;
28 are new, covering searching, filtering, sorting, the clipboard, navigation, account
actions, status, approval and files. Every one of the 47 now uses an icon drawn by the
library itself as inline SVG, not a Font Awesome icon.

```tsx
import ZestButton from 'jattac.libs.web.zest-button';

<ZestButton zest={{ semanticType: 'save' }}>Save</ZestButton>
```

That one line gives you a green "success" button with a floppy-disk icon. You still
write the visible text yourself, so the label can be in your users' language.

This page is for developers who install the package and use `ZestButton` in an app. It
shows the common path. The full list of names is in the
[built-in type reference](./type-reference.md); the drawings are described in
[Using ZestIcon and the standard icons](./icons.md).

## Before you start

- Install the package with `npm i jattac.libs.web.zest-button`. React and React DOM 18
  or later are peer dependencies, as listed in the package's `README.md`.
- You need version **1.7.0 or later** for the full set of 47 types and the library-drawn
  icons.
- Import the button as the default export:

```tsx
import ZestButton from 'jattac.libs.web.zest-button';
```

- You do not need to import an icon pack for the built-in type icons. The library still
  uses Font Awesome for the busy **spinner** that appears while an async action runs, so
  the `react-icons` peer dependency listed in the package must still be installed.

## Step by step

1. Open the [built-in type reference](./type-reference.md) and pick the name that matches
   the action, for example `search`.
2. Put the name in the `semanticType` field **inside** the `zest` prop, and write a
   label as the button's child:

   ```tsx
   <ZestButton zest={{ semanticType: 'search' }}>Search</ZestButton>
   ```

3. Run the app. You should see the standard button style with a magnifying-glass icon on
   the left of the label. The icon takes the button's text colour, so it works in light
   and dark themes.
4. If you want a different look, add normal `zest` options next to `semanticType`. Your
   own values win over the type's defaults:

   ```tsx
   <ZestButton
     zest={{ semanticType: 'search', buttonStyle: 'outline', visualOptions: { size: 'sm' } }}
   >
     Search
   </ZestButton>
   ```

5. If several screens should share a change, set it once in
   `ZestButtonConfigProvider`. See
   [Customising semantic types](./customising.md) for the precedence rules and examples.

The type name is case-sensitive and must be one of the 47 names (or a name you added
yourself with TypeScript module augmentation).

## Examples

### A row of everyday actions

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';

export const RecordActions = () => (
  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
    <ZestButton zest={{ semanticType: 'back' }}>Back</ZestButton>
    <ZestButton zest={{ semanticType: 'search' }}>Search</ZestButton>
    <ZestButton zest={{ semanticType: 'filter' }}>Filter</ZestButton>
    <ZestButton zest={{ semanticType: 'save' }}>Save</ZestButton>
    <ZestButton zest={{ semanticType: 'delete' }}>Delete</ZestButton>
    <ZestButton zest={{ semanticType: 'next' }}>Next</ZestButton>
  </div>
);
```

What you should see: six buttons. `Back` has a left arrow on the left; `Search` a
magnifying glass; `Filter` a funnel; `Save` is green with a floppy disk; `Delete` is red
with a trash can and needs a confirming second click; `Next` has a right arrow on the
**right** of its label.

### An icon-only button

The label is optional, but an icon-only button still needs an accessible name. The icon
itself is hidden from screen readers, so use `aria-label` on the button:

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';

export const CopyButton = ({ onCopy }: { onCopy: () => void }) => (
  <ZestButton aria-label="Copy" onClick={onCopy} zest={{ semanticType: 'copy' }} />
);
```

What you should see: a button containing only the two-pages copy icon. A screen reader
announces "Copy, button" and does not try to describe the drawing.

### Async save with the built-in feedback

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';

const saveRecord = () => new Promise<void>((resolve) => setTimeout(resolve, 800));

export const SaveButton = () => (
  <ZestButton zest={{ semanticType: 'save' }} onClick={saveRecord}>
    Save
  </ZestButton>
);
```

What you should see: while the promise runs, the floppy-disk icon is replaced by a spinner
and the "Save" label stays in place, for at least 500 ms. Then the spinner becomes a check
mark for about two seconds. Because `save` is a success-variant type, the button stays
green throughout.

### Delete with the built-in confirmation

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';

export const DeleteButton = ({ onDelete }: { onDelete: () => void }) => (
  <ZestButton zest={{ semanticType: 'delete' }} onClick={onDelete}>
    Delete
  </ZestButton>
);
```

What you should see: the first click does **not** call `onDelete`. The button changes to
"Confirm Delete (5s)", counting down once a second. A second click within five seconds
runs the action. If the countdown reaches zero, the button returns to "Delete" and shows
the failure X and a short shake.

### A semantic type with toggle mode

Semantic types and the on/off toggle can be combined. The toggle's check mark has its own
slot, so it does not replace the type's icon:

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

What you should see: a heart icon and no label. When on, the button looks pressed and a
check mark appears after the icon. When off, the check mark disappears. See
[Using the ZestButton on/off toggle](../zest-button-toggle/guide.md) for the toggle
options.

## Scenarios

### Choosing between an alias and its twin

Some names are aliases that share the same drawing and defaults: `add`/`new`,
`save`/`submit`, `edit`/`update`, `delete`/`remove`, `cancel`/`close`, `view`/`details`,
`refresh`/`reload`. They are separate names, so overriding `delete` does not change
`remove`. Pick the word that reads best in your app and stay consistent.

### A different icon for one button

Any `zest` value you pass wins over the type's default. To keep the `save` colour and
behaviour but use another drawing:

```tsx
import ZestButton, { ZestIcon } from 'jattac.libs.web.zest-button';

<ZestButton
  zest={{
    semanticType: 'save',
    visualOptions: { iconLeft: <ZestIcon name="upload" /> },
  }}
>
  Publish
</ZestButton>;
```

What you should see: a green success button with an upload arrow instead of the floppy
disk. The busy and success behaviour is still the `save` behaviour.

### Setting a house style for one type

To make every `search` button in an area small and outlined, set a
`semanticTypeDefaults` entry in the provider:

```tsx
import React from 'react';
import ZestButton, { ZestButtonConfigProvider } from 'jattac.libs.web.zest-button';

export const App = () => (
  <ZestButtonConfigProvider
    config={{
      semanticTypeDefaults: {
        search: { buttonStyle: 'outline', visualOptions: { size: 'sm' } },
      },
    }}
  >
    <ZestButton zest={{ semanticType: 'search' }}>Search</ZestButton>
  </ZestButtonConfigProvider>
);
```

What you should see: the `search` button is small and outlined but keeps its
magnifying-glass icon. A single button can still override the house style by passing a
different value in its own `zest` prop.

### A split button whose menu items have types

Menu items accept the same `semanticType` field. The item's icon and behaviour come from
the type, independently of the main button:

```tsx
import ZestButton from 'jattac.libs.web.zest-button';

<ZestButton
  zest={{
    semanticType: 'export',
    dropdownOptions: [
      { label: 'Export as JSON', semanticType: 'download', onClick: () => {} },
      { label: 'Delete draft', semanticType: 'delete', onClick: () => {} },
    ],
  }}
>
  Export
</ZestButton>;
```

What you should see: an "Export" button with a download icon and a chevron. Open the
chevron to see "Export as JSON" with a download icon and "Delete draft" with a trash can;
the delete item asks for confirmation on its own. See the
[dropdown options feature record](../zest-button-dropdown-options/BRS.md) for the full
split-button behaviour.

## Edge cases

- **The type name is unknown at runtime.** If untyped JavaScript passes a name that is
  not built in and has no custom defaults, the button still renders your label, but no
  built-in icon, variant or behaviour is added. Only provider `defaultProps` and the
  button's own props apply. TypeScript prevents this in typed code.
- **You added a custom name but no defaults.** Module augmentation only teaches
  TypeScript the name. Until you provide defaults in `semanticTypeDefaults` or in the
  button's own `zest` prop, the button looks like a plain button. The
  [customising page](./customising.md) shows both halves.
- **You pass the same option twice.** The order, from strongest to weakest, is: the
  button's own `zest` prop, the provider's `semanticTypeDefaults`, the built-in type
  defaults, then the provider's `defaultProps`. This is checked in `useZestConfig.ts`.
- **`delete`, `remove` and `confirm` need two clicks.** Their built-in confirmation
  means the first click starts the countdown. Do not add your own "are you sure?" dialog
  on top unless you also replace the built-in confirmation.
- **`minBusyDurationMs` is not a delay before your code runs.** The click handler starts
  immediately; the spinner is simply held for at least that long after the promise
  settles. The built-in default is already 500 ms for every button; the types that list
  500 ms set it explicitly.
- **An icon-only button has no visible name.** Always add `aria-label` or another
  accessible name. The icon SVG is marked `aria-hidden="true"` and is not focusable.
- **The type's icon is on the right for `next`, `view` and `details`.** All other
  built-in types put it on the left. The reference table records the side for each type.

## Pitfalls

- **Putting `semanticType` at the top level.** It belongs inside `zest`:
  `zest={{ semanticType: 'save' }}`, not `semanticType="save"`. The top-level prop is not
  part of `ZestButtonProps`.
- **Expecting the library to supply the label.** A semantic type supplies visuals and
  behaviour, not text. Pass children (or an `aria-label` for an icon-only button).
- **CSS aimed at the old Font Awesome markup.** The built-in icons are now plain inline
  `<svg>` elements. Selectors for `.svg-inline--fa` or the old icon classes no longer
  match them, and screenshot tests will see different art. The busy spinner is still Font
  Awesome. See the
  [breaking changes notes](../../../documentation/breaking-changes.md#version-170).
- **Assuming `onClick` runs on the first click of `delete`.** It runs on the confirming
  click. The same is true for any button where you add `confirmOptions`.
- **Overriding an alias and expecting its twin to change.** `delete` and `remove` are
  independent names even though they share an icon. Set both if you want both changed.
- **Treating `warning` as a harmless info button.** It uses the danger variant on purpose.
  Use `info` for neutral information.

## Best practices

- Use a semantic type whenever the action is one of the 47 everyday actions. It keeps
  icons and colours consistent across your app for free.
- Write the label for your users ("Remove from basket"), not the internal type name.
- Put app-wide changes in `semanticTypeDefaults`, not in every button. Keep one-off
  differences on the single button.
- Keep destructive actions (`delete`, `remove`, `reject`) on their built-in confirmation,
  and make the label say what will be removed.
- For icon-only controls, always add `aria-label`, and consider a tooltip for sighted
  users.
- Use the [type reference](./type-reference.md) when choosing a name; do not guess an
  icon's direction or colour.

## See also

- [Built-in semantic type reference](./type-reference.md) — every name, its icon, colour
  variant, button style, icon side and default behaviour.
- [Using ZestIcon and the standard icons](./icons.md) — reuse the same drawings outside a
  button.
- [Customising semantic types and adding your own](./customising.md) — override one
  button, one type or the whole app.
- [Using the ZestButton on/off toggle](../zest-button-toggle/guide.md) — combine a toggle
  with a semantic type.
- [Dropdown options feature record](../zest-button-dropdown-options/BRS.md) — split
  buttons and menu items.
- [Shipped feature guide](../../../documentation/features.md#semantic-types) and
  [API reference](../../../documentation/api.md#semantictype) — the package documentation
  that is published with the library.
