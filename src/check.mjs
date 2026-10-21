// Comprueba las páginas generadas: un H1, title y meta únicos y con su longitud,
// canonical, JSON-LD que se puede leer, imágenes con alt y enlaces internos que existen.
// Uso: node src/check.mjs
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from './data.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const htmlFiles = (dir = root, base = '') => readdirSync(dir).flatMap(f => {
  if (['src', 'node_modules', 'assets'].includes(f) || f.startsWith('.')) return [];
  const p = join(dir, f);
  return statSync(p).isDirectory() ? htmlFiles(p, `${base}${f}/`) : f.endsWith('.html') ? [`${base}${f}`] : [];
});
const urlOf = f => f === 'index.html' ? '/' : `/${f.replace(/\.html$/, '')}`;
const exists = path => {
  const clean = path.split(/[?#]/)[0];
  if (clean === '/' || clean === '') return true;
  return existsSync(join(root, `${clean.slice(1)}.html`)) || existsSync(join(root, clean.slice(1)));
};
const text = html => html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();

const problems = [];
const reported = new Set();
const titles = new Map(), descs = new Map();
const rows = [];
const typeCount = new Map();
for (const f of htmlFiles()) {
  const html = readFileSync(join(root, f), 'utf8');
  const url = urlOf(f);
  const err = m => { const k = `${url}: ${m}`; if (!reported.has(k)) { reported.add(k); problems.push(k); } };
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const noindex = html.includes('noindex');
  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) err(`${h1s.length} H1`);
  if ([...title].length > 60) err(`title de ${[...title].length} caracteres`);
  const dl = [...desc.replace(/&quot;/g, '"').replace(/&amp;/g, '&')].length;
  if (!noindex && (dl < 140 || dl > 155)) err(`meta description de ${dl} caracteres`);
  if (titles.has(title)) err(`title repetido con ${titles.get(title)}`); else titles.set(title, url);
  if (descs.has(desc)) err(`meta repetida con ${descs.get(desc)}`); else descs.set(desc, url);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (url !== '/404' && canonical !== SITE + url) err(`canonical ${canonical}`);
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let data;
    try { data = JSON.parse(json); } catch (e) { err(`JSON-LD no válido: ${e.message}`); continue; }
    const graph = data['@graph'] || [data];
    const types = graph.map(n => n['@type']);
    typeCount.set(url, [...(typeCount.get(url) || []), ...types]);
    // Las preguntas del FAQPage tienen que ser las mismas que se ven, y sus respuestas, estar en la página
    const faqHtml = html.match(/<section class="faq"[\s\S]*?<\/section>/)?.[0] ?? '';
    const tight = s => s.replace(/\s+([.,;:)])/g, '$1');
    const visible = [...faqHtml.matchAll(/<summary>([\s\S]*?)<\/summary>/g)].map(m => text(m[1]));
    for (const n of graph.filter(n => n['@type'] === 'FAQPage')) {
      const qs = n.mainEntity.map(q => q.name);
      if (qs.length !== visible.length || qs.some(q => !visible.includes(q))) err('las preguntas del FAQPage no coinciden con las visibles');
      for (const q of n.mainEntity) if (!tight(text(faqHtml)).includes(tight(q.acceptedAnswer.text))) err(`respuesta del FAQPage que no se ve igual: ${q.name}`);
    }
    // Los datos de la organización tienen que coincidir con los de la web
    for (const n of graph.filter(n => n['@type'] === 'ProfessionalService')) {
      if (n.name !== 'JENO STUDIO' || !html.includes(`mailto:${n.email}`) || !n.sameAs.every(s => html.includes(`href="${s}"`))) err('los datos del ProfessionalService no coinciden con la página');
    }
  }
  if (!['/', '/404'].includes(url) && !(typeCount.get(url) || []).includes('BreadcrumbList')) err('sin BreadcrumbList');
  for (const [img] of html.matchAll(/<img\b[^>]*>/g)) if (!/\salt="/.test(img)) err(`imagen sin alt: ${img.slice(0, 80)}`);
  for (const [, href] of html.matchAll(/href="(\/[^"]*)"/g)) if (!exists(href)) err(`enlace roto ${href}`);
  for (const [, src] of html.matchAll(/(?:src|poster|data-src|data-preview)="(\/[^"]*)"/g)) if (!exists(src)) err(`archivo que no existe ${src}`);
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? '';
  const words = text(main).split(' ').filter(w => /\p{L}/u.test(w)).length;
  const h1 = text(html.match(/<h1[\s\S]*?<\/h1>/)?.[0] ?? '');
  rows.push({ url, words, title, h1 });
}
for (const r of rows) console.log(`${String(r.words).padStart(5)}  ${r.url.padEnd(48)} ${(typeCount.get(r.url) || []).join(', ')}`);
console.log(problems.length ? `\n${problems.length} problemas:\n${problems.join('\n')}` : '\nSin problemas.');
process.exitCode = problems.length ? 1 : 0;
