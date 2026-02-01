import require$$0, { useState, useRef, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function getComponentNameFromType(type) {
	      if (null == type) return null;
	      if ("function" === typeof type)
	        return type.$$typeof === REACT_CLIENT_REFERENCE
	          ? null
	          : type.displayName || type.name || null;
	      if ("string" === typeof type) return type;
	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return "Fragment";
	        case REACT_PROFILER_TYPE:
	          return "Profiler";
	        case REACT_STRICT_MODE_TYPE:
	          return "StrictMode";
	        case REACT_SUSPENSE_TYPE:
	          return "Suspense";
	        case REACT_SUSPENSE_LIST_TYPE:
	          return "SuspenseList";
	        case REACT_ACTIVITY_TYPE:
	          return "Activity";
	      }
	      if ("object" === typeof type)
	        switch (
	          ("number" === typeof type.tag &&
	            console.error(
	              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
	            ),
	          type.$$typeof)
	        ) {
	          case REACT_PORTAL_TYPE:
	            return "Portal";
	          case REACT_CONTEXT_TYPE:
	            return type.displayName || "Context";
	          case REACT_CONSUMER_TYPE:
	            return (type._context.displayName || "Context") + ".Consumer";
	          case REACT_FORWARD_REF_TYPE:
	            var innerType = type.render;
	            type = type.displayName;
	            type ||
	              ((type = innerType.displayName || innerType.name || ""),
	              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	            return type;
	          case REACT_MEMO_TYPE:
	            return (
	              (innerType = type.displayName || null),
	              null !== innerType
	                ? innerType
	                : getComponentNameFromType(type.type) || "Memo"
	            );
	          case REACT_LAZY_TYPE:
	            innerType = type._payload;
	            type = type._init;
	            try {
	              return getComponentNameFromType(type(innerType));
	            } catch (x) {}
	        }
	      return null;
	    }
	    function testStringCoercion(value) {
	      return "" + value;
	    }
	    function checkKeyStringCoercion(value) {
	      try {
	        testStringCoercion(value);
	        var JSCompiler_inline_result = !1;
	      } catch (e) {
	        JSCompiler_inline_result = true;
	      }
	      if (JSCompiler_inline_result) {
	        JSCompiler_inline_result = console;
	        var JSCompiler_temp_const = JSCompiler_inline_result.error;
	        var JSCompiler_inline_result$jscomp$0 =
	          ("function" === typeof Symbol &&
	            Symbol.toStringTag &&
	            value[Symbol.toStringTag]) ||
	          value.constructor.name ||
	          "Object";
	        JSCompiler_temp_const.call(
	          JSCompiler_inline_result,
	          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
	          JSCompiler_inline_result$jscomp$0
	        );
	        return testStringCoercion(value);
	      }
	    }
	    function getTaskName(type) {
	      if (type === REACT_FRAGMENT_TYPE) return "<>";
	      if (
	        "object" === typeof type &&
	        null !== type &&
	        type.$$typeof === REACT_LAZY_TYPE
	      )
	        return "<...>";
	      try {
	        var name = getComponentNameFromType(type);
	        return name ? "<" + name + ">" : "<...>";
	      } catch (x) {
	        return "<...>";
	      }
	    }
	    function getOwner() {
	      var dispatcher = ReactSharedInternals.A;
	      return null === dispatcher ? null : dispatcher.getOwner();
	    }
	    function UnknownOwner() {
	      return Error("react-stack-top-frame");
	    }
	    function hasValidKey(config) {
	      if (hasOwnProperty.call(config, "key")) {
	        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
	        if (getter && getter.isReactWarning) return false;
	      }
	      return void 0 !== config.key;
	    }
	    function defineKeyPropWarningGetter(props, displayName) {
	      function warnAboutAccessingKey() {
	        specialPropKeyWarningShown ||
	          ((specialPropKeyWarningShown = true),
	          console.error(
	            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
	            displayName
	          ));
	      }
	      warnAboutAccessingKey.isReactWarning = true;
	      Object.defineProperty(props, "key", {
	        get: warnAboutAccessingKey,
	        configurable: true
	      });
	    }
	    function elementRefGetterWithDeprecationWarning() {
	      var componentName = getComponentNameFromType(this.type);
	      didWarnAboutElementRef[componentName] ||
	        ((didWarnAboutElementRef[componentName] = true),
	        console.error(
	          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
	        ));
	      componentName = this.props.ref;
	      return void 0 !== componentName ? componentName : null;
	    }
	    function ReactElement(type, key, props, owner, debugStack, debugTask) {
	      var refProp = props.ref;
	      type = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        props: props,
	        _owner: owner
	      };
	      null !== (void 0 !== refProp ? refProp : null)
	        ? Object.defineProperty(type, "ref", {
	            enumerable: false,
	            get: elementRefGetterWithDeprecationWarning
	          })
	        : Object.defineProperty(type, "ref", { enumerable: false, value: null });
	      type._store = {};
	      Object.defineProperty(type._store, "validated", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: 0
	      });
	      Object.defineProperty(type, "_debugInfo", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: null
	      });
	      Object.defineProperty(type, "_debugStack", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugStack
	      });
	      Object.defineProperty(type, "_debugTask", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugTask
	      });
	      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
	      return type;
	    }
	    function jsxDEVImpl(
	      type,
	      config,
	      maybeKey,
	      isStaticChildren,
	      debugStack,
	      debugTask
	    ) {
	      var children = config.children;
	      if (void 0 !== children)
	        if (isStaticChildren)
	          if (isArrayImpl(children)) {
	            for (
	              isStaticChildren = 0;
	              isStaticChildren < children.length;
	              isStaticChildren++
	            )
	              validateChildKeys(children[isStaticChildren]);
	            Object.freeze && Object.freeze(children);
	          } else
	            console.error(
	              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
	            );
	        else validateChildKeys(children);
	      if (hasOwnProperty.call(config, "key")) {
	        children = getComponentNameFromType(type);
	        var keys = Object.keys(config).filter(function (k) {
	          return "key" !== k;
	        });
	        isStaticChildren =
	          0 < keys.length
	            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
	            : "{key: someKey}";
	        didWarnAboutKeySpread[children + isStaticChildren] ||
	          ((keys =
	            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
	          console.error(
	            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
	            isStaticChildren,
	            children,
	            keys,
	            children
	          ),
	          (didWarnAboutKeySpread[children + isStaticChildren] = true));
	      }
	      children = null;
	      void 0 !== maybeKey &&
	        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
	      hasValidKey(config) &&
	        (checkKeyStringCoercion(config.key), (children = "" + config.key));
	      if ("key" in config) {
	        maybeKey = {};
	        for (var propName in config)
	          "key" !== propName && (maybeKey[propName] = config[propName]);
	      } else maybeKey = config;
	      children &&
	        defineKeyPropWarningGetter(
	          maybeKey,
	          "function" === typeof type
	            ? type.displayName || type.name || "Unknown"
	            : type
	        );
	      return ReactElement(
	        type,
	        children,
	        maybeKey,
	        getOwner(),
	        debugStack,
	        debugTask
	      );
	    }
	    function validateChildKeys(node) {
	      isValidElement(node)
	        ? node._store && (node._store.validated = 1)
	        : "object" === typeof node &&
	          null !== node &&
	          node.$$typeof === REACT_LAZY_TYPE &&
	          ("fulfilled" === node._payload.status
	            ? isValidElement(node._payload.value) &&
	              node._payload.value._store &&
	              (node._payload.value._store.validated = 1)
	            : node._store && (node._store.validated = 1));
	    }
	    function isValidElement(object) {
	      return (
	        "object" === typeof object &&
	        null !== object &&
	        object.$$typeof === REACT_ELEMENT_TYPE
	      );
	    }
	    var React = require$$0,
	      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	      REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
	      ReactSharedInternals =
	        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	      hasOwnProperty = Object.prototype.hasOwnProperty,
	      isArrayImpl = Array.isArray,
	      createTask = console.createTask
	        ? console.createTask
	        : function () {
	            return null;
	          };
	    React = {
	      react_stack_bottom_frame: function (callStackForError) {
	        return callStackForError();
	      }
	    };
	    var specialPropKeyWarningShown;
	    var didWarnAboutElementRef = {};
	    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
	      React,
	      UnknownOwner
	    )();
	    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
	    var didWarnAboutKeySpread = {};
	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactJsxRuntime_development.jsx = function (type, config, maybeKey) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        false,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	    reactJsxRuntime_development.jsxs = function (type, config, maybeKey) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        true,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	  })();
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var styles = {"button":"ZestButton-module_button__KDafc","disabled":"ZestButton-module_disabled__gw6y3","fullWidth":"ZestButton-module_fullWidth__2ziwk","sm":"ZestButton-module_sm__G1vAP","md":"ZestButton-module_md__Y-PMO","lg":"ZestButton-module_lg__AQgdf","standard":"ZestButton-module_standard__T3EGM","success":"ZestButton-module_success__XEptA","danger":"ZestButton-module_danger__nJpJ-","inner":"ZestButton-module_inner__1j2Fr","spinner":"ZestButton-module_spinner__l2hLe","spin":"ZestButton-module_spin__4asdw","content":"ZestButton-module_content__hlea3","label":"ZestButton-module_label__8x263","icon":"ZestButton-module_icon__B3DFi","animatedCheck":"ZestButton-module_animatedCheck__8K4K-","animatedX":"ZestButton-module_animatedX__KQnt7","fadeIn":"ZestButton-module_fadeIn__iEave","drawCheck":"ZestButton-module_drawCheck__3DyjT","shake":"ZestButton-module_shake__NtIjf","shakeIt":"ZestButton-module_shakeIt__ox-R3"};

