import { useEffect } from 'react';

// Sets a page-specific <title> and meta description on mount, restoring the
// previous values on unmount so route changes don't leak stale metadata.
export function usePageMeta({ title, description }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    const metaEl = document.querySelector('meta[name="description"]');
    const prevDescription = metaEl?.getAttribute('content') ?? null;
    if (description && metaEl) metaEl.setAttribute('content', description);

    return () => {
      document.title = prevTitle;
      if (metaEl && prevDescription !== null) metaEl.setAttribute('content', prevDescription);
    };
  }, [title, description]);
}
