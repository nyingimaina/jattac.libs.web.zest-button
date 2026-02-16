import React from 'react';
import ZestButtonConfigContext, { ZestGlobalConfig } from './ZestButtonConfigContext';

interface ZestButtonConfigProviderProps {
  config: ZestGlobalConfig;
  children: React.ReactNode;
}

const ZestButtonConfigProvider: React.FC<ZestButtonConfigProviderProps> = ({ config, children }) => {
  return (
    <ZestButtonConfigContext.Provider value={config}>
      {children}
    </ZestButtonConfigContext.Provider>
  );
};

export default ZestButtonConfigProvider;
