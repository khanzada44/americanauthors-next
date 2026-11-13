'use client';

import { useEffect } from 'react';

/**
 * Loads the original page scripts (assets/js/*.js) after React has hydrated,
 * in the same order as the PHP site. Each file is loaded only once.
 */
export default function PageScripts({ scripts = [] }) {
  useEffect(() => {
    const loaded = (window.__siteScripts = window.__siteScripts || new Set());
    ['/assets/js/forms.js?v=20261113-next', ...scripts].forEach((src) => {
      if (loaded.has(src)) return;
      loaded.add(src);
      const el = document.createElement('script');
      el.src = src;
      el.async = false; // keep execution order
      document.body.appendChild(el);
    });
  }, [scripts]);

  return null;
}
