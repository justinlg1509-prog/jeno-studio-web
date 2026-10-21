// Sector: restaurantes y bares · clave: página web para restaurante
import { landing } from '../landing.mjs';

export default landing({
  path: '/paginas-web-para-restaurantes',
  crumb: 'Páginas web para restaurantes',
  title: 'Páginas web para restaurantes y bares | JENO STUDIO',
  description: 'Páginas web para restaurantes y bares: carta que se lee bien en el móvil, horario al día, reservas por WhatsApp y Google Maps. Pide presupuesto.',
  service: { name: 'Páginas web para restaurantes y bares', serviceType: 'Diseño web para restaurantes', areaServed: [{ '@type': 'City', name: 'Almería' }, { '@type': 'Country', name: 'España' }] },
  h1: 'Páginas web para <em>restaurantes</em> y bares',
  lead: 'JENO STUDIO diseña la página web para tu restaurante, bar o cafetería pensando en llenar mesas: la carta fácil de leer en el móvil, el horario al día, las reservas por WhatsApp a un toque y la ficha de Google Maps preparada.',
  problem: {
    title: 'Lo que mira un cliente antes de elegir dónde comer',
    html: `
          <p>Cuando alguien decide dónde comer, muchas veces empieza por Google Maps. Mira las fotos, las reseñas y el horario y, si le convence, pulsa para ver la carta. Ahí es donde muchos restaurantes pierden al cliente.</p>
          <p>La carta es un PDF que no se lee en el móvil, o una foto borrosa de la pizarra. El horario de la web no coincide con el de Google. No hay forma de reservar sin llamar, y en pleno servicio nadie puede coger el teléfono. Cada uno de esos detalles es una mesa que se va al local de al lado.</p>
          <p>Una página web para un restaurante no tiene que ser grande. Tiene que contestar rápido a cuatro preguntas: qué cocinas, cuánto cuesta, cuándo abres y cómo se reserva.</p>`,
  },
  includes: {
    title: 'Qué incluye la web de tu restaurante',
    intro: 'Lo justo para que el cliente se decida, y nada que le haga esperar.',
    items: [
      ['Carta digital', 'Tu carta en la web, legible en el móvil sin descargar nada y fácil de actualizar cuando cambie un plato o un precio.'],
      ['Horario y ubicación', 'Horario al día, mapa y cómo llegar, iguales que en tu ficha de Google.'],
      ['Reservas por WhatsApp', 'Un botón para reservar mesa por WhatsApp en un toque, o tu sistema de reservas si ya tienes uno.'],
      ['Fotos que abren el apetito', 'Tus platos y tu local bien presentados, y optimizados para que la web cargue rápido.'],
      ['SEO para restaurantes', 'Textos y ficha de Google pensados para búsquedas como «dónde comer» en tu zona.'],
      ['Varios idiomas', 'Si tienes clientes extranjeros, la carta y la web en su idioma.'],
    ],
  },
  extra: [
    {
      title: 'Un ejemplo: Bar Meridiano',
      html: `
          <p>Bar Meridiano es una maqueta que diseñamos para enseñar cómo puede ser la web de un pub y bar de copas frente al puerto. No es un bar real: el local, la dirección y la carta son de muestra. Pero tiene todo lo que pedimos a una web de hostelería.</p>
          <ul>
            <li>Una portada que transmite el ambiente del local antes de leer nada.</li>
            <li>La carta completa, con cócteles de autor, clásicos, opciones sin alcohol y algo para picar, con sus precios.</li>
            <li>El horario a la vista: de jueves a domingo, y qué días cierra.</li>
            <li>La web en tres idiomas: español, inglés y francés.</li>
          </ul>
          <p>Puedes verla en <a href="https://bar-meridiano.vercel.app/" target="_blank" rel="noopener">bar-meridiano.vercel.app</a>.</p>`,
    },
    {
      title: 'Página web para restaurante: precio y qué influye',
      html: `
          <p>El precio de una página web para un restaurante depende de cuántas páginas necesite, de si la carta cambia a menudo, de los idiomas y de si quieres reservas o pedidos online. Una web sencilla con carta, horario y reservas por WhatsApp no tiene nada que ver con una web con pedidos para llevar. Te enviamos un presupuesto claro después de hablar, y si quieres entender de qué depende, lo explicamos en <a href="/blog/cuanto-cuesta-una-pagina-web">cuánto cuesta una página web</a>.</p>`,
    },
    {
      title: 'Páginas web para bares, cafeterías y chiringuitos',
      html: `
          <p>Un bar de copas, una cafetería de barrio o un chiringuito de playa necesitan cosas distintas. El bar vende ambiente y horario de noche; la cafetería, desayunos y meriendas; el chiringuito, la temporada y la ubicación. Diseñamos cada web alrededor de lo que hace que la gente vaya.</p>
          <p>Si tu restaurante está en la costa, en <a href="/diseno-web-roquetas-de-mar">Roquetas de Mar o Aguadulce</a>, te interesará que la web esté en varios idiomas. Para que te encuentren cuando buscan dónde comer, trabajamos tu ficha en <a href="/seo-local-almeria">SEO local y Google Maps</a>. Y como las reseñas pesan mucho en hostelería, te contamos <a href="/blog/como-conseguir-mas-resenas-en-google">cómo conseguir más reseñas en Google</a> sin comprarlas.</p>`,
    },
  ],
  steps: [
    'Nos cuentas tu cocina, tu local y cómo reservan hoy tus clientes.',
    'Ordenamos la carta y diseñamos una web con el ambiente de tu local.',
    'La pruebas en tu móvil, como lo haría un cliente, y ajustamos lo que haga falta.',
    'La publicamos con tu ficha de Google al día y seguimos a tu lado cuando cambie la carta.',
  ],
  works: {
    intro: 'Bar Meridiano es nuestra maqueta para hostelería; el resto son webs reales que hemos hecho.',
    ids: ['bar-meridiano', 'ecological-villas', 'enterprise-thinking'],
  },
  faq: [
    { q: '¿Podré cambiar la carta y los precios?', a: 'Sí. Con el mantenimiento web lo cambiamos nosotros en cuanto nos escribas; si lo prefieres, te explicamos cómo hacer tú los cambios sencillos.' },
    { q: '¿Cómo funcionan las reservas por WhatsApp?', a: 'El cliente pulsa un botón y se abre WhatsApp con un mensaje ya escrito para reservar. Tú contestas cuando puedas, sin llamadas en pleno servicio.' },
    { q: '¿Sirve una carta en PDF?', a: 'Se puede enlazar, pero en el móvil se lee peor y es más incómoda de actualizar. Es mejor tener la carta como texto en la web.' },
    { q: '¿Me ayudáis con Google Maps y las reseñas?', a: 'Sí. La ficha de Google es clave para un restaurante, así que la revisamos junto con la web: categoría, horario, fotos, carta y reseñas.' },
    { q: '¿Cuánto cuesta una página web para un restaurante?', a: 'Depende de lo que necesites: no es lo mismo una web con carta y horario que una con varios idiomas o pedidos online. Tras una primera conversación te enviamos un presupuesto claro.' },
    { q: '¿Hacéis webs para bares de copas y cafeterías?', a: 'Sí. Bar Meridiano es un ejemplo de lo que hacemos para un bar de copas, y adaptamos cada web al tipo de local.' },
  ],
  cta: {
    title: '¿Tu restaurante sale cuando buscan <em>dónde comer</em>?',
    text: 'Revisamos tu web, tu carta y tu ficha de Google y te decimos qué cambiaríamos para llenar más mesas, sin compromiso.',
  },
});
