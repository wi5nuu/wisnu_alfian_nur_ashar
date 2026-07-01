import type { APIRoute } from 'astro';
import { confirmDonation, getDonations, getDonationStats } from '../../../lib/donation-store';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { id, token } = body;

    const adminToken = import.meta.env.ADMIN_TOKEN || 'wisnu123';

    if (token !== adminToken) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

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