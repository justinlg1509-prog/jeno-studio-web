// Sector: peluquerías y barberías · clave: página web para peluquería
import { landing } from '../landing.mjs';
import { pricesSentence, planById, priceLabel } from '../precios.mjs';

export default landing({
  path: '/paginas-web-para-peluquerias-y-barberias',
  crumb: 'Páginas web para peluquerías',
  title: 'Páginas web para peluquerías y barberías | JENO STUDIO',
  description: 'Páginas web para peluquerías y barberías: servicios, precios, fotos de tus trabajos y cita por WhatsApp en un toque, y lista para salir en Google Maps.',
  service: { name: 'Páginas web para peluquerías y barberías', serviceType: 'Diseño web para peluquerías', areaServed: [{ '@type': 'City', name: 'Almería' }, { '@type': 'Country', name: 'España' }] },
  h1: 'Páginas web para <em>peluquerías</em> y barberías',
  lead: 'JENO STUDIO diseña la página web para tu peluquería, barbería o salón de belleza pensando en llenar la agenda: con los servicios y precios claros, fotos de tus trabajos y la cita por WhatsApp a un toque.',
  problem: {
    title: 'Por qué tu Instagram no basta para llenar la agenda',
    html: `
          <p>En peluquería y barbería, Instagram es el escaparate: ahí se ven los cortes, los colores y el ambiente. Pero cuando alguien nuevo busca «barbería cerca de mí» o «peluquería en Almería», lo que aparece es Google Maps y las webs. Si no tienes, o si la tuya no dice tus precios ni cómo pedir cita, ese cliente acaba en otro sitio.</p>
          <p>El otro problema es el teléfono. Con las manos ocupadas no puedes contestar, y el cliente que llama y no le cogen no siempre vuelve a llamar. Cuanto más fácil sea pedir cita sin hablar contigo, más citas entran.</p>
          <p>Y luego está la duda del precio. Mucha gente no pregunta cuánto cuesta un corte o un color: si no lo ve, se va a un sitio donde sí lo pone.</p>`,
  },
  includes: {
    title: 'Qué incluye la web de tu salón',
    intro: 'Lo que un cliente nuevo necesita ver para decidirse y pedir cita.',
    items: [
      ['Servicios y precios', 'Cortes, color, tratamientos o arreglo de barba, con su precio o un precio desde, para que nadie tenga que preguntar.'],
      ['Galería de trabajos', 'Fotos de tus cortes y peinados, bien presentadas y ligeras para que carguen rápido.'],
      ['Cita por WhatsApp', 'Un botón para pedir cita con el mensaje ya escrito, o tu agenda online si ya usas una.'],
      ['Equipo y ambiente', 'Quién va a atender y cómo es el local, para que el cliente llegue con confianza.'],
      ['Horario y ubicación', 'Horario, mapa y cómo llegar, iguales que en tu ficha de Google.'],
      ['Reseñas a la vista', 'Un enlace a tus reseñas de Google para que el cliente vea lo que opinan otros.'],
    ],
  },
  extra: [
    {
      title: 'Agenda web para barbería: cita online o por WhatsApp',
      html: `
          <p>Hay dos formas de que el cliente pida cita desde la web. La más sencilla es WhatsApp: pulsa un botón, se abre el chat con el mensaje escrito y tú confirmas cuando tengas un hueco. La otra es una agenda online, en la que el cliente ve los huecos libres y reserva solo, también a las once de la noche.</p>
          <p>Si ya usas un programa de citas, lo enlazamos o lo integramos en la web. Si no usas ninguno, te contamos qué opciones hay y te ayudamos a elegir la que encaje con tu forma de trabajar. Para una barbería pequeña, muchas veces WhatsApp es más que suficiente.</p>`,
    },
    {
      title: 'Página web para peluquería: que te encuentren en tu barrio',
      html: `
          <p>Los clientes de una peluquería suelen vivir o trabajar cerca. Por eso lo que más cuenta es salir en Google Maps cuando buscan en tu zona, con buenas fotos y reseñas. Lo trabajamos en <a href="/seo-local-almeria">SEO local y Google Maps</a>, y te explicamos <a href="/blog/como-conseguir-mas-resenas-en-google">cómo conseguir más reseñas en Google</a> sin comprarlas.</p>
          <p>Como Instagram es tu escaparate, conviene que web y redes vayan de la mano: cada publicación puede llevar a tu web y cada visita a la web, a tu perfil. Si no tienes tiempo de publicar, podemos encargarnos con la <a href="/gestion-redes-sociales-almeria">gestión de redes sociales</a> y hacer reels con <a href="/videos-con-ia-para-empresas">vídeos con IA</a>.</p>
          <p>Una web para un salón de belleza o una barbería también tiene que parecerse a tu local. No es lo mismo una barbería clásica que un salón de color o un centro de uñas: la estética de la web tiene que contar lo mismo que cuando alguien entra por la puerta.</p>`,
    },
  ],
  steps: [
    'Nos cuentas tus servicios, tus precios y cómo piden cita hoy tus clientes.',
    'Elegimos tus mejores fotos y diseñamos una web con el estilo de tu salón.',
    'La pruebas en el móvil pidiendo una cita de prueba y ajustamos lo que haga falta.',
    'La publicamos con tu ficha de Google al día y seguimos a tu lado.',
  ],
  works: {
    title: 'Webs que <em>hemos hecho</em>',
    intro: 'Todavía no tenemos una peluquería en el portfolio. Estas son webs reales que hemos hecho, con el mismo cuidado por el móvil y la velocidad.',
    ids: ['elite-solution-pro', 'bar-meridiano', 'enterprise-thinking'],
  },
  faq: [
    { q: '¿Pongo mis precios en la web?', a: 'Te lo recomendamos: ver el precio ayuda a que el cliente se decida sin tener que preguntar. Si varía según el pelo o el servicio, puedes poner un precio desde.' },
    { q: '¿Puedo tener una agenda para que reserven solos?', a: 'Sí. Podemos enlazar o integrar la agenda online que ya uses, o ayudarte a elegir una. Si prefieres algo más sencillo, la cita por WhatsApp funciona muy bien.' },
    { q: '¿También hacéis páginas web para barberías?', a: 'Sí. Una página web para barbería necesita lo mismo: servicios y precios claros, fotos de tus cortes y cita en un toque, con un estilo que encaje con tu local.' },
    { q: 'No tengo buenas fotos. ¿Es un problema?', a: 'No. Te ayudamos a elegir y preparar las que tengas, y si hace falta, te decimos qué fotos hacer con el móvil para que se vean bien.' },
    { q: '¿Cuánto cuesta una página web para una peluquería?', a: `Precios cerrados: ${pricesSentence('webs')}. Tienes el detalle en <a href="/precios#webs">precios</a>.` },
  ],
  cta: {
    title: 'Más citas <em>sin descolgar</em> el teléfono',
    text: 'Revisamos tu web, tu Instagram y tu ficha de Google y te decimos qué cambiaríamos para que entren más citas, sin compromiso.',
  },
});
