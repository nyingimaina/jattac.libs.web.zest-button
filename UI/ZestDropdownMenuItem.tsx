import React, { useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaSpinner } from "react-icons/fa6";
import styles from "../Styles/ZestButton.module.css";
import { useBusyState } from "./hooks/useBusyState";
import { useConfirmation } from "./hooks/useConfirmation";
import { ZestDropdownOption } from "./ZestButton";

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

export interface ZestDropdownMenuItemProps {
  option: ZestDropdownOption;
  disabled?: boolean;
  onBusyChange?: (busy: boolean) => void;
}

const ZestDropdownMenuItem: React.FC<ZestDropdownMenuItemProps> = ({
  option,
  disabled: externallyDisabled = false,
  onBusyChange,
}) => {
  const {
    label,
    icon,
    disabled: optionDisabled = false,
    onClick,
    busyOptions = {},
    successOptions = {},
    confirmOptions,
  } = option;

  const {
    handleInternally,
    minBusyDurationMs,
    showCheckmark,
    showFailIcon,
    internalBusy,
    wasSuccessful,
    wasFailed,
    startBusy,
    endBusy,
  } = useBusyState({ busyOptions, successOptions });

  const { awaitingConfirm, currentChildren, startConfirmation, stopConfirmation } =
    useConfirmation({
      confirmOptions,
      originalChildren: label,
      onConfirmFail: () => endBusy(false),
    });

  useEffect(() => {
    onBusyChange?.(internalBusy);
  }, [internalBusy, onBusyChange]);

  const isDisabled = externallyDisabled || optionDisabled || internalBusy;

  const handleActivate = async (e: Event) => {
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

  const handleSelect = (e: Event) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (awaitingConfirm) {
      // Keep the menu open through the confirm step; only the real
      // activation (below) decides whether the menu is allowed to close.
      e.preventDefault();
      stopConfirmation();
      void handleActivate(e);
      return;
    }

    if (confirmOptions) {
      e.preventDefault();
      if (!onClick) {
        console.warn(
          "ZestButton dropdown item: 'confirmOptions' provided but 'onClick' is missing."
        );
      }
      startConfirmation();
      return;
    }

    if (handleInternally) {
      // Busy items keep the row open to show progress; Radix's default
      // close-on-select would hide the spinner/checkmark/shake feedback.
      e.preventDefault();
      void handleActivate(e);
      return;
    }

    // Plain synchronous item: let Radix close the menu as it normally would.
    void handleActivate(e);
  };

  const renderIcon = () => {
    if (internalBusy) {
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
    if (icon) {
      return <span className={styles.icon}>{icon}</span>;
    }
    return null;
  };

  return (
    <DropdownMenu.Item
      className={[
        styles.dropdownMenuItem,
        isDisabled ? styles.disabled : "",
        wasFailed ? styles.shake : "",
      ]
        .join(" ")
        .trim()}
      disabled={isDisabled}
      onSelect={handleSelect}
    >
      {renderIcon()}
      <span className={styles.dropdownMenuItemLabel}>{currentChildren}</span>
    </DropdownMenu.Item>
  );
};

export default ZestDropdownMenuItem;
