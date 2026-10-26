import { useLayoutEffect, type RefObject } from 'react';
import { readReadingState, writeReadingState } from '../../platform/reader';

/** Session position is separate from learning progress and optional browser storage. */
export function useReadingPosition(
  container: RefObject<HTMLElement | null>,
  key: string,
  ready: boolean,
) {
  useLayoutEffect(() => {
    const element = container.current;
    if (!ready || !element) return;
    const saved = readReadingState(key),
      details = [...element.querySelectorAll('details')];
    details.forEach((item, index) => {
      item.open = saved.expanded.includes(index);
    });
    element.scrollTop = saved.top;
    function save() {
      writeReadingState(key, {
        top: element!.scrollTop,
        expanded: details.flatMap((item, index) => (item.open ? [index] : [])),
      });
    }
    element.addEventListener('scroll', save, { passive: true });
    element.addEventListener('toggle', save, true);
    return () => {
      save();
      element.removeEventListener('scroll', save);
      element.removeEventListener('toggle', save, true);
    };
  }, [container, key, ready]);
}
