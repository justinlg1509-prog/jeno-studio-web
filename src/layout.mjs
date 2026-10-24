// Piezas comunes a todas las páginas: <head>, cabecera, pie, migas de pan,
// bloques reutilizables y JSON-LD. Cada página de src/pages solo aporta su contenido.
import { SITE, BRAND, EMAIL, INSTAGRAM, OG_IMAGE, services, sectors, zones, works } from './data.mjs';

export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const abs = path => SITE + path;
const strip = html => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const current = (href, path) => href === path ? ' aria-current="page"' : '';

// ---------- JSON-LD ----------
export const ORG = { '@id': `${SITE}/#organization` };

export function breadcrumbSchema(crumbs) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: abs(c.path) })),
  };
}

export function faqSchema(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({ '@type': 'Question', name: strip(q), acceptedAnswer: { '@type': 'Answer', text: strip(a) } })),
  };
}

export function serviceSchema({ path, name, serviceType, description, areaServed }) {
  return {
    '@type': 'Service',
    '@id': `${abs(path)}#service`,
    name, serviceType, description,
    url: abs(path),
    provider: ORG,
    areaServed: areaServed.map(a => typeof a === 'string' ? { '@type': 'Place', name: a } : a),
  };
}

// ---------- Bloques ----------
export function breadcrumbs(crumbs) {
  return `<nav class="crumbs" aria-label="Migas de pan">
          <ol>${crumbs.map((c, i) => i === crumbs.length - 1
            ? `<li aria-current="page">${c.label}</li>`
            : `<li><a href="${c.path}">${c.label}</a></li>`).join('')}</ol>
        </nav>`;
}

const igButton = (label = 'Escríbenos por Instagram', cls = 'btn-line') =>
  `<a class="btn ${cls}" href="${INSTAGRAM}" data-instagram target="_blank" rel="noopener"><svg class="btn-icon" aria-hidden="true"><use href="#icon-instagram"/></svg>${label}</a>`;

// Cabecera de las páginas interiores: migas, H1, la frase que dice qué es y para quién, y botones
export function pageHero({ crumbs, h1, lead, extra = '', actions }) {
  return `<section class="page-hero">
      <div class="hero-glow page-glow" aria-hidden="true"></div>
      <div class="wrap page-hero-inner">
        ${breadcrumbs(crumbs)}
        <h1 class="page-title">${h1}</h1>
        <p class="page-lead">${lead}</p>
        ${extra}
        <div class="hero-actions">
          ${actions ?? `${igButton(undefined, 'btn-gold')}
          <a class="btn btn-line" href="/precios">Ver precios</a>`}
        </div>
      </div>
    </section>`;
}

// Bloque de texto: título a la izquierda y texto a la derecha
export function textBlock({ title, html, id }) {
  return `<section class="block"${id ? ` id="${id}"` : ''}>
      <div class="wrap block-grid">
        <h2 class="block-title">${title}</h2>
        <div class="prose">${html}</div>
      </div>
    </section>`;
}

// Qué incluye: bloque dorado, como «Lo que hacemos» en la portada
export function includes({ title = 'Qué incluye', intro, items }) {
  return `<section class="services includes">
      <div class="wrap">
        <div class="services-head">
          <h2>${title}</h2>
          <p>${intro}</p>
        </div>
        <ul class="include-list">
          ${items.map(([t, d]) => `<li><h3>${t}</h3><p>${d}</p></li>`).join('\n          ')}
        </ul>
      </div>
    </section>`;
}

const STEPS = [
  ['Te escuchamos', 'Hablamos de tu negocio, tus clientes y lo que quieres conseguir.'],
  ['Diseñamos la idea', 'Ordenamos el contenido y creamos una estética que encaje contigo.'],
  ['La revisamos juntos', 'Ves la web antes de publicarla y ajustamos lo que haga falta.'],
  ['La publicamos', 'La ponemos en marcha y seguimos a tu lado para lo que necesites.'],
];
// Los 4 pasos de la portada; cada página puede contar cada paso a su manera
export function process({ title = 'Cómo trabajamos', intro = 'Sin tecnicismos. Tú conoces tu negocio; nosotros te ayudamos a mostrarlo mejor.', steps = [] } = {}) {
  return `<section class="process">
      <div class="wrap">
        <div class="section-head">
          <h2>${title}</h2>
          <p>${intro}</p>
        </div>
        <ol class="steps">
          ${STEPS.map(([t, d], i) => `<li><h3>${t}</h3><p>${steps[i] || d}</p></li>`).join('\n          ')}
        </ol>
      </div>
    </section>`;
}

