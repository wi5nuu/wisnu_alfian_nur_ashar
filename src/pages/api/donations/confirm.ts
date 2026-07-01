import type { APIRoute } from 'astro';
import { confirmDonation, getDonationStats } from '../../../lib/donation-store';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const adminToken = import.meta.env.ADMIN_TOKEN;
    if (!adminToken) {
      return new Response(JSON.stringify({ error: 'Server not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const auth = request.headers.get('Authorization');
    if (auth !== `Bearer ${adminToken}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();
    const { id } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: 'Donation ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const donation = await confirmDonation(id);

    if (!donation) {
      return new Response(JSON.stringify({ error: 'Donation not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const stats = await getDonationStats();

    return new Response(JSON.stringify({ success: true, donation, stats }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};