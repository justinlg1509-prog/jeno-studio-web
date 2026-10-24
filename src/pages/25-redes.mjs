// Servicio: gestión de redes sociales · clave: community manager almería
import { landing } from '../landing.mjs';
import { pricesSentence, planById, priceLabel } from '../precios.mjs';

export default landing({
  path: '/gestion-redes-sociales-almeria',
  crumb: 'Gestión de redes sociales',
  title: 'Community manager en Almería | JENO STUDIO',
  description: 'Gestión de redes sociales en Almería, Roquetas y El Ejido: planificamos, creamos y publicamos el contenido de tu Instagram, TikTok y Facebook.',
  service: {
    name: 'Gestión de redes sociales en Almería',
    serviceType: 'Community manager',
    areaServed: [{ '@type': 'City', name: 'Almería' }, { '@type': 'City', name: 'Roquetas de Mar' }, { '@type': 'City', name: 'El Ejido' }, { '@type': 'Country', name: 'España' }],
  },
  h1: 'Community manager en <em>Almería</em>',
  lead: 'JENO STUDIO es tu community manager en Almería: hacemos la gestión de redes sociales de negocios y empresas, y planificamos, creamos y publicamos el contenido de tu Instagram, TikTok y Facebook para que tu negocio se vea vivo y atraiga clientes.',
  problem: {
    title: 'Las redes piden constancia, y el día no da para más',
    html: `
          <p>Casi todos los negocios saben que deberían publicar más. El problema es el tiempo: entre atender a los clientes, a los proveedores y el día a día, las redes se quedan para «cuando pueda». Y cuando se publica, se hace con prisa: una foto, una frase y a esperar.</p>
          <p>El resultado es un perfil que da sensación de abandono, justo donde muchos clientes miran antes de decidirse. Un Instagram sin publicaciones desde hace meses hace dudar de si el negocio sigue abierto.</p>
          <p>Gestionar bien las redes no es publicar mucho, sino publicar con un plan: saber qué contar cada semana, en qué formato y para qué.</p>`,
  },
  includes: {
    title: 'Qué incluye la gestión',
    intro: 'Nos encargamos de tus redes de principio a fin, y tú lo revisas antes de que salga.',
    items: [
      ['Plan de contenidos', 'Un calendario con qué publicar, cuándo y en qué red, según tu negocio y tus temporadas.'],
      ['Diseño para redes sociales', 'Publicaciones, carruseles e historias con tu imagen de marca.'],
      ['Reels y vídeos', 'Vídeos cortos, también hechos con IA si no quieres grabar.'],
      ['Textos', 'Descripciones que suenan a ti, con una llamada a la acción clara.'],
      ['Publicación', 'Programamos y publicamos en Instagram, TikTok y Facebook.'],
      ['Perfil optimizado', 'Biografía, enlaces y destacados preparados para que quien llega sepa qué haces y cómo contactarte.'],
    ],
  },
  extra: [
    {
      title: 'Gestión de redes sociales para empresas',
      html: `
          <p>No hace falta estar en todas las redes. Una peluquería o un restaurante suelen sacar más partido de Instagram y TikTok; una empresa que vende a otras empresas, quizá de Facebook. Te ayudamos a elegir dónde merece la pena estar y a no repartir el esfuerzo donde no están tus clientes.</p>
          <p>En nuestro propio Instagram, <a href="https://www.instagram.com/jeno.studi0/" target="_blank" rel="noopener">@jeno.studi0</a>, publicamos reels sobre webs, Google y negocios. Es la misma forma de trabajar que aplicamos a tus redes: una idea por publicación, un gancho claro y un mensaje que se entienda en segundos.</p>
          <p>Las redes funcionan mejor si llevan a algún sitio. Cada publicación puede acabar en tu web, en tu WhatsApp o en tu ficha de Google, así que conviene que estén a la altura: mira nuestro <a href="/">diseño web en Almería</a> y el servicio de <a href="/seo-local-almeria">SEO local y Google Maps</a>.</p>`,
    },
    {
      title: 'Community manager en Roquetas de Mar y El Ejido',
      html: `
          <p>Trabajamos en remoto con negocios de toda la provincia. Si tu negocio está en la costa, como en <a href="/diseno-web-roquetas-de-mar">Roquetas de Mar</a> o Aguadulce, adaptamos el contenido a la temporada alta y, si lo necesitas, a clientes que no hablan español.</p>
          <p>Si estás en <a href="/diseno-web-el-ejido">El Ejido</a> o en Almerimar, lo mismo: el calendario se ajusta a tu sector y a tus fechas fuertes, y el tono, a tu cliente. No es igual hablarle a un vecino que busca dónde cenar que a una empresa que busca un proveedor.</p>`,
    },
  ],
  steps: [
    'Nos cuentas tu negocio, a quién quieres llegar y qué redes usas hoy.',
    'Preparamos el plan de contenidos y el estilo de tus publicaciones.',
    'Revisas las publicaciones antes de que salgan y ajustamos lo que haga falta.',
    'Publicamos cada semana y repasamos contigo qué funciona.',
  ],
  reels: {
    title: 'Lo que publicamos en <em>Instagram</em>',
    intro: 'Algunos de los reels de nuestro propio perfil, para que veas cómo contamos las cosas.',
  },
  faq: [
    { q: '¿Qué hace un community manager?', a: 'Se encarga de las redes sociales de tu negocio: planifica qué publicar, crea las publicaciones y los vídeos, escribe los textos y los publica, para que tu perfil se vea activo y atraiga clientes.' },
    { q: '¿En qué redes publicáis?', a: 'En Instagram, TikTok y Facebook. Te ayudamos a elegir en cuáles merece la pena estar según tu negocio.' },
    { q: '¿Tengo que hacer yo las fotos?', a: 'No necesariamente. Si tienes fotos o vídeos de tu negocio, los aprovechamos; si no, podemos crear contenido con diseño y con <a href="/videos-con-ia-para-empresas">vídeos con IA</a>.' },
    { q: '¿Puedo revisar las publicaciones antes de que salgan?', a: 'Sí. Te enseñamos el contenido antes de publicarlo y cambiamos lo que no te convenza.' },
    { q: '¿Trabajáis con negocios de Roquetas y El Ejido?', a: 'Sí, y del resto de la provincia de Almería y de España. Todo se hace en remoto, por Instagram, WhatsApp o email.' },
    { q: '¿Cuánto cuesta la gestión de redes sociales?', a: `Precios cerrados y sin permanencia: ${pricesSentence('redes')}. Tienes lo que incluye cada plan en <a href="/precios#redes">precios</a>.` },
  ],
  cta: {
    badge: 'Sin permanencia',
    title: '¿Tus redes llevan tiempo <em>paradas</em>?',
    text: 'Cuéntanos tu negocio y en qué redes estás. Te decimos qué plan te encaja, sin compromiso.',
  },
});