// Cada trabajo es una carpeta: pestaña con el nombre, la captura grande y la del móvil.
// Las carpetas se pegan una encima de otra al bajar (--i las escalona)
export function workRow(w, i = 0) {
  const site = `<a href="${w.url}" target="_blank" rel="noopener">Visitar la web</a>`;
  const href = w.hasCase ? `/trabajos/${w.id}` : w.url;
  const attrs = w.hasCase ? '' : ' target="_blank" rel="noopener"';
  return `<li class="folder" style="--i:${i}">
            <article class="folder-band">
              <h3 class="folder-tab">${w.name}</h3>
              <p class="folder-meta"><span>${w.type}</span><span>${w.place}</span></p>
              <a class="folder-shot" href="${href}"${attrs} tabindex="-1" aria-hidden="true"><img src="/assets/work/${w.img}.webp" width="1440" height="900" alt="Captura de la ${w.alt.charAt(0).toLowerCase() + w.alt.slice(1)}" loading="lazy" decoding="async"></a>
              <div class="folder-copy">
                <img class="folder-phone" src="/assets/work/${w.img}-mobile.webp" width="560" height="1212" alt="La ${w.alt.charAt(0).toLowerCase() + w.alt.slice(1)} en el móvil" loading="lazy" decoding="async">
                <div class="folder-links">${w.hasCase ? `<a class="link-internal" href="/trabajos/${w.id}">Ver el caso</a>${site}` : site}</div>
              </div>
            </article>
          </li>`;
}

export function relatedWorks({ title = 'Trabajos <em>reales</em>', intro, ids }) {
  return `<section class="work related">
      <div class="wrap">
        <div class="work-head">
          <h2>${title}</h2>
          <p>${intro}</p>
        </div>
        <ul class="folders" style="--n:${ids.length}">
          ${ids.map((id, i) => workRow(works.find(w => w.id === id), i)).join('\n          ')}
        </ul>
        <p class="related-more"><a class="link-arrow link-internal" href="/trabajos">Ver todos los trabajos</a></p>
      </div>
    </section>`;
}

export function faq(items, { title = 'Preguntas frecuentes', lead = '¿Tu duda no está aquí? <a href="/presupuesto">Escríbenos</a> y te respondemos.', id = 'preguntas' } = {}) {
  return `<section class="faq" id="${id}">
      <div class="wrap faq-inner">
        <div class="faq-head">
          <h2>${title}</h2>
          <p>${lead}</p>
        </div>
        <div class="faq-list">
          ${items.map(({ q, a }, i) => `<details name="${id}"${i === 0 ? ' open' : ''}>
            <summary>${q}</summary>
            <p>${a}</p>
          </details>`).join('\n          ')}
        </div>
      </div>
    </section>`;
}

export function contact({ title = '¿Quieres saber qué ve Google de <em>tu negocio</em>?', text = 'Cuéntanos tu negocio y qué necesitas. Revisamos tu web y tu ficha de Google y te respondemos por Instagram o WhatsApp con lo que cambiaríamos, sin compromiso.', badge = 'Te lo miramos gratis' } = {}) {
  return `<section class="contact" id="contacto">
      <div class="wrap contact-inner">
        <h2>${title}</h2>
        <div class="contact-foot">
          <div>
            <p class="contact-offer">${badge}</p>
            <p>${text}</p>
          </div>
          <div class="contact-actions">
            <a class="btn btn-dark btn-lg" href="${INSTAGRAM}" data-instagram data-location="contacto" target="_blank" rel="noopener"><svg class="btn-icon" aria-hidden="true"><use href="#icon-instagram"/></svg>Escríbenos por Instagram</a>
            <a class="btn btn-line btn-lg" href="/presupuesto">Prefiero el formulario</a>
            <a class="contact-mail" href="mailto:${EMAIL}">${EMAIL}</a>
          </div>
        </div>
      </div>
    </section>`;
}

// ---------- Cabecera y pie ----------
function navDrop(label, items, path) {
  const open = items.some(i => i.path === path && i.path !== '/');
  return `<details class="nav-drop">
        <summary${open ? ' class="is-current"' : ''}>${label}</summary>
        <ul class="nav-sub">
          ${items.map(i => `<li><a href="${i.path}"${current(i.path, path)}>${i.label}</a></li>`).join('\n          ')}
        </ul>
      </details>`;
}

function header(path) {
  const top = (href, label) => `<a href="${href}"${current(href, path)}>${label}</a>`;
  return `<header class="site-header">
    <a class="brand" href="/" aria-label="${BRAND}, ir al inicio">
      <svg class="brand-j" viewBox="0 0 240 390" aria-hidden="true"><use href="#logo-j"/></svg>
      <span class="brand-name">${BRAND}</span>
    </a>
    <nav class="nav" id="nav" aria-label="Principal">
      ${top('/', 'Inicio')}
      ${navDrop('Servicios', services, path)}
      ${navDrop('Sectores', sectors, path)}
      ${top('/precios', 'Precios')}
      <a href="/trabajos"${path.startsWith('/trabajos') ? ' aria-current="page"' : ''}>Trabajos</a>
      <a href="/blog"${path.startsWith('/blog') ? ' aria-current="page"' : ''}>Blog</a>
      <a class="nav-cta" href="${INSTAGRAM}" data-instagram data-location="cabecera" target="_blank" rel="noopener">Escríbenos</a>
      <div class="nav-extra">
        <a href="${INSTAGRAM}" data-instagram target="_blank" rel="noopener">Instagram ↗</a>
        <a href="mailto:${EMAIL}">${EMAIL}</a>
      </div>
    </nav>
    <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav"><span></span><span></span></button>
  </header>`;
}

const SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <symbol id="logo-j" viewBox="180 105 240 390"><path fill="currentColor" d="M272 190 410 115v270a110 102 0 0 1-220 0V262h65a15 15 0 0 1 15 15v95a30 30 0 0 0 60 0V243c0-26-18-45-58-53z"/></symbol>
    <symbol id="icon-instagram" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/></g><circle cx="17.4" cy="6.6" r="1.15" fill="currentColor"/></symbol>
    <symbol id="icon-whatsapp" viewBox="0 0 24 24"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.37l-.36-.22-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41"/></symbol>
  </svg>`;

function footer(path) {
  const col = (title, items) => `<nav class="footer-col" aria-label="${title}">
          <p class="footer-title">${title}</p>
          <ul>
            ${items.map(i => `<li><a href="${i.path}"${current(i.path, path)}>${i.label}</a></li>`).join('\n            ')}
          </ul>
        </nav>`;
  return `<footer class="footer">
    <div class="wrap">
      <div class="footer-top">
        <p>${BRAND} · Diseño web + Google Maps<br>Almería y todo el mundo</p>
        <div class="footer-links">
          <ul class="footer-social" aria-label="Redes sociales">
            <li><a href="${INSTAGRAM}" target="_blank" rel="noopener" aria-label="Instagram de ${BRAND}"><svg aria-hidden="true"><use href="#icon-instagram"/></svg></a></li>
          </ul>
        </div>
      </div>
      <div class="footer-cols">
        ${col('Servicios', services)}
        ${col('Zonas', zones)}
        ${col('Sectores', sectors)}
        ${col('Estudio', [
          { path: '/precios', label: 'Precios' },
          { path: '/trabajos', label: 'Trabajos' },
          { path: '/blog', label: 'Blog' },
          { path: '/presupuesto', label: 'Empezar' },
          { path: `mailto:${EMAIL}`, label: 'Email' },
        ])}
      </div>
      <p class="footer-word" aria-hidden="true">jeno studio<svg viewBox="0 0 240 390"><use href="#logo-j"/></svg></p>
      <div class="footer-bottom">
        <span>© <span id="year">2026</span> ${BRAND}</span>
        <nav class="footer-legal" aria-label="Legal">
          <a href="/aviso-legal"${current('/aviso-legal', path)}>Aviso legal</a>
          <a href="/privacidad"${current('/privacidad', path)}>Privacidad</a>
          <a href="/cookies"${current('/cookies', path)}>Cookies</a>
          <button class="footer-link" type="button" data-open-consent>Preferencias de cookies</button>
        </nav>
        <a href="#main">Volver arriba ↑</a>
      </div>
    </div>
  </footer>`;
}

// ---------- Página completa ----------
export function render(page) {
  const { path, title, description, body, crumbs, noindex, canonical = true, ogType = 'website', bodyAttr = '', scripts = [], preload = '' } = page;
  const url = abs(path === '/' ? '/' : path);
  const graph = [...(page.schema || [])];
  if (crumbs && crumbs.length > 1) graph.push(breadcrumbSchema(crumbs));
  const ld = graph.length
    ? `\n  <script type="application/ld+json">\n${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2).replace(/</g, '\\u003c')}\n  </script>`
    : '';
  const usesSerif = body.includes('<em');
  // Los pósters de los vídeos los pone script.js al acercarse (data-poster), para no competir con lo de arriba
  const main = body.replace(/(<video class="lazy-video"[^>]*?) poster=/g, '$1 data-poster=');
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">${noindex ? '\n  <meta name="robots" content="noindex, follow">' : ''}${canonical ? `\n  <link rel="canonical" href="${url}">` : ''}
  <meta name="theme-color" content="#0d0c0a">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  <meta property="og:type" content="${ogType}">
  <meta property="og:locale" content="es_ES">
  <meta property="og:site_name" content="${BRAND}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${abs(OG_IMAGE)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${BRAND}: webs que traen clientes a tu negocio">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${abs(OG_IMAGE)}">
  <link rel="preload" href="/assets/fonts/inter-tight-latin.woff2" as="font" type="font/woff2" crossorigin>${usesSerif ? '\n  <link rel="preload" href="/assets/fonts/lora-italic-latin.woff2" as="font" type="font/woff2" crossorigin>' : ''}${preload}
  <link rel="stylesheet" href="/styles.css">
  <script>document.documentElement.classList.add('js')</script>${ld}
</head>
<body${bodyAttr ? ' ' + bodyAttr : ''}>
  <a class="skip-link" href="#main">Saltar al contenido</a>

  ${header(path)}

  ${SPRITE}

  <main id="main"${page.mainClass ? ` class="${page.mainClass}"` : ''}>
    ${main.trim()}
  </main>

  ${footer(path)}

  <script src="/analytics.js" defer></script>
  <script src="/contacto.js" defer></script>
  <script src="/script.js" defer></script>${scripts.map(s => `\n  <script src="${s}" defer></script>`).join('')}
</body>
</html>
`;
}
