import { useState, useEffect, useRef } from 'react';
import { ZestCustomProps } from '../ZestButton'; // For types

interface UseBusyStateProps {
  busyOptions: ZestCustomProps['busyOptions'];
  successOptions: ZestCustomProps['successOptions'];
}

export const useBusyState = ({ busyOptions, successOptions }: UseBusyStateProps) => {
  const [internalBusy, setInternalBusy] = useState(false);
  const [wasSuccessful, setWasSuccessful] = useState(false);
  const [wasFailed, setWasFailed] = useState(false);
  const failTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    handleInternally = true,
    preventRageClick = true,
    minBusyDurationMs = 500,
  } = busyOptions || {};

  const {
    showCheckmark = true,
    showFailIcon = true,
    autoResetAfterMs = 2000,
  } = successOptions || {};

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

  // auto-reset success/failure state
  useEffect(() => {
    if ((wasSuccessful || wasFailed) && autoResetAfterMs) {
      const timeout = setTimeout(() => {
        setWasSuccessful(false);
        setWasFailed(false);
        if (failTimeoutRef.current) { // Clear fail timeout if still active
          clearTimeout(failTimeoutRef.current);
          failTimeoutRef.current = null;
        }
      }, autoResetAfterMs);
      return () => clearTimeout(timeout);
    }
  }, [wasSuccessful, wasFailed, autoResetAfterMs]);

  // Cleanup for failTimeoutRef on unmount
  useEffect(() => {
    return () => {
      if (failTimeoutRef.current) {
        clearTimeout(failTimeoutRef.current);
      }
    };
  }, []);

  const startBusy = () => {
    setWasSuccessful(false);
    setWasFailed(false);
    setInternalBusy(true);
  };

  const endBusy = (isSuccess: boolean) => {
    setInternalBusy(false);
    if (isSuccess) {
      if (showCheckmark) setWasSuccessful(true);
    } else {
      if (showFailIcon) setWasFailed(true);
      // Bug 1: Clear any existing timeout before setting a new one
      if (failTimeoutRef.current) {
        clearTimeout(failTimeoutRef.current);
      }
      failTimeoutRef.current = setTimeout(() => {
        setWasFailed(false);
        failTimeoutRef.current = null; // Clear ref after timeout fires
      }, 400); // Shake animation duration
    }
  };

  return {
    internalBusy,
    wasSuccessful,
    wasFailed,
    startBusy,
    endBusy,
    handleInternally,
    preventRageClick,
    minBusyDurationMs,
    showCheckmark,
    showFailIcon,
    autoResetAfterMs,
    failTimeoutRef // Expose this for ZestButton to clear if needed (e.g., confirmation failure)
  };
};
