import React from 'react';

type ZestVariant = "standard" | "success" | "danger";
type ZestSize = "sm" | "md" | "lg";
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
/**
 * All supported props
 */
interface ZestButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    visualOptions?: VisualOptions;
    busyOptions?: BusyOptions;
    successOptions?: SuccessOptions;
    confirmOptions?: ConfirmOptions;
    isDefault?: boolean;
}
declare const ZestButton: React.FC<ZestButtonProps>;

export { ZestButton as default };
export type { ZestButtonProps, ZestSize, ZestVariant };
