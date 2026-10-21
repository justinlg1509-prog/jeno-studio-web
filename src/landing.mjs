// Plantilla de las páginas de zona, servicio y sector. Siempre el mismo orden:
// H1 + qué es y para quién, el problema, qué incluye, texto propio de la página,
// cómo trabajamos, trabajos reales, preguntas frecuentes y llamada final.
import { pageHero, textBlock, includes, process, relatedWorks, faq, contact, faqSchema, serviceSchema } from './layout.mjs';
import { reels } from './data.mjs';

// Reels de Instagram como trabajos relacionados (vídeos y redes)
export function reelsBlock({ title, intro }) {
  return `<section class="social related-reels">
      <div class="wrap">
        <div class="social-head">
          <h2>${title}</h2>
          <a class="link-arrow" href="https://www.instagram.com/jeno.studi0/" target="_blank" rel="noopener">@jeno.studi0</a>
        </div>
        <p class="related-intro">${intro}</p>
        <div class="social-grid">
          ${reels.map(r => `<a class="reel" href="${r.url}" target="_blank" rel="noopener">
            <video class="lazy-video" muted loop playsinline preload="none" poster="/assets/reels/reel-${r.id}.webp" aria-hidden="true"><source data-src="/assets/video/reel-${r.id}.mp4" type="video/mp4"></video>
            <span class="reel-caption">${r.caption}</span>
          </a>`).join('\n          ')}
        </div>
      </div>
    </section>`;
}

export function landing(p) {
  const crumbs = [{ label: 'Inicio', path: '/' }, { label: p.crumb, path: p.path }];
  const related = p.reels ? reelsBlock(p.reels) : relatedWorks(p.works);
  return {
    path: p.path,
    title: p.title,
    description: p.description,
    crumbs,
    schema: [serviceSchema({ path: p.path, ...p.service, description: p.description }), faqSchema(p.faq)],
    body: `
${pageHero({ crumbs, h1: p.h1, lead: p.lead })}

${textBlock(p.problem)}

${includes(p.includes)}

${p.extra.map(e => e.raw || textBlock(e)).join('\n\n')}

${process({ steps: p.steps })}

${related}

${faq(p.faq)}

${contact(p.cta)}`,
  };
}
