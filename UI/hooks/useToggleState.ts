import { useCallback, useRef, useState } from 'react';

interface UseToggleStateProps {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

/**
 * Owns a toggle's on/off value. Controlled when `pressed` is given (the value
 * only changes when the app passes a new one), otherwise self-managed from
 * `defaultPressed`. `toggle` flips once per call and reports the new value.
 */
export const useToggleState = ({ pressed, defaultPressed = false, onPressedChange }: UseToggleStateProps) => {
  const isControlled = pressed !== undefined;
  const [internalPressed, setInternalPressed] = useState(defaultPressed);
  const current = isControlled ? (pressed as boolean) : internalPressed;

  // Refs keep rapid back-to-back toggles correct before React re-renders.
  const currentRef = useRef(current);
  currentRef.current = current;
  const isControlledRef = useRef(isControlled);
  isControlledRef.current = isControlled;
  const onChangeRef = useRef(onPressedChange);
  onChangeRef.current = onPressedChange;

  const toggle = useCallback(() => {
    const next = !currentRef.current;
    if (!isControlledRef.current) {
      currentRef.current = next;
      setInternalPressed(next);
    }
    onChangeRef.current?.(next);
  }, []);

  return { pressed: current, toggle };
};
