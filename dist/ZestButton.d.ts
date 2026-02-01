import React from "react";
export type ZestVariant = "standard" | "success" | "danger";
export type ZestSize = "sm" | "md" | "lg";
export type ZestTheme = 'light' | 'dark' | 'system';
export type ZestButtonStyle = 'solid' | 'outline' | 'text' | 'dashed';
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
export interface ZestButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    visualOptions?: VisualOptions;
    busyOptions?: BusyOptions;
    successOptions?: SuccessOptions;
    confirmOptions?: ConfirmOptions;
    isDefault?: boolean;
    theme?: ZestTheme;
    buttonStyle?: ZestButtonStyle;
}
declare const ZestButton: React.FC<ZestButtonProps>;
export default ZestButton;
