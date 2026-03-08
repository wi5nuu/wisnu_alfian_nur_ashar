import { readFileSync } from 'fs';
import { join } from 'path';
export { renderers } from '../renderers.mjs';

const GET = async () => {
  try {
    const sitemapPath = join(process.cwd(), "dist", "sitemap-0.xml");
    const sitemapContent = readFileSync(sitemapPath, "utf-8");
    return new Response(sitemapContent, {
      headers: {
        "Content-Type": "application/xml"
      }
    });
  } catch (error) {
    return new Response("Sitemap not found", { status: 404 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
