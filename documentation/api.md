---
[⬅️ Previous: Features Showcase](./features.md)

# API Reference: The Technical Blueprint

This document provides an exhaustive reference for all `ZestButton` props and type definitions.

---

## Table of Contents

- [ZestButtonProps](#zestbuttonprops)
- [Type Definitions](#type-definitions)
  - [ZestCustomProps](#zestcustomprops)
  - [ZestGlobalConfig](#zestglobalconfig)
  - [VisualOptions](#visualoptions)
  - [BusyOptions](#busyoptions)
  - [SuccessOptions](#successoptions)
  - [ConfirmOptions](#confirmoptions)
  - [SemanticType](#semantictype)
  - [ZestIcon](#zesticon)
  - [ZestDropdownOption](#zestdropdownoption)
  - [ToggleOptions](#toggleoptions)

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
| `toggleOptions` | `ToggleOptions` | `undefined` | If provided (even as `{}`), turns the button into an on/off toggle that renders `aria-pressed`. See [`ToggleOptions`](#toggleoptions). |
| `visualOptions` | `VisualOptions` | `{}` | Controls the button's appearance, including variant, size, and icons. |
| `busyOptions` | `BusyOptions` | `{}` | Configures behavior for asynchronous operations. |
| `successOptions` | `SuccessOptions` | `{}` | Configures feedback after a successful or failed operation. |
| `confirmOptions` | `ConfirmOptions` | `undefined` | If provided, enables the "click-to-confirm" workflow. |
| `isDefault` | `boolean` | `false` | If true, the button can be triggered by the `Enter` key. |
| `theme` | `'light' \| 'dark' \| 'system'` | `'system'` | Overrides the automatic theme detection. |
| `buttonStyle` | `'solid' \| 'outline' \| 'text' \| 'dashed'`| `'solid'` | Defines the visual style of the button. |
| `semanticType` | `SemanticType` | `undefined` | Defines the semantic type of the button, providing default visuals and behaviors. Extensible via module augmentation. |
| `dropdownOptions` | `ZestDropdownOption[]` | `undefined` | If provided (non-empty), renders the button as a split button: the main action on the left, and a chevron on the right that opens a menu of these options. See [`ZestDropdownOption`](#zestdropdownoption). |
| `dropdownAriaLabel` | `string` | `'More options'` | Accessible name for the chevron trigger button (it has no visible text). |
| `dropdownTheme` | `'light' \| 'dark' \| 'system'` | `'system'` | Theme for the dropdown menu panel, independent of the button's own `theme`. Defaults to following the OS/browser `prefers-color-scheme`; set this to pin the menu to a specific theme or to match the button. |
| `dropdownWidth` | `number \| string` | `undefined` | Minimum width for the dropdown menu panel — a number is treated as pixels, a string is used as a raw CSS length (e.g. `'18rem'`). When unset, the menu's minimum width tracks the rendered width of the whole split button control. |

---

#### `ZestGlobalConfig`

This is the configuration object passed to the `config` prop of the `ZestButtonConfigProvider`.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `defaultProps` | `ZestCustomProps` | `{}` | A set of `ZestCustomProps` that will be applied to all `ZestButton` instances within the provider's scope. |
| `semanticTypeDefaults` | `Partial<Record<string, Partial<ZestCustomProps>>>` | `{}` | A map of semantic types to `ZestCustomProps`. This allows you to define defaults for custom semantic types or override the library's built-in defaults. |
| `styles` | `ZestButtonStyles` | `undefined` | App-wide looks, organised by button kind. Only `toggle` exists today. See [`ZestToggleStyle`](#zesttogglestyle). |

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

The `SemanticType` defines common button actions, allowing `ZestButton` to automatically apply default visuals (e.g., icons, variants) and behaviors (e.g., confirmation prompts). Every built-in type includes an icon drawn by the library; see the [built-in type table](./features.md#built-in-semantic-types-reference) for each type's icon, variant, button style, icon side and default behaviour. This type is extensible through TypeScript module augmentation.

**Built-in Semantic Types (47):**
`'add'`, `'new'`, `'save'`, `'submit'`, `'edit'`, `'update'`, `'delete'`, `'remove'`, `'cancel'`, `'close'`, `'view'`, `'details'`, `'download'`, `'upload'`, `'refresh'`, `'reload'`, `'print'`, `'share'`, `'confirm'`, `'search'`, `'filter'`, `'sort'`, `'copy'`, `'paste'`, `'back'`, `'next'`, `'home'`, `'menu'`, `'more'`, `'settings'`, `'help'`, `'info'`, `'warning'`, `'send'`, `'login'`, `'logout'`, `'undo'`, `'redo'`, `'approve'`, `'reject'`, `'favorite'`, `'attach'`, `'lock'`, `'unlock'`, `'archive'`, `'export'`, `'import'`.

**Extensibility:** Developers can extend this list to include custom semantic types by augmenting the `CustomZestSemanticTypes` interface in their project. For example:

```typescript
// your-project/src/typings/zest-button.d.ts
import 'jattac.libs.web.zest-button';

declare module 'jattac.libs.web.zest-button' {
  export interface CustomZestSemanticTypes {
    publish: 'publish';
    pin: 'pin';
  }
}
```
After augmentation, `'publish'` and `'pin'` would be valid `SemanticType` values, available for autocompletion and type-checking.

---

#### `ZestIcon`

Renders one of the library's standard icons. All icons share a `0 0 24 24` view box, `fill="none"`, `stroke="currentColor"`, `stroke-width="2"` and rounded line caps/joins, so they match the built-in semantic types and inherit the surrounding text colour. Also exported: `ZestIconProps` and `ZestIconSize`.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `name` | `string` | **(Required)** | A built-in icon name. Unknown names render nothing (no error). See the [built-in type table](./features.md#built-in-semantic-types-reference), where each row's icon name matches the type name. |
| `size` | `'sm' \| 'md' \| 'lg' \| number \| string` | `undefined` | A named size (`sm` = 1rem, `md` = 1.25rem, `lg` = 1.5rem) or a number/string used as the wrapper's `font-size` (numbers are treated as `rem`; `'1.5rem'` is used as-is). When omitted, the icon inherits the surrounding font size. |
| `className` | `string` | `undefined` | Extra class name for the wrapper `<span>`. |

The SVG is decorative: it is marked `aria-hidden="true"` and `focusable="false"`, so give any icon-only control its own accessible name with `aria-label`.

```tsx
import { ZestIcon } from 'jattac.libs.web.zest-button';

<ZestIcon name="search" />
<ZestIcon name="filter" size="lg" />
<ZestIcon name="settings" size="1.25rem" className="my-icon" />
```

*See [Recipe 7: Reusing the Standard Icons](./examples.md#recipe-7-reusing-the-standard-icons) for a full example.*

---

#### `ZestDropdownOption`

Describes a single secondary action in a split button's dropdown menu (see [`dropdownOptions`](#zestcustomprops)). Each option runs through the same busy/confirm machinery as the main button, independently per item.

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `key` | `string` | index | Stable React key. Defaults to the option's index in the array if omitted. |
| `label` | `React.ReactNode` | **(Required)** | The menu item's visible content. |
| `icon` | `React.ReactNode` | `undefined` | An icon to display to the left of the label. |
| `disabled` | `boolean` | `false` | If true, the item cannot be selected. |
| `semanticType` | `SemanticType` | `undefined` | Same as the main button's `semanticType` — provides default icon/behavior for this item. |
| `onClick` | `(e: Event) => void \| Promise<void>` | `undefined` | Handler invoked when the item is selected. |
| `busyOptions` | `BusyOptions` | `{}` | Same shape as the main button's `busyOptions`, scoped to this item. |
| `successOptions` | `SuccessOptions` | `{}` | Same shape as the main button's `successOptions`, scoped to this item. |
| `confirmOptions` | `ConfirmOptions` | `undefined` | Same shape as the main button's `confirmOptions`, scoped to this item. |

*See the [Split Button with Overflow Actions recipe](./examples.md#recipe-5-a-split-button-with-overflow-actions) for a full example.*

---

#### `ToggleOptions`

Turns the button into an on/off toggle. The button stays a `<button>` (no `role="switch"`) and reports its state with `aria-pressed`. When on it shows a pressed look and a small check mark (hidden from screen readers). Also exported: the type `ToggleCheckPosition` (`'start' | 'end'`).

| Prop Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `pressed` | `boolean` | `undefined` | Controlled value. The button only changes when you pass a new value. Wins over `defaultPressed` if both are given. |
| `defaultPressed` | `boolean` | `false` | Starting value for a self-managed toggle. |
| `onPressedChange` | `(pressed: boolean) => void` | `undefined` | Called with the new value on each click or key press of an enabled toggle. |
| `style` | `ZestToggleStyle` | `undefined` | Looks for this toggle only. Beats the provider's `styles.toggle` for the properties it gives. |
| `checkPosition` | `'start' \| 'end'` | `'start'` | Which end of the button the check mark sits at. Unknown values fall back to `'start'`. |

*See the [Toggle recipe](./examples.md#recipe-6-an-onoff-toggle-button) for a full example.*

---

#### `ZestToggleStyle`

Exported types: `ZestToggleStyle`, `ZestToggleStyleLayer`, `ZestToggleStateLooks`, `ZestToggleStyleLook`, `ZestToggleStyleValue` and `ZestButtonStyles` (`{ toggle?: ZestToggleStyle }`).

A *look* maps CSS property names (camelCase or kebab-case) to a string or number written exactly as it should appear. The extra keys `checkColor` and `checkSize` style the check mark. A value is only ever used for its own property; a bad value is ignored without affecting the others.

| Key | Type | Description |
| :--- | :--- | :--- |
| `off`, `on` | `ZestToggleStyleLook` | The look when the toggle is off or on. |
| `hoverOff`, `hoverOn` | `ZestToggleStyleLook` | Hover looks. Only where hover exists, and never on a disabled toggle. |
| `focus` | `ZestToggleStyleLook` | Added to the focus-visible look. |
| `disabled`, `busy` | `ZestToggleStyleLook` | Layered on top of the on/off look. |
| `light`, `dark` | `ZestToggleStateLooks` | The same state keys, applied only in that theme. |
| `sizes` | `Partial<Record<ZestSize, ZestToggleStyleLayer>>` | Looks for one size. |
| `variants` | `Partial<Record<ZestVariant, ZestToggleStyleLayer>>` | Looks for one variant. |

Precedence, lowest to highest: built-in look, all toggles, `sizes`, `variants`, then `zest.toggleOptions.style`. See [Toggle Styling](./configuration.md#toggle-styling).

---

[⬅️ Previous: Features Showcase](./features.md) | [Next: Configuration Guide ➡️](./configuration.md)
