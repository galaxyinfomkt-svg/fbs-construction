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

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const subject = `New Estimate Request — ${body.name} (${body.service || 'General'})`;
  const resendKey = process.env.RESEND_API_KEY;
  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;

  // 1) Resend (if configured) — best with a verified sending domain.
  if (resendKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || 'FBS Construction <onboarding@resend.dev>',
          to: [to],
          reply_to: body.email,
          subject,
          text: lines,
        }),
      });
      if (!res.ok) {
        console.error('Resend error', await res.text());
        return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error('Contact send error (resend)', err);
      return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 502 });
    }
  }

  // 2) Web3Forms (if configured) — delivers to the business inbox, no domain needed.
  if (web3Key) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3Key,
          subject,
          from_name: `${body.name} — FBS Website`,
          replyto: body.email,
          name: body.name,
          phone: body.phone,
          email: body.email,
          service: body.service || '—',
          town: body.town || '—',
          message: body.message || '—',
        }),
      });
      const data = (await res.json()) as { success?: boolean };
      if (!res.ok || !data.success) {
        console.error('Web3Forms error', data);
        return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error('Contact send error (web3forms)', err);
      return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 502 });
    }
  }

  // 3) No provider configured yet — log so the submission isn't lost.
  console.log('[contact] (no email provider configured — logging submission)\n' + lines);
  return NextResponse.json({ ok: true });
}
