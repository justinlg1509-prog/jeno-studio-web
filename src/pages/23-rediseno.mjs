// Servicio: rediseño web · clave: rediseño web
import { landing } from '../landing.mjs';

// Los dos casos de antes y después de la portada, contados desde el rediseño
const cases = `<section class="cases cases-page" aria-labelledby="casos-title">
      <div class="wrap">
        <h2 class="block-title" id="casos-title">Dos rediseños reales: <em>antes y después</em></h2>
        <article class="case">
          <div class="case-copy">
            <p class="case-client">Enterprise Thinking · Alex Fialka</p>
            <h3>De un currículum a una web que vende <em>una idea</em></h3>
            <p>Alex es ejecutivo en logística, offshore y servicios marítimos, y acababa de publicar su libro. Su web anterior era un currículum correcto, pero no decía qué le hacía diferente. En el rediseño nos quedamos con lo esencial y lo ordenamos alrededor de su forma de pensar.</p>
            <ul class="case-points">
              <li>De nueve puestos de trabajo a un solo mensaje</li>
              <li>Cada sección responde a una pregunta del cliente</li>
              <li>El libro, integrado dentro de la web</li>
              <li>En inglés, español y neerlandés</li>
            </ul>
            <div class="case-links">
              <a class="link-arrow link-internal" href="/trabajos/enterprise-thinking">Ver el caso</a>
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
            <h3>De una plantilla más a una web que da <em>confianza</em></h3>
            <p>«Mi web ya está bien», nos dijeron. Funcionaba, pero parecía una plantilla más. Elite Solution Pro es una consultora para emprendedores que necesitaba transmitir confianza a la primera y convertir visitas en consultas por WhatsApp.</p>
            <ul class="case-points">
              <li>Un mensaje claro que genera confianza en un segundo</li>
              <li>Un test que dice al cliente si su negocio está listo para crecer</li>
              <li>Una calculadora de lo que pierde cada mes</li>
              <li>En inglés y español</li>
            </ul>
            <div class="case-links">
              <a class="link-arrow link-internal" href="/trabajos/elite-solution-pro">Ver el caso</a>
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
    </section>`;

