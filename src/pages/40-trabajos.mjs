// Trabajos: índice con una tarjeta por trabajo y una página por caso
import { pageHero, textBlock, relatedWorks, contact, ORG, abs } from '../layout.mjs';
import { works, work } from '../data.mjs';

const crumbsIndex = [{ label: 'Inicio', path: '/' }, { label: 'Trabajos', path: '/trabajos' }];

const card = w => {
  const href = w.hasCase ? `/trabajos/${w.id}` : w.url;
  const ext = w.hasCase ? '' : ' target="_blank" rel="noopener"';
  return `<li class="work-card">
          <a href="${href}"${ext}>
            <img src="/assets/work/${w.img}-sm.webp" width="760" height="475" alt="Captura de la ${w.alt.charAt(0).toLowerCase() + w.alt.slice(1)}" loading="lazy" decoding="async">
            <h2 class="work-card-name">${w.name}</h2>
            <p class="work-card-type">${w.type} · ${w.place}</p>
            <span class="work-card-link${w.hasCase ? ' link-internal' : ''}">${w.hasCase ? 'Ver el caso' : 'Visitar la web'}</span>
          </a>
        </li>`;
};

const index = {
  path: '/trabajos',
  title: 'Trabajos de diseño web | JENO STUDIO',
  description: 'Trabajos reales de diseño web de JENO STUDIO: webs para consultoras, una constructora, un portal de contenidos y hostelería, muchas en varios idiomas.',
  crumbs: crumbsIndex,
  schema: [{
    '@type': 'CollectionPage',
    name: 'Trabajos de diseño web de JENO STUDIO',
    url: abs('/trabajos'),
    publisher: ORG,
    hasPart: works.filter(w => w.hasCase).map(w => ({ '@id': `${abs(`/trabajos/${w.id}`)}#work` })),
  }],
  body: `
${pageHero({
  crumbs: crumbsIndex,
  h1: 'Trabajos de <em>diseño web</em>',
  lead: 'Estos son trabajos reales de JENO STUDIO: webs para dos consultoras, una constructora de casas pasivas, un portal de contenidos y una maqueta para hostelería, varias de ellas en dos o tres idiomas.',
})}

<section class="block work-cards-block">
  <div class="wrap">
    <ul class="work-cards">
      ${works.map(card).join('\n      ')}
    </ul>
  </div>
</section>

${contact({ title: '¿Quieres que tu web sea <em>la próxima</em>?', text: 'Cuéntanos tu negocio y qué necesitas. Revisamos tu web y tu ficha de Google y te respondemos por Instagram o WhatsApp con lo que cambiaríamos, sin compromiso.' })}`,
};

// Página de un caso: el cliente, el reto, lo que hicimos y el resultado
function casePage(c) {
  const w = work(c.id);
  const path = `/trabajos/${c.id}`;
  const crumbs = [...crumbsIndex, { label: w.name, path }];
  return {
    path, title: c.title, description: c.description, crumbs,
    schema: [{
      '@type': 'CreativeWork',
      '@id': `${abs(path)}#work`,
      name: `Web de ${w.name}`,
      description: c.description,
      url: abs(path),
      creator: ORG,
      inLanguage: c.languages,
      about: { '@type': 'Organization', name: w.name, url: w.url },
    }],
    body: `
${pageHero({
  crumbs,
  h1: c.h1,
  lead: c.lead,
  actions: `<a class="btn btn-gold" href="${w.url}" target="_blank" rel="noopener">Visitar la web ↗</a>
          <a class="btn btn-line" href="/presupuesto">Pedir presupuesto</a>`,
})}

<figure class="case-figure wrap">
  <img src="/assets/work/${w.img}.webp" width="1440" height="900" alt="Portada de la ${w.alt.charAt(0).toLowerCase() + w.alt.slice(1)}" decoding="async">
</figure>

${textBlock({ title: 'El cliente', html: c.client })}

${textBlock({ title: 'El reto', html: c.challenge })}

${c.done}

${textBlock({ title: 'El resultado', html: c.result })}

${relatedWorks({ title: 'Otros <em>trabajos</em>', intro: 'Más webs reales que hemos hecho.', ids: works.filter(o => o.id !== c.id).slice(0, 3).map(o => o.id) })}

${contact()}`,
  };
}

