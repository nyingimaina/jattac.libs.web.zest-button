# `jattac.libs.web.zest-button`

A highly customizable and interactive React button component designed for modern web applications. It provides built-in features for handling asynchronous operations (loading states), visual feedback (success/failure animations), and confirmation flows, all while ensuring a delightful user experience.

## Table of Contents

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Basic Usage](#basic-usage)
    -   [Variants and Sizes](#variants-and-sizes)
    -   [Icons](#icons)
    -   [Asynchronous Operations (Busy State)](#asynchronous-operations-busy-state)
    -   [Success and Failure Feedback](#success-and-failure-feedback)
    -   [Confirmation Dialog](#confirmation-dialog)
    -   [Full Width Button](#full-width-button)
    -   [Default Button (Enter Key)](#default-button-enter-key)
    -   [Theme Support](#theme-support)
    -   [Button Styles](#button-styles)
-   [Props](#props)
-   [Styling](#styling)
-   [Development](#development)
    -   [Local Setup](#local-setup)
    -   [Building the Package](#building-the-package)
    -   [Running Tests](#running-tests)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   **Customizable Visuals**: Supports different variants (standard, success, danger) and sizes (sm, md, lg).
-   **Icon Support**: Easily add left or right icons to the button.
-   **Asynchronous Handling**: Manages busy/loading states automatically, preventing "rage clicks" and ensuring a minimum busy duration for better UX.
-   **Visual Feedback**: Provides animated checkmarks for success and 'X' marks with shake animation for failure/timeout.
-   **Confirmation Flow**: Implements a configurable "click to confirm" mechanism with a countdown timer and auto-reset.
-   **CSS Modules**: Styles are encapsulated using CSS Modules and automatically injected into the component, requiring no separate CSS imports for consumers.
-   **TypeScript Support**: Fully typed with comprehensive `index.d.ts` declarations.
-   **Dark/Light Mode Support**: Automatically adapts to system theme with an override prop.
-   **Multiple Button Styles**: Supports `solid`, `outline`, `text`, and `dashed` button styles.

## Installation

To install the component, use npm or yarn:

```bash
npm install jattac.libs.web.zest-button react react-dom react-icons
# or
yarn add jattac.libs.web.zest-button react react-dom react-icons
```

**Note:** `react`, `react-dom`, and `react-icons` are peer dependencies and must be installed in your project.

## Usage

Import the `ZestButton` component:

```typescript
import ZestButton from 'jattac.libs.web.zest-button';
import { FaSave, FaTrash } from 'react-icons/fa6'; // Example icons
```

### Basic Usage

```tsx
<ZestButton onClick={() => alert('Button clicked!')}>
  Click Me
</ZestButton>
```

### Variants and Sizes

```tsx
<ZestButton zest={{ visualOptions: { variant: 'success' } }}>
  Success Button
</ZestButton>
<ZestButton zest={{ visualOptions: { variant: 'danger', size: 'sm' } }}>
  Small Danger
</ZestButton>
<ZestButton zest={{ visualOptions: { size: 'lg' } }}>
  Large Button
</ZestButton>
```

### Icons

```tsx
<ZestButton zest={{ visualOptions: { iconLeft: <FaSave /> } }}>
  Save
</ZestButton>
<ZestButton zest={{ visualOptions: { iconRight: <FaTrash /> } }}>
  Delete
</ZestButton>
<ZestButton zest={{ visualOptions: { iconLeft: <FaSave />, iconRight: <FaTrash /> } }}>
  Save & Delete
</ZestButton>
```

### Asynchronous Operations (Busy State)

The button can automatically manage busy states for `onClick` handlers that return a Promise. It prevents multiple clicks during the busy period and ensures a minimum busy duration for a smoother user experience.

```tsx
const handleAsyncClick = async () => {
  console.log('Starting async operation...');
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
  console.log('Async operation finished!');
};

<ZestButton onClick={handleAsyncClick}>
  Perform Async Action
</ZestButton>

// You can also control the busy state externally
const [isSaving, setIsSaving] = useState(false);
const handleExternalAsyncClick = async () => {
  setIsSaving(true);
  await new Promise(resolve => setTimeout(resolve, 2000));
  setIsSaving(false);
};

<ZestButton onClick={handleExternalAsyncClick} aria-busy={isSaving}>
  {isSaving ? 'Saving...' : 'Save Externally Controlled'}
</ZestButton>
```

### Success and Failure Feedback

After an asynchronous operation, the button can display a checkmark for success or an 'X' for failure, then automatically reset.

```tsx
const handleSuccess = async () => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  // Simulate success
};

const handleFailure = async () => {
  await new Promise((_, reject) => setTimeout(() => reject('Error!'), 1500));
  // Simulate failure
};

<ZestButton onClick={handleSuccess} zest={{ successOptions: { showCheckmark: true } }}>
  Submit (Success)
</ZestButton>
<ZestButton onClick={handleFailure} zest={{ successOptions: { showFailIcon: true } }}>
  Submit (Failure)
</ZestButton>
```

### Confirmation Dialog

Implement a "click to confirm" mechanism to prevent accidental actions.

```tsx
const handleDelete = () => {
  alert('Item deleted!');
};

<ZestButton
  onClick={handleDelete}
  zest={{
    confirmOptions: { displayLabel: 'Confirm Delete', timeoutSecs: 5 },
    visualOptions: { variant: 'danger' }
  }}
>
  Delete Item
</ZestButton>
```

### Full Width Button

```tsx
<ZestButton zest={{ visualOptions: { fullWidth: true } }}>
  Full Width Button
</ZestButton>
```

### Default Button (Enter Key)

A button marked as `isDefault` will be triggered when the user presses the `Enter` key, unless another interactive element (like a textarea) has focus.

```tsx
<ZestButton zest={{ isDefault: true }} onClick={() => alert('Default action!')}>
  Submit Form
</ZestButton>
```

### Theme Support

The `ZestButton` automatically adapts to the user's system theme (light or dark) by default. You can override this behavior using the `zest.theme` prop.

```tsx
// Button will follow system theme (default behavior)
<ZestButton onClick={() => alert('System theme!')}>
  System Theme Button
</ZestButton>

// Force light theme
<ZestButton zest={{ theme: "light" }} onClick={() => alert('Light theme!')}>
  Light Theme Button
</ZestButton>

// Force dark theme
<ZestButton zest={{ theme: "dark" }} onClick={() => alert('Dark theme!')}>
  Dark Theme Button
</ZestButton>
```

### Button Styles

Beyond the default solid button, `ZestButton` supports `outline`, `text`, and `dashed` styles.

```tsx
// Solid (default)
<ZestButton>Solid Button</ZestButton>

// Outline button
<ZestButton zest={{ buttonStyle: "outline", visualOptions: { variant: 'standard' } }}>
  Outline Button
</ZestButton>

// Text button
<ZestButton zest={{ buttonStyle: "text", visualOptions: { variant: 'success' } }}>
  Text Button
</ZestButton>

// Dashed button
<ZestButton zest={{ buttonStyle: "dashed", visualOptions: { variant: 'danger' } }}>
  Dashed Button
</ZestButton>
```

## Props

The `ZestButton` component extends standard HTML `button` attributes and introduces a single `zest` prop to encapsulate all custom functionality.

```typescript
export type ZestVariant = "standard" | "success" | "danger";
export type ZestSize = "sm" | "md" | "lg";
export type ZestTheme = 'light' | 'dark' | 'system';
export type ZestButtonStyle = 'solid' | 'outline' | 'text' | 'dashed';

interface VisualOptions {
  variant?: ZestVariant; // Visual style of the button (default: "standard")
  size?: ZestSize;       // Size of the button (default: "md")
  fullWidth?: boolean;   // If true, button takes full width of its parent (default: false)
  iconLeft?: React.ReactNode;  // Icon to display on the left side of the label
  iconRight?: React.ReactNode; // Icon to display on the right side of the label
}

interface BusyOptions {
  handleInternally?: boolean; // If true, onClick's Promise resolves/rejects control busy state (default: true)
  preventRageClick?: boolean; // If true, prevents multiple clicks during busy/success/fail states (default: true)
  minBusyDurationMs?: number; // Minimum duration button stays busy, even if Promise resolves faster (default: 500)
}

interface SuccessOptions {
  showCheckmark?: boolean; // If true, shows animated checkmark on success (default: true)
  showFailIcon?: boolean;  // If true, shows animated 'X' on failure (default: true)
  autoResetAfterMs?: number; // Time in ms after which success/fail state resets (default: 2000)
}

interface ConfirmOptions {
  displayLabel: string; // The text to display during the confirmation phase (e.g., "Confirm Delete")
  timeoutSecs: number;  // The number of seconds to wait for a second click to confirm
}

// New interface to encapsulate all custom ZestButton props
interface ZestCustomProps {
  visualOptions?: VisualOptions;
  busyOptions?: BusyOptions;
  successOptions?: SuccessOptions;
  confirmOptions?: ConfirmOptions;
  isDefault?: boolean; // If true, button is triggered by Enter key (default: false)
  theme?: ZestTheme; // Theme override for the button (default: "system")
  buttonStyle?: ZestButtonStyle; // Style of the button (default: "solid")
}

export interface ZestButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  zest?: ZestCustomProps; // Encapsulate all custom props under 'zest'
  // All standard HTML button attributes are also supported (e.g., disabled, type, etc.)
}
```

## Styling

The `ZestButton` component uses CSS Modules for styling, ensuring that styles are scoped and do not conflict with other parts of your application. The styles are automatically injected into the JavaScript bundle, so you do not need to import any CSS files separately.

You can override styles by providing your own `className` to the `ZestButton` component. This will be appended to the component's internal class names, allowing you to add or override specific styles.

```tsx
// In your component's CSS file (e.g., MyComponent.module.css)
.myCustomButton {
  background-color: purple !important;
  color: yellow !important;
  border-radius: 20px;
}

// In your React component
import styles from './MyComponent.module.css';

<ZestButton className={styles.myCustomButton}>
  Custom Styled Button
</ZestButton>
```

## Development

### Local Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/jattac/jattac.libs.web.zest-button.git
    cd jattac.libs.web.zest-button
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start development mode (watches for changes and rebuilds):**
    ```bash
    npm run dev
    ```

### Building the Package

To build the production-ready package, run:

```bash
npm run build
```

This will compile the TypeScript, bundle the component and its styles, and generate type declarations into the `dist` folder.

### Running Tests

*(Currently, there are no automated tests. Please refer to the `WORKPLAN.md` for future testing plans.)*

## Contributing

Contributions are welcome! Please refer to the `DIRECTIVES.md` and `WORKPLAN.md` for guidelines on contributing to this project.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.