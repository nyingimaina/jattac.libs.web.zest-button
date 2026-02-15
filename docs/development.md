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

*(Note: Currently, there are no dedicated test scripts defined in `package.json`. Testing is typically done manually in a consuming project during development, or through dedicated test runners that would be added in the future.)*
