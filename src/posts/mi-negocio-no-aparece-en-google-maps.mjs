import { article } from '../article.mjs';

export default article({
  slug: 'mi-negocio-no-aparece-en-google-maps',
  crumb: 'Mi negocio no aparece en Google Maps',
  title: 'Mi negocio no aparece en Google Maps | JENO STUDIO',
  headline: 'Mi negocio no aparece en Google Maps: causas y solución',
  description: '¿Tu negocio no aparece en Google Maps? Te explicamos las causas más habituales (ficha, categoría, reseñas, distancia) y cómo solucionarlo paso a paso.',
  published: '2026-10-21',
  lead: 'Si tu negocio no aparece en Google Maps, lo más habitual es que la ficha no esté verificada, esté incompleta o tenga una categoría que no encaja con lo que buscan tus clientes. Otras causas frecuentes son la distancia a quien busca, tener pocas reseñas, datos que no coinciden con tu web o una ficha suspendida por incumplir las normas de Google.',
  sections: [
    { id: 'comprueba', title: 'Primero, comprueba qué está pasando', html: `
      <p>«No aparezco en Google Maps» puede significar dos cosas muy distintas, y la solución depende de cuál sea la tuya:</p>
      <ul>
        <li><strong>No sales ni buscando tu nombre.</strong> El problema está en la ficha: no existe, no está verificada, está suspendida o hay un duplicado.</li>
        <li><strong>Sales si buscan tu nombre, pero no si buscan tu servicio</strong>, por ejemplo «peluquería en Almería». La ficha existe, pero Google no te considera de los más relevantes para esa búsqueda. Es lo más habitual.</li>
      </ul>
      <p>Para comprobarlo bien, busca desde el móvil, sin haber iniciado sesión con tu cuenta y, si puedes, desde varios puntos de tu zona. Lo que ves tú desde la puerta de tu negocio no es lo que ve un cliente a dos kilómetros.</p>` },
    { id: 'sin-ficha', title: 'Causa 1: no tienes ficha o no está verificada', html: `
      <p>Para salir en Google Maps necesitas un Perfil de Empresa en Google, lo que antes se llamaba Google My Business. Crearlo es gratis, pero no basta con crearlo: hay que verificarlo, demostrando a Google que el negocio existe y que es tuyo. Google te propone el método de verificación durante el proceso; uno de los más habituales hoy es grabar un vídeo corto del negocio.</p>
      <p>Si empezaste el alta y la dejaste a medias, la ficha puede existir pero no mostrarse. Entra en tu perfil y revisa si aparece algún aviso pendiente.</p>` },
    { id: 'incompleta', title: 'Causa 2: la ficha está incompleta', html: `
      <p>Una ficha con el nombre y poco más le da a Google muy pocas pistas. Revisa que tengas todo esto:</p>
      <ul>
        <li>Categoría principal y categorías secundarias.</li>
        <li>Dirección o zona de servicio.</li>
        <li>Horario, incluidos los festivos y los cambios de temporada.</li>
        <li>Teléfono y web.</li>
        <li>Descripción del negocio.</li>
        <li>Servicios o productos, con sus descripciones.</li>
        <li>Fotos reales: fachada, interior, equipo y trabajos.</li>
      </ul>
      <p>Cuanto más completa y actualizada esté la ficha, más fácil es que Google entienda qué haces y cuándo enseñarte.</p>` },
    { id: 'categoria', title: 'Causa 3: la categoría no es la correcta', html: `
      <p>La categoría principal es de lo que más influye en las búsquedas en las que apareces. Si eres una clínica de fisioterapia y tu categoría es «centro médico», o si tienes una barbería y pusiste «peluquería», estás compitiendo en búsquedas que no son exactamente las tuyas.</p>
      <p>Elige la categoría más concreta que describa tu actividad principal y usa las secundarias para el resto. Mira también qué categorías usan los negocios que salen primero en tu zona: es una buena pista.</p>` },
    { id: 'distancia', title: 'Causa 4: la distancia a quien busca', html: `
      <p>Google explica que, para decidir qué negocios enseña en el mapa, tiene en cuenta tres cosas: la relevancia, la distancia y la prominencia. La distancia no se puede cambiar: si alguien busca desde la otra punta de la ciudad, es normal que le salgan antes negocios más cercanos a él.</p>
      <p>Por eso es tan importante comprobar desde varios sitios, y por eso un negocio puede salir el primero en su barrio y no aparecer a tres kilómetros. Lo que sí puedes hacer es reforzar las otras dos: la relevancia, con una ficha y una web que expliquen bien lo que haces, y la prominencia, con reseñas y presencia en internet.</p>` },
    { id: 'resenas', title: 'Causa 5: pocas reseñas o sin contestar', html: `
      <p>Las reseñas forman parte de lo que Google llama prominencia: lo conocido y bien valorado que es un negocio. Un negocio con pocas reseñas, o con reseñas antiguas, compite en desventaja frente a otros con muchas opiniones recientes. Contestarlas también cuenta: demuestra que el negocio está activo y que cuida a sus clientes.</p>
      <p>Lo explicamos paso a paso en <a href="/blog/como-conseguir-mas-resenas-en-google">cómo conseguir más reseñas en Google sin comprarlas</a>.</p>` },
    { id: 'datos', title: 'Causa 6: tus datos no coinciden', html: `
      <p>Si tu ficha dice una dirección, tu web otra y tu página de Facebook tiene un teléfono antiguo, Google no sabe a cuál creer. Revisa que el nombre del negocio, la dirección o zona, el teléfono y el horario sean exactamente iguales en tu ficha, en tu web, en tus redes sociales y en los directorios donde aparezcas.</p>` },
    { id: 'web', title: 'Causa 7: tu web no ayuda', html: `
      <p>Google también mira tu web para entender qué haces. Si la web no dice claramente qué servicios ofreces y en qué zona, si va lenta o si no se ve bien en el móvil, la ficha pierde fuerza.</p>
      <p>Lo ideal es que la web tenga una página para cada servicio importante, mencione tu zona de forma natural y tenga los mismos datos de contacto que la ficha. Si tu web se ha quedado antigua, quizá te convenga un <a href="/rediseno-web">rediseño web</a>.</p>` },
    { id: 'suspendida', title: 'Causa 8: la ficha está suspendida o duplicada', html: `
      <p>Google puede suspender una ficha que incumple sus normas. Algunos motivos habituales:</p>
      <ul>
        <li>Añadir palabras clave al nombre del negocio, como «Peluquería María, la mejor peluquería de Almería».</li>
        <li>Usar una dirección que no es un local real, como una oficina virtual.</li>
        <li>Tener varias fichas para el mismo negocio.</li>
      </ul>
      <p>Si tu ficha está suspendida, verás un aviso al entrar en tu perfil. Corrige lo que incumpla las normas y solicita la revisión desde el propio perfil. Si tienes fichas duplicadas, pide que se unan o que se elimine la que sobra.</p>` },
    { id: 'sin-local', title: 'Causa 9: no tienes local abierto al público', html: `
      <p>Si trabajas a domicilio o en remoto, como un fontanero, un fotógrafo o un estudio de diseño, puedes tener ficha igualmente. Se configura como negocio de servicio: indicas en qué zonas trabajas y la dirección no se muestra. Lo que no debes hacer es inventarte una dirección para aparecer en el mapa de otra ciudad.</p>` },
    { id: 'pasos', title: 'Cómo solucionarlo paso a paso', html: `
      <ol>
        <li>Busca tu negocio por su nombre y por tu servicio, desde el móvil y desde varios puntos de tu zona.</li>
        <li>Entra en tu Perfil de Empresa y revisa si hay avisos de verificación o de suspensión.</li>
        <li>Completa la ficha: categoría, horario, servicios, descripción y fotos.</li>
        <li>Revisa que tus datos coincidan en la web, las redes y los directorios.</li>
        <li>Empieza a pedir reseñas a tus clientes y contesta todas.</li>
        <li>Mejora tu web para que explique cada servicio y tu zona.</li>
        <li>Publica en la ficha de vez en cuando: novedades, ofertas o fotos de trabajos.</li>
      </ol>` },
    { id: 'cuanto-tarda', title: '¿Cuánto tarda en notarse?', html: `
      <p>Depende de dónde partas. Si el problema era la verificación, una categoría equivocada o una suspensión, el cambio puede notarse en cuanto se resuelve. Si se trata de ganar relevancia y reseñas frente a la competencia, es un trabajo de semanas o meses.</p>
      <p>Desconfía de quien te prometa el primer puesto en Google Maps en pocos días. Nadie controla el mapa de Google; lo que sí se puede hacer es darle a Google todos los motivos para enseñarte.</p>` },
  ],
  cta: {
    title: '¿Prefieres que lo revisemos nosotros?',
    text: 'Miramos tu ficha de Google, tus reseñas y tu web y te decimos por qué no sales en el mapa y qué cambiaríamos.',
    path: '/seo-local-almeria',
    label: 'Ver SEO local y Google Maps',
  },
  faq: [
    { q: '¿Es gratis aparecer en Google Maps?', a: 'Sí. Crear y tener un Perfil de Empresa en Google es gratis. Google también vende anuncios que pueden salir en el mapa, pero el resultado normal no se paga.' },
    { q: '¿Por qué sale mi competencia y yo no?', a: 'Porque Google la considera más relevante, más cercana a quien busca o más conocida. Suele tener la ficha más completa, más reseñas recientes o una web que explica mejor sus servicios.' },
    { q: '¿Sirve de algo poner palabras clave en el nombre?', a: 'No lo hagas. Va contra las normas de Google y puede hacer que te suspendan la ficha. El nombre tiene que ser el nombre real de tu negocio.' },
    { q: '¿Puedo salir en Google Maps sin local?', a: 'Sí. Si atiendes a domicilio o en remoto, la ficha se configura como negocio de servicio, con tu zona de trabajo y sin mostrar tu dirección.' },
  ],
});