export default landing({
  path: '/rediseno-web',
  crumb: 'Rediseño web',
  title: 'Rediseño web para webs antiguas o lentas | JENO STUDIO',
  description: '¿Tu web se ha quedado antigua o va lenta? La rehacemos con un diseño moderno, más rápida y pensada para convertir visitas en clientes. Pide presupuesto.',
  service: { name: 'Rediseño web', serviceType: 'Rediseño web', areaServed: [{ '@type': 'Country', name: 'España' }] },
  h1: 'Rediseño de páginas web <em>antiguas</em> o lentas',
  lead: 'JENO STUDIO hace rediseño web para negocios cuya página se ha quedado antigua, va lenta o no trae clientes: la rehacemos con un diseño actual, más rápida y pensada para que las visitas te escriban.',
  problem: {
    title: 'Señales de que tu web pide un rediseño',
    html: `
          <p>Una web no tiene que estar rota para estar fallando. Muchas funcionan, pero parecen de otra época, tardan en cargar en el móvil o no explican en tres segundos qué haces. El visitante no se queja: simplemente se va. Estas son las señales más claras:</p>
          <ul>
            <li>En el móvil hay que hacer zoom para leer o los botones son diminutos.</li>
            <li>Tarda varios segundos en cargar, sobre todo con datos móviles.</li>
            <li>Tienes visitas, pero nadie te escribe desde la web.</li>
            <li>Los textos hablan de ti, pero no de lo que gana el cliente.</li>
            <li>No puedes cambiar nada sin llamar a alguien.</li>
            <li>No sales en Google cuando buscan tu servicio en tu zona.</li>
          </ul>
          <p>Si te reconoces en dos o tres, tu web te está costando clientes.</p>`,
  },
  includes: {
    title: 'Qué incluye el rediseño',
    intro: 'Partimos de lo que ya tienes, nos quedamos con lo que funciona y cambiamos lo que te está costando clientes.',
    items: [
      ['Revisión de tu web actual', 'Vemos qué funciona, qué falla y qué buscan tus clientes antes de tocar nada.'],
      ['Nuevo diseño a medida', 'Una estética actual que encaje con tu negocio, no una plantilla.'],
      ['Textos que convencen', 'Reordenamos el contenido para que cada sección responda a una pregunta del cliente.'],
      ['Más velocidad', 'Imágenes optimizadas y código ligero para que cargue rápido, también en el móvil.'],
      ['Sin perder lo ganado en Google', 'Mantenemos o redirigimos las direcciones antiguas para no perder visitas.'],
      ['Contacto en un toque', 'WhatsApp, llamada, reserva o formulario, siempre a la vista.'],
    ],
  },
  extra: [
    { raw: cases },
    {
      title: 'Una web lenta se puede arreglar',
      html: `
          <p>No siempre hace falta rehacerlo todo. En la web de Ecological Villas, una constructora de casas pasivas y ecológicas, trabajamos la optimización: el Speed Index de PageSpeed bajó de 5,5 a 3,7 segundos y la web llegó a 100 en accesibilidad, SEO y buenas prácticas. Lo contamos en el <a href="/trabajos/ecological-villas">caso de Ecological Villas</a>.</p>
          <p>Por eso, antes de proponerte un rediseño, revisamos tu web gratis y te decimos si conviene rehacerla o si basta con mejorar lo que ya tienes. Una web lenta pierde a parte de sus visitas antes de que vean nada, y eso no se arregla con un diseño bonito: se arregla con imágenes ligeras, menos código y un buen alojamiento.</p>`,
    },
    {
      title: 'Rediseño de página web: precio y plazos',
      html: `
          <p>El precio de un rediseño de página web depende de cuántas páginas tiene, de si hay que reescribir los textos, de los idiomas y de si añadimos cosas nuevas, como reservas o una tienda. Te enviamos un presupuesto claro después de ver tu web. Si quieres entender de qué depende, lo contamos en <a href="/blog/cuanto-cuesta-una-pagina-web">cuánto cuesta una página web</a>.</p>
          <p>Los plazos dependen del tamaño de la web y de lo rápido que podamos revisarla juntos. Antes de empezar acordamos una fecha estimada de entrega, y mientras tanto tu web actual sigue funcionando: la cambiamos por la nueva solo cuando la hayas aprobado.</p>`,
    },
  ],
  steps: [
    'Revisamos tu web actual y nos cuentas qué te gusta, qué no y qué quieres conseguir.',
    'Reordenamos el contenido y diseñamos una web nueva que encaje contigo.',
    'Comparas la web nueva con la antigua antes de publicarla y ajustamos lo que haga falta.',
    'Cambiamos una por otra cuidando las direcciones antiguas, y seguimos a tu lado.',
  ],
  works: {
    intro: 'Webs que hemos rehecho u optimizado para que carguen antes y conviertan más visitas.',
    ids: ['enterprise-thinking', 'elite-solution-pro', 'ecological-villas'],
  },
  faq: [
    { q: '¿Merece la pena rediseñar o es mejor hacer una web nueva?', a: 'Depende de cómo esté hecha. A veces basta con mejorar la velocidad y los textos; otras, sale más a cuenta empezar de cero. Te lo decimos después de revisarla gratis.' },
    { q: '¿Perderé posiciones en Google al cambiar de web?', a: 'Un cambio mal hecho puede hacerte perder visitas. Para evitarlo, mantenemos las direcciones que funcionan o redirigimos las antiguas a las nuevas, y cuidamos títulos y textos.' },
    { q: '¿Puedo conservar mi dominio y mi correo?', a: 'Sí. El dominio es tuyo y lo mantenemos, y cuidamos la configuración para que tu correo siga funcionando.' },
    { q: '¿Cuánto se tarda en rediseñar una web?', a: 'Depende del tamaño de la web y de lo rápido que podamos revisarla juntos. Antes de empezar acordamos una fecha estimada de entrega.' },
    { q: 'Mi web va lenta. ¿Qué podéis hacer?', a: 'Revisamos qué la frena: imágenes pesadas, código de más, complementos o un alojamiento lento. En Ecological Villas, con la optimización, el Speed Index pasó de 5,5 a 3,7 segundos.' },
    { q: '¿Y después del rediseño?', a: 'Podemos encargarnos de las actualizaciones con el <a href="/mantenimiento-web">mantenimiento web</a>, o explicarte cómo hacer tú los cambios sencillos.' },
  ],
  cta: {
    title: '¿Tu web se ha quedado <em>antigua</em>?',
    text: 'Pásanos el enlace. La revisamos gratis y te decimos qué cambiaríamos, si conviene rediseñarla y qué ganarías con ello, sin compromiso.',
  },
});
