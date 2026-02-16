import React, { useContext } from 'react';
import { ZestCustomProps } from './ZestButton'; // Assuming ZestCustomProps is exported from ZestButton.tsx

// Define the shape of the global Zest configuration
export interface ZestGlobalConfig {
  defaultProps?: ZestCustomProps;
  semanticTypeDefaults?: Partial<Record<string, Partial<ZestCustomProps>>>;
  // Add other global settings here in the future if needed
}

// Create the Zest Context with a default empty configuration
const ZestContext = React.createContext<ZestGlobalConfig | undefined>(undefined);

// Custom hook to use the Zest Context
export const useZest = () => {
  const context = useContext(ZestContext);
  // Optional: Add a check here if context is undefined, meaning provider is not used
  // if (context === undefined) {
  //   console.warn("useZest must be used within a ZestProvider. Falling back to default ZestButton props.");
  // }
  return context;
};

export default ZestContext;
