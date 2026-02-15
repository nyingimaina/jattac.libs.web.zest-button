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

Local `zest` props passed directly to a `ZestButton` component instance will always override the global defaults provided by the `ZestProvider`. This gives you the perfect balance of consistency and granular control.

```tsx
// This button will inherit 'sm' size from the provider, but use the success variant.
<ZestButton zest={{ visualOptions: { variant: 'success' } }}>
  Default Size, Success Variant
</ZestButton>

// This button will be large, overriding the global 'sm' default from the provider.
<ZestButton zest={{ visualOptions: { size: 'lg' } }}>
  Large Button
</ZestButton>

// This button will ignore any global defaults and use its own explicitly defined props.
<ZestButton
  zest={{
    visualOptions: { variant: 'danger', size: 'md' },
    busyOptions: { preventRageClick: false }
  }}
>
  Explicitly Configured Button
</ZestButton>
```
