
# ZestButton

A delightful, feature-rich, and highly configurable button component for React, designed to handle asynchronous operations with flair.

---

## Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Features](#features)
  - [Variants and Sizes](#variants-and-sizes)
  - [Icons](#icons)
  - [Full Width](#full-width)
  - [Asynchronous Operations (Busy State)](#asynchronous-operations-busy-state)
    - [1. Internal Handling (Default)](#1-internal-handling-default)
    - [2. External Handling](#2-external-handling)
  - [Success and Failure States](#success-and-failure-states)
  - [Confirmation Flow](#confirmation-flow)
  - [Default Button (Enter Key)](#default-button-enter-key)
- [API Reference (All Props)](#api-reference-all-props)

---

## Installation

```bash
npm install jattac.libs.web.zest-button
```

## Basic Usage

Import the `ZestButton` and its styles to get started.

```jsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';
import 'jattac.libs.web.zest-button/dist/zestbutton.css';

const App = () => (
  <ZestButton onClick={() => alert('Zest!')}>
    Click Me
  </ZestButton>
);
```

---

## Features

### Variants and Sizes

Control the button's appearance with `variant` and `size`.

-   **Variants**: `standard` (default), `success`, `danger`
-   **Sizes**: `sm`, `md` (default), `lg`

```jsx
import { ZestButton } from 'jattac.libs.web.zest-button';

// Variants
<ZestButton visualOptions={{ variant: 'standard' }}>Standard</ZestButton>
<ZestButton visualOptions={{ variant: 'success' }}>Success</ZestButton>
<ZestButton visualOptions={{ variant: 'danger' }}>Danger</ZestButton>

// Sizes
<ZestButton visualOptions={{ size: 'sm' }}>Small</ZestButton>
<ZestButton visualOptions={{ size: 'md' }}>Medium</ZestButton>
<ZestButton visualOptions={{ size: 'lg' }}>Large</ZestButton>
```

### Icons

Add icons to the left or right of the button text. The icons can be any `React.ReactNode`.

```jsx
import { FaSave, FaArrowRight } from 'react-icons/fa';

<ZestButton visualOptions={{ iconLeft: <FaSave /> }}>
  Save
</ZestButton>

<ZestButton visualOptions={{ iconRight: <FaArrowRight /> }}>
  Continue
</ZestButton>
```

### Full Width

Make the button span the full width of its container.

```jsx
<ZestButton visualOptions={{ fullWidth: true }}>
  Full Width
</ZestButton>
```

### Asynchronous Operations (Busy State)

`ZestButton` is designed to handle long-running actions gracefully. It provides two ways to manage the busy/loading state.

#### 1. Internal Handling (Default)

By default, the button manages its own busy state. Simply pass an `async` function to `onClick`. The button will automatically become disabled, show a spinner, and re-enable itself when the promise resolves or rejects.

```jsx
const handleSave = async () => {
  // Simulate a network request
  return new Promise(resolve => setTimeout(resolve, 2000));
};

<ZestButton onClick={handleSave}>
  Save
</ZestButton>
```

You can fine-tune this with `busyOptions`:
- `minBusyDurationMs`: Ensures the spinner is shown for a minimum duration to prevent flashing. Defaults to `500`.
- `preventRageClick`: Prevents the button from being clicked again while it's in a success/fail state. Defaults to `true`.

#### 2. External Handling

For complex scenarios, such as a form where an action can be triggered by pressing 'Enter' in a textbox, you can control the busy state externally.

1.  Manage the busy state in your parent component (e.g., `const [isBusy, setIsBusy] = useState(false)`).
2.  Pass this state to the button's `aria-busy` prop.
3.  Tell the button to disable its internal handling via `busyOptions`.

```jsx
const MyForm = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (isSaving) return;
    setIsSaving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <input onKeyPress={(e) => e.key === 'Enter' && handleSave()} />
      <ZestButton
        onClick={handleSave}
        aria-busy={isSaving}
        busyOptions={{ handleInternally: false }}
      >
        Save
      </ZestButton>
    </div>
  );
};
```

### Success and Failure States

When using internal handling, the button can automatically display a checkmark on success or an 'X' icon on failure.

- `showCheckmark`: Shows an animated checkmark on success. Defaults to `true`.
- `showFailIcon`: Shows an animated 'X' on failure. Defaults to `true`.
- `autoResetAfterMs`: How long the success/fail icon is shown before reverting to the normal state. Defaults to `2000`.

```jsx
const handleAsync = async (shouldSucceed) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  if (!shouldSucceed) {
    throw new Error("Something went wrong!");
  }
};

// This button will show a checkmark on success
<ZestButton onClick={() => handleAsync(true)}>
  Succeed
</ZestButton>

// This button will show an 'X' on failure
<ZestButton onClick={() => handleAsync(false)}>
  Fail
</ZestButton>
```

### Confirmation Flow

Require a second click to confirm a destructive or important action.

- `displayLabel`: The text to display while awaiting confirmation (e.g., "Confirm?").
- `timeoutSecs`: The number of seconds the user has to confirm.

```jsx
<ZestButton
  visualOptions={{ variant: 'danger' }}
  confirmOptions={{
    displayLabel: 'Delete forever?',
    timeoutSecs: 5
  }}
  onClick={() => console.log('Deleted!')}
>
  Delete
</ZestButton>
```

### Default Button (Enter Key)

Use the `isDefault` prop to make the button clickable via the 'Enter' key anywhere on the page (except when typing in a `textarea`). This is useful for forms with a single primary action.

```jsx
<ZestButton isDefault onClick={() => alert('Submitted!')}>
  Submit
</ZestButton>
```

---

## API Reference (All Props)

| Prop             | Type                                           | Default        | Description                                                                                                                              |
| ---------------- | ---------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `visualOptions`  | `object`                                       | `{}`           | Options for the button's appearance.                                                                                                     |
| `  .variant`     | `'standard' \| 'success' \| 'danger'`          | `'standard'`   | The color scheme of the button.                                                                                                          |
| `  .size`        | `'sm' \| 'md' \| 'lg'`                         | `'md'`         | The size of the button.                                                                                                                  |
| `  .fullWidth`   | `boolean`                                      | `false`        | If `true`, the button spans the full width of its container.                                                                             |
| `  .iconLeft`    | `React.ReactNode`                              | `undefined`    | An icon or element to display to the left of the text.                                                                                   |
| `  .iconRight`   | `React.ReactNode`                              | `undefined`    | An icon or element to display to the right of the text.                                                                                  |
| `busyOptions`    | `object`                                       | `{}`           | Options for handling asynchronous operations.                                                                                            |
| `  .handleInternally` | `boolean`                                  | `true`         | If `true`, the button manages its own busy state. Set to `false` when using `aria-busy`.                                                 |
| `  .preventRageClick` | `boolean`                                  | `true`         | If `true`, prevents clicks while the button is in a success/fail state.                                                                  |
| `  .minBusyDurationMs` | `number`                                 | `500`          | Minimum time in milliseconds to display the spinner to prevent flashing.                                                                 |
| `successOptions` | `object`                                       | `{}`           | Options for the post-action success/fail states.                                                                                         |
| `  .showCheckmark` | `boolean`                                    | `true`         | If `true`, shows an animated checkmark when the `onClick` promise resolves.                                                              |
| `  .showFailIcon`| `boolean`                                      | `true`         | If `true`, shows an animated 'X' when the `onClick` promise rejects.                                                                     |
| `  .autoResetAfterMs` | `number`                                  | `2000`         | Time in milliseconds before the success/fail icon disappears.                                                                            |
| `confirmOptions` | `object`                                       | `undefined`    | If provided, enables a two-click confirmation flow.                                                                                      |
| `  .displayLabel`| `string`                                       | **Required**   | The text shown on the button while awaiting confirmation (e.g., "Are you sure?").                                                        |
| `  .timeoutSecs` | `number`                                       | **Required**   | The number of seconds the user has to perform the second click.                                                                          |
| `isDefault`      | `boolean`                                      | `false`        | If `true`, the button can be triggered by the 'Enter' key.                                                                               |
| `aria-busy`      | `boolean`                                      | `undefined`    | Standard ARIA attribute. Use this to control the busy state from a parent component.                                                     |
| `...props`       | `React.ButtonHTMLAttributes<HTMLButtonElement>`|                | All other standard button attributes (`onClick`, `disabled`, `className`, etc.) are passed directly to the underlying `<button>` element. |

