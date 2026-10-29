import { useEffect, useState } from 'react';
import { loadReader } from '../../platform/reader';

/** The concept reader uses a cancellable loader and in-memory cache. */
export function useArticle(url: string) {
  const [html, setHtml] = useState<string>();
  const [error, setError] = useState(false);
  const [slow, setSlow] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setHtml(undefined);
    setError(false);
    setSlow(false);
    const timer = window.setTimeout(() => setSlow(true), 8_000);
    void loadReader(url, controller.signal)
      .then((value) => {
        if (!controller.signal.aborted) setHtml(value);
      })
      .catch(() => {
        if (!controller.signal.aborted) setError(true);
      })
      .finally(() => window.clearTimeout(timer));
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [url, attempt]);
  return { html, error, slow, retry: () => setAttempt((value) => value + 1) };
}
