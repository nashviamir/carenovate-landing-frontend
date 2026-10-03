import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

import type { Tracking as TrackingData } from '@/payload-types';

/** Analytics and marketing scripts configured under Marketing → Analytics & Scripts. */
export default function Tracking({ data }: { data: TrackingData }) {
  return (
    <>
      {data.gtmId && <GoogleTagManager gtmId={data.gtmId} />}
      {data.ga4Id && <GoogleAnalytics gaId={data.ga4Id} />}
      {data.scripts
        ?.filter((script) => script.enabled)
        .map((script, i) =>
          script.src ? (
            <Script key={script.id ?? i} id={`script-${i}`} src={script.src} strategy={script.strategy} />
          ) : (
            <Script
              key={script.id ?? i}
              id={`script-${i}`}
              strategy={script.strategy}
              dangerouslySetInnerHTML={{ __html: script.code ?? '' }}
            />
          ),
        )}
    </>
  );
}
