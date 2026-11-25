# ZestButton: The Interactive React Button That Does More

A highly customizable and interactive React button component designed for modern web applications. It provides built-in features for handling asynchronous operations, visual feedback, and confirmation flows, all while ensuring a delightful user experience.

### Key Features

*   **Automatic Busy/Loading States**: Simply return a promise from your `onClick` handler and the button will automatically manage loading spinners and prevent "rage clicks."
*   **Success & Failure Feedback**: Provide instant visual feedback with animated checkmarks for success or an animated 'X' with a shake for failures and timeouts.
*   **Built-in Confirmation Flow**: Protect critical actions with a configurable "click-to-confirm" mechanism, complete with a countdown timer.
*   **Richly Styleable**: Comes with `solid`, `outline`, `text`, and `dashed` styles, multiple color variants, and automatic light/dark mode support.
*   **47 Built-in Semantic Types & Standard Icons**: Name an intent (`save`, `search`, `delete`, …) and get a matching icon, variant and behaviour. Every icon is an inline SVG drawn by the library on one 24-unit grid, and `ZestIcon` lets you reuse the same drawings anywhere.
*   **Split Buttons & Overflow Menus**: Attach a set of secondary actions to a button's default action via `dropdownOptions` — a discoverable chevron opens a themeable, independently-sized menu, with each item running through the same busy/confirm feedback as the main button.

*   **On/Off Toggle Mode**: Pass `toggleOptions` to turn the button into a toggle (like a Bold button in an editor). When on it looks pressed and shows an animated check mark; screen readers hear "pressed".

*   **Opt-in Keyboard Focus Streak**: Pass `focusSheen: true` to play one diagonal light band across the button (or the whole split control) when it receives keyboard focus, so the focused control stands out. It is off by default, never fires on a mouse click, and leaves the existing focus ring as the primary focus signal.

### Installation

```bash
npm install jattac.libs.web.zest-button react-icons @radix-ui/react-dropdown-menu
```
*Note: `react`, `react-dom`, `react-icons`, and `@radix-ui/react-dropdown-menu` are peer dependencies and must be installed in your project.*

**Supported React versions:** `react`/`react-dom` `>=18.0.0` (tested against React 18 and React 19; open-ended for future majors).

**Bundlers:** the published package ships ESM and CJS with a modern `"exports"` map and treats React (including `react/jsx-runtime`) as external, so it works out of the box with Vite, Next.js, webpack, and Rollup — the consumer's React version is always used.

### Basic Usage (The "Hello World")

Here's the simplest way to get `ZestButton` up and running:

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';

const App = () => {
  return (
    <ZestButton onClick={() => alert('Zestfully clicked!')}>
      Click Me
    </ZestButton>
  );
};

export default App;
```

### Semantic Types & Standard Icons

Name the action and the button supplies the matching icon, variant and sensible behaviour. All 47 types are listed in the [built-in type table](./documentation/features.md#built-in-semantic-types-reference).

```tsx
import ZestButton, { ZestIcon } from 'jattac.libs.web.zest-button';

const Actions = () => (
  <div style={{ display: 'flex', gap: '0.5rem' }}>
    <ZestButton zest={{ semanticType: 'search' }}>Search</ZestButton>
    <ZestButton zest={{ semanticType: 'save' }}>Save</ZestButton>
    <ZestButton zest={{ semanticType: 'delete' }}>Delete</ZestButton>

    {/* Reuse the same drawing in your own control. */}
    <ZestIcon name="filter" size="lg" />
    <ZestButton
      aria-label="Copy"
      zest={{ visualOptions: { iconLeft: <ZestIcon name="copy" /> } }}
    />
  </div>
);
```

`ZestIcon` is decorative (`aria-hidden`), so icon-only controls need their own `aria-label`. See the [`ZestIcon` API reference](./documentation/api.md#zesticon) and [Recipe 7](./documentation/examples.md#recipe-7-reusing-the-standard-icons).

### Toggle Example

```tsx
import React, { useState } from 'react';
import ZestButton from 'jattac.libs.web.zest-button';

