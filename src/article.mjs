// Plantilla de los artículos del blog: respuesta directa, índice, secciones,
// llamada al servicio relacionado y preguntas frecuentes.
import { breadcrumbs, faq, contact, faqSchema, ORG, abs } from './layout.mjs';
import { BRAND, OG_IMAGE } from './data.mjs';

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
export const longDate = iso => { const [y, m, d] = iso.split('-').map(Number); return `${d} de ${MONTHS[m - 1]} de ${y}`; };
const words = html => html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(w => /\p{L}/u.test(w)).length;

export function article(a) {
  const path = `/blog/${a.slug}`;
  const crumbs = [{ label: 'Inicio', path: '/' }, { label: 'Blog', path: '/blog' }, { label: a.crumb, path }];
  const sectionsHtml = a.sections.map(s => `<h2 id="${s.id}">${s.title}</h2>${s.html}`).join('\n');
  const minutes = Math.max(1, Math.round(words(a.lead + sectionsHtml) / 200));
  return {
    path, crumbs,
    title: a.title,
    description: a.description,
    ogType: 'article',
    updated: a.modified || a.published,
    // Para el índice del blog
    meta: { headline: a.headline, excerpt: a.description, published: a.published },
    schema: [{
      '@type': 'BlogPosting',
      '@id': `${abs(path)}#article`,
      headline: a.headline,
      description: a.description,
      datePublished: a.published,
      dateModified: a.modified || a.published,
      image: abs(OG_IMAGE),
      inLanguage: 'es-ES',
      url: abs(path),
      mainEntityOfPage: abs(path),
      author: { ...ORG, '@type': 'Organization', name: BRAND },
      publisher: { ...ORG, '@type': 'Organization', name: BRAND },
    }, faqSchema(a.faq)],
    body: `
<article class="post">
  <div class="page-hero post-hero">
    <div class="hero-glow page-glow" aria-hidden="true"></div>
    <div class="wrap page-hero-inner">
      ${breadcrumbs(crumbs)}
      <h1 class="page-title post-title">${a.headline}</h1>
      <p class="post-meta">Por ${BRAND} · <time datetime="${a.published}">${longDate(a.published)}</time> · ${minutes} min de lectura</p>
    </div>
  </div>
  <div class="wrap post-wrap">
    <div class="prose post-body">
      <p class="post-lead">${a.lead}</p>
      <nav class="toc" aria-labelledby="toc-title">
        <p class="toc-title" id="toc-title">En este artículo</p>
        <ol>
          ${a.sections.map(s => `<li><a href="#${s.id}">${s.title}</a></li>`).join('\n          ')}
        </ol>
      </nav>
${sectionsHtml}
      <aside class="post-cta" aria-label="${a.cta.label}">
        <p class="post-cta-title">${a.cta.title}</p>
        <p>${a.cta.text}</p>
        <div class="post-cta-actions">
          <a class="btn btn-gold" href="${a.cta.path}">${a.cta.label}</a>
          <a class="btn btn-line" href="/precios">Ver precios</a>
        </div>
      </aside>
    </div>
  </div>
</article>

${faq(a.faq, { title: 'Preguntas frecuentes', id: 'preguntas' })}

${contact()}`,
  };
}
