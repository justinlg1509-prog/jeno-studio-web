// Genera las páginas HTML de la web a partir de src/pages y las plantillas de src/layout.mjs.
// Uso: node src/build.mjs  (sin dependencias). Escribe los .html en la raíz y el sitemap.xml.
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { render, abs } from './layout.mjs';
import { UPDATED } from './data.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pagesDir = join(root, 'src', 'pages');

const pages = [];
for (const file of readdirSync(pagesDir).filter(f => f.endsWith('.mjs')).sort()) {
  const mod = await import(pathToFileURL(join(pagesDir, file)).href);
  pages.push(...[mod.default].flat());
}

// "/" → index.html, "/blog/x" → blog/x.html (Vercel las sirve sin .html por cleanUrls)
const fileFor = path => path === '/' ? 'index.html' : `${path.slice(1)}.html`;

const seen = new Set();
for (const page of pages) {
  if (seen.has(page.path)) throw new Error(`Ruta repetida: ${page.path}`);
  seen.add(page.path);
  const out = join(root, fileFor(page.path));
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, render(page));
}

// Sitemap: solo las páginas indexables
const indexable = pages.filter(p => !p.noindex && p.sitemap !== false);
writeFileSync(join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map(p => `  <url>
    <loc>${abs(p.path)}</loc>
    <lastmod>${p.updated || UPDATED}</lastmod>
  </url>`).join('\n')}
</urlset>
`);

console.log(`${pages.length} páginas generadas, ${indexable.length} en el sitemap.`);
