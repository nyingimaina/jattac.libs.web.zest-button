import React from 'react';
import ZestContext, { ZestGlobalConfig } from './ZestContext';

interface ZestProviderProps {
  config: ZestGlobalConfig;
  children: React.ReactNode;
}

const ZestProvider: React.FC<ZestProviderProps> = ({ config, children }) => {
  return (
    <ZestContext.Provider value={config}>
      {children}
    </ZestContext.Provider>
  );
};

export default ZestProvider;
