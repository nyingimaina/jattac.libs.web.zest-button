# Breaking Changes: The Upgrade Path

This document lists significant changes between versions that might require modifications to your existing codebase.

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
