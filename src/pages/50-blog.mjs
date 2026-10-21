// Blog: índice y artículos (cada artículo está en src/posts)
import { pageHero, contact, ORG, abs } from '../layout.mjs';
import { longDate } from '../article.mjs';
import precio from '../posts/cuanto-cuesta-una-pagina-web.mjs';
import maps from '../posts/mi-negocio-no-aparece-en-google-maps.mjs';
import resenas from '../posts/como-conseguir-mas-resenas-en-google.mjs';
import mantener from '../posts/cuanto-cuesta-mantener-una-pagina-web.mjs';

const posts = [precio, maps, resenas, mantener];
const crumbs = [{ label: 'Inicio', path: '/' }, { label: 'Blog', path: '/blog' }];

const index = {
  path: '/blog',
  title: 'Blog de diseño web y Google Maps | JENO STUDIO',
  description: 'Artículos claros sobre páginas web, Google Maps y reseñas para negocios: cuánto cuesta una web, cómo salir en el mapa y cómo conseguir más reseñas.',
  crumbs,
  schema: [{
    '@type': 'Blog',
    '@id': `${abs('/blog')}#blog`,
    name: 'Blog de JENO STUDIO',
    url: abs('/blog'),
    inLanguage: 'es-ES',
    publisher: ORG,
    blogPost: posts.map(p => ({ '@id': `${abs(p.path)}#article` })),
  }],
  body: `
${pageHero({
  crumbs,
  h1: 'Blog de diseño web y <em>Google Maps</em>',
  lead: 'El blog de JENO STUDIO explica, sin tecnicismos, lo que un negocio necesita saber sobre su página web, Google Maps y las reseñas: precios, problemas habituales y cómo resolverlos.',
})}

<section class="block blog-list-block">
  <div class="wrap">
    <ul class="blog-list">
      ${posts.map(p => `<li>
        <a class="blog-item" href="${p.path}">
          <time class="blog-date" datetime="${p.meta.published}">${longDate(p.meta.published)}</time>
          <h2 class="blog-title">${p.meta.headline}</h2>
          <p class="blog-excerpt">${p.meta.excerpt}</p>
          <span class="blog-more link-internal">Leer el artículo</span>
        </a>
      </li>`).join('\n      ')}
    </ul>
  </div>
</section>

${contact()}`,
};

export default [index, ...posts.map(({ meta, ...p }) => p)];
