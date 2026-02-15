# ZestButton: The Interactive React Button That Does More

A highly customizable and interactive React button component designed for modern web applications. It provides built-in features for handling asynchronous operations, visual feedback, and confirmation flows, all while ensuring a delightful user experience.

### Key Features

*   **Automatic Busy/Loading States**: Simply return a promise from your `onClick` handler and the button will automatically manage loading spinners and prevent "rage clicks."
*   **Success & Failure Feedback**: Provide instant visual feedback with animated checkmarks for success or an animated 'X' with a shake for failures and timeouts.
*   **Built-in Confirmation Flow**: Protect critical actions with a configurable "click-to-confirm" mechanism, complete with a countdown timer.
*   **Richly Styleable**: Comes with `solid`, `outline`, `text`, and `dashed` styles, multiple color variants, and automatic light/dark mode support.

### Installation

```bash
npm install jattac.libs.web.zest-button react-icons
```
*Note: `react`, `react-dom`, and `react-icons` are peer dependencies and must be installed in your project.*

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

### Documentation

| Topic | Description |
| :--- | :--- |
| **[Features](./docs/features.md)** | A guided tour of all component features with live examples. |
| **[API Reference](./docs/api.md)** | An exhaustive technical reference for all props and type definitions. |
| **[Examples](./docs/examples.md)** | A cookbook of practical, real-world examples for common use cases. |
| **[Configuration](./docs/configuration.md)**| A guide to configuring themes and other component-wide settings. |
| **[Development](./docs/development.md)** | Information for contributors on the project's architecture and setup. |
| **[Breaking Changes](./docs/breaking-changes.md)** | A log of breaking changes to assist with version upgrades. |

### License

Licensed under [MIT](./LICENSE).
