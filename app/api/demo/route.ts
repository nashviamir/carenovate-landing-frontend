import { NextResponse } from 'next/server';
import type { DemoRequest } from '@/lib/types';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as DemoRequest;


    if (!body.fullName || !body.email || !body.facilityName) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

  
    console.log('[Demo Request]', {
      ...body,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[Demo API Error]', error);
    return NextResponse.json(
      { ok: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}