---
title: Customising semantic types and adding your own
covers: UI/hooks/useZestConfig.ts, UI/ZestButton.tsx, UI/ZestButtonConfigContext.ts, UI/ZestButtonConfigProvider.tsx, UI/semanticTypeButtonConfigDefaults.tsx
covers-hash: 7418ba3da38a1e346a07
---

# Customising semantic types and adding your own

## Overview

A **semantic type** gives a button a starting point. You can change that starting point
in four places, from broadest to narrowest:

1. **Global defaults** in `ZestButtonConfigProvider`'s `defaultProps` apply to every
   button in the provider.
2. **Built-in type defaults** from the library apply when a button names a built-in type
   such as `save`.
3. **Your type defaults** in the provider's `semanticTypeDefaults` apply to one type,
   everywhere in the provider. They can change a built-in type or define a new one.
4. **The button's own `zest` prop** applies to that one button and wins over everything
   else.

This is the order used by `useZestConfig.ts`. It lets you set a house style once, change
one type for a whole feature, and still make a single button different.

You can also add your own type names with TypeScript **module augmentation** (teaching
TypeScript about a new string) and then give those names defaults in the provider. Both
halves are needed: the augmentation gives you type-checking and autocompletion, the
provider entry gives the button its look and behaviour.

This page is for developers who already use `ZestButton` and want to standardise or
extend it. For the built-in names, see the
[built-in type reference](./type-reference.md). For the first steps with a type, see
[Using ZestButton semantic types](./guide.md).

## Before you start

- You need `jattac.libs.web.zest-button` version **1.7.0 or later**.
- `ZestButtonConfigProvider` comes from the same package:

```tsx
import ZestButton, { ZestButtonConfigProvider, ZestIcon } from 'jattac.libs.web.zest-button';
```

- The provider must wrap the part of your app that renders the buttons. It takes one
  `config` prop and its `children`.
- For a new name, put the module augmentation in a `.d.ts` file that your `tsconfig.json`
  includes (for example `src/zest.d.ts`).
- The provider's `config` is read through React context. A button outside the provider
  still works; it simply gets no provider defaults.

## Step by step

### Change one button

Keep the semantic type and add the options you want next to it. Local values win:

```tsx
<ZestButton
  zest={{
    semanticType: 'delete',
    buttonStyle: 'outline',
    visualOptions: { size: 'sm' },
  }}
>
  Delete draft
</ZestButton>
```

The button is still a danger-coloured, confirming `delete` button, but it is now small
and outlined.

### Change one type everywhere

Add a `semanticTypeDefaults` entry to the provider. The key is the type name; the value
is any partial `zest` configuration:

```tsx
<ZestButtonConfigProvider
  config={{
    semanticTypeDefaults: {
      search: { buttonStyle: 'outline', visualOptions: { size: 'sm' } },
    },
  }}
>
  {/* every search button in here is small and outlined */}
</ZestButtonConfigProvider>
```

This applies after the built-in defaults, so it can override the library's variant, style,
icon or behaviour for that type.

### Change every button

Use `defaultProps` for settings that should be the baseline for the whole area. Remember
that built-in type defaults and provider type defaults still win over it:

```tsx
const config = {
  defaultProps: {
    visualOptions: { size: 'sm' },
    buttonStyle: 'outline',
  },
};

<ZestButtonConfigProvider config={config}>
  <ZestButton zest={{ semanticType: 'save' }}>Save</ZestButton>
</ZestButtonConfigProvider>;
```

The save button is small, but its built-in `success` variant is kept, and a `cancel`
button would keep its built-in `outline` style because type defaults come later.

### Add a custom type

1. Teach TypeScript the name. The keys of `CustomZestSemanticTypes` become valid
   `semanticType` values:

   ```ts
   // src/zest.d.ts
   import 'jattac.libs.web.zest-button';

   declare module 'jattac.libs.web.zest-button' {
     export interface CustomZestSemanticTypes {
       publish: 'publish';
       pin: 'pin';
     }
   }
   ```

2. Give the new name defaults in the provider. Without this step the name type-checks,
   but the button has no icon or special look:

   ```tsx
   import React from 'react';
   import ZestButton, {
     ZestButtonConfigProvider,
     ZestIcon,
   } from 'jattac.libs.web.zest-button';

   export const App = () => (
     <ZestButtonConfigProvider
       config={{
         semanticTypeDefaults: {
           publish: {
             visualOptions: {
               variant: 'success',
               iconLeft: <ZestIcon name="upload" />,
             },
             confirmOptions: { displayLabel: 'Publish now?', timeoutSecs: 5 },
           },
         },
       }}
     >
       <ZestButton zest={{ semanticType: 'publish' }} onClick={() => {}}>
         Publish
       </ZestButton>
     </ZestButtonConfigProvider>
   );
   ```

   What you should see: a green "Publish" button with an upload arrow. The first click
   changes the label to "Publish now? (5s)"; the second click runs `onClick`.

