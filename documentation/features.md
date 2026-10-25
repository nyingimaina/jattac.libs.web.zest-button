# Features: A Guided Tour

This document provides a high-level showcase of what's possible with `ZestButton`. For detailed, practical implementation guides, please see our **[Cookbook](./examples.md)**.

---

## Table of Contents

- [Asynchronous Operations & Feedback](#asynchronous-operations--feedback)
- [Confirmation Flow](#confirmation-flow)
- [Semantic Types](#semantic-types)
- [Standardized Icons](#standardized-icons)
- [Built-in Semantic Types Reference](#built-in-semantic-types-reference)
- [Global Configuration](#global-configuration)
- [Rich Styling](#rich-styling)
- [Split Buttons & Overflow Menus](#split-buttons--overflow-menus)
- [On/Off Toggle Mode](#onoff-toggle-mode)
- [Styling Toggles App-Wide](#styling-toggles-app-wide)

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

**What it does:** Streamlines development by allowing you to declare button intent (e.g., `'save'`, `'search'`, `'delete'`). The library ships 47 built-in types covering common actions; each one automatically gets an icon, colour variant, and sensible behaviour.

```tsx
const MyComponent = () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
        <ZestButton zest={{ semanticType: 'save' }}>Save</ZestButton>
        <ZestButton zest={{ semanticType: 'search' }}>Search</ZestButton>
        <ZestButton zest={{ semanticType: 'cancel' }}>Cancel</ZestButton>
    </div>
);
```
*__Learn how to create your own in the [Creating a Custom Semantic Type recipe](./examples.md#recipe-4-creating-a-custom-semantic-type).__*

---

### Standardized Icons

**What it does:** Every built-in type uses an icon drawn by the library itself: one 24-unit grid, one stroke weight, rounded ends and joins, and `currentColor` so it matches the button text in light, dark and system themes. The same drawings are available outside a button through `ZestIcon`.

```tsx
import ZestButton, { ZestIcon } from 'jattac.libs.web.zest-button';

// A built-in type gets its icon automatically.
<ZestButton zest={{ semanticType: 'search' }}>Search</ZestButton>

// Reuse the same drawing anywhere: buttons, menus or a custom control.
<ZestIcon name="copy" />
<ZestIcon name="filter" size="lg" />
<ZestIcon name="settings" size="1.25rem" />

// An icon-only button needs its own accessible name.
<ZestButton
  aria-label="Search"
  zest={{ visualOptions: { iconLeft: <ZestIcon name="search" /> } }}
/>
```
`ZestIcon` takes a built-in `name`, an optional `size` (`'sm' | 'md' | 'lg'` or a number/string treated as a `rem` size) and an optional `className`. It is decorative (`aria-hidden`, not focusable); give icon-only controls an `aria-label`. An unknown name renders nothing instead of throwing.

*__See the [`ZestIcon` reference](./api.md#zesticon) and the [standard icons recipe](./examples.md#recipe-7-reusing-the-standard-icons).__*

---

### Built-in Semantic Types Reference

Every entry below is a built-in `semanticType`. The variant, button style, icon side and default behaviour are what you get from the name alone; any of them can be overridden with your own `zest` props or through `ZestButtonConfigProvider`.

| Type | Icon | Variant | Button style | Icon side | Default behaviour |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `add` | Plus sign | `standard` | `solid` | left | — |
| `new` | Plus sign (alias of `add`) | `standard` | `solid` | left | — |
| `save` | Floppy disk | `success` | `solid` | left | 500 ms busy, success check mark |
| `submit` | Floppy disk (alias of `save`) | `success` | `solid` | left | 500 ms busy, success check mark |
| `edit` | Pencil | `standard` | `solid` | left | — |
| `update` | Pencil (alias of `edit`) | `standard` | `solid` | left | — |
| `delete` | Trash can | `danger` | `solid` | left | Confirm “Confirm Delete” (5 s), fail shake |
| `remove` | Trash can (alias of `delete`) | `danger` | `solid` | left | Confirm “Confirm Remove” (5 s), fail shake |
| `cancel` | Cross | `standard` | `outline` | left | — |
| `close` | Cross (alias of `cancel`) | `standard` | `outline` | left | — |
| `view` | Right arrow | `standard` | `text` | right | — |
| `details` | Right arrow (alias of `view`) | `standard` | `text` | right | — |
| `download` | Arrow into a tray | `standard` | `solid` | left | — |
| `upload` | Arrow out of a tray | `standard` | `solid` | left | — |
| `refresh` | Circular arrow | `standard` | `solid` | left | 500 ms busy |
| `reload` | Circular arrow (alias of `refresh`) | `standard` | `solid` | left | 500 ms busy |
| `print` | Printer | `standard` | `solid` | left | — |
| `share` | Share nodes | `standard` | `solid` | left | — |
| `confirm` | Check mark | `success` | `solid` | left | Confirm “Are you sure?” (5 s) |
| `search` | Magnifying glass | `standard` | `solid` | left | — |
| `filter` | Funnel | `standard` | `solid` | left | — |
| `sort` | Lines, longest to shortest | `standard` | `solid` | left | — |
| `copy` | Overlapping pages | `standard` | `solid` | left | — |
| `paste` | Clipboard | `standard` | `solid` | left | — |
| `back` | Left arrow | `standard` | `solid` | left | — |
| `next` | Right arrow | `standard` | `solid` | right | — |
| `home` | House | `standard` | `solid` | left | — |
| `menu` | Three lines | `standard` | `solid` | left | — |
| `more` | Three dots | `standard` | `solid` | left | — |
| `settings` | Sliders | `standard` | `solid` | left | — |
| `help` | Question mark in a circle | `standard` | `solid` | left | — |
| `info` | Letter i in a circle | `standard` | `solid` | left | — |
| `warning` | Triangle with an exclamation mark | `danger` | `solid` | left | — |
| `send` | Paper plane | `standard` | `solid` | left | 500 ms busy |
| `login` | Arrow entering a door | `standard` | `solid` | left | 500 ms busy |
| `logout` | Arrow leaving a door | `standard` | `solid` | left | 500 ms busy |
| `undo` | Curved arrow to the left | `standard` | `solid` | left | — |
| `redo` | Curved arrow to the right | `standard` | `solid` | left | — |
| `approve` | Check mark | `success` | `solid` | left | 500 ms busy |
| `reject` | Cross | `danger` | `solid` | left | 500 ms busy |
| `favorite` | Heart | `standard` | `solid` | left | — |
| `attach` | Paperclip | `standard` | `solid` | left | — |
| `lock` | Closed padlock | `standard` | `solid` | left | — |
| `unlock` | Open padlock | `standard` | `solid` | left | — |
| `archive` | Archive box | `standard` | `solid` | left | 500 ms busy |
| `export` | Arrow into a tray | `standard` | `solid` | left | 500 ms busy |
| `import` | Arrow out of a tray | `standard` | `solid` | left | 500 ms busy |

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
    <ZestButton zest={{ buttonStyle: 'outline', size: 'md' }}>
      Medium Outline
    </ZestButton>
    <ZestButton zest={{ visualOptions: { variant: 'danger', size: 'lg' } }}>
      Large Danger
    </ZestButton>
  </div>
);
```
*Explore all the recipes in the **[Cookbook](./examples.md)** to see these options in action.*

---

### Split Buttons & Overflow Menus

**What it does:** Attaches a set of secondary actions to a button that already has one obvious default action, via a chevron segment that opens a menu — a discoverable place for "there's more here" without cluttering the UI with extra buttons. Each menu item gets its own independent busy/success/fail/confirm feedback, and the menu can be themed and sized independently of the main button.

```tsx
const MyComponent = () => (
  <ZestButton
    onClick={() => alert('Exported as CSV!')}
    zest={{
      dropdownOptions: [
        { label: 'Export as PDF', onClick: () => alert('Exported as PDF!') },
        { label: 'Export as JSON', onClick: () => alert('Exported as JSON!') },
      ],
    }}
  >
    Export as CSV
  </ZestButton>
);
```
*__Learn more in the [Split Button with Overflow Actions recipe](./examples.md#recipe-5-a-split-button-with-overflow-actions).__*

---

### On/Off Toggle Mode

**What it does:** Pass `toggleOptions` and the button stays pressed when on and returns to normal when off. When on it shows a pressed look plus a small animated check mark, so the state is clear without relying on colour. Screen readers hear "pressed" (`aria-pressed`) instead of the check mark. The check mark can sit at the `start` or `end` of the button, so your own icons keep working. Animations are switched off when the user prefers reduced motion. Buttons without `toggleOptions` are unchanged.

```tsx
const Example = () => (
  <ZestButton zest={{ toggleOptions: { defaultPressed: false, checkPosition: 'end' } }}>
    Notifications
  </ZestButton>
);
```
*See the [Toggle recipe](./examples.md#recipe-6-an-onoff-toggle-button) and the [`ToggleOptions` reference](./api.md#toggleoptions).*

---

### Styling Toggles App-Wide

**What it does:** Set colours, sizes, hover effects and any other CSS property of every toggle in one place, the provider's `styles.toggle`, separately for off and on, light and dark, each size and each variant. Individual toggles can override it with `zest.toggleOptions.style`. Apps that do not pass `styles` are unchanged, and accessibility behaviour is never affected.

```tsx
<ZestButtonConfigProvider config={{ styles: { toggle: { on: { background: '#0a7', checkColor: '#fff' } } } }}>
  <ZestButton zest={{ toggleOptions: {} }}>Bold</ZestButton>
</ZestButtonConfigProvider>
```
*See the [Toggle styling recipe](./examples.md#recipe-9-styling-all-toggles-in-one-place) and [Toggle Styling](./configuration.md#toggle-styling).*

---

[⬅️ Previous: The Cookbook (Examples)](./examples.md) | [Next: API Reference ➡️](./api.md)