# Configuration: The Control Panel

This document explains how to configure `ZestButton` on a component and global level.

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

### Global Configuration with `ZestProvider`

The `ZestProvider` component is now implemented, allowing you to streamline `ZestButton` configuration across your entire application. You can define a set of default `zest` properties that all `ZestButton` instances within its scope will inherit.

#### Usage

Wrap your application (or specific sections) with the `ZestProvider` and pass a configuration object to its `config` prop. The `config` prop expects an object of type `ZestGlobalConfig`, which contains a `defaultProps` field of type `ZestCustomProps`.

```tsx
// In your main App.tsx file

import { ZestProvider } from 'jattac.libs.web.zest-button';
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
  <ZestProvider config={appZestConfig}>
    <MyRoutes />
  </ZestProvider>
);
```

#### Precedence with the `ZestProvider`

Property configurations are merged in a "deep merge" fashion with the following order of precedence (where the last one wins):

1.  **Global `defaultProps`**: Props defined in the `ZestProvider`'s `config.defaultProps` object. This is the base layer of styling.
2.  **Built-in Semantic Defaults**: The library's own defaults for a given `semanticType` (e.g., the `success` variant for `save`).
3.  **Custom Semantic Defaults**: **(New!)** Defaults for a `semanticType` that you provide in the `ZestProvider`'s `config.semanticTypeDefaults` object. This allows you to override the library's defaults or create new ones.
4.  **Local `zest` Props**: The props passed directly to a specific `<ZestButton>` instance. This gives you the ultimate granular control.

---

### Advanced: Customizing Semantic Defaults

This is one of the most powerful features of the `ZestProvider`. You can define application-wide styles and behaviors for any `semanticType`. This is perfect for creating a consistent design system.

The `ZestProvider`'s `config` prop accepts a `semanticTypeDefaults` object. You can use this to **override** built-in defaults or **define** defaults for your own custom types.

#### Example: Defining a Custom 'archive' Type

First, let's imagine you've used module augmentation to create a new `semanticType` called `'archive'`, as explained in the [Development Guide](./development.md). Now, you want all `'archive'` buttons to have a specific look and feel across your app.

```tsx
// your-project/src/typings/zest-button-extensions.d.ts
import 'jattac.libs.web.zest-button';

declare module 'jattac.libs.web.zest-button' {
  export interface CustomZestSemanticTypes {
    archive: 'archive';
  }
}
```

Now, configure the defaults in your `ZestProvider`:

```tsx
// In your main App.tsx file
import { ZestProvider } from 'jattac.libs.web.zest-button';
import { FaArchive } from 'react-icons/fa';
import MyRoutes from './MyRoutes';

const appZestConfig = {
  // Define defaults for our new custom semantic type
  semanticTypeDefaults: {
    archive: {
      buttonStyle: 'outline',
      visualOptions: {
        iconLeft: <FaArchive />,
        variant: 'standard',
      },
      confirmOptions: {
        displayLabel: 'Confirm Archive?',
        timeoutSecs: 10,
      }
    }
  }
};

const App = () => (
  <ZestProvider config={appZestConfig}>
    <MyRoutes />
  </ZestProvider>
);

// --- Later, in some other component ---

// This button will automatically get the icon, style, and confirmation behavior!
<ZestButton zest={{ semanticType: 'archive' }} onClick={handleArchiveAction}>
  Archive Record
</ZestButton>
```

#### Example: Overriding a Built-in 'delete' Default

Let's say you like the built-in `delete` type, but for your application, you want the button style to be `outline` instead of `solid`, and you want a shorter confirmation time.

```tsx
// In your main App.tsx file
import { ZestProvider } from 'jattac.libs.web.zest-button';
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
  <ZestProvider config={appZestConfig}>
    <MyRoutes />
  </ZestProvider>
);

// --- Later, in some other component ---

// This button will now be an 'outline' button with a 3-second confirmation.
<ZestButton zest={{ semanticType: 'delete' }} onClick={handleDeleteAction}>
  Delete Record
</ZestButton>
```

