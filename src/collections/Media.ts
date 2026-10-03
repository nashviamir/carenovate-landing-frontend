import path from 'path';
import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    // Resolved from the working directory (not this file) so it points at the
    // same place in `next dev`, CLI scripts and the standalone Docker build.
    staticDir: process.env.MEDIA_DIR || path.resolve(process.cwd(), 'media'),
    mimeTypes: ['image/*'],
    // Both need sharp, which isn't enabled (see payload.config.ts).
    crop: false,
    focalPoint: false,
  },
};
