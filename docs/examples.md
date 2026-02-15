# Examples: The Practical Cookbook

This document provides practical, real-world examples to solve common problems by combining multiple `ZestButton` features.

---

### Example 1: Robust Form Submission Button

Forms are the backbone of web applications. This example shows a `ZestButton` configured for a typical "Save" action on a settings page. It provides clear feedback to the user about the status of their action.

**Features Combined:**
- Asynchronous busy state (`onClick` returns a Promise)
- Success and failure feedback (`showCheckmark`, `showFailIcon`)
- Icons for context (`iconLeft`)
- `isDefault` prop to make it the primary action for the form

```tsx
import React, { useState } from 'react';
import ZestButton from 'jattac.libs.web.zest-button';
import { FaSave } from 'react-icons/fa6';

const SettingsForm = () => {
  const [shouldSucceed, setShouldSucceed] = useState(true);

  const handleSave = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default form submission
    console.log('Saving settings...');

    // Simulate an API call
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          console.log('Settings saved successfully!');
          resolve('Success');
        } else {
          console.error('Failed to save settings.');
          reject('Error');
        }
      }, 1500);
    });
  };

  return (
    <form style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', maxWidth: '400px' }}>
      <p>Edit your settings below.</p>
      <label>
        <input
          type="checkbox"
          checked={shouldSucceed}
          onChange={() => setShouldSucceed(!shouldSucceed)}
        />
        Simulate Success
      </label>
      <hr style={{ margin: '1rem 0' }} />
      <ZestButton
        type="submit"
        onClick={handleSave}
        zest={{
          isDefault: true,
          visualOptions: {
            iconLeft: <FaSave />,
            variant: 'success',
            fullWidth: true,
          },
        }}
      >
        Save Settings
      </ZestButton>
    </form>
  );
};
```

---

### Example 2: Safe Destructive Action Button

When building an interface for a destructive action like deleting data, it's crucial to prevent accidental clicks. This example combines the `danger` variant with the confirmation flow.

**Features Combined:**
- Confirmation flow (`confirmOptions`)
- `danger` variant for visual warning
- An icon to reinforce the action's purpose

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';
import { FaTrash } from 'react-icons/fa6';

const DeleteAction = () => {
  const handleDelete = () => {
    // In a real app, you would make an API call here
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

---

### Example 3: Secondary Action or Styled Link

Sometimes you need a button that looks less prominent, like a secondary action or something that acts like a link. The `outline` and `text` button styles are perfect for this.

**Features Combined:**
- `outline` and `text` button styles
- An icon for visual flair
- Can be used for navigation (e.g., with React Router) or secondary actions

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ModalFooter = () => {
  const handleClose = () => {
    alert('Closing modal...');
  };

  const handleLearnMore = () => {
    // In a real app with React Router, you might do: navigate('/learn-more');
    alert('Navigating to learn more page...');
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', padding: '1rem' }}>
      <ZestButton
        onClick={handleClose}
        zest={{
          buttonStyle: 'text',
          visualOptions: { iconLeft: <FaTimes /> },
        }}
      >
        Cancel
      </ZestButton>
      <ZestButton
        onClick={handleLearnMore}
        zest={{
          buttonStyle: 'outline',
          visualOptions: { iconRight: <FaExternalLinkAlt /> },
        }}
      >
        Learn More
      </ZestButton>
    </div>
  );
};
```

---

### Example 4: Simplified Semantic Buttons

Leverage the `semanticType` prop to declare button intent, allowing `ZestButton` to automatically apply default visuals and behaviors. This dramatically reduces boilerplate and improves consistency.

```tsx
import React from 'react';
import ZestButton from 'jattac.libs.web.zest-button';

const SemanticActions = () => {
  const handleGenericAction = (type: string) => {
    alert(`Action for '${type}' triggered!`);
    // In a real app, this would dispatch different logic based on 'type'
  };

  const handleSave = async () => {
    console.log('Saving...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Saved!');
  };

  const handleDelete = () => {
    console.log('Deleting...');
    // Simulated delete logic
    alert('Item permanently deleted!');
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
      {/* Save button with default save semantics */}
      <ZestButton zest={{ semanticType: 'save' }} onClick={handleSave}>
        Save Changes
      </ZestButton>

      {/* Delete button with default delete semantics (includes confirmation) */}
      <ZestButton zest={{ semanticType: 'delete' }} onClick={handleDelete}>
        Delete Record
      </ZestButton>

      {/* Add button with default add semantics */}
      <ZestButton zest={{ semanticType: 'add' }} onClick={() => handleGenericAction('add')}>
        Add New Item
      </ZestButton>

      {/* Download button */}
      <ZestButton zest={{ semanticType: 'download' }} onClick={() => handleGenericAction('download')}>
        Get Report
      </ZestButton>

      {/* Override semantic defaults with local props */}
      <ZestButton
        zest={{
          semanticType: 'save',
          visualOptions: {
            variant: 'standard', // Overrides semantic 'success'
            iconLeft: undefined, // Removes semantic icon
          },
        }}
        onClick={handleSave}
      >
        Save (Custom Style)
      </ZestButton>
    </div>
  );
};
```