const BoldButton = () => {
  const [bold, setBold] = useState(false);
  return (
    <ZestButton zest={{ toggleOptions: { pressed: bold, onPressedChange: setBold, checkPosition: 'start' } }}>
      Bold
    </ZestButton>
  );
};
```

Use `defaultPressed` instead of `pressed` to let the button manage its own value. See the [Cookbook](./documentation/examples.md#recipe-6-an-onoff-toggle-button).

### Styling Toggles Once, App-Wide

Set the exact look of every toggle in one place with `styles.toggle` on the provider. Any CSS property works (camelCase or kebab-case), separately for off, on, hover, focus, disabled and busy, per theme, per size and per variant. Apps that do not pass `styles` look exactly as before.

```tsx
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

const App = () => (
  <ZestButtonConfigProvider config={config}>
    <ZestButton zest={{ toggleOptions: {} }}>Bold</ZestButton>
  </ZestButtonConfigProvider>
);
```

A single toggle can override the provider with `zest.toggleOptions.style`. See [Configuration](./documentation/configuration.md#toggle-styling).

### Opt-in Keyboard Focus Streak

Turn the focus streak on with the optional `focusSheen` field. It is off by default, so every existing button renders and behaves exactly as before. When on, a diagonal band (about 45 degrees, top-right to bottom-left) sweeps the button once in about 0.6 seconds when it receives **keyboard** focus; a mouse click does not play it. The band is clipped to the button's rounded shape and the focus ring stays fully visible.

```tsx
import ZestButton from 'jattac.libs.web.zest-button';

const Actions = () => (
  <div style={{ display: 'flex', gap: '0.5rem' }}>
    {/* Regular button: one sweep per keyboard focus arrival */}
    <ZestButton zest={{ focusSheen: true }}>Save draft</ZestButton>

    {/* Split button: one sweep across the whole control, main action and chevron together */}
    <ZestButton
      zest={{
        focusSheen: true,
        dropdownOptions: [{ label: 'Export as PDF' }],
      }}
    >
      Export as CSV
    </ZestButton>
  </div>
);
```

It works on every `buttonStyle` (`solid`, `outline`, `text`, `dashed`), every variant (`standard`, `success`, `danger`) and in both light and dark themes. People who set `prefers-reduced-motion: reduce` get no streak. To opt every button in scope in, set `focusSheen: true` in the provider's `defaultProps` (see [Configuration](./documentation/configuration.md#focus-streak-defaults)). Read the full [focus streak guide](https://github.com/nyingimaina/jattac.libs.web.zest-button/blob/master/docs/features/zest-button-focus-sheen/guide.md) for clipping, colours per style and theme, and reduced motion.

A host can also play the streak from code with `sheenTrigger` (a string or a number). Each change plays one sweep on a button that need not be focused, while the first value on mount plays nothing. It works with or without `focusSheen` (omitted, `false` or `true`), on a split control, and on disabled or busy buttons without firing their click handler.

```tsx
import { useState } from 'react';
import ZestButton from 'jattac.libs.web.zest-button';

const Sync = () => {
  const [syncToken, setSyncToken] = useState(0);

  return (
    <>
      <ZestButton zest={{ sheenTrigger: syncToken }} onClick={() => alert('Synced!')}>
        Sync now
      </ZestButton>
      <button onClick={() => setSyncToken((token) => token + 1)}>Play the streak</button>
    </>
  );
};
```

People who set `prefers-reduced-motion: reduce` get no streak from either the focus or the programmatic trigger, and no prop overrides it.

### Documentation

To get started, check out our **Cookbook** of practical recipes.

| Topic | Description |
| :--- | :--- |
| **[The Cookbook](./documentation/examples.md)** | **(Start Here)** A collection of practical, real-world recipes to master `ZestButton`. |
| **[Features Showcase](./documentation/features.md)** | A high-level visual tour of what's possible. |
| **[API Reference](./documentation/api.md)** | An exhaustive technical reference for all props and types. |
| **[Configuration Guide](./documentation/configuration.md)**| A deep dive into global configuration using the `ZestProvider`. |
| **[Development Guide](./documentation/development.md)** | Information for contributors on the project's architecture and setup. |
| **[Breaking Changes](./documentation/breaking-changes.md)** | A log of breaking changes to assist with version upgrades. |

### License

Licensed under [MIT](./LICENSE).

---

[⬅️ Previous: Breaking Changes](./documentation/breaking-changes.md) | [Next: The Cookbook (Examples) ➡️](./documentation/examples.md)
