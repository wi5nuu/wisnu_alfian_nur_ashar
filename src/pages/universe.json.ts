import type { APIRoute } from 'astro';
import { universeData } from '../utils/universeData';

export const prerender = true;
export const GET: APIRoute = () =>
  new Response(JSON.stringify(universeData('en')), { headers: { 'Content-Type': 'application/json' } });
