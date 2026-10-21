// Portada: diseño web en Almería
import { faq, contact } from '../layout.mjs';

export const homeFaq = [
  { q: '¿Qué es eso de «te lo miramos gratis»?', a: 'Nos dices tu negocio y revisamos tu web y tu ficha de Google. Te contamos qué está frenando a tus clientes y qué cambiaríamos, sin compromiso.' },
  { q: '¿Cuánto cuesta una web?', a: 'Depende de lo que necesites: no es lo mismo una página de presentación que una web con reservas o en varios idiomas. Tras una primera conversación te enviamos un presupuesto claro. Te explicamos de qué depende en <a href="/blog/cuanto-cuesta-una-pagina-web">cuánto cuesta una página web</a>.' },
  { q: '¿Cuánto se tarda en hacer una página web?', a: 'Depende del tamaño del proyecto y de lo rápido que podamos revisarlo juntos. Antes de empezar acordamos una fecha estimada de entrega.' },
  { q: '¿Mi negocio necesita web si ya tengo Instagram?', a: 'Instagram sirve para que te descubran, pero no sale en Google como una web cuando alguien busca lo que haces en tu zona. La web es donde explicas tus servicios y tu horario, y desde donde te escriben en un toque.' },
  { q: '¿Hacéis webs en varios idiomas?', a: 'Sí. Enterprise Thinking y Ecological Villas están en español, inglés y neerlandés, y Elite Solution Pro, en español e inglés.' },
  { q: 'No tengo textos ni fotos. ¿Es un problema?', a: 'No. Te ayudamos a ordenar lo que quieres contar y a darle forma. Si tienes material, lo aprovechamos; si no, buscamos la mejor solución contigo.' },
  { q: '¿Podré hacer cambios cuando esté publicada?', a: 'Sí. Podemos encargarnos de las actualizaciones con el <a href="/mantenimiento-web">mantenimiento web</a>, o explicarte cómo hacer tú mismo los cambios sencillos.' },
];

