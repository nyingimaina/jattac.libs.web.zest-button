# ZestButton: The Interactive React Button That Does More

A highly customizable and interactive React button component designed for modern web applications. It provides built-in features for handling asynchronous operations, visual feedback, and confirmation flows, all while ensuring a delightful user experience.

### Key Features

*   **Automatic Busy/Loading States**: Simply return a promise from your `onClick` handler and the button will automatically manage loading spinners and prevent "rage clicks."
*   **Success & Failure Feedback**: Provide instant visual feedback with animated checkmarks for success or an animated 'X' with a shake for failures and timeouts.
*   **Built-in Confirmation Flow**: Protect critical actions with a configurable "click-to-confirm" mechanism, complete with a countdown timer.
*   **Richly Styleable**: Comes with `solid`, `outline`, `text`, and `dashed` styles, multiple color variants, and automatic light/dark mode support.
*   **Split Buttons & Overflow Menus**: Attach a set of secondary actions to a button's default action via `dropdownOptions` — a discoverable chevron opens a themeable, independently-sized menu, with each item running through the same busy/confirm feedback as the main button.

*   **On/Off Toggle Mode**: Pass `toggleOptions` to turn the button into a toggle (like a Bold button in an editor). When on it looks pressed and shows an animated check mark; screen readers hear "pressed".

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

[Next: The Cookbook (Examples) ➡️](./documentation/examples.md)
