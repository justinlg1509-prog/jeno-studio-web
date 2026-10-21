// Servicio: SEO local y Google Maps · clave: seo almería
import { landing } from '../landing.mjs';
import { areaServed } from '../data.mjs';

export default landing({
  path: '/seo-local-almeria',
  crumb: 'SEO local y Google Maps',
  title: 'SEO local y Google Maps en Almería | JENO STUDIO',
  description: 'Posicionamiento web y Google Maps en Almería: optimizamos tu web y tu ficha de Google para que te encuentren los clientes de tu zona. Pide presupuesto.',
  service: { name: 'SEO local y Google Maps en Almería', serviceType: 'SEO local', areaServed },
  h1: 'Posicionamiento en Google y <em>Google Maps</em> en Almería',
  lead: 'JENO STUDIO hace SEO en Almería para negocios que quieren aparecer en Google y en Google Maps cuando alguien de su zona busca lo que ofrecen: optimizamos tu web y tu Perfil de Empresa en Google para que te encuentren y te elijan.',
  problem: {
    title: 'Por qué tu negocio no sale cuando te buscan',
    html: `
          <p>Cuando alguien escribe en Google «peluquería en Almería» o «fontanero cerca de mí», lo primero que ve muchas veces no es una lista de webs: es un mapa con tres negocios. Esos tres se llevan buena parte de las llamadas y de las visitas. Si no estás ahí, para muchos clientes es como si no existieras.</p>
          <p>Normalmente no es mala suerte. Pasa por cosas concretas: una ficha de Google sin verificar o a medio rellenar, una categoría que no es la tuya, pocas reseñas o sin contestar, un horario que no coincide con el de la web, o una web que no dice con claridad qué haces y en qué zona. Google necesita entender todo eso para enseñarte.</p>
          <p>La buena noticia es que casi todo tiene arreglo. Si tus competidores llevan años sin tocar su ficha ni su web, ordenar las tuyas puede marcar la diferencia.</p>`,
  },
  includes: {
    title: 'Qué hacemos',
    intro: 'Trabajamos las tres cosas que Google mira para decidir a quién enseñar: tu ficha, tus reseñas y tu web.',
    items: [
      ['Perfil de Empresa en Google', 'Creamos o revisamos tu ficha: categoría, servicios, horarios, zona, fotos y descripción, todo completo y al día.'],
      ['Reseñas', 'Te ayudamos a pedir reseñas a tus clientes de forma sencilla y a contestarlas bien, las buenas y las malas.'],
      ['SEO local en tu web', 'Títulos, textos y estructura pensados para las búsquedas de tu zona, con una página para cada servicio importante.'],
      ['Los mismos datos en todas partes', 'Nombre, zona, teléfono y horario iguales en tu web, tu ficha y tus redes.'],
      ['Datos estructurados', 'Etiquetamos tu web para que Google entienda qué negocio eres, dónde trabajas y qué ofreces.'],
      ['Velocidad y móvil', 'Una web lenta o que se ve mal en el teléfono pierde clientes antes de que lean nada. La dejamos rápida.'],
    ],
  },
  extra: [
    {
      title: 'SEO local en Almería: cómo se sube en Google Maps',
      html: `
          <p>Google explica que decide qué negocios enseña en el mapa según tres cosas: la relevancia (si tu ficha y tu web encajan con lo que se busca), la distancia (lo cerca que estás de quien busca) y la prominencia (lo conocido y bien valorado que es tu negocio, con tus reseñas y lo que se dice de ti en internet).</p>
          <p>La distancia no se puede cambiar, pero las otras dos sí. La relevancia se trabaja con una ficha completa y una web que explique bien cada servicio. La prominencia, con reseñas reales, fotos, publicaciones y menciones en otras webs. Por eso el posicionamiento web en Almería no es un truco de una vez: es ordenar bien tu presencia y mantenerla.</p>
          <p>También conviene que lo que dicen tu web y tu ficha coincida con lo que la gente encuentra en otros sitios: directorios, redes sociales o plataformas de tu sector. Esa coherencia ayuda además a que las IA como ChatGPT te conozcan y te recomienden, como contamos en <a href="/visibilidad-en-ia">visibilidad en la IA</a>.</p>
          <p>Si quieres empezar por tu cuenta, en el blog explicamos <a href="/blog/mi-negocio-no-aparece-en-google-maps">por qué un negocio no aparece en Google Maps</a> y <a href="/blog/como-conseguir-mas-resenas-en-google">cómo conseguir más reseñas en Google</a> sin comprarlas.</p>`,
    },
    {
      title: 'Aparecer en Google Maps en toda la provincia',
      html: `
          <p>Trabajamos con negocios de Almería capital y de toda la provincia, y cada zona tiene lo suyo. En la costa, como en <a href="/diseno-web-roquetas-de-mar">Roquetas de Mar y Aguadulce</a>, la ficha tiene que estar preparada para clientes que buscan en otros idiomas y en temporada alta. En <a href="/diseno-web-el-ejido">El Ejido</a>, muchas empresas de servicios necesitan que su ficha explique bien a qué zona dan servicio.</p>
          <p>Si no tienes local abierto al público, también puedes salir en el mapa: tu perfil de empresa de Google se configura como negocio que da servicio en una zona, sin mostrar la dirección, y se indica en qué municipios trabajas.</p>`,
    },
  ],
  steps: [
    'Revisamos tu ficha de Google, tus reseñas y tu web, y te decimos qué te está frenando.',
    'Preparamos qué cambiar en la ficha y en la web, y en qué orden.',
    'Te enseñamos los cambios antes de hacerlos y resolvemos tus dudas.',
    'Aplicamos los cambios y, si quieres, seguimos cuidando la ficha y las reseñas.',
  ],
  works: {
    intro: 'Webs preparadas para Google. La de Ecological Villas saca 100 en SEO en la auditoría de PageSpeed de Google.',
    ids: ['ecological-villas', 'enterprise-thinking', 'elite-solution-pro'],
  },
  faq: [
    { q: '¿Por qué mi negocio no aparece en Google Maps?', a: 'Las causas más habituales son una ficha sin verificar o incompleta, una categoría equivocada, pocas reseñas, datos que no coinciden con los de tu web o una web que no dice con claridad qué haces y dónde. También influye la distancia entre tu negocio y quien busca.' },
    { q: '¿Cómo subir posiciones en Google Maps?', a: 'Completando la ficha al máximo, eligiendo bien la categoría, consiguiendo reseñas reales y contestándolas, subiendo fotos, publicando de vez en cuando y teniendo una web que respalde lo que dice la ficha. La distancia a quien busca no se puede cambiar; todo lo demás, sí.' },
    { q: '¿Cuánto tarda en notarse?', a: 'Depende de cómo esté tu ficha, de tu sector y de la competencia en tu zona. Algunos cambios, como corregir la categoría o los datos, pueden notarse antes; otros, como las reseñas o el SEO de la web, se construyen con el tiempo. Nadie puede prometerte una posición concreta, y desconfía de quien lo haga.' },
    { q: '¿La ficha de Google es gratis?', a: 'Sí. Crear y tener un Perfil de Empresa en Google no cuesta nada. Lo que presupuestamos es nuestro trabajo: revisarla, completarla, optimizarla y mantenerla junto con tu web.' },
    { q: '¿Necesito tener web para salir en Google Maps?', a: 'No es obligatorio, pero ayuda. Google tiene en cuenta tu web para entender qué haces, y muchos clientes la miran antes de decidirse. Si no tienes, podemos hacerte una.' },
    { q: '¿Y si no tengo local abierto al público?', a: 'También puedes aparecer. Si atiendes a domicilio o en remoto, la ficha se configura como negocio de servicio, con tu zona de trabajo y sin enseñar tu dirección.' },
  ],
  cta: {
    title: 'Te decimos por qué <em>no sales</em> en Google Maps',
    text: 'Revisamos tu ficha de Google, tus reseñas y tu web, y te contamos qué cambiaríamos para que te encuentren más clientes de tu zona. Sin compromiso.',
  },
});
