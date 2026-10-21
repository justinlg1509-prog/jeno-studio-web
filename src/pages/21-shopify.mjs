// Servicio: tiendas online con Shopify · clave: tienda online shopify
import { landing } from '../landing.mjs';

export default landing({
  path: '/tiendas-online-shopify',
  crumb: 'Tiendas online con Shopify',
  title: 'Tiendas online con Shopify | JENO STUDIO',
  description: 'Montamos tu tienda online con Shopify lista para vender: productos, pagos, envíos y diseño a juego con tu marca. La tienda queda siempre a tu nombre.',
  service: { name: 'Tiendas online con Shopify', serviceType: 'Diseño de tiendas online', areaServed: [{ '@type': 'Country', name: 'España' }] },
  h1: 'Tu tienda online con <em>Shopify</em>, lista para vender',
  lead: 'JENO STUDIO monta tiendas online con Shopify para negocios y marcas que quieren vender por internet sin complicarse: te la entregamos con los productos, los pagos y los envíos configurados, y siempre a tu nombre.',
  problem: {
    title: 'Vender por internet sin pelearte con la tecnología',
    html: `
          <p>Muchos negocios quieren vender online y se quedan a medias. Empiezan con una plantilla, se atascan con los pagos, los envíos o los impuestos, y la tienda acaba con cuatro productos mal fotografiados y sin visitas. Otros venden por Instagram o por WhatsApp, apuntando pedidos a mano, y cada venta les cuesta más tiempo del que debería.</p>
          <p>Shopify resuelve gran parte de lo técnico: el alojamiento, la seguridad, el carrito y el pago. Pero una tienda no vende solo por estar abierta. Hace falta que el cliente entienda el producto, confíe en ti y pueda comprar desde el móvil en pocos pasos.</p>
          <p>Ahí es donde entramos nosotros: en todo lo que hace que una tienda Shopify parezca tuya y no una más, y en dejarla lista para que solo tengas que preocuparte de vender.</p>`,
  },
  includes: {
    title: 'Qué incluye tu tienda',
    intro: 'Te la dejamos lista para vender desde el primer día y te enseñamos a gestionarla.',
    items: [
      ['Diseño a juego con tu marca', 'Colores, tipografías y fotos coherentes con tu negocio, no una plantilla igual a la de otras mil tiendas.'],
      ['Productos y categorías', 'Subimos tus productos con sus fotos, descripciones, variantes y precios, ordenados para que se encuentren fácil.'],
      ['Pagos', 'Configuramos los métodos de pago para que el cliente pague como prefiera.'],
      ['Envíos', 'Zonas, tarifas y plazos claros, para que el cliente sepa cuánto paga y cuándo le llega antes de comprar.'],
      ['Pensada para el móvil', 'Un proceso de compra corto y cómodo desde el teléfono.'],
      ['La tienda, a tu nombre', 'La cuenta de Shopify y el dominio quedan a tu nombre: la tienda es tuya, trabajes con nosotros o no.'],
    ],
  },
  extra: [
    {
      title: 'Crear una tienda online: lo que conviene saber antes',
      html: `
          <p>Shopify es una plataforma de pago mensual: tú contratas tu plan directamente con Shopify y se lo pagas a ellos, aparte de nuestro trabajo. A cambio, no tienes que preocuparte del servidor, de las actualizaciones ni de la seguridad. Puedes ver sus planes en la propia web de Shopify.</p>
          <p>Antes de empezar te ayudamos a pensar algunas cosas: cuántos productos vas a vender al principio, si tienen tallas o colores, a qué países envías, cómo vas a hacer las fotos y qué condiciones de envío y devolución vas a ofrecer. No hace falta tenerlo todo claro; para eso está la primera conversación.</p>
          <p>Si además de vender quieres que te encuentren en Google, la tienda se trabaja como cualquier otra web, con sus títulos, sus textos y su velocidad. Y si tu tienda también tiene local, conviene cuidar tu <a href="/seo-local-almeria">ficha de Google Maps</a>.</p>`,
    },
    {
      title: 'Una tienda Shopify en España, y en otros idiomas si vendes fuera',
      html: `
          <p>Configuramos la tienda en español, con precios en euros y envíos dentro de España, y si vendes fuera, con los idiomas y las zonas que necesites. Hemos hecho webs en español, inglés y neerlandés, así que una tienda en varios idiomas no nos asusta.</p>
          <p>Una tienda nueva necesita que alguien la conozca. Puedes acompañarla de <a href="/videos-con-ia-para-empresas">vídeos con IA</a> para anunciar tus productos en Instagram y TikTok, o dejarnos la <a href="/gestion-redes-sociales-almeria">gestión de tus redes sociales</a> para publicar con constancia.</p>`,
    },
  ],
  steps: [
    'Hablamos de tus productos, de tus clientes y de cómo vendes hoy.',
    'Diseñamos la tienda con tu imagen y preparamos el catálogo, los pagos y los envíos.',
    'Hacemos pedidos de prueba contigo y ajustamos lo que haga falta.',
    'Abrimos la tienda, te enseñamos a gestionarla y seguimos a tu lado.',
  ],
  works: {
    title: 'Webs que <em>hemos hecho</em>',
    intro: 'Algunas de las webs que hemos diseñado, con el mismo cuidado por el diseño y la velocidad que ponemos en cada tienda.',
    ids: ['elite-solution-pro', 'ecological-villas', 'pet-health-care-guide'],
  },
  faq: [
    { q: '¿La tienda queda a mi nombre?', a: 'Sí. La cuenta de Shopify y el dominio son tuyos desde el principio. Si un día dejas de trabajar con nosotros, la tienda sigue siendo tuya.' },
    { q: '¿Tengo que pagar Shopify aparte?', a: 'Sí. Shopify cobra una cuota mensual según el plan que elijas, y la pagas directamente a Shopify. Nuestro presupuesto es por montar y diseñar la tienda y, si quieres, por mantenerla.' },
    { q: '¿Podré gestionar los pedidos yo mismo?', a: 'Sí. Shopify tiene un panel sencillo, también en su app para el móvil, y te enseñamos a usarlo: añadir productos, cambiar precios y gestionar pedidos.' },
    { q: '¿Cuánto se tarda en tener la tienda?', a: 'Depende sobre todo del número de productos y de si ya tienes fotos y textos. Antes de empezar acordamos una fecha estimada de entrega.' },
    { q: '¿Y si ya tengo una web?', a: 'Podemos añadir la tienda a tu web o hacer una web nueva con Shopify que lo incluya todo. Te decimos qué te conviene después de verla.' },
    { q: '¿Os encargáis del mantenimiento de la tienda?', a: 'Si quieres, sí: con el <a href="/mantenimiento-web">mantenimiento web</a> nos ocupamos de los cambios, los productos nuevos y las revisiones.' },
  ],
  cta: {
    badge: 'Presupuesto sin compromiso',
    title: '¿Quieres vender <em>por internet</em>?',
    text: 'Cuéntanos qué vendes y cómo lo vendes hoy. Te decimos cómo montaríamos tu tienda con Shopify y te enviamos un presupuesto claro, sin compromiso.',
  },
});
