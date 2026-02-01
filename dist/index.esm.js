import require$$0, { useEffect, useState, useRef } from 'react';
import { FaSpinner } from 'react-icons/fa6';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=require$$0,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = require$$0;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self) ;
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	var didWarnAboutKeySpread = {};
	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum();

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    {
	      if (hasOwnProperty.call(props, 'key')) {
	        var componentName = getComponentNameFromType(type);
	        var keys = Object.keys(props).filter(function (k) {
	          return k !== 'key';
	        });
	        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

	        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
	          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

	          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

	          didWarnAboutKeySpread[componentName + beforeExample] = true;
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}

var jsxRuntimeExports = jsxRuntime.exports;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* Styles/ZestButton.module.css */\n\n/* Define base variables for light mode */\n:root {\n  --zest-color-standard-bg: #1e40af;\n  --zest-color-standard-bg-hover: #1a35a0;\n  --zest-color-standard-text: white;\n  --zest-color-standard-border: #1e40af;\n\n  --zest-color-success-bg: #059669;\n  --zest-color-success-bg-hover: #047857;\n  --zest-color-success-text: white;\n  --zest-color-success-border: #059669;\n\n  --zest-color-danger-bg: #dc2626;\n  --zest-color-danger-bg-hover: #b91c1c;\n  --zest-color-danger-text: white;\n  --zest-color-danger-border: #dc2626;\n\n  --zest-color-disabled-bg: #cbd5e1;\n  --zest-color-disabled-bg-hover: #aeb9c4;\n  --zest-color-disabled-text: #6b7280;\n  --zest-color-disabled-border: #cbd5e1;\n\n  --zest-color-icon-success: #10b981;\n  --zest-color-icon-fail: #ef4444;\n}\n\n/* Dark mode adjustments via system preference */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --zest-color-standard-bg: #3b82f6;\n    --zest-color-standard-bg-hover: #2563eb;\n    --zest-color-standard-text: white;\n    --zest-color-standard-border: #3b82f6;\n\n    --zest-color-success-bg: #34d399;\n    --zest-color-success-bg-hover: #10b981;\n    --zest-color-success-text: white;\n    --zest-color-success-border: #34d399;\n\n    --zest-color-danger-bg: #ef4444;\n    --zest-color-danger-bg-hover: #dc2626;\n    --zest-color-danger-text: white;\n    --zest-color-danger-border: #ef4444;\n\n    --zest-color-disabled-bg: #4b5563;\n    --zest-color-disabled-bg-hover: #6b7280;\n    --zest-color-disabled-text: #9ca3af;\n    --zest-color-disabled-border: #4b5563;\n\n    --zest-color-icon-success: #34d399;\n    --zest-color-icon-fail: #ef4444;\n  }\n}\n\n/* Theme override classes */\n.ZestButton-module_force-light__zZTIZ {\n  --zest-color-standard-bg: #1e40af;\n  --zest-color-standard-bg-hover: #1a35a0;\n  --zest-color-standard-text: white;\n  --zest-color-standard-border: #1e40af;\n\n  --zest-color-success-bg: #059669;\n  --zest-color-success-bg-hover: #047857;\n  --zest-color-success-text: white;\n  --zest-color-success-border: #059669;\n\n  --zest-color-danger-bg: #dc2626;\n  --zest-color-danger-bg-hover: #b91c1c;\n  --zest-color-danger-text: white;\n  --zest-color-danger-border: #dc2626;\n\n  --zest-color-disabled-bg: #cbd5e1;\n  --zest-color-disabled-bg-hover: #aeb9c4;\n  --zest-color-disabled-text: #6b7280;\n  --zest-color-disabled-border: #cbd5e1;\n\n  --zest-color-icon-success: #10b981;\n  --zest-color-icon-fail: #ef4444;\n}\n\n.ZestButton-module_force-dark__cx74D {\n  --zest-color-standard-bg: #3b82f6;\n  --zest-color-standard-bg-hover: #2563eb;\n  --zest-color-standard-text: white;\n  --zest-color-standard-border: #3b82f6;\n\n  --zest-color-success-bg: #34d399;\n  --zest-color-success-bg-hover: #10b981;\n  --zest-color-success-text: white;\n  --zest-color-success-border: #34d399;\n\n  --zest-color-danger-bg: #ef4444;\n  --zest-color-danger-bg-hover: #dc2626;\n  --zest-color-danger-text: white;\n  --zest-color-danger-border: #ef4444;\n\n  --zest-color-disabled-bg: #4b5563;\n  --zest-color-disabled-bg-hover: #6b7280;\n  --zest-color-disabled-text: #9ca3af;\n  --zest-color-disabled-border: #4b5563;\n\n  --zest-color-icon-success: #34d399;\n  --zest-color-icon-fail: #ef4444;\n}\n\n\n.ZestButton-module_button__KDafc {\n  font-family: \"Segoe UI\", Roboto, sans-serif;\n  font-weight: 600;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease, border-color 0.2s ease;\n  position: relative;\n  padding: 0.6em 1.2em;\n  overflow: hidden;\n  border: none; /* Default to no border, overridden by outline/dashed */\n}\n\n/* Base styles for different button styles */\n.ZestButton-module_solid__cu4tr {\n  background-color: var(--zest-color-standard-bg);\n  color: var(--zest-color-standard-text);\n}\n.ZestButton-module_solid__cu4tr:hover:not(:disabled) {\n  background-color: var(--zest-color-standard-bg-hover);\n}\n\n.ZestButton-module_outline__esgLq {\n  background-color: transparent;\n  border: 2px solid var(--zest-color-standard-border);\n  color: var(--zest-color-standard-border);\n}\n.ZestButton-module_outline__esgLq:hover:not(:disabled) {\n  background-color: var(--zest-color-standard-bg);\n  color: var(--zest-color-standard-text);\n}\n\n.ZestButton-module_text__8X1xD {\n  background-color: transparent;\n  border: none;\n  color: var(--zest-color-standard-bg);\n}\n.ZestButton-module_text__8X1xD:hover:not(:disabled) {\n  background-color: rgba(var(--zest-color-standard-bg-rgb, 30, 64, 175), 0.1); /* Fallback RGB for text hover */\n}\n\n.ZestButton-module_dashed__ebKYF {\n  background-color: transparent;\n  border: 2px dashed var(--zest-color-standard-border);\n  color: var(--zest-color-standard-border);\n}\n.ZestButton-module_dashed__ebKYF:hover:not(:disabled) {\n  background-color: rgba(var(--zest-color-standard-bg-rgb, 30, 64, 175), 0.1); /* Fallback RGB for dashed hover */\n}\n\n\n/* Variant overrides for solid style */\n.ZestButton-module_solid__cu4tr.ZestButton-module_standard__T3EGM { /* Already handled by .solid base */ }\n.ZestButton-module_solid__cu4tr.ZestButton-module_success__XEptA {\n  background-color: var(--zest-color-success-bg);\n  color: var(--zest-color-success-text);\n}\n.ZestButton-module_solid__cu4tr.ZestButton-module_success__XEptA:hover:not(:disabled) {\n  background-color: var(--zest-color-success-bg-hover);\n}\n.ZestButton-module_solid__cu4tr.ZestButton-module_danger__nJpJ- {\n  background-color: var(--zest-color-danger-bg);\n  color: var(--zest-color-danger-text);\n}\n.ZestButton-module_solid__cu4tr.ZestButton-module_danger__nJpJ-:hover:not(:disabled) {\n  background-color: var(--zest-color-danger-bg-hover);\n}\n\n/* Variant overrides for outline style */\n.ZestButton-module_outline__esgLq.ZestButton-module_standard__T3EGM { /* Already handled by .outline base */ }\n.ZestButton-module_outline__esgLq.ZestButton-module_success__XEptA {\n  border-color: var(--zest-color-success-border);\n  color: var(--zest-color-success-border);\n}\n.ZestButton-module_outline__esgLq.ZestButton-module_success__XEptA:hover:not(:disabled) {\n  background-color: var(--zest-color-success-bg);\n  color: var(--zest-color-success-text);\n}\n.ZestButton-module_outline__esgLq.ZestButton-module_danger__nJpJ- {\n  border-color: var(--zest-color-danger-border);\n  color: var(--zest-color-danger-border);\n}\n.ZestButton-module_outline__esgLq.ZestButton-module_danger__nJpJ-:hover:not(:disabled) {\n  background-color: var(--zest-color-danger-bg);\n  color: var(--zest-color-danger-text);\n}\n\n/* Variant overrides for text style */\n.ZestButton-module_text__8X1xD.ZestButton-module_standard__T3EGM { /* Already handled by .text base */ }\n.ZestButton-module_text__8X1xD.ZestButton-module_success__XEptA {\n  color: var(--zest-color-success-bg);\n}\n.ZestButton-module_text__8X1xD.ZestButton-module_success__XEptA:hover:not(:disabled) {\n  background-color: rgba(var(--zest-color-success-bg-rgb, 5, 150, 105), 0.1);\n}\n.ZestButton-module_text__8X1xD.ZestButton-module_danger__nJpJ- {\n  color: var(--zest-color-danger-bg);\n}\n.ZestButton-module_text__8X1xD.ZestButton-module_danger__nJpJ-:hover:not(:disabled) {\n  background-color: rgba(var(--zest-color-danger-bg-rgb, 220, 38, 38), 0.1);\n}\n\n/* Variant overrides for dashed style */\n.ZestButton-module_dashed__ebKYF.ZestButton-module_standard__T3EGM { /* Already handled by .dashed base */ }\n.ZestButton-module_dashed__ebKYF.ZestButton-module_success__XEptA {\n  border-color: var(--zest-color-success-border);\n  color: var(--zest-color-success-border);\n}\n.ZestButton-module_dashed__ebKYF.ZestButton-module_success__XEptA:hover:not(:disabled) {\n  background-color: rgba(var(--zest-color-success-bg-rgb, 5, 150, 105), 0.1);\n}\n.ZestButton-module_dashed__ebKYF.ZestButton-module_danger__nJpJ- {\n  border-color: var(--zest-color-danger-border);\n  color: var(--zest-color-danger-border);\n}\n.ZestButton-module_dashed__ebKYF.ZestButton-module_danger__nJpJ-:hover:not(:disabled) {\n  background-color: rgba(var(--zest-color-danger-bg-rgb, 220, 38, 38), 0.1);\n}\n\n\n/* Disabled state overrides for different button styles */\n.ZestButton-module_solid__cu4tr:disabled, .ZestButton-module_solid__cu4tr.ZestButton-module_disabled__gw6y3 {\n  background-color: var(--zest-color-disabled-bg);\n  color: var(--zest-color-disabled-text);\n  border-color: var(--zest-color-disabled-border);\n}\n.ZestButton-module_outline__esgLq:disabled, .ZestButton-module_outline__esgLq.ZestButton-module_disabled__gw6y3 {\n  background-color: transparent;\n  border-color: var(--zest-color-disabled-border);\n  color: var(--zest-color-disabled-text);\n}\n.ZestButton-module_text__8X1xD:disabled, .ZestButton-module_text__8X1xD.ZestButton-module_disabled__gw6y3 {\n  background-color: transparent;\n  color: var(--zest-color-disabled-text);\n}\n.ZestButton-module_dashed__ebKYF:disabled, .ZestButton-module_dashed__ebKYF.ZestButton-module_disabled__gw6y3 {\n  background-color: transparent;\n  border-color: var(--zest-color-disabled-border);\n  color: var(--zest-color-disabled-text);\n}\n\n\n/* Layout */\n.ZestButton-module_fullWidth__2ziwk {\n  width: 100%;\n}\n\n.ZestButton-module_sm__G1vAP {\n  font-size: 0.85rem;\n  padding: 0.4em 0.8em;\n}\n\n.ZestButton-module_md__Y-PMO {\n  font-size: 1rem;\n  padding: 0.6em 1.2em;\n}\n\n.ZestButton-module_lg__AQgdf {\n  font-size: 1.125rem;\n  padding: 0.8em 1.6em;\n}\n\n.ZestButton-module_inner__1j2Fr {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.ZestButton-module_spinner__l2hLe {\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  animation: ZestButton-module_spin__4asdw 0.75s linear infinite;\n  color: currentColor; /* Inherit color from button text */\n}\n\n.ZestButton-module_content__hlea3 {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5em;\n}\n\n.ZestButton-module_label__8x263 {\n  display: inline-block;\n}\n\n.ZestButton-module_icon__B3DFi {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Success + Fail Icons */\n.ZestButton-module_animatedCheck__8K4K- {\n  width: 1.25em;\n  height: 1.25em;\n  color: var(--zest-color-icon-success);\n  animation: ZestButton-module_fadeIn__iEave 0.25s ease-out;\n}\n\n.ZestButton-module_animatedX__KQnt7 {\n  width: 1.25em;\n  height: 1.25em;\n  color: var(--zest-color-icon-fail);\n  animation: ZestButton-module_fadeIn__iEave 0.25s ease-out;\n}\n\n/* Stroke animations */\n.ZestButton-module_animatedCheck__8K4K- path {\n  stroke-dasharray: 24;\n  stroke-dashoffset: 24;\n  animation: ZestButton-module_drawCheck__3DyjT 0.4s ease-out forwards;\n}\n\n.ZestButton-module_animatedX__KQnt7 line {\n  stroke-dasharray: 24;\n  stroke-dashoffset: 24;\n  animation: ZestButton-module_drawCheck__3DyjT 0.4s ease-out forwards;\n}\n\n/* New: apply spacing between left icon and text */\n.ZestButton-module_icon__B3DFi:first-child {\n  margin-right: 0.7em;\n}\n\n/* Optional override for iconRight if needed */\n.ZestButton-module_icon__B3DFi:last-child {\n  margin-left: 0.7em;\n}\n\n/* Animations */\n@keyframes ZestButton-module_spin__4asdw {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes ZestButton-module_drawCheck__3DyjT {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n\n@keyframes ZestButton-module_fadeIn__iEave {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes ZestButton-module_shakeIt__ox-R3 {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n  20%,\n  60% {\n    transform: translateX(-4px);\n  }\n  40%,\n  80% {\n    transform: translateX(4px);\n  }\n}\n\n.ZestButton-module_shake__NtIjf {\n  animation: ZestButton-module_shakeIt__ox-R3 0.4s ease;\n  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.6);\n}\n";
var styles = {"force-light":"ZestButton-module_force-light__zZTIZ","force-dark":"ZestButton-module_force-dark__cx74D","button":"ZestButton-module_button__KDafc","solid":"ZestButton-module_solid__cu4tr","outline":"ZestButton-module_outline__esgLq","text":"ZestButton-module_text__8X1xD","dashed":"ZestButton-module_dashed__ebKYF","standard":"ZestButton-module_standard__T3EGM","success":"ZestButton-module_success__XEptA","danger":"ZestButton-module_danger__nJpJ-","disabled":"ZestButton-module_disabled__gw6y3","fullWidth":"ZestButton-module_fullWidth__2ziwk","sm":"ZestButton-module_sm__G1vAP","md":"ZestButton-module_md__Y-PMO","lg":"ZestButton-module_lg__AQgdf","inner":"ZestButton-module_inner__1j2Fr","spinner":"ZestButton-module_spinner__l2hLe","spin":"ZestButton-module_spin__4asdw","content":"ZestButton-module_content__hlea3","label":"ZestButton-module_label__8x263","icon":"ZestButton-module_icon__B3DFi","animatedCheck":"ZestButton-module_animatedCheck__8K4K-","fadeIn":"ZestButton-module_fadeIn__iEave","animatedX":"ZestButton-module_animatedX__KQnt7","drawCheck":"ZestButton-module_drawCheck__3DyjT","shake":"ZestButton-module_shake__NtIjf","shakeIt":"ZestButton-module_shakeIt__ox-R3"};
styleInject(css_248z);

// --- Components ---
const AnimatedCheckmark = () => (jsxRuntimeExports.jsx("svg", { className: styles.animatedCheck, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: jsxRuntimeExports.jsx("path", { d: "M5 13l4 4L19 7" }) }));
const AnimatedX = () => (jsxRuntimeExports.jsxs("svg", { className: styles.animatedX, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntimeExports.jsx("path", { d: "M6 6L18 18" }), jsxRuntimeExports.jsx("path", { d: "M6 18L18 6" })] }));
const ZestButton = ({ visualOptions = {}, busyOptions = {}, successOptions = {}, isDefault = false, className = "", disabled, children, onClick, // Destructure onClick here
theme = 'system', // New prop with default
buttonStyle = 'solid', // New prop with default
...props }) => {
    const { variant = "standard", size = "md", fullWidth = false, iconLeft, iconRight, } = visualOptions;
    const { handleInternally = true, preventRageClick = true, minBusyDurationMs = 500, } = busyOptions;
    const { showCheckmark = true, showFailIcon = true, autoResetAfterMs = 2000, } = successOptions;
    // Edge Case 4: Add warnings for very short durations in development
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            if (minBusyDurationMs > 0 && minBusyDurationMs < 100) {
                console.warn(`ZestButton: 'minBusyDurationMs' is set to ${minBusyDurationMs}ms. Very short durations can lead to visual flickering and a poor user experience. Consider a value of 100ms or more.`);
            }
            if (autoResetAfterMs > 0 && autoResetAfterMs < 100) {
                console.warn(`ZestButton: 'autoResetAfterMs' is set to ${autoResetAfterMs}ms. Very short durations can make success/fail feedback hard to perceive. Consider a value of 100ms or more.`);
            }
        }
    }, [minBusyDurationMs, autoResetAfterMs]);
    const [internalBusy, setInternalBusy] = useState(false);
    const [wasSuccessful, setWasSuccessful] = useState(false);
    const [wasFailed, setWasFailed] = useState(false);
    const buttonRef = useRef(null);
    const failTimeoutRef = useRef(null); // Bug 1: Add useRef for failTimeout
    const [currentChildren, setCurrentChildren] = useState(children);
    const [awaitingConfirm, setAwaitingConfirm] = useState(false);
    // ✅ interval ref for confirm countdown
    const confirmIntervalRef = useRef(null);
    // Theme state and detection
    const [systemTheme, setSystemTheme] = useState('light');
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
        };
        handleChange(); // Set initial theme
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);
    const effectiveTheme = theme === 'system' ? systemTheme : theme;
    // keep children in sync when not in confirm mode
    useEffect(() => {
        if (!awaitingConfirm) {
            setCurrentChildren(children);
        }
    }, [children, awaitingConfirm]);
    const effectiveBusy = typeof props["aria-busy"] === "boolean"
        ? Boolean(props["aria-busy"])
        : handleInternally
            ? internalBusy
            : false;
    const isDisabled = disabled ||
        effectiveBusy ||
        (preventRageClick && (wasSuccessful || wasFailed));
    // Move handleClick, stopWaiting, and handleConfirmClick declarations here
    const stopWaiting = () => {
        if (confirmIntervalRef.current) {
            clearInterval(confirmIntervalRef.current);
            confirmIntervalRef.current = null;
        }
        setCurrentChildren(children);
        setAwaitingConfirm(false);
    };
    const handleClick = async (e) => {
        if (preventRageClick && internalBusy)
            return;
        if (handleInternally && typeof onClick === "function") {
            try {
                setWasSuccessful(false);
                setWasFailed(false);
                setInternalBusy(true);
                const startTime = Date.now();
                await onClick(e);
                const elapsed = Date.now() - startTime;
                const remaining = Math.max(minBusyDurationMs - elapsed, 0);
                if (remaining > 0) {
                    await new Promise((resolve) => setTimeout(resolve, remaining));
                }
                if (showCheckmark)
                    setWasSuccessful(true);
            }
            catch (err) {
                console.error(err);
                if (showFailIcon)
                    setWasFailed(true);
            }
            finally {
                setInternalBusy(false);
            }
        }
        else if (onClick) {
            onClick(e);
        }
    };
    const handleConfirmClick = async (e) => {
        if (!props.confirmOptions) {
            return handleClick(e);
        }
        // Edge Case 3: Add warning for missing onClick with confirmOptions
        if (props.confirmOptions && !onClick) { // Use destructured onClick
            console.warn("ZestButton: 'confirmOptions' are provided but 'onClick' handler is missing. The button will confirm but perform no action.");
        }
        if (awaitingConfirm) {
            stopWaiting();
            return handleClick(e);
        }
        const { displayLabel, timeoutSecs } = props.confirmOptions;
        const startTime = Date.now();
        setAwaitingConfirm(true);
        setCurrentChildren(`${displayLabel} (${timeoutSecs}s)`); // Initial display
        confirmIntervalRef.current = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const timeRemaining = timeoutSecs - Math.floor(elapsed / 1000);
            if (timeRemaining <= 0) {
                stopWaiting();
                setWasFailed(true); // Indicate failure for shake animation
                // Bug 1: Clear any existing timeout before setting a new one
                if (failTimeoutRef.current) {
                    clearTimeout(failTimeoutRef.current);
                }
                failTimeoutRef.current = setTimeout(() => {
                    setWasFailed(false);
                    failTimeoutRef.current = null; // Clear ref after timeout fires
                }, 400); // Shake animation duration
            }
            else {
                setCurrentChildren(`${displayLabel} (${timeRemaining}s)`);
            }
        }, 1000); // Update once per second
    };
    // auto-reset success/failure state
    useEffect(() => {
        if ((wasSuccessful || wasFailed) && autoResetAfterMs) {
            const timeout = setTimeout(() => {
                setWasSuccessful(false);
                setWasFailed(false);
            }, autoResetAfterMs);
            return () => clearTimeout(timeout);
        }
    }, [wasSuccessful, wasFailed, autoResetAfterMs]);
    // Enter key handler if isDefault
    useEffect(() => {
        if (!isDefault || isDisabled)
            return;
        const listener = (e) => {
            const target = e.target;
            if (e.key === "Enter" &&
                !e.repeat &&
                !e.defaultPrevented &&
                !(target instanceof HTMLTextAreaElement)) {
                e.preventDefault();
                // Bug 2: Directly call handleConfirmClick to respect confirmation logic
                handleConfirmClick(e);
            }
        };
        document.addEventListener("keydown", listener);
        return () => document.removeEventListener("keydown", listener);
    }, [isDefault, isDisabled, handleConfirmClick]); // Bug 2: Add handleConfirmClick to dependencies
    // cleanup on unmount
    useEffect(() => {
        return () => {
            if (confirmIntervalRef.current) {
                clearInterval(confirmIntervalRef.current);
            }
            // Bug 1: Add cleanup for failTimeoutRef
            if (failTimeoutRef.current) {
                clearTimeout(failTimeoutRef.current);
            }
        };
    }, []);
    const renderLeftIcon = () => {
        if (effectiveBusy) {
            return (jsxRuntimeExports.jsx("span", { className: `${styles.icon} ${styles.fadeIn}`, children: jsxRuntimeExports.jsx(FaSpinner, { className: styles.spinner }) }));
        }
        else if (wasSuccessful && showCheckmark) {
            return (jsxRuntimeExports.jsx("span", { className: `${styles.icon} ${styles.fadeIn}`, children: jsxRuntimeExports.jsx(AnimatedCheckmark, {}) }));
        }
        else if (wasFailed && showFailIcon) {
            return (jsxRuntimeExports.jsx("span", { className: `${styles.icon} ${styles.fadeIn}`, children: jsxRuntimeExports.jsx(AnimatedX, {}) }));
        }
        else if (iconLeft) {
            return jsxRuntimeExports.jsx("span", { className: styles.icon, children: iconLeft });
        }
        return null;
    };
    return (jsxRuntimeExports.jsx("button", { ref: buttonRef, className: [
            styles.button,
            styles[buttonStyle], // Apply buttonStyle class
            styles[variant],
            styles[size],
            fullWidth ? styles.fullWidth : "",
            isDisabled ? styles.disabled : "",
            wasFailed ? styles.shake : "",
            effectiveTheme === 'light' ? styles['force-light'] : styles['force-dark'], // Apply theme override class
            className,
        ].join(" "), disabled: isDisabled, "aria-busy": effectiveBusy, onClick: handleConfirmClick, ...props, children: jsxRuntimeExports.jsxs("span", { className: styles.inner, children: [renderLeftIcon(), jsxRuntimeExports.jsxs("span", { className: styles.content, children: [currentChildren, iconRight && jsxRuntimeExports.jsx("span", { className: styles.icon, children: iconRight })] })] }) }));
};

export { ZestButton as default };
//# sourceMappingURL=index.esm.js.map
