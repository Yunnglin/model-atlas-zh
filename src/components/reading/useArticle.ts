import { useEffect, useState } from 'react';
import { loadReader } from '../../platform/reader';

/** Both the full learning page and concept reader use the same cancellable loader/cache. */
export function useArticle(url: string) {
  const [html, setHtml] = useState<string>();
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setHtml(undefined);
    setError(false);
    void loadReader(url, controller.signal)
      .then((value) => {
        if (!controller.signal.aborted) setHtml(value);
      })
      .catch(() => {
        if (!controller.signal.aborted) setError(true);
      });
    return () => controller.abort();
  }, [url, attempt]);
  return { html, error, retry: () => setAttempt((value) => value + 1) };
}
