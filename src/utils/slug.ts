export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function getProjectSlug(title: string): string {
  return slugify(title);
}

/** /projects/foo.webp → /projects/thumb/foo.webp (640px card-size copy, see scripts/make-thumbs.mjs) */
export function thumbOf(image: string): string {
  return image.replace(/^\/projects\/([^/]+)$/, '/projects/thumb/$1');
}
