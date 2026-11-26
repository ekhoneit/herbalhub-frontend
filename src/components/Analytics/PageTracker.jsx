'use client';

import { useEffect, useRef, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/utils/dataLayer';

function PageTrackerContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedUrl = useRef(null);

  useEffect(() => {
    const syncPixelTestCode = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/store-settings?t=${Date.now()}`, {
          cache: 'no-store',
        });
        if (res.ok) {
          const json = await res.json();
          const code = json?.data?.pixelTestEventCode?.trim() || '';
          if (typeof window !== 'undefined') {
            window.__HERBALHUB_PIXEL_TEST_CODE__ = code;
          }
        }
      } catch (_) {}
    };
    syncPixelTestCode();
  }, []);

  useEffect(() => {
    if (!pathname) return;

    const queryString = searchParams?.toString();
    const currentPath = queryString ? `${pathname}?${queryString}` : pathname;

    const timer = setTimeout(() => {
      const fullUrl = typeof window !== 'undefined' ? window.location.href : currentPath;
      const title = typeof document !== 'undefined' ? document.title : 'Herbalhub';

      if (lastTrackedUrl.current === currentPath) {
        return;
      }
      lastTrackedUrl.current = currentPath;

      trackPageView(fullUrl, title);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return null;
}

export default function PageTracker() {
  return (
    <Suspense fallback={null}>
      <PageTrackerContent />
    </Suspense>
  );
}