export default {
  path: '/',
  title: 'Diseño web en Almería que trae clientes | JENO STUDIO',
  description: 'Diseño de páginas web en Almería: rápidas, pensadas para el móvil y listas para salir en Google y Google Maps. Te miramos tu web gratis y sin compromiso.',
  body: `
<!-- Hero -->
<section class="hero" id="inicio">
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="wrap hero-inner">
    <p class="hero-kicker reveal-line">Diseño web + Google Maps · Almería y todo el mundo</p>
    <h1 class="hero-title hero-title-long">
      <span class="line"><span>Diseño web en Almería</span></span>
      <span class="line"><span>que trae <em>clientes</em></span></span>
      <span class="line"><span>a tu negocio</span></span>
    </h1>
    <div class="hero-foot reveal-line">
      <p>JENO STUDIO diseña páginas web en Almería para negocios que quieren más clientes: rápidas, claras, pensadas para el móvil y preparadas para salir en Google y en Google Maps. Dinos tu negocio y te enseñamos qué le falta a tu web.</p>
      <div class="hero-actions">
        <a class="btn btn-gold" href="/presupuesto">Pedir presupuesto</a>
        <a class="btn btn-line" href="#trabajos">Ver trabajos</a>
      </div>
    </div>
  </div>

  <div class="reel-strip" aria-label="Webs que hemos diseñado">
    <div class="reel-track">
      <a class="shot" href="https://www.fialka.es/es/" target="_blank" rel="noopener"><img src="/assets/work/fialka-sm.webp" width="760" height="475" decoding="async" alt="Web de Enterprise Thinking, de Alex Fialka"><span>Enterprise Thinking</span></a>
      <a class="shot" href="https://bar-meridiano.vercel.app/" target="_blank" rel="noopener"><img src="/assets/work/bar-meridiano-sm.webp" width="760" height="475" decoding="async" alt="Web de Bar Meridiano"><span>Bar Meridiano</span></a>
      <a class="shot" href="https://www.elitesolutionpro.com/" target="_blank" rel="noopener"><img src="/assets/work/elitesolutionpro-sm.webp" width="760" height="475" decoding="async" alt="Web de Elite Solution Pro"><span>Elite Solution Pro</span></a>
      <a class="shot" href="https://www.ecologicalvillas.com/" target="_blank" rel="noopener"><img src="/assets/work/ecologicalvillas-sm.webp" width="760" height="475" decoding="async" alt="Web de Ecological Villas, casas pasivas y ecológicas"><span>Ecological Villas</span></a>
      <a class="shot" href="https://pethealthcareguide.com/" target="_blank" rel="noopener"><img src="/assets/work/pethealthcareguide-sm.webp" width="760" height="475" decoding="async" alt="Web de Pet Health Care Guide"><span>Pet Health Care Guide</span></a>
    </div>
  </div>
</section>

<!-- Manifiesto -->
<section class="manifesto" aria-label="Por qué importa tu web">
  <div class="wrap">
    <p class="manifesto-text" data-words>Tu web tiene tres segundos para convencer a un cliente. Si tarda, si en el móvil se ve mal o si no explica qué haces, se va con la competencia. Nosotros diseñamos esos tres segundos.</p>
  </div>
</section>

<!-- Trabajos -->
<section class="work" id="trabajos">
  <div class="wrap">
    <div class="work-head">
      <h2>Trabajos</h2>
      <p>Webs reales, para negocios reales. <span class="hint-fine">Pasa por encima para verlas; pulsa para visitarlas.</span><span class="hint-touch">Toca cualquiera para visitarla.</span></p>
    </div>
    <ul class="work-list">
      <li>
        <a class="work-row" href="https://www.fialka.es/es/" target="_blank" rel="noopener" data-preview="/assets/work/fialka.webp">
          <span class="work-name">Enterprise Thinking</span>
          <span class="work-type">Consultoría directiva y libro</span>
          <span class="work-place">Web en 3 idiomas</span>
          <img class="work-thumb" src="/assets/work/fialka-sm.webp" width="760" height="475" alt="Captura de la web de Enterprise Thinking" loading="lazy" decoding="async">
        </a>
      </li>
      <li>
        <a class="work-row" href="https://www.elitesolutionpro.com/" target="_blank" rel="noopener" data-preview="/assets/work/elitesolutionpro.webp">
          <span class="work-name">Elite Solution Pro</span>
          <span class="work-type">Consultoría para emprendedores</span>
          <span class="work-place">Nueva Jersey, EE. UU.</span>
          <img class="work-thumb" src="/assets/work/elitesolutionpro-sm.webp" width="760" height="475" alt="Captura de la web de Elite Solution Pro" loading="lazy" decoding="async">
        </a>
      </li>
      <li>
        <a class="work-row" href="https://www.ecologicalvillas.com/" target="_blank" rel="noopener" data-preview="/assets/work/ecologicalvillas.webp">
          <span class="work-name">Ecological Villas</span>
          <span class="work-type">Constructora de casas pasivas</span>
          <span class="work-place">Málaga y Granada</span>
          <img class="work-thumb" src="/assets/work/ecologicalvillas-sm.webp" width="760" height="475" alt="Captura de la web de Ecological Villas" loading="lazy" decoding="async">
        </a>
      </li>
      <li>
        <a class="work-row" href="https://pethealthcareguide.com/" target="_blank" rel="noopener" data-preview="/assets/work/pethealthcareguide.webp">
          <span class="work-name">Pet Health Care Guide</span>
          <span class="work-type">Guía de salud para mascotas</span>
          <span class="work-place">Portal de contenidos</span>
          <img class="work-thumb" src="/assets/work/pethealthcareguide-sm.webp" width="760" height="475" alt="Captura de la web de Pet Health Care Guide" loading="lazy" decoding="async">
        </a>
      </li>
      <li>
        <a class="work-row" href="https://bar-meridiano.vercel.app/" target="_blank" rel="noopener" data-preview="/assets/work/bar-meridiano.webp">
          <span class="work-name">Bar Meridiano</span>
          <span class="work-type">Pub y coctelería</span>
          <span class="work-place">Concepto para hostelería</span>
          <img class="work-thumb" src="/assets/work/bar-meridiano-sm.webp" width="760" height="475" alt="Captura de la web de Bar Meridiano" loading="lazy" decoding="async">
        </a>
      </li>
    </ul>
    <p class="related-more"><a class="link-arrow link-internal" href="/trabajos">Ver todos los trabajos</a></p>
  </div>
  <div class="work-preview" aria-hidden="true"><img alt=""></div>
</section>

<!-- Casos -->
<section class="cases" aria-label="Casos de antes y después">
  <div class="wrap">
    <article class="case">
      <div class="case-copy">
        <p class="case-client">Enterprise Thinking · Alex Fialka</p>
        <h3>Antes, una web que lo enseñaba todo. Ahora, una web que vende <em>una idea</em>.</h3>
        <p>Alex es ejecutivo en logística, offshore y servicios marítimos, y acababa de publicar su libro. Su web era un currículum correcto, pero no decía qué le hace diferente.</p>
        <ul class="case-points">
          <li>De nueve puestos de trabajo a un solo mensaje</li>
          <li>Cada sección responde a una pregunta del cliente</li>
          <li>El libro, integrado dentro de la web</li>
          <li>En inglés, español y neerlandés</li>
        </ul>
        <div class="case-links">
          <a class="link-arrow link-internal" href="/trabajos/enterprise-thinking">Ver el caso</a>
          <a class="link-arrow" href="https://www.fialka.es/es/" target="_blank" rel="noopener">Visitar la web</a>
        </div>
      </div>
      <div class="case-media">
        <div class="phone">
          <video class="lazy-video" muted loop playsinline preload="none" poster="/assets/reels/reel-fialka.webp" aria-label="Vídeo del antes y después de la web de Enterprise Thinking">
            <source data-src="/assets/video/reel-fialka.mp4" type="video/mp4">
          </video>
        </div>
        <img class="case-shot" src="/assets/work/fialka-mobile.webp" width="560" height="1212" alt="La web de Enterprise Thinking en el móvil" loading="lazy" decoding="async">
      </div>
    </article>

    <article class="case case-flip">
      <div class="case-copy">
        <p class="case-client">Elite Solution Pro · Nueva Jersey</p>
        <h3>«Mi web ya está bien». Funcionaba, pero parecía <em>una plantilla más</em>.</h3>
        <p>Una consultora para emprendedores que necesitaba transmitir confianza a la primera y convertir visitas en consultas por WhatsApp.</p>
        <ul class="case-points">
          <li>Un mensaje claro que genera confianza en un segundo</li>
          <li>Un test que dice al cliente si su negocio está listo para crecer</li>
          <li>Una calculadora de lo que pierde cada mes</li>
          <li>En inglés y español</li>
        </ul>
        <div class="case-links">
          <a class="link-arrow link-internal" href="/trabajos/elite-solution-pro">Ver el caso</a>
          <a class="link-arrow" href="https://www.elitesolutionpro.com/" target="_blank" rel="noopener">Visitar la web</a>
        </div>
      </div>
      <div class="case-media">
        <div class="phone">
          <video class="lazy-video" muted loop playsinline preload="none" poster="/assets/reels/reel-elite.webp" aria-label="Vídeo del antes y después de la web de Elite Solution Pro">
            <source data-src="/assets/video/reel-elite.mp4" type="video/mp4">
          </video>
        </div>
        <img class="case-shot" src="/assets/work/elitesolutionpro-mobile.webp" width="560" height="1212" alt="La web de Elite Solution Pro en el móvil" loading="lazy" decoding="async">
      </div>
    </article>
  </div>
</section>

<!-- Servicios -->
<section class="services" id="servicios">
  <div class="wrap">
    <div class="services-head">
      <h2>Lo que hacemos</h2>
      <p>Todo lo que necesita un negocio para que lo encuentren, lo entiendan y lo elijan.</p>
    </div>
    <div class="service-list">
      <article class="service">
        <h3>Diseño web</h3>
        <p>Webs rápidas, claras y hechas primero para el móvil, que convierten visitas en llamadas, reservas y mensajes.</p>
        <ul><li>Diseño a medida</li><li>Textos que explican lo que te hace diferente</li><li>WhatsApp, llamada o reserva a un toque</li></ul>
        <a class="service-link" href="/rediseno-web">¿Ya tienes web? Rediseño web</a>
      </article>
      <article class="service">
        <h3>Google Maps</h3>
        <p>Que te encuentren cuando alguien busca lo que haces cerca. Google mira tu perfil, tus reseñas y tu web.</p>
        <ul><li>Perfil de Empresa en Google</li><li>Fotos, horarios y reseñas contestadas</li><li>SEO local en tu web</li></ul>
        <a class="service-link" href="/seo-local-almeria">SEO local y Google Maps</a>
      </article>
      <article class="service">
        <h3>Visible para la IA</h3>
        <p>Cada vez más clientes preguntan a ChatGPT. La IA recomienda al negocio que mejor conoce, no al mejor.</p>
        <ul><li>Los mismos datos en todas partes</li><li>Contenido que la IA entiende</li><li>Reseñas que cuentan</li></ul>
        <a class="service-link" href="/visibilidad-en-ia">Que la IA te recomiende</a>
      </article>
      <article class="service">
        <h3>Mantenimiento</h3>
        <p>Cambios, mejoras y revisiones para que tu web siga trabajando para tu negocio cada mes.</p>
        <ul><li>Textos, fotos y precios al día</li><li>Nuevas secciones cuando las necesites</li><li>Velocidad y errores bajo control</li></ul>
        <a class="service-link" href="/mantenimiento-web">Mantenimiento web mensual</a>
      </article>
      <article class="service">
        <h3>Tiendas online</h3>
        <p>Tu tienda con Shopify, lista para vender, a tu nombre y a juego con tu marca.</p>
        <ul><li>Productos, fotos y categorías</li><li>Pagos y envíos configurados</li><li>Pensada para comprar desde el móvil</li></ul>
        <a class="service-link" href="/tiendas-online-shopify">Tiendas online con Shopify</a>
      </article>
      <article class="service">
        <h3>Vídeos con IA</h3>
        <p>Anuncios, reels y TikToks con inteligencia artificial, sin cámaras ni actores.</p>
        <ul><li>Anuncios para redes</li><li>Vídeo promocional de tu negocio</li><li>Reels y TikToks</li></ul>
        <a class="service-link" href="/videos-con-ia-para-empresas">Vídeos con IA para empresas</a>
      </article>
      <article class="service">
        <h3>Redes sociales</h3>
        <p>Planificamos, creamos y publicamos el contenido de tu Instagram, TikTok y Facebook.</p>
        <ul><li>Calendario de publicaciones</li><li>Diseño para redes sociales</li><li>Textos y publicación</li></ul>
        <a class="service-link" href="/gestion-redes-sociales-almeria">Gestión de redes sociales</a>
      </article>
      <article class="service">
        <h3>Logo y marca</h3>
        <p>Un logo y una imagen que se reconozcan en tu web y en tus redes.</p>
        <ul><li>Diseño de logo</li><li>Colores y tipografías</li><li>Para tu web y tus redes</li></ul>
        <a class="service-link" href="/presupuesto">Pídelo en tu presupuesto</a>
      </article>
    </div>
  </div>
</section>

<div class="marquee" aria-hidden="true">
  <div class="marquee-track">
    <span>Webs que traen clientes</span><svg viewBox="0 0 240 390"><use href="#logo-j"/></svg>
    <span>Diseño web + Google Maps</span><svg viewBox="0 0 240 390"><use href="#logo-j"/></svg>
    <span>Almería y todo el mundo</span><svg viewBox="0 0 240 390"><use href="#logo-j"/></svg>
    <span>Webs que traen clientes</span><svg viewBox="0 0 240 390"><use href="#logo-j"/></svg>
    <span>Diseño web + Google Maps</span><svg viewBox="0 0 240 390"><use href="#logo-j"/></svg>
    <span>Almería y todo el mundo</span><svg viewBox="0 0 240 390"><use href="#logo-j"/></svg>
  </div>
</div>

<!-- Dónde trabajamos -->
<section class="zones" id="zonas" aria-labelledby="zonas-title">
  <div class="wrap">
    <div class="zones-head">
      <p class="zones-kicker">Dónde trabajamos</p>
      <h2 id="zonas-title">Diseño web en Almería y en <em>toda España</em></h2>
      <p>Hacemos diseño de páginas web en Almería capital y en toda la provincia, en remoto y sin local abierto al público. Si buscas un diseñador web en Almería o una agencia de diseño web en Almería que te hable claro, empieza por tu zona:</p>
    </div>
    <ul class="zone-list">
      <li>
        <div class="zone-row">
          <span class="zone-name">Almería capital</span>
          <span class="zone-text">Comercios, hostelería, clínicas y servicios de la ciudad.</span>
        </div>
      </li>
      <li>
        <a class="zone-row" href="/diseno-web-roquetas-de-mar">
          <span class="zone-name">Roquetas de Mar y Aguadulce</span>
          <span class="zone-text">Webs en varios idiomas para el turismo y la hostelería de costa.</span>
        </a>
      </li>
      <li>
        <a class="zone-row" href="/diseno-web-el-ejido">
          <span class="zone-name">El Ejido y Almerimar</span>
          <span class="zone-text">Webs para empresas del campo, comercios y el puerto deportivo.</span>
        </a>
      </li>
      <li>
        <div class="zone-row">
          <span class="zone-name">Málaga y el resto de España</span>
          <span class="zone-text">Hicimos la web de Ecological Villas, en Málaga, y trabajamos en remoto con todo el país.</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<!-- Instagram -->
<section class="social" aria-labelledby="social-title">
  <div class="wrap">
    <div class="social-head">
      <h2 id="social-title">Lo contamos en <em>Instagram</em></h2>
      <a class="link-arrow" href="https://www.instagram.com/jeno.studi0/" target="_blank" rel="noopener">@jeno.studi0</a>
    </div>
    <div class="social-grid">
      <a class="reel" href="https://www.instagram.com/jeno.studi0/reel/DepgAURqXvX/" target="_blank" rel="noopener">
        <video class="lazy-video" muted loop playsinline preload="none" poster="/assets/reels/reel-purpurina.webp" aria-hidden="true"><source data-src="/assets/video/reel-purpurina.mp4" type="video/mp4"></video>
        <span class="reel-caption">Suplicó que dejaran de comprarle y acabó ganando 85.000 $</span>
      </a>
      <a class="reel" href="https://www.instagram.com/jeno.studi0/reel/DemAScVK_1i/" target="_blank" rel="noopener">
        <video class="lazy-video" muted loop playsinline preload="none" poster="/assets/reels/reel-google.webp" aria-hidden="true"><source data-src="/assets/video/reel-google.mp4" type="video/mp4"></video>
        <span class="reel-caption">Soy Google y tu negocio, para mí, no existe</span>
      </a>
      <a class="reel" href="https://www.instagram.com/jeno.studi0/reel/DesAwrbqkdn/" target="_blank" rel="noopener">
        <video class="lazy-video" muted loop playsinline preload="none" poster="/assets/reels/reel-q4.webp" aria-hidden="true"><source data-src="/assets/video/reel-q4.mp4" type="video/mp4"></video>
        <span class="reel-caption">¿De verdad hace falta una web para el Q4?</span>
      </a>
      <a class="reel" href="https://www.instagram.com/jeno.studi0/reel/DeosGzxKIUL/" target="_blank" rel="noopener">
        <video class="lazy-video" muted loop playsinline preload="none" poster="/assets/reels/reel-cronometro.webp" aria-hidden="true"><source data-src="/assets/video/reel-cronometro.mp4" type="video/mp4"></video>
        <span class="reel-caption">¿De verdad te buscan en Google antes de contratarte? Lo hemos cronometrado</span>
      </a>
    </div>
  </div>
</section>

<!-- Proceso -->
<section class="process" id="proceso">
  <div class="wrap">
    <div class="section-head">
      <h2>Simple para ti. Bien pensado por dentro.</h2>
      <p>Sin tecnicismos. Tú conoces tu negocio; nosotros te ayudamos a mostrarlo mejor.</p>
    </div>
    <ol class="steps">
      <li><h3>Te escuchamos</h3><p>Hablamos de tu negocio, tus clientes y lo que quieres conseguir.</p></li>
      <li><h3>Diseñamos la idea</h3><p>Ordenamos el contenido y creamos una estética que encaje contigo.</p></li>
      <li><h3>La revisamos juntos</h3><p>Ves la web antes de publicarla y ajustamos lo que haga falta.</p></li>
      <li><h3>La publicamos</h3><p>La ponemos en marcha y seguimos a tu lado para lo que necesites.</p></li>
    </ol>
  </div>
</section>

${faq(homeFaq)}

${contact()}`,
};
