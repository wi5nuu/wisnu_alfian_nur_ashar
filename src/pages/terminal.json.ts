import type { APIRoute } from 'astro';
import { terminalData } from '../utils/terminalData';

export const prerender = true;
export const GET: APIRoute = () =>
  new Response(JSON.stringify(terminalData('en')), { headers: { 'Content-Type': 'application/json' } });