// --- Components ---
const AnimatedCheckmark = () => (jsxRuntimeExports.jsx("svg", { className: styles.animatedCheck, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: jsxRuntimeExports.jsx("path", { d: "M5 13l4 4L19 7" }) }));
const AnimatedX = () => (jsxRuntimeExports.jsxs("svg", { className: styles.animatedX, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntimeExports.jsx("path", { d: "M6 6L18 18" }), jsxRuntimeExports.jsx("path", { d: "M6 18L18 6" })] }));
const ZestButton = ({ visualOptions = {}, busyOptions = {}, successOptions = {}, isDefault = false, className = "", disabled, children, onClick, ...props }) => {
    const { variant = "standard", size = "md", fullWidth = false, iconLeft, iconRight, } = visualOptions;
    const { handleInternally = true, preventRageClick = true, minBusyDurationMs = 500, } = busyOptions;
    const { showCheckmark = true, showFailIcon = true, autoResetAfterMs = 2000, } = successOptions;
    const [internalBusy, setInternalBusy] = useState(false);
    const [wasSuccessful, setWasSuccessful] = useState(false);
    const [wasFailed, setWasFailed] = useState(false);
    const buttonRef = useRef(null);
    const [currentChildren, setCurrentChildren] = useState(children);
    const [awaitingConfirm, setAwaitingConfirm] = useState(false);
    // ✅ interval ref for confirm countdown
    const confirmIntervalRef = useRef(null);
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
            var _a;
            const target = e.target;
            if (e.key === "Enter" &&
                !e.repeat &&
                !e.defaultPrevented &&
                !(target instanceof HTMLTextAreaElement)) {
                e.preventDefault();
                (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.click();
            }
        };
        document.addEventListener("keydown", listener);
        return () => document.removeEventListener("keydown", listener);
    }, [isDefault, isDisabled]);
    const stopWaiting = () => {
        if (confirmIntervalRef.current) {
            clearInterval(confirmIntervalRef.current);
            confirmIntervalRef.current = null;
        }
        setCurrentChildren(children);
        setAwaitingConfirm(false);
    };
    const handleConfirmClick = (e) => {
        if (!props.confirmOptions) {
            return handleClick(e);
        }
        if (awaitingConfirm) {
            stopWaiting();
            return handleClick(e);
        }
        const { displayLabel, timeoutSecs } = props.confirmOptions;
        const startTime = Date.now();
        setAwaitingConfirm(true);
        confirmIntervalRef.current = setInterval(() => {
            const elapsed = Date.now() - startTime;
            if (elapsed >= timeoutSecs * 1000) {
                stopWaiting();
            }
            else {
                const elapsedSecs = Math.floor(elapsed / 1000);
                const timeRemaining = timeoutSecs - elapsedSecs;
                setCurrentChildren(`${displayLabel} (${timeRemaining}s)`);
            }
        }, 100); // ✅ update once per second
    };
    // cleanup on unmount
    useEffect(() => {
        return () => {
            if (confirmIntervalRef.current) {
                clearInterval(confirmIntervalRef.current);
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
            return (jsxRuntimeExports.jsx("span", { className: `${styles.icon} ${styles.fadeIn} ${styles.failShake}`, children: jsxRuntimeExports.jsx(AnimatedX, {}) }));
        }
        else if (iconLeft) {
            return jsxRuntimeExports.jsx("span", { className: styles.icon, children: iconLeft });
        }
        return null;
    };
    return (jsxRuntimeExports.jsx("button", { ref: buttonRef, className: [
            styles.button,
            styles[variant],
            styles[size],
            fullWidth ? styles.fullWidth : "",
            isDisabled ? styles.disabled : "",
            wasFailed ? styles.failGlow : "",
            className,
        ].join(" "), disabled: isDisabled, "aria-busy": effectiveBusy, onClick: handleConfirmClick, ...props, children: jsxRuntimeExports.jsxs("span", { className: styles.inner, children: [renderLeftIcon(), jsxRuntimeExports.jsxs("span", { className: styles.content, children: [currentChildren, iconRight && jsxRuntimeExports.jsx("span", { className: styles.icon, children: iconRight })] })] }) }));
};

export { ZestButton as default };
//# sourceMappingURL=index.js.map