3. Use the name anywhere inside the provider. Local options can still override it.

## Examples

### A house style for a built-in type

```tsx
import React from 'react';
import ZestButton, { ZestButtonConfigProvider } from 'jattac.libs.web.zest-button';

const config = {
  semanticTypeDefaults: {
    save: { buttonStyle: 'outline', visualOptions: { size: 'sm' } },
    delete: { visualOptions: { variant: 'standard' } },
  },
};

export const Editor = () => (
  <ZestButtonConfigProvider config={config}>
    <ZestButton zest={{ semanticType: 'save' }}>Save</ZestButton>
    <ZestButton zest={{ semanticType: 'delete' }}>Delete</ZestButton>
  </ZestButtonConfigProvider>
);
```

What you should see: a small outlined "Save" button that keeps its floppy-disk icon and
success behaviour, and a "Delete" button that is no longer red but still asks for
confirmation.

### One exception to the house style

```tsx
<ZestButtonConfigProvider config={{ semanticTypeDefaults: { search: { buttonStyle: 'outline' } } }}>
  <ZestButton zest={{ semanticType: 'search' }}>Search</ZestButton>
  <ZestButton zest={{ semanticType: 'search', buttonStyle: 'solid' }}>
    Search everything
  </ZestButton>
</ZestButtonConfigProvider>
```

What you should see: the first search button is outlined; the second is solid because its
own `zest` value is applied last.

### Replace a built-in icon for the whole app

```tsx
import React from 'react';
import ZestButton, {
  ZestButtonConfigProvider,
  ZestIcon,
} from 'jattac.libs.web.zest-button';

const config = {
  semanticTypeDefaults: {
    save: {
      visualOptions: { iconLeft: <ZestIcon name="upload" /> },
    },
  },
};

export const App = () => (
  <ZestButtonConfigProvider config={config}>
    <ZestButton zest={{ semanticType: 'save' }}>Publish</ZestButton>
  </ZestButtonConfigProvider>
);
```

What you should see: the `save` button keeps its green success variant, 500 ms busy time
and success check, but shows an upload arrow instead of a floppy disk. The original
built-in icon is not rendered as well.

### Remove an icon without changing anything else

Pass `null` for the icon slot. A local `null` wins over the built-in element:

```tsx
<ZestButton zest={{ semanticType: 'search', visualOptions: { iconLeft: null } }}>
  Search
</ZestButton>
```

What you should see: a standard search button with no icon at all.

### Custom type that reuses the standard art

```tsx
// src/zest.d.ts
import 'jattac.libs.web.zest-button';

declare module 'jattac.libs.web.zest-button' {
  export interface CustomZestSemanticTypes {
    duplicate: 'duplicate';
  }
}
```

```tsx
import React from 'react';
import ZestButton, {
  ZestButtonConfigProvider,
  ZestIcon,
} from 'jattac.libs.web.zest-button';

const config = {
  semanticTypeDefaults: {
    duplicate: {
      visualOptions: { iconLeft: <ZestIcon name="copy" /> },
    },
  },
};

export const RowActions = () => (
  <ZestButtonConfigProvider config={config}>
    <ZestButton zest={{ semanticType: 'duplicate' }} onClick={() => {}}>
      Duplicate
    </ZestButton>
  </ZestButtonConfigProvider>
);
```

What you should see: a plain standard button with the copy icon. No new SVG was written;
the app reused the library's drawing.

## Scenarios

### A provider-wide style with per-feature differences

Put the shared baseline in `defaultProps`, the per-type difference in
`semanticTypeDefaults`, and the per-screen exception in the button's own `zest`. Because
the merge runs in that order, each layer only needs to state what it changes.

### Overriding behaviour, not just looks

The same merge covers `busyOptions`, `successOptions`, `confirmOptions` and
`toggleOptions`. For example, to shorten the confirmation countdown for one type:

```tsx
config={{
  semanticTypeDefaults: {
    delete: { confirmOptions: { displayLabel: 'Really delete?', timeoutSecs: 3 } },
  },
}}
```

The trash icon, danger variant and 400 ms failure reset stay; only the label and timeout
change. `confirmOptions` merges key by key like the other nested objects, but its two
fields (`displayLabel` and `timeoutSecs`) are both required by the type, so provide both.

### Combining a type with toggle mode

A type and a toggle are separate fields in the same `zest` object, so they combine:

```tsx
<ZestButton
  aria-label="Lock"
  zest={{
    semanticType: 'lock',
    toggleOptions: { defaultPressed: true, checkPosition: 'end' },
  }}
/>
```

