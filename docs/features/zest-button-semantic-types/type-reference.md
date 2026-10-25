---
title: Built-in semantic type reference
covers: UI/semanticTypeButtonConfigDefaults.tsx, UI/zestIcons.tsx, UI/ZestButton.tsx, Styles/ZestButton.module.css, UI/hooks/useBusyState.ts, UI/hooks/useConfirmation.ts
covers-hash: 684f2a474bffbd1adad6
---

# Built-in semantic type reference

## Overview

This page lists all **47 built-in semantic types** in version 1.7.0. For each name it
shows the icon, the default colour **variant**, the default **button style**, which side
the icon sits on, and any extra behaviour the built-in default adds.

Every row comes from `UI/semanticTypeButtonConfigDefaults.tsx`; the drawings come from
`UI/zestIcons.tsx`. If this page and the code disagree, the code is right. Every default
can be overridden by your own `zest` props or by `ZestButtonConfigProvider`; see
[Customising semantic types](./customising.md).

The first 19 names (`add` through `confirm`) are the original set. The remaining 28 are
new in 1.7.0.

## Before you start

- You need `jattac.libs.web.zest-button` version **1.7.0 or later**.
- Use the names exactly as written: they are case-sensitive and lowercase.
- If you are new to semantic types, read
  [Using ZestButton semantic types](./guide.md) first. It explains how to put a name on a
  button and what the result looks like.
