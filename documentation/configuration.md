---
[⬅️ Previous: API Reference](./api.md)

# Configuration: The Control Panel

This document explains how to configure `ZestButton` on a component and global level.

---

## Table of Contents

- [Overview](#overview)
- [Theme Configuration](#theme-configuration)
  - [Order of Precedence](#order-of-precedence)
  - [Example: Forcing a Theme](#example-forcing-a-theme)
- [Global Configuration with ZestButtonConfigProvider](#global-configuration-with-zestbuttonconfigprovider)
  - [Usage](#usage)
  - [Precedence with the ZestButtonConfigProvider](#precedence-with-the-zestbuttonconfigprovider)
  - [Focus Streak Defaults](#focus-streak-defaults)
- [Advanced: Customizing Semantic Defaults](#advanced-customizing-semantic-defaults)
  - [Example: Defining a Custom 'publish' Type](#example-defining-a-custom-publish-type)
  - [Example: Overriding a Built-in 'delete' Default](#example-overriding-a-built-in-delete-default)
- [Toggle Styling](#toggle-styling)

---

### Overview

Currently, `ZestButton` is primarily configured on a per-component basis via the `zest` prop. This provides the most explicit and direct control over each button's behavior and appearance.

However, there are ways to manage themes and a clear path for future global configuration.

---

### Theme Configuration

One of the most powerful configuration options is theme control. `ZestButton` can automatically adapt to the user's operating system preferences, or you can lock it to a specific theme.

The `theme` prop within the `zest` object accepts one of three values:

-   `'system'` (Default): The button listens for the system's color scheme (`prefers-color-scheme`) and applies the `light` or `dark` theme automatically.
-   `'light'`: Forces the button to use the light theme, regardless of system settings.
-   `'dark'`: Forces the button to use the dark theme, regardless of system settings.

#### Order of Precedence

The `zest.theme` prop has the highest precedence.

1.  **`zest.theme` Prop (`light` or `dark`)**: If set, this value is always used.
2.  **`zest.theme` Prop (`system`)**: If set to `system` (or if undefined), the button will defer to the user's OS-level preference.

#### Example: Forcing a Theme

This is useful for sections of your UI that have a fixed background color, where you need the button's theme to match its immediate parent rather than the overall page theme.

```tsx
import ZestButton from 'jattac.libs.web.zest-button';

const PinnedFooter = () => (
  <div style={{ background: '#333', padding: '1rem' }}>
    {/* This button's text will be light, matching the dark background */}
    <ZestButton zest={{ theme: 'dark' }}>
      Action in Dark Footer
    </ZestButton>
  </div>
);
```

---

### Global Configuration with `ZestButtonConfigProvider`

The `ZestButtonConfigProvider` component is now implemented, allowing you to streamline `ZestButton` configuration across your entire application. You can define a set of default `zest` properties that all `ZestButton` instances within its scope will inherit.

#### Usage

Wrap your application (or specific sections) with the `ZestButtonConfigProvider` and pass a configuration object to its `config` prop. The `config` prop expects an object of type `ZestGlobalConfig`, which contains a `defaultProps` field of type `ZestCustomProps`.

```tsx
// In your main App.tsx file

import { ZestButtonConfigProvider } from 'jattac.libs.web.zest-button';
import MyRoutes from './MyRoutes';

const appZestConfig = {
  defaultProps: {
    visualOptions: {
      size: 'sm', // Make all buttons small by default
    },
    busyOptions: {
      minBusyDurationMs: 300, // Shorten the busy duration app-wide
    },
  },
};

const App = () => (
  <ZestButtonConfigProvider config={appZestConfig}>
    <MyRoutes />
  </ZestButtonConfigProvider>
);
```

#### Precedence with the `ZestButtonConfigProvider`

Property configurations are merged in a "deep merge" fashion with the following order of precedence (where the last one wins):

1.  **Global `defaultProps`**: Props defined in the `ZestButtonConfigProvider`'s `config.defaultProps` object. This is the base layer of styling.
2.  **Built-in Semantic Defaults**: The library's own defaults for a given `semanticType` (e.g., the `success` variant for `save`).
3.  **Custom Semantic Defaults**: **(New!)** Defaults for a `semanticType` that you provide in the `ZestButtonConfigProvider`'s `config.semanticTypeDefaults` object. This allows you to override the library's defaults or create new ones.
4.  **Local `zest` Props**: The props passed directly to a specific `<ZestButton>` instance. This gives you the ultimate granular control.

#### Focus Streak Defaults

`focusSheen` is an ordinary `zest` field, so it merges like every other option: `defaultProps` can set it for the whole application, and a button can still opt out with `focusSheen: false`. It is off by default, and no button gets a streak unless it is turned on.

```tsx
import { ZestButtonConfigProvider } from 'jattac.libs.web.zest-button';

const appZestConfig = {
  defaultProps: {
    focusSheen: true, // every button in scope gets the keyboard-focus streak
  },
};

const App = () => (
  <ZestButtonConfigProvider config={appZestConfig}>
    {/* Inherits the provider default */}
    <ZestButton>Save draft</ZestButton>

    {/* Turns it back off for one button */}
    <ZestButton zest={{ focusSheen: false }}>Skip</ZestButton>
  </ZestButtonConfigProvider>
);
```

If only some buttons need the cue, leave `defaultProps` alone and set `focusSheen: true` on those buttons instead (or on a `semanticTypeDefaults` entry). Setting it globally does not turn plain buttons into toggles or change any other option. People who set `prefers-reduced-motion: reduce` get no streak, even when it is on. See the [focus streak guide](https://github.com/nyingimaina/jattac.libs.web.zest-button/blob/master/docs/features/zest-button-focus-sheen/guide.md) for the full behaviour.

#### Programmatic Streak Trigger

`sheenTrigger` is another ordinary `zest` field, so it merges through `defaultProps`, `semanticTypeDefaults` and a button's own props like every other option. Its value is a `string` or a `number`; every change plays one sweep on a button that does not need focus, while the value present on mount plays nothing.

```tsx
const [syncToken, setSyncToken] = useState(0);

<ZestButton zest={{ sheenTrigger: syncToken }}>Sync now</ZestButton>
<ZestButton zest={{ sheenTrigger: syncToken, focusSheen: true }}>Sync and focus</ZestButton>
```

It works with or without `focusSheen` (omitted, `false` or `true`) and plays on a split control, a disabled button and a busy button. People who set `prefers-reduced-motion: reduce` get no streak from either the focus or the programmatic trigger, and no prop overrides it. See the [focus streak guide](https://github.com/nyingimaina/jattac.libs.web.zest-button/blob/master/docs/features/zest-button-focus-sheen/guide.md#triggering-the-streak-from-code) for the full behaviour.

---

### Advanced: Customizing Semantic Defaults

This is one of the most powerful features of the `ZestButtonConfigProvider`. You can define application-wide styles and behaviors for any `semanticType`. This is perfect for creating a consistent design system.

The `ZestButtonConfigProvider`'s `config` prop accepts a `semanticTypeDefaults` object. You can use this to **override** built-in defaults or **define** defaults for your own custom types.

#### Example: Defining a Custom 'publish' Type

First, let's imagine you've used module augmentation to create a new `semanticType` called `'publish'`, as explained in the [Development Guide](./development.md). Now, you want all `'publish'` buttons to have a specific look and feel across your app.

```tsx
// your-project/src/typings/zest-button-extensions.d.ts
import 'jattac.libs.web.zest-button';

declare module 'jattac.libs.web.zest-button' {
  export interface CustomZestSemanticTypes {
    publish: 'publish';
  }
}
```

Now, configure the defaults in your `ZestButtonConfigProvider`:

```tsx
// In your main App.tsx file
import { ZestButtonConfigProvider, ZestIcon } from 'jattac.libs.web.zest-button';
import MyRoutes from './MyRoutes';

const appZestConfig = {
  // Define defaults for our new custom semantic type
  semanticTypeDefaults: {
    publish: {
      buttonStyle: 'outline',
      visualOptions: {
        iconLeft: <ZestIcon name="upload" />,
        variant: 'standard',
      },
      confirmOptions: {
        displayLabel: 'Confirm Publish?',
        timeoutSecs: 10,
      }
    }
  }
};

const App = () => (
  <ZestButtonConfigProvider config={appZestConfig}>
    <MyRoutes />
  </ZestButtonConfigProvider>
);

// --- Later, in some other component ---

// This button will automatically get the icon, style, and confirmation behavior!
<ZestButton zest={{ semanticType: 'publish' }} onClick={handlePublishAction}>
  Publish Record
</ZestButton>
```

#### Example: Overriding a Built-in 'delete' Default

Let's say you like the built-in `delete` type, but for your application, you want the button style to be `outline` instead of `solid`, and you want a shorter confirmation time.

```tsx
// In your main App.tsx file
import { ZestButtonConfigProvider } from 'jattac.libs.web.zest-button';
import MyRoutes from './MyRoutes';

const appZestConfig = {
  // Override specific props for a built-in semantic type
  semanticTypeDefaults: {
    delete: {
      // We only specify what we want to change.
      // The icon and 'danger' variant will still be inherited from the built-in default.
      buttonStyle: 'outline',
      confirmOptions: {
        // We must provide the full object to override, not just one property.
        displayLabel: 'Confirm Deletion',
        timeoutSecs: 3, // Shorter timeout
      }
    }
  }
};

const App = () => (
  <ZestButtonConfigProvider config={appZestConfig}>
    <MyRoutes />
  </ZestButtonConfigProvider>
);

// --- Later, in some other component ---

// This button will now be an 'outline' button with a 3-second confirmation.
<ZestButton zest={{ semanticType: 'delete' }} onClick={handleDeleteAction}>
  Delete Record
</ZestButton>
```

---

### Toggle Defaults

`toggleOptions` merges like the other `zest` options, so a provider can set shared defaults such as the check mark position. Note that putting `toggleOptions` in `defaultProps` turns **every** button in scope into a toggle; prefer setting it on `semanticTypeDefaults` or on individual buttons.

```tsx
<ZestButtonConfigProvider
  config={{ semanticTypeDefaults: { confirm: { toggleOptions: { checkPosition: 'end' } } } }}
>
  <ZestButton zest={{ semanticType: 'confirm' }}>Agree</ZestButton>
</ZestButtonConfigProvider>
```

---

### Toggle Styling

`styles.toggle` on the provider sets the look of every toggle (`zest.toggleOptions`) in scope. Plain, danger and other non-toggle buttons are never styled by it.

```tsx
<ZestButtonConfigProvider
  config={{
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
  }}
>
  <ZestButton zest={{ toggleOptions: {} }}>Bold</ZestButton>
</ZestButtonConfigProvider>
```

- **Any CSS property** works, in camelCase (`letterSpacing`) or kebab-case (`letter-spacing`); values are used exactly as written, so `px` is allowed.
- **Precedence** (lowest to highest): built-in look, all toggles, `sizes`, `variants`, then the per-button `zest.toggleOptions.style`. A size and a variant that set different properties are both applied.
- **Themes:** `light` and `dark` apply only in that theme (`theme="system"` follows the operating system live). A light-only colour leaves the dark theme at the built-in look.
- **Nested providers:** the inner provider's settings apply; anything it omits falls back to the built-in look, not the outer provider's.
- **Safety:** a value can only set its own property. Semicolons, braces and `url()` strings cannot add rules or properties.
- **Unchanged behaviour:** `aria-pressed`, keyboard operation, the focus indicator and the check-mark animation are not affected by styling.

```tsx
<ZestButton zest={{ toggleOptions: { style: { on: { background: 'rebeccapurple' } } } }}>Pin</ZestButton>
```

---

[⬅️ Previous: API Reference](./api.md) | [Next: Development Guide ➡️](./development.md)

