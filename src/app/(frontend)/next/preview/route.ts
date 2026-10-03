import config from '@payload-config';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';
import { getPayload } from 'payload';
import { getSafeRedirect } from 'payload/shared';

/**
 * Entry point for the admin's Live Preview iframe: turns on Next.js draft
 * mode for logged-in CMS users, then redirects to the page (?path=/faq).
 * In draft mode pages render the latest drafts instead of published content.
 */
export async function GET(req: NextRequest): Promise<Response> {
  const path = req.nextUrl.searchParams.get('path') ?? '/';
  const safePath = getSafeRedirect({ fallbackTo: '/', redirectTo: path });

  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: req.headers });
  const draft = await draftMode();

  if (!user) {
    draft.disable();
    return new Response('Log in to the admin to preview drafts.', { status: 403 });
  }

  draft.enable();
  redirect(safePath);
}
