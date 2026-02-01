import React, { useState, useEffect, useRef } from "react";
import { FaSpinner } from "react-icons/fa6";
import styles from "../Styles/ZestButton.module.css";

// --- Types ---

export type ZestVariant = "standard" | "success" | "danger";
export type ZestSize = "sm" | "md" | "lg";
export type ZestTheme = 'light' | 'dark' | 'system'; // New type for theme
export type ZestButtonStyle = 'solid' | 'outline' | 'text' | 'dashed'; // New type for button style

/**
 * Visual appearance of the button
 */
interface VisualOptions {
  variant?: ZestVariant;
  size?: ZestSize;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

/**
 * Behavior during async operations
 */
interface BusyOptions {
  handleInternally?: boolean;
  preventRageClick?: boolean;
  minBusyDurationMs?: number;
}

/**
 * Behavior after a successful or failed click
 */
interface SuccessOptions {
  showCheckmark?: boolean;
  showFailIcon?: boolean;
  autoResetAfterMs?: number;
}

interface ConfirmOptions {
  displayLabel: string;
  timeoutSecs: number;
}

// New interface to encapsulate all custom ZestButton props
interface ZestCustomProps {
  visualOptions?: VisualOptions;
  busyOptions?: BusyOptions;
  successOptions?: SuccessOptions;
  confirmOptions?: ConfirmOptions;
  isDefault?: boolean;
  theme?: ZestTheme;
  buttonStyle?: ZestButtonStyle;
}

/**
 * All supported props
 */
export interface ZestButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  zest?: ZestCustomProps; // Encapsulate all custom props under 'zest'
}

// --- Components ---

const AnimatedCheckmark: React.FC = () => (
  <svg
    className={styles.animatedCheck}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const AnimatedX: React.FC = () => (
  <svg
    className={styles.animatedX}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 6L18 18" />
    <path d="M6 18L18 6" />
  </svg>
);

const ZestButton: React.FC<ZestButtonProps> = ({
  className = "",
  disabled,
  children,
  onClick, // Destructure onClick here
  zest, // New parent prop
  ...props
}) => {
  // Destructure custom props from 'zest' with defaults
  const {
    visualOptions = {},
    busyOptions = {},
    successOptions = {},
    confirmOptions, // confirmOptions can be undefined
    isDefault = false,
    theme = 'system',
    buttonStyle = 'solid',
  } = zest || {}; // Provide empty object as default for zest

  const {
    variant = "standard",
    size = "md",
    fullWidth = false,
    iconLeft,
    iconRight,
  } = visualOptions;

  const {
    handleInternally = true,
    preventRageClick = true,
    minBusyDurationMs = 500,
  } = busyOptions;

  const {
    showCheckmark = true,
    showFailIcon = true,
    autoResetAfterMs = 2000,
  } = successOptions;

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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const failTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // Bug 1: Add useRef for failTimeout

  const [currentChildren, setCurrentChildren] =
    useState<React.ReactNode>(children);
  const [awaitingConfirm, setAwaitingConfirm] = useState(false);

  // ✅ interval ref for confirm countdown
  const confirmIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  // Theme state and detection
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');

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

  const effectiveBusy =
    typeof props["aria-busy"] === "boolean"
      ? Boolean(props["aria-busy"])
      : handleInternally
      ? internalBusy
      : false;

  const isDisabled =
    disabled ||
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

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (preventRageClick && internalBusy) return;

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

        if (showCheckmark) setWasSuccessful(true);
      } catch (err) {
        console.error(err);
        if (showFailIcon) setWasFailed(true);
      } finally {
        setInternalBusy(false);
      }
    } else if (onClick) {
      onClick(e);
    }
  };

  const handleConfirmClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!confirmOptions) { // Use destructured confirmOptions
      return handleClick(e);
    }

    // Edge Case 3: Add warning for missing onClick with confirmOptions
    if (confirmOptions && !onClick) { // Use destructured confirmOptions and onClick
      console.warn("ZestButton: 'confirmOptions' are provided but 'onClick' handler is missing. The button will confirm but perform no action.");
    }

    if (awaitingConfirm) {
      stopWaiting();
      return handleClick(e);
    }

    const { displayLabel, timeoutSecs } = confirmOptions; // Use destructured confirmOptions
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
      } else {
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
    if (!isDefault || isDisabled) return;
    const listener = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        e.key === "Enter" &&
        !e.repeat &&
        !e.defaultPrevented &&
        !(target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        // Bug 2: Directly call handleConfirmClick to respect confirmation logic
        handleConfirmClick(e as any);
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
      return (
        <span className={`${styles.icon} ${styles.fadeIn}`}>
          <FaSpinner className={styles.spinner} />
        </span>
      );
    } else if (wasSuccessful && showCheckmark) {
      return (
        <span className={`${styles.icon} ${styles.fadeIn}`}>
          <AnimatedCheckmark />
        </span>
      );
    } else if (wasFailed && showFailIcon) {
      return (
        <span className={`${styles.icon} ${styles.fadeIn}`}>
          <AnimatedX />
        </span>
      );
    } else if (iconLeft) {
      return <span className={styles.icon}>{iconLeft}</span>;
    }
    return null;
  };

  return (
    <button
      ref={buttonRef}
      className={[
        styles.button,
        styles[buttonStyle], // Apply buttonStyle class
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : "",
        isDisabled ? styles.disabled : "",
        wasFailed ? styles.shake : "",
        effectiveTheme === 'light' ? styles['force-light'] : styles['force-dark'], // Apply theme override class
        className,
      ].join(" ")}
      disabled={isDisabled}
      aria-busy={effectiveBusy}
      onClick={handleConfirmClick}
      {...props}
    >
      <span className={styles.inner}>
        {renderLeftIcon()}
        <span className={styles.content}>
          {currentChildren}
          {iconRight && <span className={styles.icon}>{iconRight}</span>}
        </span>
      </span>
    </button>
  );
};

export default ZestButton;
