// Sector: clínicas · clave: diseño web para clínicas
import { landing } from '../landing.mjs';
import { pricesSentence, planById, priceLabel } from '../precios.mjs';

export default landing({
  path: '/paginas-web-para-clinicas',
  crumb: 'Páginas web para clínicas',
  title: 'Páginas web para clínicas | JENO STUDIO',
  description: 'Páginas web para clínicas dentales, de fisioterapia y de estética: tratamientos claros, cita en un toque y preparadas para salir en Google Maps.',
  service: { name: 'Páginas web para clínicas', serviceType: 'Diseño web para clínicas', areaServed: [{ '@type': 'City', name: 'Almería' }, { '@type': 'Country', name: 'España' }] },
  h1: 'Páginas web para clínicas dentales, de fisioterapia y de <em>estética</em>',
  lead: 'JENO STUDIO hace diseño web para clínicas dentales, de fisioterapia y de estética que quieren que los pacientes las encuentren y confíen en ellas: con los tratamientos bien explicados, el equipo a la vista y la cita en un toque.',
  problem: {
    title: 'Antes de pedir cita, el paciente quiere confiar',
    html: `
          <p>Elegir dentista, fisioterapeuta o clínica de estética no es como elegir dónde tomar un café. El paciente compara, lee reseñas y mira la web con calma antes de decidirse. Busca señales de confianza: quién le va a atender, qué formación tiene, cómo es la clínica y si se explican bien los tratamientos.</p>
          <p>Muchas webs de clínicas fallan justo ahí. Son genéricas, con fotos de banco de imágenes, tratamientos explicados en lenguaje técnico y un formulario de contacto escondido. Otras prometen resultados que no pueden prometer, y eso genera desconfianza en lugar de quitarla.</p>`,
  },
  includes: {
    title: 'Qué incluye la web de tu clínica',
    intro: 'Información clara, un tono cercano y ninguna promesa que no se pueda cumplir.',
    items: [
      ['Tratamientos explicados', 'Una página para cada tratamiento importante: en qué consiste, para quién es y qué esperar, en lenguaje sencillo.'],
      ['Equipo y clínica', 'Fotos reales de tu equipo y tus instalaciones, con la formación de cada profesional.'],
      ['Cita en un toque', 'Botón para pedir cita por WhatsApp, teléfono o formulario, o tu agenda online si ya tienes una.'],
      ['Preparada para Google Maps', 'Ficha de Google y web con los mismos datos, para salir cuando buscan clínicas en tu zona.'],
      ['Textos prudentes', 'Sin promesas de resultados. Los textos sobre salud los revisas tú, que eres quien sabe.'],
      ['Formularios sencillos', 'Que pidan solo lo necesario para responder, sin datos de salud.'],
    ],
  },
  extra: [
    {
      title: 'Diseño web para clínicas dentales, de fisioterapia y de estética',
      html: `
          <p>Cada tipo de clínica tiene lo suyo. Una página web para una clínica dental tiene que explicar bien tratamientos que asustan un poco, como los implantes o la ortodoncia, y transmitir calma. En el diseño web para clínicas de fisioterapia, la web suele organizarse por dolencias o por tipos de tratamiento, para que el paciente se reconozca en lo que lee. Y una clínica de estética necesita imágenes cuidadas y mucha claridad sobre qué incluye cada tratamiento.</p>
          <p>En todos los casos cuidamos el tono. Nada de «resultados garantizados» ni de fotos sin contexto: la información tiene que ser útil y honesta. El contenido sobre salud lo revisa y lo aprueba siempre el profesional de la clínica.</p>`,
    },
    {
      title: 'Página web para dentista: que te encuentren en tu zona',
      html: `
          <p>Los pacientes suelen buscar una clínica cerca de casa o del trabajo, y muchas veces lo hacen en Google Maps. Por eso la web va de la mano de la ficha de Google: mismos datos, buenas fotos, horario al día y reseñas contestadas. Lo trabajamos en <a href="/seo-local-almeria">SEO local y Google Maps</a>; y si tu ficha no sale, te explicamos <a href="/blog/mi-negocio-no-aparece-en-google-maps">por qué un negocio no aparece en Google Maps</a>.</p>
          <p>Si ya tienes web pero se ha quedado antigua, quizá baste con un <a href="/rediseno-web">rediseño web</a>. Y si quieres que la IA también te conozca cuando alguien le pregunta por una clínica en tu ciudad, lo contamos en <a href="/visibilidad-en-ia">visibilidad en la IA</a>.</p>`,
    },
  ],
  steps: [
    'Nos cuentas tus tratamientos, tu equipo y qué pacientes quieres atraer.',
    'Ordenamos los tratamientos y diseñamos una web con un tono cercano y profesional.',
    'Revisas los textos de salud y la web completa antes de publicarla.',
    'La publicamos con tu ficha de Google al día y seguimos a tu lado.',
  ],
  works: {
    title: 'Webs que <em>hemos hecho</em>',
    intro: 'Todavía no tenemos una clínica en el portfolio. Estas son webs reales que hemos hecho para negocios que necesitaban transmitir confianza.',
    ids: ['elite-solution-pro', 'enterprise-thinking', 'ecological-villas'],
  },
  faq: [
    { q: '¿Escribís los textos de los tratamientos?', a: 'Te ayudamos a ordenarlos y a explicarlos en lenguaje sencillo, pero el contenido sobre salud lo revisas y lo apruebas tú, que eres el profesional.' },
    { q: '¿Se puede pedir cita online?', a: 'Sí. Podemos enlazar o integrar la agenda que ya uséis, o poner un botón para pedir cita por WhatsApp, teléfono o formulario.' },
    { q: '¿Hacéis webs para clínicas de fisioterapia y de estética?', a: 'Sí. Adaptamos la estructura a cada especialidad: por tratamientos, por dolencias o por zonas del cuerpo, según lo que busquen tus pacientes.' },
    { q: '¿Me ayudáis a salir en Google Maps?', a: 'Sí. Revisamos tu ficha de Google junto con la web: categoría, horario, fotos, servicios y reseñas.' },
    { q: '¿Qué pasa con los datos de los pacientes?', a: 'La web no guarda historiales ni datos clínicos. Si pones un formulario de contacto, pedimos solo lo necesario para responder.' },
    { q: '¿Cuánto cuesta una página web para una clínica?', a: `Precios cerrados: ${pricesSentence('webs')}. Tienes el detalle en <a href="/precios#webs">precios</a>.` },
  ],
  cta: {
    title: '¿Tu clínica transmite <em>confianza</em> en internet?',
    text: 'Revisamos tu web y tu ficha de Google y te decimos qué cambiaríamos para que los pacientes te encuentren y te elijan, sin compromiso.',
  },
});
