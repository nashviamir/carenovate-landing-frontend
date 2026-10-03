import type { Media } from '@/payload-types';

/** Narrows an upload field (an ID when unpopulated) to the media document. */
export function asMedia(value: number | Media | null | undefined): Media | null {
  return value && typeof value === 'object' ? value : null;
}
