---
[⬅️ Previous: Configuration Guide](./configuration.md)

# Development: The Contributor's Guide

This guide provides an overview of the project's internal structure and instructions for setting up your development environment.

---

## Table of Contents

- [Internal Architecture](#internal-architecture)
- [Setup Instructions](#setup-instructions)
- [Scripts](#scripts)
- [Extending Semantic Types](#extending-semantic-types)
- [Toggle Mode Internals](#toggle-mode-internals)

---

### Internal Architecture

The `jattac.libs.web.zest-button` project is structured to be a self-contained React component library.

-   **`UI/ZestButton.tsx`**: This is the heart of the component. It contains the main React functional component, state management logic, event handlers, and renders the button's UI based on its props and internal state. Auxiliary components like `AnimatedCheckmark` and `AnimatedX` are also defined here.
-   **`UI/zestIcons.tsx`**: The source of every built-in icon. It owns the `BuiltInIconName` union, a module-level map of shared SVG elements (`ZEST_ICON_ELEMENTS`), the ordered `ZEST_ICON_NAMES` list and the O(1) `getZestIconElement` lookup. All icons are drawn inline on a `0 0 24 24` grid with `currentColor`; aliases (e.g. `add`/`new`) share one element instance. Add or edit standard icons here, then update `semanticTypeButtonConfigDefaults.tsx` and the docs table.
-   **`UI/ZestIcon.tsx`**: The public wrapper for those drawings. It looks up the named element (`null` for unknown names), hides it from screen readers and applies the optional size/class name to a thin `<span>` without cloning the shared element.
-   **`UI/SpinnerIcon.tsx`**: A small, dedicated component for rendering the loading spinner, utilizing `react-icons`.
-   **`Styles/ZestButton.module.css`**: All the CSS for the component is defined in this file. It leverages CSS Modules to ensure styles are scoped and prevent conflicts. It also includes global CSS variables for theming and animations.
-   **`dist/`**: This directory is the output of the build process. It contains the compiled JavaScript files (CommonJS and ES Modules), the TypeScript declaration file (`index.d.ts`), and potentially source maps. This is the content that gets published to npm.
-   **`rollup.config.mjs`**: The configuration file for Rollup, the module bundler used for this project. It defines how the TypeScript and CSS are transpiled, bundled, and how the declaration files are generated.
-   **`tsconfig.json`**: The TypeScript compiler configuration. It specifies compiler options, such as target JavaScript version, module resolution strategy, JSX factory, and files to include/exclude from compilation.

---

### Setup Instructions

To get the development environment running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/jattac/jattac.libs.web.zest-button.git
    cd jattac.libs.web.zest-button
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
    This command will install all the necessary `devDependencies` listed in `package.json`.

---

### Scripts

The `package.json` includes several scripts to help with development and building the package:

-   **`npm run build`**:
    *   **Purpose**: Compiles the TypeScript code, processes CSS Modules, and bundles the component into production-ready CommonJS and ES Module formats. It also generates the TypeScript declaration file (`index.d.ts`).
    *   **Output**: Creates the `dist/` directory with all the necessary files for publishing.
    *   **Command**: `rollup -c rollup.config.mjs`

-   **`npm run dev`**:
    *   **Purpose**: Starts Rollup in watch mode. This command is ideal for development as it automatically recompiles the component whenever source files are changed, allowing for rapid iteration.
    *   **Output**: Similar to `build`, but also keeps the process running to watch for changes.
    *   **Command**: `rollup -c rollup.config.mjs -w`

---

### Extending Semantic Types

The `ZestButton` provides a mechanism for developers to extend the built-in `SemanticType` union with their own custom semantic types. This is achieved through TypeScript's [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) feature.

The library ships 47 built-in types (see the [features table](./features.md#built-in-semantic-types-reference)). To add your own:

1.  Create a TypeScript declaration file in your project (e.g., `your-project/src/typings/zest-button-extensions.d.ts`).
2.  Augment the `jattac.libs.web.zest-button` module and define your custom semantic types within the `CustomZestSemanticTypes` interface. The keys of this interface will become available as new `SemanticType` values.

```typescript
// your-project/src/typings/zest-button-extensions.d.ts
import 'jattac.libs.web.zest-button'; // Important: Extend the module

declare module 'jattac.libs.web.zest-button' {
  export interface CustomZestSemanticTypes {
    publish: 'publish';
    pin: 'pin';
    // Add any other custom semantic types here
  }
}
```

Once augmented, these new semantic types (`'publish'`, `'pin'`) will be available for autocompletion and type-checking when using the `semanticType` prop on your `ZestButton` instances. Provide their defaults through `ZestButtonConfigProvider` (see the [Configuration Guide](./configuration.md#advanced-customizing-semantic-defaults)); use `ZestIcon` for a standard icon or your own SVG element for a custom one.

*(Note: This package supports `react`/`react-dom` `>=18.0.0`. It is tested against React 18 (the default `devDependency`) and React 19, and the published bundles treat React — including `react/jsx-runtime` — as external so the consumer's React version is used. See [Breaking Changes](./breaking-changes.md).)*

---

### Toggle Mode Internals

Toggle mode lives in `UI/hooks/useToggleState.ts` (controlled when `pressed` is given, otherwise self-managed from `defaultPressed`), the `handleToggleClick` handler and `ToggleCheck` mark in `UI/ZestButton.tsx`, and the `.toggleOn` / `.toggleCheck` rules in `Styles/ZestButton.module.css`. It uses no timers or listeners. Tests: `__tests__/ZestButtonToggle.test.tsx` and `__tests__/hooks/useToggleState.test.ts`. Feature notes: `docs/features/zest-button-toggle/`.

---

### Testing

The project uses Jest with `ts-jest` and React Testing Library. Tests live in `__tests__/`, mirroring the `UI/` structure, and are run with:

```bash
npm test
```

`npm test` runs `jest --coverage`; coverage is written to `coverage/` (gitignored). The suite currently runs on React 18; React 19 compatibility is verified by temporarily installing `react@19`/`react-dom@19` and re-running the suite (see `docs/features/react-19-support/BRS.md`).

---

[⬅️ Previous: Configuration Guide](./configuration.md) | [Next: Breaking Changes ➡️](./breaking-changes.md)
