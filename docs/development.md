# Development: The Contributor's Guide

This guide provides an overview of the project's internal structure and instructions for setting up your development environment.

---

### Internal Architecture

The `jattac.libs.web.zest-button` project is structured to be a self-contained React component library.

-   **`UI/ZestButton.tsx`**: This is the heart of the component. It contains the main React functional component, state management logic, event handlers, and renders the button's UI based on its props and internal state. Auxiliary components like `AnimatedCheckmark` and `AnimatedX` are also defined here.
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

To add your own custom semantic types:

1.  Create a TypeScript declaration file in your project (e.g., `your-project/src/typings/zest-button-extensions.d.ts`).
2.  Augment the `jattac.libs.web.zest-button` module and define your custom semantic types within the `CustomZestSemanticTypes` interface. The keys of this interface will become available as new `SemanticType` values.

```typescript
// your-project/src/typings/zest-button-extensions.d.ts
import 'jattac.libs.web.zest-button'; // Important: Extend the module

declare module 'jattac.libs.web.zest-button' {
  export interface CustomZestSemanticTypes {
    archive: 'archive';
    publish: 'publish';
    // Add any other custom semantic types here
  }
}
```

Once augmented, these new semantic types (`'archive'`, `'publish'`) will be available for autocompletion and type-checking when using the `semanticType` prop on your `ZestButton` instances.

*(Note: Currently, there are no dedicated test scripts defined in `package.json`. Testing is typically done manually in a consuming project during development, or through dedicated test runners that would be added in the future.)*
