---
[⬅️ Previous: Development Guide](./development.md)

# Breaking Changes: The Upgrade Path

This document lists significant changes between versions that might require modifications to your existing codebase.

---

## Table of Contents

- [Version 2.0.0 (unreleased)](#version-200-unreleased)
- [Version 1.2.7](#version-127)
- [Version 1.2.6](#version-126)
- [Version 1.2.0](#version-120)

---

## Version 2.0.0 (unreleased)

### Minimum React version raised to 18

React 16.8 and 17 are end-of-life and were never tested against this package. The `react` / `react-dom` peer range is now `>=18.0.0` (previously `>=16.8.0`), which explicitly includes React 18 and React 19 and remains open-ended for future majors.

If your project is still on React 16.8 or 17, npm will now report an unmet peer dependency. Upgrade to React 18 or later.

### Published bundles no longer inline React's JSX runtime

Previously the build externalized `react` but not `react/jsx-runtime`, so a copy of React 18's JSX runtime was bundled into `dist/`. Under React 19 this produced elements branded `Symbol.for('react.element')` — which React 19 rejects with *"A React Element from an older version of React was rendered"* — and referenced an internal removed in React 19. `react/jsx-runtime` and `react/jsx-dev-runtime` are now external, so the consumer's React runtime is always used. This is what makes the package genuinely work under React 19 and with bundlers such as Vite.

### `"exports"` map added

`package.json` now declares an `"exports"` map (`types` / `import` / `require`, plus `./dist/*` and `./package.json` passthroughs). Existing deep imports under `dist/` continue to resolve.

---

## Version 1.2.7

### Renamed `ZestProvider` to `ZestButtonConfigProvider`

To provide more explicit naming and better context within the API, the `ZestProvider` component has been renamed to `ZestButtonConfigProvider`. Additionally, its associated context is now `ZestButtonConfigContext`, and the consumption hook is `useZestButtonConfig`.

This is a breaking change that requires updating all imports and usages of the provider, context, and hook in your application.

**Before:**

```tsx
import { ZestProvider, useZest } from 'jattac.libs.web.zest-button';

const App = () => (
  <ZestProvider config={myConfig}>...</ZestProvider>
);

const MyComponent = () => {
  const config = useZest();
  // ...
}
```

**After:**

```tsx
import { ZestButtonConfigProvider, useZestButtonConfig } from 'jattac.libs.web.zest-button';

const App = () => (
  <ZestButtonConfigProvider config={myConfig}>...</ZestButtonConfigProvider>
);

const MyComponent = () => {
  const config = useZestButtonConfig();
  // ...
}
```

---

## Version 1.2.6

### Renamed `fullWidth` prop to `stretch`

To better reflect its behavior and avoid potential confusion with other layout properties, the `fullWidth` prop within `visualOptions` has been renamed to `stretch`. This means any usage of `fullWidth` in your `ZestButton` configurations must be updated.

**Before:**

```tsx
<ZestButton
  zest={{
    visualOptions: {
      fullWidth: true,
    },
  }}
>
  Stretched Button
</ZestButton>
```

**After:**

```tsx
<ZestButton
  zest={{
    visualOptions: {
      stretch: true,
    },
  }}
>
  Stretched Button
</ZestButton>
```

---

## Version 1.2.0

### Encapsulated Custom Props under `zest` Object

To improve maintainability, reduce prop-drilling, and provide a clearer API surface, all custom `ZestButton` properties have been consolidated under a single `zest` prop. Previously, these properties were passed directly to the `ZestButton` component.

This change allows for better organization of configuration options (e.g., `visualOptions`, `busyOptions`, `confirmOptions`) and prepares the component for future global configuration contexts.

**Before:**

```tsx
<ZestButton
  variant="success"
  size="lg"
  fullWidth={true}
  minBusyDurationMs={1000}
  preventRageClick={false}
  confirmOptions={{ displayLabel: "Delete?", timeoutSecs: 5 }}
>
  My Button
</ZestButton>
```

**After:**

```tsx
<ZestButton
  zest={{
    visualOptions: {
      variant: "success",
      size: "lg",
      fullWidth: true,
    },
    busyOptions: {
      minBusyDurationMs: 1000,
      preventRageClick: false,
    },
    confirmOptions: {
      displayLabel: "Delete?",
      timeoutSecs: 5,
    },
  }}
>
  My Button
</ZestButton>
```

---

[⬅️ Previous: Development Guide](./development.md) | [Next: README ➡️](../README.md)
