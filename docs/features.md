# Features: A Guided Tour

This document provides a high-level showcase of what's possible with `ZestButton`. For detailed, practical implementation guides, please see our **[Cookbook](./examples.md)**.

---

### Asynchronous Operations & Feedback

**What it does:** Automatically handles loading states and provides clear success/failure feedback for any action that returns a Promise.

```tsx
const MyComponent = () => {
  const handleAsyncClick = async () => {
    // Simulate an API call that takes 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
  };

  return (
    <ZestButton onClick={handleAsyncClick}>
      Perform Async Action
    </ZestButton>
  );
};
```
*__Learn more in the [Your First Async Button recipe](./examples.md#recipe-1-your-first-async-button).__*

---

### Confirmation Flow

**What it does:** Protects users from accidentally performing critical actions by requiring a second click to confirm.

```tsx
const MyComponent = () => {
  const handleDelete = () => alert('The item has been deleted!');

  return (
    <ZestButton
      onClick={handleDelete}
      zest={{
        confirmOptions: { displayLabel: 'Confirm?', timeoutSecs: 5 },
        visualOptions: { variant: 'danger' }
      }}
    >
      Delete Item
    </ZestButton>
  );
};
```
*__Learn more in the [Safe "Delete" Button recipe](./examples.md#recipe-2-the-safe-delete-button).__*

---

### Semantic Types

**What it does:** Streamlines development by allowing you to declare button intent (e.g., `'save'`, `'delete'`). The button automatically gets appropriate icons, colors, and behaviors.

```tsx
const MyComponent = () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
        <ZestButton zest={{ semanticType: 'save' }}>Save</ZestButton>
        <ZestButton zest={{ semanticType: 'cancel' }}>Cancel</ZestButton>
    </div>
);
```
*__Learn how to create your own in the [Creating a Custom "Archive" Button recipe](./examples.md#recipe-4-creating-a-custom-archive-button).__*

---

### Global Configuration

**What it does:** Allows you to define a consistent style (like size or button style) for all buttons across your entire application.

```tsx
// In your App.tsx
const appZestConfig = {
  defaultProps: {
    visualOptions: { size: 'sm' },
    buttonStyle: 'outline',
  },
};

const App = () => (
  <ZestButtonConfigProvider config={appZestConfig}>
    {/* All buttons inside will be small and outline by default */}
  </ZestButtonConfigProvider>
);
```
*__Learn more in the [Standardizing Your Buttons recipe](./examples.md#recipe-3-standardizing-your-buttons-with-a-global-config).__*

---

### Rich Styling

**What it does:** Provides multiple variants, sizes, and styles (`solid`, `outline`, `text`, `dashed`) to fit any UI context. It also automatically adapts to light and dark themes.

```tsx
const MyComponent = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <ZestButton zest={{ visualOptions: { variant: 'success', size: 'sm' } }}>
      Small Success
    </ZestButton>
    <ZestButton zest={{ buttonStyle: 'outline', size: 'md' } }}>
      Medium Outline
    </ZestButton>
    <ZestButton zest={{ visualOptions: { variant: 'danger', size: 'lg' } }}>
      Large Danger
    </ZestButton>
  </div>
);
```
*Explore all the recipes in the **[Cookbook](./examples.md)** to see these options in action.*

