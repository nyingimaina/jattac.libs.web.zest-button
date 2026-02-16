import { useZest } from '../ZestContext';
import { semanticTypeDefaults as builtInSemanticDefaults } from '../semanticTypeDefaults';
import { ZestCustomProps } from '../ZestButton';

// Define a deep merge utility function
const deepMerge = (target: any, source: any): any => {
  const output = { ...target };

  if (target && typeof target === 'object' && source && typeof source === 'object') {
    Object.keys(source).forEach(key => {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        if (!(key in target))
          Object.assign(output, { [key]: source[key] });
        else
          output[key] = deepMerge(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

export const useZestConfig = (localZestProps?: ZestCustomProps) => {
  const globalConfig = useZest();
  const globalDefaultProps = globalConfig?.defaultProps;
  const customSemanticDefaults = globalConfig?.semanticTypeDefaults;

  // 1. Start with global defaults (lowest precedence)
  let effectiveZestConfig: ZestCustomProps = deepMerge({}, globalDefaultProps || {});

  // Determine the semanticType from either local props or the already-merged global props
  const semanticType = localZestProps?.semanticType || effectiveZestConfig.semanticType;

  if (semanticType) {
    // 2. Apply built-in semantic defaults
    if (builtInSemanticDefaults[semanticType]) {
      effectiveZestConfig = deepMerge(effectiveZestConfig, builtInSemanticDefaults[semanticType] as ZestCustomProps);
    }

    // 3. Apply custom semantic defaults from provider (overrides built-in ones)
    if (customSemanticDefaults && customSemanticDefaults[semanticType]) {
        effectiveZestConfig = deepMerge(effectiveZestConfig, customSemanticDefaults[semanticType] as ZestCustomProps);
    }
  }

  // 4. Apply local props (highest precedence)
  effectiveZestConfig = deepMerge(effectiveZestConfig, localZestProps || {});

  return effectiveZestConfig;
};

