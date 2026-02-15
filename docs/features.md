# Features: A Guided Tour

This document showcases the breadth of what's possible with `ZestButton`. Each section provides a self-contained example of a major feature.

---

### Variants and Sizes

You can easily change the button's appearance and size to fit the context of your application. The `variant` controls the color scheme, while `size` controls the padding and font size.

-   **Variants**: `standard` (default), `success`, `danger`
-   **Sizes**: `sm`, `md` (default), `lg`

```tsx
import ZestButton from 'jattac.libs.web.zest-button';

const MyComponent = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <ZestButton zest={{ visualOptions: { variant: 'success', size: 'sm' } }}>
      Small Success
    </ZestButton>
    <ZestButton zest={{ visualOptions: { variant: 'standard', size: 'md' } }}>
      Medium Standard
    </ZestButton>
    <ZestButton zest={{ visualOptions: { variant: 'danger', size: 'lg' } }}>
      Large Danger
    </ZestButton>
  </div>
);
```

---

### Button Styles

Beyond the default `solid` appearance, `ZestButton` offers `outline`, `text`, and `dashed` styles to provide visual flexibility.

```tsx
import ZestButton from 'jattac.libs.web.zest-button';

const MyComponent = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <ZestButton zest={{ buttonStyle: 'solid' }}>
      Solid
    </ZestButton>
    <ZestButton zest={{ buttonStyle: 'outline' }}>
      Outline
    </ZestButton>
    <ZestButton zest={{ buttonStyle: 'text' }}>
      Text
    </ZestButton>
    <ZestButton zest={{ buttonStyle: 'dashed' }}>
      Dashed
    </ZestButton>
  </div>
);
```

---

### Icons

Place icons on either side of the button's text to add clarity and visual appeal. You can use any React node, but we recommend libraries like `react-icons`.

```tsx
import ZestButton from 'jattac.libs.web.zest-button';
import { FaSave, FaTrash } from 'react-icons/fa6';

const MyComponent = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <ZestButton zest={{ visualOptions: { iconLeft: <FaSave /> } }}>
      Save
    </ZestButton>
    <ZestButton zest={{ visualOptions: { variant: 'danger', iconRight: <FaTrash /> } }}>
      Delete
    </ZestButton>
  </div>
);
```

---

### Asynchronous Operations (Busy State)

`ZestButton` simplifies handling asynchronous actions. If your `onClick` handler returns a Promise, the button automatically enters a busy state, displaying a spinner and preventing further clicks until the promise resolves or rejects.

```tsx
import ZestButton from 'jattac.libs.web.zest-button';

const MyComponent = () => {
  const handleAsyncClick = async () => {
    console.log('Starting async operation...');
    // Simulate an API call that takes 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Async operation finished!');
  };

  return (
    <ZestButton onClick={handleAsyncClick}>
      Perform Async Action
    </ZestButton>
  );
};
```

---

### Success and Failure Feedback

After an async operation, provide clear visual feedback. The button can show an animated checkmark on success or an 'X' on failure. The feedback is displayed for a configurable duration before the button resets.

```tsx
import ZestButton from 'jattac.libs.web.zest-button';

const MyComponent = () => {
  // This operation will succeed
  const handleSuccess = async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
  };

  // This operation will fail
  const handleFailure = async () => {
    await new Promise((_, reject) => setTimeout(() => reject('API Error!'), 1500));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <ZestButton onClick={handleSuccess} zest={{ successOptions: { showCheckmark: true } }}>
        Submit (Will Succeed)
      </ZestButton>
      <ZestButton onClick={handleFailure} zest={{ successOptions: { showFailIcon: true } }}>
        Submit (Will Fail)
      </ZestButton>
    </div>
  );
};
```

---

### Confirmation Flow

Prevent users from accidentally performing critical actions like deletions. The `confirmOptions` prop implements a "click to confirm" mechanism. On the first click, the button text changes and a countdown begins. The action is only executed if the button is clicked again within the timeout period.

```tsx
import ZestButton from 'jattac.libs.web.zest-button';

const MyComponent = () => {
  const handleDelete = () => {
    alert('The item has been deleted!');
  };

  return (
    <ZestButton
      onClick={handleDelete}
      zest={{
        confirmOptions: { displayLabel: 'Confirm Deletion', timeoutSecs: 5 },
        visualOptions: { variant: 'danger' }
      }}
    >
      Delete Item
    </ZestButton>
  );
};
```

---

### Theme Support

`ZestButton` automatically adapts to the user's system theme (`light` or `dark`). You can also force a specific theme by setting the `theme` prop.

```tsx
import ZestButton from 'jattac.libs.web.zest-button';

const MyComponent = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem', background: '#e0e0e0' }}>
    <ZestButton zest={{ theme: 'system' }}>
      System Theme (Default)
    </ZestButton>
    <ZestButton zest={{ theme: 'light' }}>
      Force Light Theme
    </ZestButton>
    <ZestButton zest={{ theme: 'dark' }}>
      Force Dark Theme
    </ZestButton>
  </div>
);
```
