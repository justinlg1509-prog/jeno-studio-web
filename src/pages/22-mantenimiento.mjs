// Servicio: mantenimiento web · clave: mantenimiento web
import { landing } from '../landing.mjs';
import { priceSections, priceLabel } from '../precios.mjs';

const maintenance = priceSections.find(s => s.id === 'mantenimiento').plans;

export default landing({
  path: '/mantenimiento-web',
  crumb: 'Mantenimiento web',
  title: 'Mantenimiento web mensual | JENO STUDIO',
  description: 'Mantenimiento web mensual: hosting, seguridad, copias de seguridad y los cambios que necesites. Tú nos escribes y nosotros lo hacemos. Pide presupuesto.',
  service: { name: 'Mantenimiento web mensual', serviceType: 'Mantenimiento web', areaServed: [{ '@type': 'Country', name: 'España' }] },
  h1: 'Mantenimiento web: tu página <em>al día</em> cada mes',
  lead: 'El mantenimiento web de JENO STUDIO es un servicio mensual para negocios que quieren tener su página siempre al día sin ocuparse de ella: hosting, seguridad, copias de seguridad y los cambios que necesites. Tú nos escribes y nosotros lo hacemos.',
  problem: {
    title: 'Una web sin mantenimiento se queda vieja antes de lo que crees',
    html: `
          <p>Publicar la web es el principio, no el final. Con el tiempo cambian los horarios, los precios, los servicios y las fotos, y si nadie los actualiza, la web empieza a decir cosas que ya no son verdad. El cliente que llega a una hora en la que ya no abres, o que pregunta por un precio antiguo, se lleva una mala impresión.</p>
          <p>Luego está lo que no se ve: el dominio que hay que renovar, el certificado de seguridad, las copias por si algo falla, la velocidad que va empeorando con cada foto pesada que se sube. Nada de eso es urgente hasta el día en que la web deja de funcionar.</p>
          <p>La mayoría de negocios no tiene tiempo para estar pendiente de todo eso. Y no debería: tu trabajo es atender a tus clientes, no pelearte con tu web.</p>`,
  },
  includes: {
    title: 'Qué incluye el mantenimiento',
    intro: 'Una cuota al mes y una forma sencilla de pedir cambios: nos escribes por Instagram, WhatsApp o email.',
    items: [
      ['Hosting y dominio', 'Nos encargamos de que el alojamiento funcione y de que el dominio se renueve a tiempo, sin sustos.'],
      ['Seguridad', 'Conexión segura (HTTPS) y revisiones para que la web siga protegida.'],
      ['Copias de seguridad', 'Copias periódicas para poder recuperar la web si algo falla.'],
      ['Cambios de contenido', 'Textos, fotos, horarios, precios o servicios nuevos: tú nos lo pides y lo cambiamos.'],
      ['Velocidad y errores', 'Revisamos que la web siga cargando rápido y que no haya enlaces rotos ni errores.'],
      ['Mejoras cuando las necesites', 'Nuevas secciones o páginas cuando tu negocio crezca.'],
    ],
  },
  extra: [
    {
      title: 'Precio del mantenimiento web mensual',
      html: `
          <p>Tenemos dos cuotas, sin permanencia: ${maintenance.map(p => `<strong>${p.name}, ${priceLabel(p)} + IVA</strong> (${p.items.join(', ').toLowerCase()})`).join(' y ')}. Tienes todos los detalles en <a href="/precios#mantenimiento">nuestros precios</a>.</p>
          <p>Si quieres hacerte una idea de qué partes tiene ese gasto (dominio, hosting, seguridad y cambios), lo explicamos en <a href="/blog/cuanto-cuesta-mantener-una-pagina-web">cuánto cuesta mantener una página web al mes</a>.</p>`,
    },
    {
      title: 'Hosting y dominio: qué son y por qué importan',
      html: `
          <p>El dominio es la dirección de tu web, como tunegocio.com, y hay que renovarlo cada cierto tiempo, normalmente cada año. El hosting es el servidor donde está guardada la web y desde donde llega a cada visitante. Si el dominio caduca o el hosting falla, la web desaparece, y con ella el correo si va con el mismo dominio.</p>
          <p>Con el mantenimiento te olvidas de esas fechas. Si la web la hicimos nosotros, ya sabemos cómo está hecha, así que cualquier cambio es rápido. Si la hizo otra persona, la revisamos primero; a veces sale más a cuenta un <a href="/rediseno-web">rediseño web</a> que seguir poniendo parches.</p>
          <p>Mantener la web rápida y al día también ayuda a que Google la tenga en cuenta. Si además quieres trabajar tu posición en las búsquedas de tu zona, lo combinamos con el <a href="/seo-local-almeria">SEO local y Google Maps</a>.</p>`,
    },
  ],
  steps: [
    'Vemos tu web y nos cuentas qué cambios sueles necesitar.',
    'Te proponemos el mantenimiento que encaja con tu web y con tu negocio.',
    'Revisamos juntos el estado de la web y lo que conviene mejorar primero.',
    'Publicamos cada cambio en cuanto está listo y te avisamos.',
  ],
  works: {
    title: 'Webs que <em>hemos hecho</em>',
    intro: 'Algunas de las webs que hemos diseñado y publicado.',
    ids: ['enterprise-thinking', 'elite-solution-pro', 'ecological-villas'],
  },
  faq: [
    { q: '¿Cuánto cuesta el mantenimiento web?', a: `${maintenance.map(p => `${p.name}: ${priceLabel(p)} + IVA`).join('. ')}. Sin permanencia.` },
    { q: '¿Cómo pido un cambio?', a: 'Nos escribes por Instagram, WhatsApp o email con lo que quieres cambiar, y lo hacemos nosotros.' },
    { q: '¿Mantenéis webs que no habéis hecho vosotros?', a: 'Sí, después de revisarlas. Si la web está muy anticuada o es muy lenta, te diremos si conviene más rehacerla.' },
    { q: '¿Puedo hacer yo los cambios sencillos?', a: 'Sí. Si lo prefieres, te explicamos cómo hacer tú mismo los cambios sencillos y nos encargamos del resto.' },
    { q: '¿Qué pasa si se cae la web?', a: 'Para eso están las copias de seguridad y las revisiones: si algo falla, lo vemos y recuperamos la web a partir de la última copia.' },
  ],
  cta: {
    title: '¿Tu web lleva tiempo <em>sin tocarse</em>?',
    text: 'Cuéntanos qué web tienes y qué cambios necesitas. La revisamos y te proponemos un mantenimiento a la medida de tu negocio, sin compromiso.',
  },
});
