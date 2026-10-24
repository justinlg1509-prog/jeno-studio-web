// Zona: Roquetas de Mar y Aguadulce · clave: diseño web roquetas de mar
import { landing } from '../landing.mjs';
import { pricesSentence, planById, priceLabel } from '../precios.mjs';

export default landing({
  path: '/diseno-web-roquetas-de-mar',
  crumb: 'Diseño web en Roquetas de Mar',
  title: 'Diseño web en Roquetas de Mar y Aguadulce | JENO STUDIO',
  description: 'Páginas web para negocios de Roquetas de Mar y Aguadulce: rápidas, en varios idiomas y preparadas para Google Maps. Precios cerrados, sin sorpresas.',
  service: {
    name: 'Diseño web en Roquetas de Mar y Aguadulce',
    serviceType: 'Diseño web',
    areaServed: [{ '@type': 'City', name: 'Roquetas de Mar' }, { '@type': 'Place', name: 'Aguadulce' }],
  },
  h1: 'Diseño de páginas web en <em>Roquetas de Mar</em>',
  lead: 'JENO STUDIO hace diseño web en Roquetas de Mar y Aguadulce para restaurantes, alojamientos, comercios y negocios de servicios que quieren que los encuentren en Google, también los turistas que buscan en otro idioma.',
  problem: {
    title: 'Lo que le pasa hoy a un negocio de costa sin una buena web',
    html: `
          <p>En Roquetas de Mar y en Aguadulce, buena parte de los clientes llega de fuera. Te buscan en el móvil desde el hotel, el apartamento o el paseo marítimo, y muchos no hablan español. Si tu web solo está en español, tarda en cargar o no dice a qué hora abres, esa persona no te escribe: abre el siguiente resultado de Google Maps.</p>
          <p>El otro problema es la temporada. En verano cambian los horarios, la carta, los precios o las plazas libres, y en invierno vuelven a cambiar. Cuando la web dice una cosa y la ficha de Google otra, el cliente desconfía, y a Google también le cuesta fiarse de unos datos que no coinciden.</p>
          <p>Y hay negocios que dependen casi por completo de Instagram o de las plataformas de reservas. Funcionan, pero el cliente que llega por ahí no es del todo tuyo. Una web propia te da un sitio donde contar lo que te hace diferente y donde el cliente te escribe directamente a ti.</p>`,
  },
  includes: {
    title: 'Qué incluye tu web',
    intro: 'Una web hecha para el cliente de costa: el que llega con prisa, desde el móvil y, a veces, sin hablar español.',
    items: [
      ['Diseño a medida', 'Nada de plantillas: la web se hace a partir de tu negocio, tus fotos y lo que te diferencia en la zona.'],
      ['Varios idiomas', 'Español, inglés y los idiomas de tus clientes, cada uno preparado para que Google lo enseñe a quien busca en él.'],
      ['Pensada para el móvil', 'Carga rápida, texto que se lee sin hacer zoom y botones grandes para escribir, reservar o llegar.'],
      ['Reservas y contacto en un toque', 'WhatsApp, formulario o tu sistema de reservas, siempre a la vista.'],
      ['Horarios al día', 'Horarios, carta y precios que cambiamos nosotros con el mantenimiento, o que te enseñamos a cambiar.'],
      ['Preparada para Google Maps', 'La web y tu Perfil de Empresa en Google con los mismos datos, para que te encuentren cuando buscan cerca.'],
    ],
  },
  extra: [
    {
      title: 'Diseño web en Roquetas de Mar para el turista y para el vecino',
      html: `
          <p>No todos tus clientes son turistas: también están los vecinos que te buscan en invierno, cuando la costa se queda más tranquila. Una buena web habla a los dos. Al que viene de fuera le dice en su idioma qué ofreces, dónde estás y cómo reservar. Al de aquí le recuerda por qué volver.</p>
          <p>Por eso no hacemos dos webs iguales. La de un restaurante del puerto necesita una carta que se lea bien en el móvil y un botón para reservar mesa. La de un alquiler de apartamentos necesita fotos grandes, la ubicación clara y versión en otros idiomas. La de una clínica o una academia tiene que explicar bien sus servicios y que pedir cita sea fácil. Si tienes un bar o un restaurante, mira también nuestras <a href="/paginas-web-para-restaurantes">páginas web para restaurantes y bares</a>.</p>
          <p>Lo mismo vale para el diseño web en Aguadulce, donde muchos negocios viven del paseo marítimo y del puerto deportivo. Las páginas web en Roquetas de Mar y Aguadulce compiten por un espacio muy pequeño: los primeros resultados de Google Maps. Para estar ahí, la web tiene que ir de la mano de tu ficha de Google, y eso lo trabajamos en nuestro servicio de <a href="/seo-local-almeria">SEO local y Google Maps</a>.</p>`,
    },
    {
      title: '¿Por qué una agencia web de Almería para tu negocio en Roquetas?',
      html: `
          <p>Porque estamos al lado y conocemos cómo cambia la costa de una temporada a otra. Trabajamos desde Almería y en remoto, sin local abierto al público, así que no tienes que desplazarte: todo se habla por Instagram, WhatsApp o email, cuando a ti te venga bien.</p>
          <p>Te enseñamos la web antes de publicarla, en tu móvil y en cada idioma, y la ajustamos contigo. Si ya tienes web y se ha quedado antigua o va lenta, también podemos hacer un <a href="/rediseno-web">rediseño web</a> en lugar de empezar de cero.</p>`,
    },
  ],
  steps: [
    'Nos cuentas tu negocio, quién es tu cliente en verano y quién en invierno, y en qué idiomas te busca.',
    'Ordenamos lo que el turista y el vecino necesitan saber y diseñamos una web que encaje con tu negocio.',
    'Ves la web en tu móvil antes de publicarla, en cada idioma, y ajustamos lo que haga falta.',
    'La ponemos en marcha con tu ficha de Google al día y seguimos a tu lado para los cambios de temporada.',
  ],
  works: {
    intro: 'Webs en varios idiomas y para hostelería, como las que necesita un negocio de costa.',
    ids: ['ecological-villas', 'enterprise-thinking', 'bar-meridiano'],
  },
  faq: [
    { q: '¿Hacéis páginas web en Roquetas de Mar sin tener local allí?', a: 'Sí. Trabajamos en remoto desde Almería, sin local abierto al público. Todo el proceso se hace por Instagram, WhatsApp o email, así que no tienes que desplazarte.' },
    { q: '¿En qué idiomas puede estar mi web?', a: 'En los que hablen tus clientes. Hemos hecho webs en español, inglés y neerlandés, como la de Ecological Villas. Cada idioma tiene su propia versión para que Google la enseñe a quien busca en ese idioma.' },
    { q: '¿Puedo cambiar horarios y precios en temporada alta?', a: 'Sí. Con el <a href="/mantenimiento-web">mantenimiento web</a> nos escribes y lo cambiamos nosotros; si lo prefieres, te explicamos cómo hacer tú mismo los cambios sencillos.' },
    { q: '¿La web me ayuda a salir en Google Maps?', a: 'Ayuda, pero no basta sola. Google mira tu Perfil de Empresa, tus reseñas y tu web, así que trabajamos las tres cosas para que digan lo mismo.' },
    { q: '¿Cuánto cuesta una página web en Roquetas de Mar?', a: `Precios cerrados: ${pricesSentence('webs')}. Tienes el detalle en <a href="/precios#webs">precios</a>.` },
    { q: '¿Trabajáis también en Aguadulce y en el resto de la costa?', a: 'Sí. Hacemos diseño web en Aguadulce, en Roquetas y en el resto de la provincia de Almería, y también para negocios de Málaga y de toda España.' },
  ],
  cta: {
    title: 'Cuéntanos tu negocio en <em>Roquetas de Mar</em>',
    text: 'Revisamos tu web y tu ficha de Google y te decimos qué cambiaríamos para que te encuentren más clientes, también los que buscan en otro idioma. Sin compromiso.',
  },
});
