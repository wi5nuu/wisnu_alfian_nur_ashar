import type { APIRoute } from 'astro';
import { readFileSync } from 'fs';
import { join } from 'path';

export const GET: APIRoute = async () => {
  try {
    // Read the generated sitemap-0.xml
    const sitemapPath = join(process.cwd(), 'dist', 'sitemap-0.xml');
    const sitemapContent = readFileSync(sitemapPath, 'utf-8');

    return new Response(sitemapContent, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    return new Response('Sitemap not found', { status: 404 });
  }
};
