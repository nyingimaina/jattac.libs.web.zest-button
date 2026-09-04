import React, { useCallback, useRef } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaChevronDown } from "react-icons/fa6";
import styles from "../Styles/ZestButton.module.css";
import ZestDropdownMenuItem from "./ZestDropdownMenuItem";
import { ZestDropdownOption, ZestVariant, ZestSize, ZestButtonStyle } from "./ZestButton";

export interface ZestDropdownMenuProps {
  options: ZestDropdownOption[];
  ariaLabel: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
  onAnyItemBusyChange?: (busy: boolean) => void;
  variant: ZestVariant;
  size: ZestSize;
  buttonStyle: ZestButtonStyle;
  effectiveTheme: "light" | "dark";
  /** Theme for the menu panel; falls back to `effectiveTheme` when unset. */
  effectiveMenuTheme?: "light" | "dark";
  /** Minimum width for the menu panel (px number or CSS length string). */
  menuMinWidth?: number | string;
}

const ZestDropdownMenu: React.FC<ZestDropdownMenuProps> = ({
  options,
  ariaLabel,
  open,
  onOpenChange,
  disabled = false,
  onAnyItemBusyChange,
  variant,
  size,
  buttonStyle,
  effectiveTheme,
  effectiveMenuTheme,
  menuMinWidth,
}) => {
  const resolvedMenuTheme = effectiveMenuTheme ?? effectiveTheme;
  const busyKeysRef = useRef<Set<string | number>>(new Set());

  const handleItemBusyChange = useCallback(
    (key: string | number, busy: boolean) => {
      const busyKeys = busyKeysRef.current;
      const wasAnyBusy = busyKeys.size > 0;
      if (busy) {
        busyKeys.add(key);
      } else {
        busyKeys.delete(key);
      }
      const isAnyBusy = busyKeys.size > 0;
      if (isAnyBusy !== wasAnyBusy) {
        onAnyItemBusyChange?.(isAnyBusy);
      }
    },
    [onAnyItemBusyChange]
  );

  return (
    <DropdownMenu.Root open={open} onOpenChange={onOpenChange} modal={false}>
      <DropdownMenu.Trigger asChild disabled={disabled}>
        <button
          type="button"
          aria-label={ariaLabel}
          disabled={disabled}
          className={[
            styles.button,
            styles.dropdownTrigger,
            styles[buttonStyle],
            styles[variant],
            styles[size],
            disabled ? styles.disabled : "",
            effectiveTheme === "light" ? styles["force-light"] : styles["force-dark"],
          ]
            .join(" ")
            .trim()}
        >
          <FaChevronDown
            className={[styles.dropdownChevron, open ? styles.dropdownChevronOpen : ""]
              .join(" ")
              .trim()}
          />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={[
            styles.dropdownMenuContent,
            resolvedMenuTheme === "light" ? styles["force-light"] : styles["force-dark"],
          ].join(" ")}
          style={
            menuMinWidth !== undefined
              ? { minWidth: typeof menuMinWidth === "number" ? `${menuMinWidth}px` : menuMinWidth }
              : undefined
          }
          sideOffset={4}
          align="end"
          collisionPadding={8}
        >
          {options.map((option, index) => (
            <ZestDropdownMenuItem
              key={option.key ?? index}
              option={option}
              disabled={disabled}
              onBusyChange={(busy) => handleItemBusyChange(option.key ?? index, busy)}
            />
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ZestDropdownMenu;