// Lo que hicimos, con el vídeo del antes y después cuando lo hay
const doneWithVideo = ({ title, points, video, img, alt }) => `<section class="cases cases-page">
  <div class="wrap">
    <article class="case">
      <div class="case-copy">
        <h2 class="block-title">${title}</h2>
        <ul class="case-points">
          ${points.map(p => `<li>${p}</li>`).join('\n          ')}
        </ul>
      </div>
      <div class="case-media">
        <div class="phone">
          <video class="lazy-video" muted loop playsinline preload="none" poster="/assets/reels/reel-${video}.webp" aria-label="Vídeo del antes y después de la web de ${alt}">
            <source data-src="/assets/video/reel-${video}.mp4" type="video/mp4">
          </video>
        </div>
        <img class="case-shot" src="/assets/work/${img}-mobile.webp" width="560" height="1212" alt="La web de ${alt} en el móvil" loading="lazy" decoding="async">
      </div>
    </article>
  </div>
</section>`;

const cases = [
  casePage({
    id: 'ecological-villas',
    title: 'Ecological Villas: web para casas pasivas | JENO STUDIO',
    description: 'Caso de Ecological Villas: web en español, inglés y neerlandés para una constructora de casas pasivas, con 100 en SEO y accesibilidad en PageSpeed.',
    languages: ['es', 'en', 'nl'],
    h1: 'Ecological Villas: una web para <em>casas pasivas</em>',
    lead: 'Ecological Villas es una constructora de casas pasivas y villas ecológicas en Málaga y Granada. JENO STUDIO diseñó y optimizó su web, en español, inglés y neerlandés, para que cargue antes y Google la entienda mejor.',
    client: `
          <p>Ecological Villas (Ecological Passive Building) es una constructora de casas pasivas y villas ecológicas que trabaja en Málaga y Granada. Diseña y construye villas unifamiliares, adosadas y casas a medida con criterios de construcción pasiva.</p>`,
    challenge: `
          <p>Una web de construcción vive de sus proyectos y de sus imágenes, y eso pesa. Antes de la optimización, el Speed Index de la web en PageSpeed, la herramienta de Google que mide la velocidad, era de 5,5 segundos. Además, la web tenía que funcionar igual de bien en tres idiomas: español, inglés y neerlandés.</p>`,
    done: textBlock({
      title: 'Lo que hicimos',
      html: `
          <p>Diseñamos la web en sus tres idiomas y la optimizamos para los cuatro apartados que mide la auditoría de PageSpeed: rendimiento, accesibilidad, buenas prácticas y SEO.</p>
          <p>[RELLENAR: detalle concreto de lo que se cambió en la web de Ecological Villas (por ejemplo, imágenes, código, textos o estructura)].</p>
          <p>Si tu web también va lenta, es justo lo que hacemos en el <a href="/rediseno-web">rediseño web</a>. Y si tienes una empresa de reformas o construcción, mira nuestras <a href="/paginas-web-para-empresas-de-reformas">páginas web para empresas de reformas</a>.</p>`,
    }),
    result: `
          <dl class="stats">
            <div><dt>Accesibilidad</dt><dd>100</dd></div>
            <div><dt>SEO</dt><dd>100</dd></div>
            <div><dt>Buenas prácticas</dt><dd>100</dd></div>
            <div><dt>Speed Index</dt><dd>5,5 s → 3,7 s</dd></div>
          </dl>
          <p>Tras la optimización, la auditoría de PageSpeed de Google da a la web 100 en accesibilidad, SEO y buenas prácticas, y el Speed Index bajó de 5,5 a 3,7 segundos: la web se ve antes, también en el móvil.</p>`,
  }),
  casePage({
    id: 'enterprise-thinking',
    title: 'Enterprise Thinking: web en tres idiomas | JENO STUDIO',
    description: 'Caso de Enterprise Thinking: rediseño de la web de un directivo del sector marítimo, offshore y logística, en inglés, español y neerlandés, con su libro.',
    languages: ['en', 'es', 'nl'],
    h1: 'Enterprise Thinking: de currículum a <em>una idea</em>',
    lead: 'Enterprise Thinking es la web de Alex Fialka, directivo del sector marítimo, offshore y logística. JENO STUDIO la rehízo en inglés, español y neerlandés para que venda una idea en lugar de enseñar un currículum.',
    client: `
          <p>Alex Fialka es ejecutivo en logística, offshore y servicios marítimos, y acababa de publicar su libro. Enterprise Thinking, en <a href="https://www.fialka.es/es/" target="_blank" rel="noopener">fialka.es</a>, es la web donde presenta su consultoría directiva y su libro.</p>`,
    challenge: `
          <p>Su web era un currículum correcto, pero no decía qué le hacía diferente. Enseñaba nueve puestos de trabajo uno detrás de otro, y el lector tenía que adivinar cuál era el mensaje. Además, tenía que hablar a lectores de tres idiomas.</p>`,
    done: doneWithVideo({
      title: 'Lo que hicimos',
      points: ['De nueve puestos de trabajo a un solo mensaje', 'Cada sección responde a una pregunta del cliente', 'El libro, integrado dentro de la web', 'En inglés, español y neerlandés'],
      video: 'fialka', img: 'fialka', alt: 'Enterprise Thinking',
    }),
    result: `
          <p>Una web trilingüe que presenta a Alex con una sola idea, ordena su experiencia alrededor de ella y lleva al lector hasta su libro. Puedes verla en <a href="https://www.fialka.es/es/" target="_blank" rel="noopener">fialka.es</a>.</p>
          <p>[RELLENAR: algún resultado medible del proyecto, si lo hay (consultas, ventas del libro, visitas)].</p>
          <p>Es un buen ejemplo de lo que hacemos en un <a href="/rediseno-web">rediseño web</a>, y de una web en varios idiomas como las que preparamos para negocios de <a href="/diseno-web-roquetas-de-mar">Roquetas de Mar</a> con clientes extranjeros.</p>`,
  }),
  casePage({
    id: 'elite-solution-pro',
    title: 'Elite Solution Pro: web para una consultora | JENO STUDIO',
    description: 'Caso de Elite Solution Pro: web nueva en español e inglés para una consultora de emprendedores de Nueva Jersey, con un test y una calculadora propios.',
    languages: ['en', 'es'],
    h1: 'Elite Solution Pro: una web que da <em>confianza</em>',
    lead: 'Elite Solution Pro es una consultora para emprendedores de Nueva Jersey. JENO STUDIO le hizo una web nueva, en español e inglés, para transmitir confianza a la primera y convertir visitas en consultas por WhatsApp.',
    client: `
          <p>Elite Solution Pro es una consultora de empresa para emprendedores, con sede en Nueva Jersey, en Estados Unidos. Su web está en inglés y en español.</p>`,
    challenge: `
          <p>«Mi web ya está bien», nos dijeron. Funcionaba, pero parecía una plantilla más, y para una consultora eso es un problema: el cliente tiene que confiar antes de escribir. La web tenía que generar esa confianza en segundos y llevar a las visitas a una consulta por WhatsApp.</p>`,
    done: doneWithVideo({
      title: 'Lo que hicimos',
      points: ['Un mensaje claro que genera confianza en un segundo', 'Un test que dice al cliente si su negocio está listo para crecer', 'Una calculadora de lo que pierde cada mes', 'En inglés y español'],
      video: 'elite', img: 'elitesolutionpro', alt: 'Elite Solution Pro',
    }),
    result: `
          <p>Una web nueva, en español e inglés, con un mensaje que se entiende a la primera y dos herramientas propias, el test y la calculadora, que dan al visitante un motivo para escribir. Puedes verla en <a href="https://www.elitesolutionpro.com/" target="_blank" rel="noopener">elitesolutionpro.com</a>.</p>
          <p>[RELLENAR: algún resultado medible del proyecto, si lo hay (consultas por WhatsApp, visitas)].</p>
          <p>Si tu web funciona pero no convence, es lo que hacemos en un <a href="/rediseno-web">rediseño web</a>. Y para que te encuentren quienes buscan tu servicio, lo combinamos con el <a href="/seo-local-almeria">SEO local y Google Maps</a>.</p>`,
  }),
];

export default [index, ...cases];
