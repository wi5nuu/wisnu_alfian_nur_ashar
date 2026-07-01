import type { APIRoute } from 'astro';
import { createDonation, getDonations, getDonationStats } from '../../lib/donation-store';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, qty, method, message } = body;

    if (!name || !name.trim()) {
      return new Response(JSON.stringify({ error: 'Name is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!qty || qty < 1 || qty > 99) {
      return new Response(JSON.stringify({ error: 'Invalid quantity' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!method || !['gopay', 'dana'].includes(method)) {
      return new Response(JSON.stringify({ error: 'Invalid payment method' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const donation = await createDonation({
      name: name.trim(),
      qty,
      method,
      message: message?.trim() || '',
    });

    return new Response(JSON.stringify({ success: true, donation }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  const adminToken = import.meta.env.ADMIN_TOKEN || 'wisnu123';

  const type = url.searchParams.get('type') || 'confirmed';

  if (type === 'confirmed') {
    const donations = await getDonations(true);
    const stats = await getDonationStats();
    return new Response(JSON.stringify({ donations, stats }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (token !== adminToken) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const donations = await getDonations(false);
  const stats = await getDonationStats();
  return new Response(JSON.stringify({ donations, stats }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};