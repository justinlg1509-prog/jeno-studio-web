// Sector: empresas de reformas y construcción · clave: diseño web reformas
import { landing } from '../landing.mjs';

export default landing({
  path: '/paginas-web-para-empresas-de-reformas',
  crumb: 'Páginas web para empresas de reformas',
  title: 'Páginas web para empresas de reformas | JENO STUDIO',
  description: 'Páginas web para empresas de reformas y construcción: tus obras con fotos de antes y después, presupuesto en un toque y visibles en Google Maps.',
  service: { name: 'Páginas web para empresas de reformas y construcción', serviceType: 'Diseño web para empresas de reformas', areaServed: [{ '@type': 'City', name: 'Almería' }, { '@type': 'Country', name: 'España' }] },
  h1: 'Páginas web para empresas de <em>reformas</em> y construcción',
  lead: 'JENO STUDIO hace diseño web para empresas de reformas y construcción que quieren más peticiones de presupuesto: con tus obras en fotos de antes y después, tus servicios claros y el presupuesto a un toque.',
  problem: {
    title: 'En reformas, el cliente compra confianza',
    html: `
          <p>Una reforma es una decisión cara y que da miedo: miedo a que la obra se alargue, a que el precio suba, a que el resultado no sea el esperado. Por eso el cliente busca pruebas antes de pedir presupuesto. Quiere ver obras terminadas, saber qué tipo de trabajos haces y en qué zona, y comprobar que eres una empresa seria.</p>
          <p>Muchas empresas de reformas trabajan muy bien y lo enseñan muy mal: unas fotos en el móvil, una página de Facebook o una web sin tocar desde hace años. Pierden presupuestos frente a otras que quizá no trabajan mejor, pero se presentan mejor.</p>`,
  },
  includes: {
    title: 'Qué incluye la web de tu empresa',
    intro: 'Una web que enseñe tu trabajo y convierta visitas en peticiones de presupuesto.',
    items: [
      ['Obras con antes y después', 'Tus trabajos ordenados por tipo, con fotos de cómo estaba y cómo quedó.'],
      ['Servicios claros', 'Reformas integrales, cocinas, baños, fachadas u obra nueva: cada servicio con su apartado.'],
      ['Presupuesto en un toque', 'Botón para pedir presupuesto por WhatsApp o formulario, con la opción de mandar fotos de la obra.'],
      ['Tu zona de trabajo', 'Dónde trabajas, para que te encuentren quienes buscan reformas en tu zona.'],
      ['Preparada para Google', 'Textos y ficha de Google pensados para búsquedas como «empresa de reformas en» tu ciudad.'],
      ['Rápida aunque tenga muchas fotos', 'Imágenes optimizadas para que la galería cargue rápido, también en el móvil.'],
    ],
  },
  extra: [
    {
      title: 'Un caso real: Ecological Villas',
      html: `
          <p>Ecological Villas es una constructora de casas pasivas y villas ecológicas en Málaga y Granada. Diseña y construye villas unifamiliares, adosadas y casas a medida, y su web está en español, inglés y neerlandés.</p>
          <p>Tras nuestra optimización, la auditoría de PageSpeed de Google le da 100 en accesibilidad, SEO y buenas prácticas, y el Speed Index bajó de 5,5 a 3,7 segundos. Es decir: una web de construcción, con proyectos e imágenes, que carga antes y que Google entiende mejor. Lo contamos en el <a href="/trabajos/ecological-villas">caso de Ecological Villas</a>.</p>`,
    },
    {
      title: 'Web para constructora o empresa de reformas: lo que no puede faltar',
      html: `
          <p>Lo más importante en una página web para una empresa de reformas son las fotos de obra. No siempre hace falta un fotógrafo: con el móvil, buena luz y siempre desde el mismo ángulo antes y después, se consiguen imágenes que convencen. Te ayudamos a elegirlas y a presentarlas.</p>
          <p>Lo segundo es dejar claro dónde trabajas. Una web para constructora que trabaja en toda la provincia no se plantea igual que la de un reformista de barrio. Lo trabajamos junto con tu ficha en <a href="/seo-local-almeria">SEO local y Google Maps</a>.</p>
          <p>Y lo tercero, las reseñas. Un cliente contento que cuenta su reforma en Google convence más que cualquier texto. Te explicamos <a href="/blog/como-conseguir-mas-resenas-en-google">cómo conseguir más reseñas en Google</a> sin comprarlas. Si ya tienes web pero no te trae presupuestos, quizá te convenga un <a href="/rediseno-web">rediseño web</a>.</p>`,
    },
  ],
  steps: [
    'Nos cuentas qué obras haces, en qué zona y qué clientes buscas.',
    'Seleccionamos tus mejores obras y diseñamos una web seria y con tu imagen.',
    'Revisamos juntos la web y las fotos antes de publicarla.',
    'La publicamos, dejamos tu ficha de Google al día y añadimos obras nuevas cuando las tengas.',
  ],
  works: {
    intro: 'Ecological Villas es una constructora real; las otras dos, empresas que necesitaban transmitir confianza.',
    ids: ['ecological-villas', 'enterprise-thinking', 'elite-solution-pro'],
  },
  faq: [
    { q: 'No tengo fotos profesionales de mis obras. ¿Sirven las del móvil?', a: 'Sí, si están bien hechas. Te decimos cómo hacerlas para que el antes y el después se vean claros, y elegimos contigo las mejores.' },
    { q: '¿Puedo añadir obras nuevas a la web?', a: 'Sí. Con el <a href="/mantenimiento-web">mantenimiento web</a> las subimos nosotros cuando nos las mandes, o te enseñamos a hacerlo.' },
    { q: '¿Sirve para una constructora de obra nueva?', a: 'Sí. Una web para constructora necesita lo mismo: proyectos terminados, servicios claros y una forma fácil de contactar. Ecological Villas es un ejemplo.' },
    { q: '¿Los clientes pueden mandarme fotos para pedir presupuesto?', a: 'Sí. Con el botón de WhatsApp, el cliente te escribe y te manda las fotos de la obra directamente.' },
    { q: '¿Cuánto cuesta una página web para una empresa de reformas?', a: 'Depende de cuántos servicios y obras quieras enseñar, de los idiomas y de si necesitas algo más, como un formulario de presupuesto detallado. Tras una primera conversación te enviamos un presupuesto claro.' },
  ],
  cta: {
    title: '¿Tu web te trae <em>presupuestos</em>?',
    text: 'Revisamos tu web y tu ficha de Google y te decimos qué cambiaríamos para que te pidan más presupuestos, sin compromiso.',
  },
});
