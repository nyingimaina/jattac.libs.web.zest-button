import { useState, useEffect, useRef, useCallback } from 'react';
import { ZestCustomProps } from '../ZestButton';

interface UseConfirmationProps {
  confirmOptions?: ZestCustomProps['confirmOptions'];
  originalChildren: React.ReactNode;
  onConfirmFail?: () => void;
}

export const useConfirmation = ({ confirmOptions, originalChildren, onConfirmFail }: UseConfirmationProps) => {
  const [awaitingConfirm, setAwaitingConfirm] = useState(false);
  const [currentChildren, setCurrentChildren] = useState(originalChildren);
  const confirmIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!awaitingConfirm) {
      setCurrentChildren(originalChildren);
    }
  }, [originalChildren, awaitingConfirm]);
  
  const stopConfirmation = useCallback(() => {
    if (confirmIntervalRef.current) {
      clearInterval(confirmIntervalRef.current);
      confirmIntervalRef.current = null;
    }
    setCurrentChildren(originalChildren);
    setAwaitingConfirm(false);
  }, [originalChildren]);

  const startConfirmation = useCallback(() => {
    if (!confirmOptions) return;

    setAwaitingConfirm(true);
    const { displayLabel, timeoutSecs } = confirmOptions;
    setCurrentChildren(`${displayLabel} (${timeoutSecs}s)`);

    const startTime = Date.now();
    confirmIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const timeRemaining = timeoutSecs - Math.floor(elapsed / 1000);

      if (timeRemaining <= 0) {
        stopConfirmation();
        onConfirmFail?.();
      } else {
        setCurrentChildren(`${displayLabel} (${timeRemaining}s)`);
      }
    }, 1000);
  }, [confirmOptions, onConfirmFail, stopConfirmation]);

  useEffect(() => {
    return () => {
      if (confirmIntervalRef.current) {
        clearInterval(confirmIntervalRef.current);
      }
    };
  }, []);

  return {
    awaitingConfirm,
    currentChildren,
    startConfirmation,
    stopConfirmation,
  };
};
