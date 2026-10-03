import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';
import { getSafeRedirect } from 'payload/shared';

/** Leaves draft mode so the site shows published content again. */
export async function GET(req: NextRequest): Promise<Response> {
  const path = req.nextUrl.searchParams.get('path') ?? '/';
  (await draftMode()).disable();
  redirect(getSafeRedirect({ fallbackTo: '/', redirectTo: path }));
}