What you should see: a padlock icon, and because it starts pressed, a check mark after it.
See [Using the ZestButton on/off toggle](../zest-button-toggle/guide.md) for the toggle
details.

### Leaving the built-in type's name in place

If you only want a different look, do not remove `semanticType`. Local options are
enough, and the button keeps its type's icon and behaviour:

```tsx
<ZestButton zest={{ semanticType: 'save', visualOptions: { variant: 'standard' } }}>
  Save
</ZestButton>
```

## Edge cases

- **Objects merge deeply; arrays are replaced.** Nested objects such as `visualOptions`
  merge key by key, so setting `size` does not remove the built-in icon. Arrays, notably
  `dropdownOptions`, are replaced by the higher-precedence value rather than joined.
- **The built-in icon is an object, but overriding it works as a whole.** When you pass
  your own `iconLeft`, the built-in element is replaced; the tests assert the built-in
  icon is not rendered twice. Do not try to "partially merge" an icon.
- **Type defaults only apply when the button names the type.** A provider entry for
  `search` does nothing to a button with no `semanticType`.
- **A global `semanticType` applies to every button.** `useZestConfig` reads the type from
  the local `zest` prop first, then from the merged global defaults. If you put
  `semanticType: 'save'` in `defaultProps`, every button without its own type becomes a
  save button. This is rarely what you want.
- **Local always wins.** If the provider says `outline` and the button says `solid`, the
  button is solid. There is no way for the provider to override a local value.
- **A custom type name is not checked at runtime.** After augmentation, TypeScript stops
  unknown strings, but JavaScript can still pass anything. With no defaults, the button
  renders as a plain button.
- **The augmentation must target the package name.** The module path is
  `jattac.libs.web.zest-button`, not a path into `dist` and not `UI/ZestButton`.
- **Aliases are independent.** A `delete` override does not touch `remove`. Add an entry
  for each name you use.
- **`null` is a valid way to clear a slot.** It is different from leaving the key out:
  leaving it out keeps the lower-precedence value, while `null` removes it.

## Pitfalls

- **Augmenting without defaults.** The name autocompletes, so it looks finished, but the
  button has no icon or behaviour. Add the `semanticTypeDefaults` entry.
- **Putting defaults in the wrong place.** `semanticTypeDefaults` is for one type;
  `defaultProps` is for every button. A type entry in `defaultProps` cannot exist.
- **Forgetting the provider.** `semanticTypeDefaults` only works inside
  `ZestButtonConfigProvider`. A button outside it silently uses only built-in defaults.
- **Expecting provider values to beat local ones.** They do not. If a button sets a value,
  the provider cannot change that button.
- **Replacing `confirmOptions` with one field.** The type requires both `displayLabel` and
  `timeoutSecs`. A partial object fails type-checking; provide both.
- **Adding a custom type and then confusing it with a built-in.** Names are global. Pick a
  name that does not collide with the 47 built-in names, now or in a future release.
- **Overriding a type's `buttonStyle` but expecting its variant to change too.** They are
  separate keys. Override `visualOptions.variant` as well if you want a different colour.
- **Trusting a deep merge for arrays.** Replacing `dropdownOptions` in a local `zest`
  prop replaces the whole list; provider options are not appended.

## Best practices

- Keep `defaultProps` for true app-wide basics such as size and general shape, and use
  `semanticTypeDefaults` for intent-specific changes.
- Define custom types in one module and give them provider defaults there, so every screen
  gets the same version.
- Reuse the library's icons through `ZestIcon` for custom types; only draw new SVG when
  no standard drawing fits.
- Prefer overriding a built-in type over inventing a near-duplicate name (`publish` is a
  reasonable custom action; `save2` is not).
- Name custom types after the action, in the same lowercase style as the built-ins.
- Keep a small set of custom types. If a name is useful to every app, the built-in set may
  cover it in a later version.
- Use the button's own `zest` prop for the exception, not a new provider for one screen.

## See also

- [Built-in semantic type reference](./type-reference.md) — the defaults you are
  overriding.
- [Using ZestButton semantic types](./guide.md) — the everyday use of a type.
- [Using ZestIcon and the standard icons](./icons.md) — drawings for custom types.
- [Configuration and provider defaults](../../../documentation/configuration.md#advanced-customizing-semantic-defaults)
  — the published provider guide.
- [Recipe 4: creating a custom semantic type](../../../documentation/examples.md#recipe-4-creating-a-custom-semantic-type)
  and [Recipe 8: swapping a built-in icon](../../../documentation/examples.md#recipe-8-swapping-a-built-in-icon)
  — consumer recipes.
- [Using the ZestButton on/off toggle](../zest-button-toggle/guide.md) — combining a type
  with toggle options.
