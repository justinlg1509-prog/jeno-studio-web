// Genera las páginas HTML de la web a partir de src/pages y las plantillas de src/layout.mjs.
// Uso: node src/build.mjs  (sin dependencias). Escribe los .html en la raíz y el sitemap.xml.
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { render, abs } from './layout.mjs';
import { UPDATED, SITE, BRAND, EMAIL, INSTAGRAM, INSTAGRAM_USER, services, sectors, zones, works } from './data.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pagesDir = join(root, 'src', 'pages');

const pages = [];
for (const file of readdirSync(pagesDir).filter(f => f.endsWith('.mjs')).sort()) {
  const mod = await import(pathToFileURL(join(pagesDir, file)).href);
  pages.push(...[mod.default].flat());
}

// "/" → index.html, "/blog/x" → blog/x.html (Vercel las sirve sin .html por cleanUrls).
// Si una ruta tiene páginas debajo (/blog, /trabajos), va en su carpeta: blog/index.html
const fileFor = path => path === '/' ? 'index.html'
  : pages.some(p => p.path.startsWith(`${path}/`)) ? `${path.slice(1)}/index.html` : `${path.slice(1)}.html`;

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

// llms.txt: resumen de la web para la IA, con los mismos datos que la web y el JSON-LD
const byPath = Object.fromEntries(pages.map(p => [p.path, p]));
const item = path => {
  const p = byPath[path];
  return `- [${p.title.replace(/ \| JENO STUDIO$/, '')}](${abs(path)}): ${p.description}`;
};
const blogPaths = pages.filter(p => p.path.startsWith('/blog/')).map(p => p.path);
writeFileSync(join(root, 'llms.txt'), `# ${BRAND}

> ${BRAND} es un estudio de diseño web de Almería (España) que hace páginas web a medida para negocios, rápidas y pensadas para el móvil, y las prepara para salir en Google, en Google Maps y en las respuestas de la IA. También hace SEO local, tiendas online con Shopify, mantenimiento web, vídeos con IA, diseño de logo y gestión de redes sociales.

- Nombre: ${BRAND} (también escrito Jeno Studio)
- Web: ${SITE}
- Email: ${EMAIL}
- Instagram: ${INSTAGRAM_USER} (${INSTAGRAM})
- Presupuesto: ${abs('/presupuesto')}
- Zona: Almería capital y provincia (Roquetas de Mar, Aguadulce, El Ejido, Almerimar), Málaga y toda España.
- Forma de trabajar: en remoto, sin local abierto al público. El contacto es por Instagram, WhatsApp o email.
- Revisión gratis: miramos gratis y sin compromiso la web y la ficha de Google de quien nos lo pida. El resto de servicios se presupuesta.

## Servicios

${services.map(s => item(s.path)).join('\n')}

## Zonas

${zones.filter(z => z.path !== '/').map(z => item(z.path)).join('\n')}

## Sectores

${sectors.map(s => item(s.path)).join('\n')}

## Trabajos

${item('/trabajos')}
${works.map(w => w.hasCase ? item(`/trabajos/${w.id}`) : `- ${w.name} (${w.url}): ${w.type}, ${w.place.toLowerCase()}.`).join('\n')}

## Blog

${blogPaths.map(item).join('\n')}

## Contacto

- Pedir presupuesto: ${abs('/presupuesto')}
- Email: ${EMAIL}
- Instagram: ${INSTAGRAM}
`);

console.log(`${pages.length} páginas generadas, ${indexable.length} en el sitemap.`);
