import React from 'react';

type ZestVariant = "standard" | "success" | "danger";
type ZestSize = "sm" | "md" | "lg";
type ZestTheme = 'light' | 'dark' | 'system';
type ZestButtonStyle = 'solid' | 'outline' | 'text' | 'dashed';
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
interface ZestButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    zest?: ZestCustomProps;
}
declare const ZestButton: React.FC<ZestButtonProps>;

export { ZestButton as default };
export type { ZestButtonProps, ZestButtonStyle, ZestSize, ZestTheme, ZestVariant };
