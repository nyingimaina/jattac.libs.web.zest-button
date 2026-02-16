# API Reference: The Technical Blueprint

This document provides an exhaustive reference for all `ZestButton` props and type definitions.

---

### `ZestButtonProps`

The `ZestButton` component accepts all standard HTML `<button>` attributes (e.g., `disabled`, `type`, `name`, `className`) in addition to its own custom configuration prop, `zest`.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `zest` | `ZestCustomProps` | `{}` | An object containing all custom configuration for the button's behavior and appearance. See `ZestCustomProps` below for details. |
| `...rest`| `React.ButtonHTMLAttributes` | | All other standard button props are passed directly to the underlying `<button>` element. |

---

### Type Definitions

The `zest` prop is a configuration object that follows the `ZestCustomProps` interface. Its properties are detailed below.

#### `ZestCustomProps`

This is the main configuration object passed to the `zest` prop.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `visualOptions` | `VisualOptions` | `{}` | Controls the button's appearance, including variant, size, and icons. |
| `busyOptions` | `BusyOptions` | `{}` | Configures behavior for asynchronous operations. |
| `successOptions` | `SuccessOptions` | `{}` | Configures feedback after a successful or failed operation. |
| `confirmOptions` | `ConfirmOptions` | `undefined` | If provided, enables the "click-to-confirm" workflow. |
| `isDefault` | `boolean` | `false` | If true, the button can be triggered by the `Enter` key. |
| `theme` | `'light' \| 'dark' \| 'system'` | `'system'` | Overrides the automatic theme detection. |
| `buttonStyle` | `'solid' \| 'outline' \| 'text' \| 'dashed'`| `'solid'` | Defines the visual style of the button. |
| `semanticType` | `SemanticType` | `undefined` | Defines the semantic type of the button, providing default visuals and behaviors. Extensible via module augmentation. |

---

#### `ZestGlobalConfig`

This is the configuration object passed to the `config` prop of the `ZestProvider`.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `defaultProps` | `ZestCustomProps` | `{}` | A set of `ZestCustomProps` that will be applied to all `ZestButton` instances within the provider's scope. |
| `semanticTypeDefaults` | `Partial<Record<string, Partial<ZestCustomProps>>>` | `{}` | A map of semantic types to `ZestCustomProps`. This allows you to define defaults for custom semantic types or override the library's built-in defaults. |

---

#### `VisualOptions`

Controls the button's appearance.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'standard' \| 'success' \| 'danger'` | `'standard'`| The color scheme of the button. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the button, affecting padding and font size. |
| `stretch` | `boolean` | `false` | If true, the button expands to the full width of its parent. |
| `iconLeft` | `React.ReactNode` | `undefined` | A React node (e.g., an icon component) to display on the left. |
| `iconRight` | `React.ReactNode` | `undefined` | A React node to display on the right. |

---

#### `BusyOptions`

Configures behavior during asynchronous `onClick` operations.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `handleInternally` | `boolean` | `true` | If true, automatically manages busy state when `onClick` returns a Promise. |
| `preventRageClick` | `boolean` | `true` | If true, disables the button while it is in a busy, success, or fail state. |
| `minBusyDurationMs`| `number` | `500` | Ensures the spinner is shown for at least this long (in ms) to prevent visual flickering on fast network requests. |

---

#### `SuccessOptions`

Configures the visual feedback after an operation completes.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `showCheckmark` | `boolean` | `true` | If true, displays an animated checkmark when the `onClick` Promise resolves successfully. |
| `showFailIcon` | `boolean` | `true` | If true, displays an animated 'X' when the `onClick` Promise rejects or the confirmation timer expires. |
| `autoResetAfterMs`| `number` | `2000` | The duration (in ms) to show the success/fail icon before the button resets to its normal state. |

---

#### `ConfirmOptions`

If this object is provided, the button will require two clicks to fire the `onClick` event.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `displayLabel` | `string` | **(Required)**| The text to show during the confirmation phase (e.g., "Confirm?"). The countdown timer is appended automatically. |
| `timeoutSecs` | `number` | **(Required)**| The number of seconds the user has to click the button a second time to confirm the action. |

---

#### `SemanticType`

The `SemanticType` defines common button actions, allowing `ZestButton` to automatically apply default visuals (e.g., icons, variants) and behaviors (e.g., confirmation prompts). This type is extensible through TypeScript module augmentation.

**Built-in Semantic Types:**
`'add'`, `'save'`, `'submit'`, `'edit'`, `'update'`, `'delete'`, `'remove'`, `'cancel'`, `'close'`, `'view'`, `'details'`, `'download'`, `'upload'`, `'refresh'`, `'reload'`, `'print'`, `'share'`, `'confirm'`.

**Extensibility:** Developers can extend this list to include custom semantic types by augmenting the `CustomZestSemanticTypes` interface in their project. For example:

```typescript
// your-project/src/typings/zest-button.d.ts
import 'jattac.libs.web.zest-button';

declare module 'jattac.libs.web.zest-button' {
  export interface CustomZestSemanticTypes {
    archive: 'archive';
    publish: 'publish';
  }
}
```
After augmentation, `'archive'` and `'publish'` would be valid `SemanticType` values, available for autocompletion and type-checking.
