import { NextResponse } from 'next/server';
import { site } from '@/lib/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  town?: string;
  message?: string;
  company?: string; // honeypot
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  // Honeypot: bots fill hidden "company" field — silently accept and drop.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  if (!body.name || !body.email || !body.phone) {
    return NextResponse.json(
      { ok: false, error: 'Name, email and phone are required.' },
      { status: 422 },
    );
  }

  const lines = [
    `New estimate request from ${site.url}`,
    '',
    `Name:    ${body.name}`,
    `Phone:   ${body.phone}`,
    `Email:   ${body.email}`,
    `Service: ${body.service || '—'}`,
    `Town:    ${body.town || '—'}`,
    '',
    'Message:',
    body.message || '—',
  ].join('\n');

  // If a Resend API key is configured, send the email. Otherwise, log it so the
  // submission is still captured (in Vercel function logs) and the UX succeeds.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;

  if (apiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || 'FBS Construction <onboarding@resend.dev>',
          to: [to],
          reply_to: body.email,
          subject: `New Estimate Request — ${body.name} (${body.service || 'General'})`,
          text: lines,
        }),
      });
      if (!res.ok) {
        console.error('Resend error', await res.text());
        return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 502 });
      }
    } catch (err) {
      console.error('Contact send error', err);
      return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 502 });
    }
  } else {
    console.log('[contact] (no RESEND_API_KEY set — logging submission)\n' + lines);
  }

  return NextResponse.json({ ok: true });
}
