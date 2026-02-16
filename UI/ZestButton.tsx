import React, { useEffect, useRef } from "react";
import { FaSpinner } from "react-icons/fa6";
import styles from "../Styles/ZestButton.module.css";
import { useZestConfig } from './hooks/useZestConfig';
import { useBusyState } from './hooks/useBusyState';
import { useConfirmation } from './hooks/useConfirmation';
import { useThemeDetection } from './hooks/useThemeDetection';

// --- Types ---

export type ZestVariant = "standard" | "success" | "danger";
export type ZestSize = "sm" | "md" | "lg";
export type ZestTheme = 'light' | 'dark' | 'system';
export type ZestButtonStyle = 'solid' | 'outline' | 'text' | 'dashed';

// Allows developers to extend the semantic types via module augmentation
export interface CustomZestSemanticTypes {}
export type SemanticType = 'add' | 'save' | 'submit' | 'edit' | 'update' | 'delete' | 'remove' | 'cancel' | 'close' | 'view' | 'details' | 'download' | 'upload' | 'refresh' | 'reload' | 'print' | 'share' | 'confirm' | keyof CustomZestSemanticTypes;

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

export interface ConfirmOptions {
  displayLabel: string;
  timeoutSecs: number;
}

// New interface to encapsulate all custom ZestButton props
export interface ZestCustomProps {
  visualOptions?: VisualOptions;
  busyOptions?: BusyOptions;
  successOptions?: SuccessOptions;
  confirmOptions?: ConfirmOptions;
  isDefault?: boolean;
  theme?: ZestTheme;
  buttonStyle?: ZestButtonStyle;
  semanticType?: SemanticType;
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
  onClick,
  zest: localZestProps,
  ...props
}) => {
  const effectiveZestConfig = useZestConfig(localZestProps);

  const {
    visualOptions = {},
    busyOptions = {},
    successOptions = {},
    confirmOptions,
    isDefault = false,
    theme = 'system',
    buttonStyle = 'solid',
  } = effectiveZestConfig;

  const {
    variant = "standard",
    size = "md",
    fullWidth = false,
    iconLeft,
    iconRight,
  } = visualOptions;

  const {
    handleInternally,
    minBusyDurationMs,
    preventRageClick,
    showCheckmark,
    showFailIcon,
    internalBusy,
    wasSuccessful,
    wasFailed,
    startBusy,
    endBusy,
  } = useBusyState({ busyOptions, successOptions });

  const {
    awaitingConfirm,
    currentChildren,
    startConfirmation,
    stopConfirmation,
  } = useConfirmation({
    confirmOptions,
    originalChildren: children,
    onConfirmFail: () => endBusy(false),
  });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const systemTheme = useThemeDetection();
  const effectiveTheme = theme === 'system' ? systemTheme : theme;

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

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (preventRageClick && internalBusy) return;

    if (handleInternally && typeof onClick === "function") {
      try {
        startBusy();
        const startTime = Date.now();
        await onClick(e);
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(minBusyDurationMs - elapsed, 0);
        if (remaining > 0) {
          await new Promise((resolve) => setTimeout(resolve, remaining));
        }
        endBusy(true);
      } catch (err) {
        console.error(err);
        endBusy(false);
      }
    } else if (onClick) {
      onClick(e);
    }
  };

  const handleConfirmClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (awaitingConfirm) {
      stopConfirmation();
      handleClick(e);
      return;
    }
    
    if (confirmOptions) {
      if (!onClick) {
        console.warn("ZestButton: 'confirmOptions' are provided but 'onClick' handler is missing.");
      }
      startConfirmation();
    } else {
      handleClick(e);
    }
  };

  useEffect(() => {
    if (!isDefault || isDisabled) return;
    const listener = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        e.key === "Enter" &&
        !e.repeat &&
        !e.defaultPrevented &&
        !(target instanceof HTMLTextAreaElement) &&
        buttonRef.current &&
        document.activeElement !== buttonRef.current // Optional: prevent double-action if button is focused
      ) {
        e.preventDefault();
        buttonRef.current.click();
      }
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [isDefault, isDisabled]);

  const renderLeftIcon = () => {
    if (effectiveBusy) {
      return (
        <span className={`${styles.icon} ${styles.fadeIn}`}>
          <FaSpinner className={styles.spinner} />
        </span>
      );
    }
    if (wasSuccessful && showCheckmark) {
      return (
        <span className={`${styles.icon} ${styles.fadeIn}`}>
          <AnimatedCheckmark />
        </span>
      );
    }
    if (wasFailed && showFailIcon) {
      return (
        <span className={`${styles.icon} ${styles.fadeIn}`}>
          <AnimatedX />
        </span>
      );
    }
    if (iconLeft) {
      return <span className={styles.icon}>{iconLeft}</span>;
    }
    return null;
  };

  return (
    <button
      ref={buttonRef}
      className={[
        styles.button,
        styles[buttonStyle],
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : "",
        isDisabled ? styles.disabled : "",
        wasFailed ? styles.shake : "",
        effectiveTheme === 'light' ? styles['force-light'] : styles['force-dark'],
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