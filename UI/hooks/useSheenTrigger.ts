import { useEffect, useRef, useState } from 'react';

export type SheenTriggerParity = 'odd' | 'even';

export interface SheenTriggerState {
  active: boolean;
  parity: SheenTriggerParity;
}

/**
 * Turns a changing trigger value into one replayable sweep. The value present
 * on the first render is the baseline and plays nothing; every later change
 * (including between a number and the same-looking string) flips the parity so
 * the caller can swap between two identical keyframe names and restart a
 * finished animation in a single render.
 */
export const useSheenTrigger = (value: string | number | undefined): SheenTriggerState => {
  const [state, setState] = useState<SheenTriggerState>({ active: false, parity: 'even' });
  const lastValueRef = useRef(value);

  useEffect(() => {
    if (value === lastValueRef.current) return;
    lastValueRef.current = value;
    setState((previous) => ({
      active: true,
      parity: previous.parity === 'odd' ? 'even' : 'odd',
    }));
  }, [value]);

  return state;
};
