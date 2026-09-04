# The Cookbook: From First Button to Design System

Welcome to the ZestButton Cookbook! This is the core learning path for mastering `ZestButton`. Each recipe solves a real-world problem and builds on the concepts from the previous one. Start here to go from zero to expert.

---

## Table of Contents

- [Recipe 1: Your First Async Button](#recipe-1-your-first-async-button)
- [Recipe 2: The Safe "Delete" Button](#recipe-2-the-safe-delete-button)
- [Recipe 3: Standardizing Your Buttons with a Global Config](#recipe-3-standardizing-your-buttons-with-a-global-config)
- [Recipe 4: Creating a Custom "Archive" Button](#recipe-4-creating-a-custom-archive-button)
- [Recipe 5: A Split Button with Overflow Actions](#recipe-5-a-split-button-with-overflow-actions)

---

### Recipe 1: Your First Async Button

**Goal:** Create a button that automatically shows a loading spinner during an operation and gives feedback when it's done.

**Problem:** You have an API call that takes time. You need to prevent the user from clicking the button multiple times and clearly show when the action is complete.

**Solution:** Simply have your `onClick` handler return a `Promise`. `ZestButton` handles the rest. This example also shows success and failure states.

```tsx
import React, { useState } from 'react';
import ZestButton from 'jattac.libs.web.zest-button';
import { FaSave } from 'react-icons/fa';

const SaveButton = () => {
  const [shouldSucceed, setShouldSucceed] = useState(true);

  const handleSave = async () => {
    console.log('Saving...');
    // Simulate an API call
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        shouldSucceed ? resolve('Success!') : reject('Error!');
      }, 1500);
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <label>
        <input
          type="checkbox"
          checked={shouldSucceed}
          onChange={() => setShouldSucceed(e => !e)}
        />
        Simulate Success
      </label>
      <ZestButton
        onClick={handleSave}
        zest={{
          visualOptions: { iconLeft: <FaSave />, stretch: true },
        }}
      >
        Save Settings
      </ZestButton>
    </div>
  );
};
```
*For more details on all available options, see the [`BusyOptions`](./api.md#busyoptions) and [`SuccessOptions`](./api.md#successoptions) in our API reference.*

---

### Recipe 2: The Safe "Delete" Button

**Goal:** Create a button for a destructive action that requires a second click to confirm.

**Problem:** Destructive actions like deleting data are dangerous. A user might click the button by accident.

**Solution:** Use the `confirmOptions` prop. This forces the user to click once to start a countdown, and a second time to execute the action. Combining this with a `danger` variant provides a clear visual warning.

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';
import { FaTrash } from 'react-icons/fa';

const DeleteButton = () => {
  const handleDelete = () => {
    alert('Item has been permanently deleted.');
  };

  return (
    <ZestButton
      onClick={handleDelete}
      zest={{
        visualOptions: {
          variant: 'danger',
          iconLeft: <FaTrash />,
        },
        confirmOptions: {
          displayLabel: 'Confirm Deletion',
          timeoutSecs: 5,
        },
      }}
    >
      Delete Account
    </ZestButton>
  );
};
```
*For more details, see the [`ConfirmOptions`](./api.md#confirmoptions) in our API reference.*

---

### Recipe 3: Standardizing Your Buttons with a Global Config

**Goal:** Define a consistent look and feel for all buttons in your application without repeating props.

**Problem:** Your app has dozens of buttons. Specifying `size: 'sm'` or `buttonStyle: 'outline'` on every single one is tedious and error-prone.

**Solution:** Wrap your application in the `ZestProvider` and pass a `config` object. Any props in `defaultProps` will be applied to every `ZestButton` within the provider. Local props on a button will always override the global default.

```tsx
// In your main App.tsx
import React from 'react';
import { ZestButtonConfigProvider, ZestButton } from 'jattac.libs.web.zest-button';

const appZestConfig = {
  defaultProps: {
    visualOptions: {
      size: 'sm', // Make all buttons small by default
    },
    buttonStyle: 'outline', // Make all buttons outline by default
  },
};

const App = () => (
  <ZestButtonConfigProvider config={appZestConfig}>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ZestButton>I'm a small outline button</ZestButton>
      <ZestButton>So am I</ZestButton>
      <ZestButton zest={{ visualOptions: { size: 'lg' }, buttonStyle: 'solid' }}>
        I'm a large solid button! (Local override)
      </ZestButton>
    </div>
  </ZestButtonConfigProvider>
);
```
*For a full list of provider settings, see the [`ZestGlobalConfig`](./api.md#zestglobalconfig) documentation. To understand the precedence rules, see the [Configuration Guide](./configuration.md).*

---

### Recipe 4: Creating a Custom "Archive" Button

**Goal:** Create a new, reusable button "type" with its own specific icon, style, and behavior that can be used anywhere in the app.

**Problem:** You have a common action in your app, like "Archive," that should always look and feel the same. You want to avoid configuring it manually each time and just be able to write `zest={{ semanticType: 'archive' }}`.

**Solution:** This is a two-step process that combines **TypeScript Module Augmentation** with the **`ZestButtonConfigProvider`**.

**Step 1: Define the new type**
In your project's type declarations file (e.g., `src/zest.d.ts`), augment the `CustomZestSemanticTypes` interface.

```typescript
// src/zest.d.ts
import 'jattac.libs.web.zest-button';
import { FaArchive } from 'react-icons/fa';

// 1. Tell ZestButton that 'archive' is a valid semantic type
declare module 'jattac.libs.web.zest-button' {
  export interface CustomZestSemanticTypes {
    archive: 'archive';
  }
}
```
*(For more on this, see the [Contributor's Guide](./development.md#extending-semantic-types).)*

**Step 2: Provide the default configuration**
In your `App.tsx`, use the `semanticTypeDefaults` property in the `ZestButtonConfigProvider` to define the default props for your new `'archive'` type.

```tsx
// In your main App.tsx
import React from 'react';
import { ZestButtonConfigProvider, ZestButton } from 'jattac.libs.web.zest-button';
import { FaArchive } from 'react-icons/fa';

const appZestConfig = {
  semanticTypeDefaults: {
    // 2. Define the default props for the 'archive' type
    archive: {
      buttonStyle: 'outline',
      visualOptions: {
        iconLeft: <FaArchive />,
        variant: 'standard',
      },
      confirmOptions: {
        displayLabel: 'Confirm Archive?',
        timeoutSecs: 10,
      },
    },
    // You can also override built-in types here!
    delete: {
      buttonStyle: 'outline', // Make all delete buttons 'outline'
    }
  },
};

const App = () => (
  <ZestButtonConfigProvider config={appZestConfig}>
    <div style={{ display: 'flex', gap: '1rem' }}>
        {/* 3. Now just use it! */}
        <ZestButton 
          zest={{ semanticType: 'archive' }} 
          onClick={() => alert('Archived!')}
        >
          Archive
        </ZestButton>

        <ZestButton 
          zest={{ semanticType: 'delete' }}
          onClick={() => alert('Deleted!')}
        >
          Delete
        </ZestButton>
    </div>
  </ZestButtonConfigProvider>
);
```
This powerful pattern allows you to build a complete, consistent design system for all button actions in your application. For more details on configuration, see the [Configuration Guide](./configuration.md).*

---

### Recipe 5: A Split Button with Overflow Actions

**Goal:** Create a button with one obvious default action ("Export as CSV") plus a few situational alternatives ("Export as PDF", "Export as JSON"), without cluttering the UI with three separate buttons.

**Problem:** You have a primary action and a handful of related, less-common actions. Placing them all as top-level buttons crowds the UI; hiding all of them behind a menu makes the primary action less discoverable and adds an extra click for the common case.

**Solution:** Pass `dropdownOptions` in `zest`. `ZestButton` renders as two visually-fused segments: the main action (left) fires immediately on click, exactly like a normal `ZestButton`, while the chevron (right) opens a menu of the extra options. Each option is independent — it can have its own icon, `busyOptions`, `successOptions`, or `confirmOptions`, running through the same machinery as the main button.

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';
import { FaFileCsv, FaFilePdf, FaFileCode, FaTrash } from 'react-icons/fa6';

const ExportButton = () => {
  const exportAs = (format: string) => async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    alert(`Exported as ${format}!`);
  };

  return (
    <ZestButton
      onClick={exportAs('CSV')}
      zest={{
        visualOptions: { iconLeft: <FaFileCsv /> },
        dropdownOptions: [
          { label: 'Export as PDF', icon: <FaFilePdf />, onClick: exportAs('PDF') },
          { label: 'Export as JSON', icon: <FaFileCode />, onClick: exportAs('JSON') },
          {
            label: 'Delete export history',
            icon: <FaTrash />,
            onClick: async () => alert('History cleared.'),
            confirmOptions: { displayLabel: 'Confirm Delete', timeoutSecs: 5 },
          },
        ],
      }}
    >
      Export as CSV
    </ZestButton>
  );
};
```

**Theming and sizing the menu independently:** the dropdown menu panel defaults to a light theme and a minimum width matching the whole split button, regardless of the main button's own `theme`. Both are configurable, either per-button or app-wide via `ZestButtonConfigProvider`'s `defaultProps`:

```tsx
<ZestButton
  zest={{
    theme: 'dark',
    dropdownTheme: 'dark',   // pin the menu's theme, instead of following the OS/browser preference
    dropdownWidth: '16rem',  // force a specific minimum width instead of matching the button
    dropdownOptions: [{ label: 'Export as PDF', onClick: exportAs('PDF') }],
  }}
>
  Export as CSV
</ZestButton>
```

*For the full prop reference, see [`dropdownOptions`](./api.md#zestcustomprops) and [`ZestDropdownOption`](./api.md#zestdropdownoption) in our API reference.*

---

[⬅️ Previous: README](../README.md) | [Next: Features Showcase ➡️](./features.md)
