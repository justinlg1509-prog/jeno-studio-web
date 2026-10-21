// Servicio: visibilidad en la IA · clave: aparecer en ChatGPT
import { landing } from '../landing.mjs';

export default landing({
  path: '/visibilidad-en-ia',
  crumb: 'Visibilidad en la IA',
  title: 'Que ChatGPT recomiende tu negocio | JENO STUDIO',
  description: 'Cada vez más clientes preguntan a ChatGPT qué negocio elegir. Preparamos tu web y tus datos para que la IA te conozca y te recomiende. Pide presupuesto.',
  service: { name: 'Visibilidad en la IA', serviceType: 'Optimización para buscadores con inteligencia artificial', areaServed: [{ '@type': 'Country', name: 'España' }] },
  h1: 'Que la IA <em>recomiende</em> tu negocio',
  lead: 'JENO STUDIO ayuda a negocios a aparecer en ChatGPT, Gemini y Perplexity cuando alguien pregunta qué negocio elegir: preparamos tu web y tus datos para que la inteligencia artificial te conozca y te recomiende.',
  problem: {
    title: 'Tus clientes ya no solo buscan en Google: también preguntan a la IA',
    html: `
          <p>«¿Qué peluquería me recomiendas en Almería?», «búscame un fontanero en Roquetas que trabaje el sábado». Cada vez más gente le hace preguntas así a ChatGPT, a Gemini o a Perplexity, y la respuesta no es una lista de diez enlaces: son dos o tres nombres, con una explicación de por qué.</p>
          <p>La IA recomienda al negocio que mejor conoce, no necesariamente al mejor. Para decidir, se apoya en lo que encuentra en internet: tu web, tu ficha de Google, tus reseñas y lo que se dice de ti en otros sitios. Si esa información es escasa, confusa o contradictoria, la IA no se arriesga a nombrarte.</p>
          <p>Esto no sustituye a Google: lo complementa. Buena parte de lo que hace que la IA te conozca es lo mismo que te ayuda en Google, hecho con más cuidado.</p>`,
  },
  includes: {
    title: 'Qué hacemos',
    intro: 'Trabajamos lo que la IA lee de ti para que pueda entender tu negocio y citarlo.',
    items: [
      ['Los mismos datos en todas partes', 'Nombre, servicios, zona, horario y contacto iguales en tu web, tu ficha de Google y tus redes.'],
      ['Contenido que la IA entiende', 'Textos claros que dicen qué haces, para quién y dónde, con frases fáciles de citar.'],
      ['Preguntas frecuentes', 'Las dudas reales de tus clientes respondidas en tu web, que es justo lo que se le pregunta a la IA.'],
      ['Datos estructurados', 'Etiquetas en el código (schema.org) que describen tu negocio, tus servicios y tus preguntas frecuentes.'],
      ['Acceso para los rastreadores', 'Revisamos que tu web deje leer su contenido a los rastreadores de ChatGPT, Perplexity y Google, y preparamos un archivo llms.txt.'],
      ['Reseñas que cuentan', 'Reseñas reales y detalladas en Google, que hablan de lo que haces y dónde.'],
    ],
  },
  extra: [
    {
      title: 'Cómo hacer para aparecer en ChatGPT',
      html: `
          <p>No hay un formulario para darse de alta en ChatGPT. Lo que sí se puede hacer es ponérselo fácil. Estos son los pasos que seguimos:</p>
          <ol>
            <li><strong>Que tu web se pueda leer.</strong> Si los rastreadores de la IA están bloqueados, o si tu contenido depende de que se ejecute código para mostrarse, puede que no lo vean.</li>
            <li><strong>Que diga claramente quién eres.</strong> La primera frase de cada página debería explicar qué haces, para quién y dónde.</li>
            <li><strong>Que tus datos coincidan.</strong> Si tu web dice una cosa y tu ficha de Google otra, la IA duda.</li>
            <li><strong>Que otros hablen de ti.</strong> Reseñas, directorios, prensa local y webs de tu sector le dan a la IA motivos para fiarse.</li>
            <li><strong>Que respondas a las preguntas de tus clientes.</strong> Una buena sección de preguntas frecuentes es material directo para las respuestas de la IA.</li>
          </ol>`,
    },
    {
      title: 'Posicionamiento en IA y SEO: qué tienen en común',
      html: `
          <p>El posicionamiento en IA se apoya en la misma base que el SEO de siempre: una web rápida, bien organizada, con contenido útil y datos fiables. La diferencia es que la IA no enseña tu web entera: cita una frase, un dato o una recomendación. Por eso cuidamos que tu contenido tenga respuestas claras y cortas, además de explicaciones completas.</p>
          <p>Si tienes un negocio local, empieza por lo básico: una ficha de Google completa y una web que la respalde. Lo trabajamos en <a href="/seo-local-almeria">SEO local y Google Maps</a>. Y si tu web está anticuada o no se deja leer bien, quizá te convenga un <a href="/rediseno-web">rediseño web</a>.</p>
          <p>Esta misma web está preparada así: con datos estructurados, preguntas frecuentes en cada página y un <a href="/llms.txt">archivo llms.txt</a> que resume quiénes somos para la IA.</p>`,
    },
  ],
  steps: [
    'Preguntamos a ChatGPT, Gemini y Perplexity por tu sector y tu zona, y vemos qué dicen de ti.',
    'Preparamos qué cambiar en tu web, tus datos y tus perfiles.',
    'Te enseñamos los cambios y por qué los hacemos.',
    'Los aplicamos y, pasado un tiempo, volvemos a preguntar a la IA.',
  ],
  works: {
    title: 'Webs que <em>hemos hecho</em>',
    intro: 'Webs con textos claros y bien ordenados, la base para que Google y la IA entiendan un negocio.',
    ids: ['ecological-villas', 'enterprise-thinking', 'elite-solution-pro'],
  },
  faq: [
    { q: '¿Cómo hago para aparecer en ChatGPT?', a: 'No hay un formulario para darse de alta. ChatGPT y otras IA recomiendan negocios a partir de lo que encuentran en internet, así que lo que funciona es tener una web clara y que se pueda leer, los mismos datos en todas partes, reseñas reales y contenido que responda a las preguntas de tus clientes.' },
    { q: '¿Esto sustituye al SEO en Google?', a: 'No, lo complementa. La base es la misma: una web rápida, bien organizada y con información fiable. Lo que cambia es que la IA cita frases y datos concretos, así que el contenido tiene que ser muy claro.' },
    { q: '¿Me podéis garantizar que ChatGPT me recomiende?', a: 'No, y desconfía de quien lo haga. Nadie controla lo que responde una IA. Lo que sí podemos hacer es darle toda la información que necesita para conocerte y confiar en ti.' },
    { q: '¿Qué es el archivo llms.txt?', a: 'Es un archivo de texto en tu web que resume, en un formato pensado para la IA, qué es tu negocio, qué ofreces y dónde están tus páginas principales. Es una propuesta reciente y no todas las IA lo usan, pero es fácil de mantener.' },
    { q: '¿Sirve para negocios pequeños o locales?', a: 'Sí. Cuando alguien pregunta por un negocio en su ciudad, la IA suele tener pocas opciones bien documentadas entre las que elegir, y estar entre ellas marca la diferencia.' },
  ],
  cta: {
    title: '¿Qué dice la IA de <em>tu negocio</em>?',
    text: 'Cuéntanos tu negocio. Revisamos tu web y tus datos y te decimos qué cambiaríamos para que la IA te conozca y te recomiende, sin compromiso.',
  },
});