- "Pins 500 ms busy" means the built-in default sets `busyOptions.minBusyDurationMs` to
  500. Every button already uses 500 ms as the global default (see
  [Edge cases](#edge-cases)), so the pin only matters if you change the global default.

## The 47 built-in types

| Type | Icon | Variant | Button style | Icon side | Extra default behaviour |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `add` | Plus sign | `standard` | `solid` | left | — |
| `new` | Plus sign (same drawing as `add`) | `standard` | `solid` | left | — |
| `save` | Floppy disk | `success` | `solid` | left | Pins 500 ms busy; success check mark |
| `submit` | Floppy disk (same drawing as `save`) | `success` | `solid` | left | Pins 500 ms busy; success check mark |
| `edit` | Pencil | `standard` | `solid` | left | — |
| `update` | Pencil (same drawing as `edit`) | `standard` | `solid` | left | — |
| `delete` | Trash can | `danger` | `solid` | left | Confirm "Confirm Delete" (5 s); fail X and shake, reset after 400 ms |
| `remove` | Trash can (same drawing as `delete`) | `danger` | `solid` | left | Confirm "Confirm Remove" (5 s); fail X and shake, reset after 400 ms |
| `cancel` | Cross | `standard` | `outline` | left | — |
| `close` | Cross (same drawing as `cancel`) | `standard` | `outline` | left | — |
| `view` | Right arrow | `standard` | `text` | right | — |
| `details` | Right arrow (same drawing as `view`) | `standard` | `text` | right | — |
| `download` | Arrow into a tray | `standard` | `solid` | left | — |
| `upload` | Arrow out of a tray | `standard` | `solid` | left | — |
| `refresh` | Circular arrow | `standard` | `solid` | left | Pins 500 ms busy |
| `reload` | Circular arrow (same drawing as `refresh`) | `standard` | `solid` | left | Pins 500 ms busy |
| `print` | Printer | `standard` | `solid` | left | — |
| `share` | Three connected nodes | `standard` | `solid` | left | — |
| `confirm` | Check mark | `success` | `solid` | left | Confirm "Are you sure?" (5 s) |
| `search` | Magnifying glass | `standard` | `solid` | left | — |
| `filter` | Funnel | `standard` | `solid` | left | — |
| `sort` | Three lines, longest to shortest | `standard` | `solid` | left | — |
| `copy` | Two overlapping pages | `standard` | `solid` | left | — |
| `paste` | Clipboard | `standard` | `solid` | left | — |
| `back` | Left arrow | `standard` | `solid` | left | — |
| `next` | Right arrow | `standard` | `solid` | right | — |
| `home` | House | `standard` | `solid` | left | — |
| `menu` | Three horizontal lines | `standard` | `solid` | left | — |
| `more` | Three dots | `standard` | `solid` | left | — |
| `settings` | Three vertical sliders | `standard` | `solid` | left | — |
| `help` | Question mark in a circle | `standard` | `solid` | left | — |
| `info` | Letter i in a circle | `standard` | `solid` | left | — |
| `warning` | Triangle with an exclamation mark | `danger` | `solid` | left | — |
| `send` | Paper plane | `standard` | `solid` | left | Pins 500 ms busy |
| `login` | Arrow entering a door | `standard` | `solid` | left | Pins 500 ms busy |
| `logout` | Arrow leaving a door | `standard` | `solid` | left | Pins 500 ms busy |
| `undo` | Curved arrow pointing left | `standard` | `solid` | left | — |
| `redo` | Curved arrow pointing right | `standard` | `solid` | left | — |
| `approve` | Check mark | `success` | `solid` | left | Pins 500 ms busy |
| `reject` | Cross | `danger` | `solid` | left | Pins 500 ms busy |
| `favorite` | Heart | `standard` | `solid` | left | — |
| `attach` | Paperclip | `standard` | `solid` | left | — |
| `lock` | Closed padlock | `standard` | `solid` | left | — |
| `unlock` | Open padlock | `standard` | `solid` | left | — |
| `archive` | Archive box | `standard` | `solid` | left | Pins 500 ms busy |
| `export` | Arrow into a tray (same drawing as `download`) | `standard` | `solid` | left | Pins 500 ms busy |
| `import` | Arrow out of a tray (same drawing as `upload`) | `standard` | `solid` | left | Pins 500 ms busy |

## Examples

### Reading one row

The `delete` row says:

- **Icon:** trash can — the drawing is shared with `remove`.
- **Variant:** `danger` — red.
- **Button style:** `solid` — filled.
- **Icon side:** left.
- **Extra default behaviour:** confirmation, plus a failure X and shake that reset after
  400 ms.

So this button confirms before deleting, and shows its own error feedback if the action
fails:

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';

export const DeleteInvoice = ({ id }: { id: string }) => {
  const deleteInvoice = () => fetch(`/api/invoices/${id}`, { method: 'DELETE' });

  return (
    <ZestButton zest={{ semanticType: 'delete' }} onClick={deleteInvoice}>
      Delete invoice
    </ZestButton>
  );
};
```

What you should see: a red "Delete invoice" button with a trash can. The first click
changes the label to "Confirm Delete (5s)" and starts a countdown. The second click runs
the request; a failed request shows an X and a shake.

### Reading the icon side

Only `view`, `details` and `next` put the icon on the right. They describe moving forward
or looking at more, so the arrow follows the label. Everything else puts the icon on the
left:

```tsx
import ZestButton from 'jattac.libs.web.zest-button';

<>
  <ZestButton zest={{ semanticType: 'back' }}>Back</ZestButton>
  <ZestButton zest={{ semanticType: 'next' }}>Next</ZestButton>
</>;
```

What you should see: `Back` has its left arrow before the word; `Next` has its right
arrow after the word, so the two arrows sit on the outside edges.

## Edge cases

- **Aliases share art, not identity.** `add`/`new`, `save`/`submit`, `edit`/`update`,
  `delete`/`remove`, `cancel`/`close`, `view`/`details` and `refresh`/`reload` use the
  same drawing. Overriding one name does not override its twin.
- **`export` and `import` reuse the download and upload drawings.** Their names express
  intent, not different art. `export` also pins 500 ms busy; `import` does too.
- **`approve` and `confirm` both use a check mark but differ in behaviour.** `confirm`
  asks "Are you sure?" before running; `approve` runs immediately and pins 500 ms busy.
- **`reject`, `cancel` and `close` all use a cross.** `reject` is danger-coloured and pins
  500 ms busy; `cancel` and `close` are standard-coloured outline buttons with no extra
  behaviour.
- **Busy feedback for a right-icon type.** The spinner, success check and failure X take
  the left icon slot, so `view`, `details` and `next` keep their right arrow while the
  feedback is showing.
- **Busy feedback is already global.** `useBusyState` defaults to
  `handleInternally: true`, `preventRageClick: true`, `minBusyDurationMs: 500`,
  `showCheckmark: true`, `showFailIcon: true` and `autoResetAfterMs: 2000` for every
  button. A type that "pins 500 ms busy" sets the same value explicitly.
- **The confirmation countdown ends in a failure.** If the user waits out the five
  seconds, `useConfirmation` cancels the pending action and calls the button's fail path,
  so the X and shake appear. Nothing is sent.
- **A name outside this table is not a built-in type.** It may be one you added with
  module augmentation. Its look comes only from defaults you supply.

## Pitfalls

- **Choosing a name by its icon instead of its meaning.** `warning` is a danger button,
  and `info` is neutral. Pick the name that matches what the action does.
- **Assuming `next` uses a left icon like `back`.** `next` is one of the three right-icon
  types. If you add an `iconLeft`, you get two icons unless you also clear the right one:
  `visualOptions: { iconLeft: <ZestIcon name="send" />, iconRight: null }`.
- **Expecting the "pins 500 ms" note to mean other buttons have no busy state.** Busy
  feedback is on by default everywhere when an async `onClick` runs.
- **Forgetting the built-in confirmation.** `delete`, `remove` and `confirm` intercept the
  first click. If your handler must run on the first click, do not use those types, or
  override `confirmOptions` deliberately (see
  [Customising semantic types](./customising.md)).
- **Assuming a type sets a label.** It does not. Always pass children or an
  `aria-label`.
- **Quoting the names with capitals.** `Save` is not a valid built-in name; use `save`.

## Best practices

- Choose the type by the user's intent, then let the defaults do the styling. Override
  only what your design system genuinely needs.
- Use the alias whose wording fits your app ("Remove" vs "Delete"), and use it
  consistently.
- Keep destructive actions (`delete`, `remove`, `reject`) on the danger variant, and keep
  the built-in confirmation on `delete`, `remove` and `confirm` unless the action is
  trivially undoable.
- Use `next`/`back` for step navigation and `view`/`details` for "open the record"; they
  share the same arrow art but read differently in code.
- Check this table after upgrading: the names are stable, but the icon art changed in
  1.7.0.

## See also

- [Using ZestButton semantic types](./guide.md) — how to apply a type and what you see.
- [Using ZestIcon and the standard icons](./icons.md) — the drawings and the public
  `ZestIcon` component.
- [Customising semantic types](./customising.md) — override the table's defaults.
- [Using the ZestButton on/off toggle](../zest-button-toggle/guide.md) — a toggle's check
  mark and the type icon in one button.
- [Shipped type table](../../../documentation/features.md#built-in-semantic-types-reference)
  and [API reference](../../../documentation/api.md#semantictype) — the published
  documentation for consumers.
