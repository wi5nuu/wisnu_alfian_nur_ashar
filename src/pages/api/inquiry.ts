import type { APIRoute } from 'astro';
import { createHmac } from 'node:crypto';

export const prerender = false;

// Meneruskan pesan formulir kontak ke meja penjualan Wanar AI sebagai lead.
// Kunci penanda tangan (WANAR_INTAKE_SECRET) hanya ada di server ini, tidak pernah dikirim ke browser.
const ENDPOINT = import.meta.env.WANAR_INQUIRY_URL || 'https://wanarai.ashargrosirparfum.com/webhook/inquiry';
const SECRET = import.meta.env.WANAR_INTAKE_SECRET || '';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
function allowed(ip: string): boolean {
  const now = Date.now();
  const rec = rateLimitMap.get(ip);
  if (!rec || now > rec.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 600000 });
    return true;
  }
  if (rec.count >= 5) return false;
  rec.count += 1;
  return true;
}

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (!SECRET) return json(503, { ok: false });
  const ip = clientAddress || request.headers.get('x-forwarded-for') || 'unknown';
  if (!allowed(ip)) return json(429, { ok: false });

  let data: any;
  try { data = await request.json(); } catch { return json(400, { ok: false }); }

  const message = String(data?.message || '').trim().slice(0, 2000);
  const email = String(data?.email || '').trim().slice(0, 120);
  const phone = String(data?.phone || '').trim().slice(0, 40);
  const contact = phone ? `${email} / ${phone}` : email;
  if (message.length < 5 || !contact) return json(400, { ok: false });

  const body = JSON.stringify({
    name: String(data?.name || '').trim().slice(0, 80),
    contact,
    message,
    website: data?.botcheck ? 'bot' : '',
  });
  const t = Math.floor(Date.now() / 1000);
  const sig = createHmac('sha256', SECRET).update(`${t}.${body}`).digest('hex');

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Wanar-Signature': `t=${t},v1=${sig}` },
      body,
      signal: AbortSignal.timeout(8000),
    });
    return json(res.ok ? 200 : 502, { ok: res.ok });
  } catch {
    return json(502, { ok: false });
  }
};
