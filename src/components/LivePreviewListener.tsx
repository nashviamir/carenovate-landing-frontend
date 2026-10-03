'use client';

import { RefreshRouteOnSave } from '@payloadcms/live-preview-react';
import { usePathname, useRouter } from 'next/navigation';
import { useSyncExternalStore } from 'react';

// Browser-only values, read without a server/client hydration mismatch.
const noSubscribe = () => () => {};
const useClientValue = <T,>(get: () => T, server: T) =>
  useSyncExternalStore(noSubscribe, get, () => server);

/**
 * Rendered only in draft mode. Inside the admin's Live Preview it re-renders
 * the page on every autosave. Outside the admin (draft mode lingering in a
 * normal tab) it shows a small bar to get back to the published site.
 */
export default function LivePreviewListener() {
  const router = useRouter();
  const pathname = usePathname();
  const origin = useClientValue(() => window.location.origin, '');
  const inAdmin = useClientValue(() => window.self !== window.top, true);

  return (
    <>
      {origin && <RefreshRouteOnSave refresh={() => router.refresh()} serverURL={origin} />}
      {!inAdmin && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-3 rounded-chip bg-brandNavy-500 px-4 py-2 text-r-12 text-white shadow-card">
          <span>Previewing unpublished drafts</span>
          <a
            href={`/next/exit-preview?path=${encodeURIComponent(pathname)}`}
            className="text-m-12 text-primary-200 hover:text-white underline"
          >
            Exit preview
          </a>
        </div>
      )}
    </>
  );
}
