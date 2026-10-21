import { article } from '../article.mjs';

export default article({
  slug: 'cuanto-cuesta-mantener-una-pagina-web',
  crumb: 'Cuánto cuesta mantener una página web',
  title: 'Cuánto cuesta mantener una página web al mes | JENO STUDIO',
  headline: '¿Cuánto cuesta mantener una página web al mes?',
  description: 'Cuánto cuesta mantener una página web al mes: dominio, hosting, seguridad, copias, actualizaciones y cambios. Qué incluye cada gasto y qué preguntar.',
  published: '2026-10-21',
  lead: 'Mantener una página web tiene dos tipos de gasto: los fijos, que son el dominio y el hosting, y el trabajo de tenerla al día, con seguridad, copias de seguridad, actualizaciones y cambios de contenido. Lo que cuesta al mes depende sobre todo de cómo está hecha la web y de cuántos cambios necesitas.',
  sections: [
    { id: 'gastos', title: 'Qué gastos tiene una web después de publicarla', html: `
      <p>Mucha gente piensa que una web se paga una vez y ya está. Pero una web publicada tiene gastos todos los años, igual que un local tiene alquiler y luz. Algunos son fijos y pequeños; otros dependen de lo que hagas con ella. Estos son todos:</p>
      <ul>
        <li>Dominio.</li>
        <li>Hosting o alojamiento.</li>
        <li>Certificado de seguridad (HTTPS).</li>
        <li>Correo profesional, si lo usas.</li>
        <li>Plataforma, plantillas o complementos de pago.</li>
        <li>Mantenimiento técnico: actualizaciones, seguridad y copias.</li>
        <li>Cambios de contenido.</li>
      </ul>` },
    { id: 'dominio', title: 'Dominio', html: `
      <p>Es la dirección de tu web: tunegocio.com o tunegocio.es. Se paga al registrador del dominio, normalmente cada año, y el precio depende de la extensión (.com, .es, .net…) y del registrador. Es de los gastos más pequeños, pero también de los más importantes: si se te olvida renovarlo, la web y el correo dejan de funcionar, y otra persona podría registrarlo.</p>
      <p>Comprueba que el dominio está a tu nombre, no al de quien te hizo la web. Es tuyo y tiene que poder seguir siéndolo aunque cambies de proveedor.</p>` },
    { id: 'hosting', title: 'Hosting o alojamiento', html: `
      <p>Es el servidor donde vive tu web. Hay opciones muy distintas: alojamientos compartidos económicos, servidores más potentes, plataformas que lo incluyen todo, como Shopify para las tiendas, o servicios para webs estáticas, que son muy rápidas y necesitan poco mantenimiento. El precio cambia mucho según la potencia, el soporte y lo que incluya.</p>
      <p>Un hosting demasiado barato puede salir caro si la web va lenta o se cae. Para la web de un negocio pequeño no hace falta lo más caro, pero sí algo fiable.</p>` },
    { id: 'seguridad', title: 'Certificado de seguridad', html: `
      <p>Es lo que hace que tu web empiece por https y que el navegador no avise de que no es segura. Hoy muchos alojamientos lo incluyen sin coste, así que, si te lo cobran aparte, pregunta por qué.</p>` },
    { id: 'correo', title: 'Correo profesional', html: `
      <p>Si usas un correo con tu dominio, como hola@tunegocio.com, lo normal es pagarlo aparte, por ejemplo con Google Workspace o Microsoft 365, que cobran una cuota mensual por cada cuenta. Algunos alojamientos incluyen un correo básico.</p>` },
    { id: 'plataforma', title: 'Plataforma y complementos', html: `
      <p>Según cómo esté hecha la web, puede haber otros gastos. Una tienda en Shopify paga su plan mensual a Shopify. Una web en WordPress puede usar plantillas o complementos de pago que se renuevan cada año. Una web hecha a medida, sin plataforma, puede no tener ninguno de estos gastos.</p>
      <p>Antes de encargar una web, pregunta qué licencias necesita y cuánto cuestan al año. Es un gasto que no aparece en el presupuesto del diseño, pero que vas a pagar igual.</p>` },
    { id: 'mantenimiento-tecnico', title: 'Mantenimiento técnico', html: `
      <p>Es el trabajo de que la web siga funcionando bien y segura:</p>
      <ul>
        <li><strong>Actualizaciones</strong> de la plataforma y sus complementos, que corrigen fallos de seguridad.</li>
        <li><strong>Copias de seguridad</strong> periódicas, para poder recuperar la web si algo falla.</li>
        <li><strong>Revisiones</strong> de velocidad, de enlaces rotos y de errores.</li>
        <li><strong>Vigilancia</strong> de que la web sigue en línea.</li>
      </ul>
      <p>Una web con WordPress y muchos complementos necesita más mantenimiento que una web estática, que tiene muy pocas piezas que actualizar. Por eso el mismo servicio puede costar distinto según la web.</p>` },
    { id: 'cambios', title: 'Cambios de contenido', html: `
      <p>Es la parte más variable: cambiar horarios, precios, fotos o textos, añadir un servicio nuevo, subir una obra o un producto. Hay negocios que cambian algo cada semana y otros que tocan la web un par de veces al año. Cuantos más cambios, más tiempo, y más cuesta.</p>
      <p>Si tu web te permite hacer tú los cambios sencillos, puedes ahorrar en esta parte. Lo importante es que alguien se ocupe, porque una web con horarios o precios antiguos da mala imagen.</p>` },
    { id: 'si-no', title: 'Qué pasa si no mantienes tu web', html: `
      <p>Al principio, nada. Con el tiempo empiezan los problemas: la web enseña precios u horarios antiguos, se vuelve lenta, aparecen errores y, en el peor caso, la atacan o se cae y no hay copia para recuperarla. Arreglar una web abandonada suele costar más que haberla mantenido, y a veces la única salida es un <a href="/rediseno-web">rediseño web</a>.</p>` },
    { id: 'modalidades', title: 'Por horas o con cuota mensual', html: `
      <p>Hay dos formas habituales de pagar el mantenimiento:</p>
      <ul>
        <li><strong>Por horas o por encargo:</strong> pagas solo cuando pides algo. Sirve si tu web cambia poco, pero nadie se ocupa de la seguridad ni de las copias entre medias.</li>
        <li><strong>Con cuota mensual:</strong> pagas una cantidad fija al mes y alguien se ocupa de lo técnico y de un número de cambios. Es más cómodo y más previsible.</li>
      </ul>
      <p>Antes de contratar una cuota, pregunta qué incluye exactamente: cuántos cambios al mes, si el hosting y el dominio van incluidos, cada cuánto se hacen copias y cuánto se tarda en atender un cambio.</p>` },
    { id: 'ahorrar', title: 'Cómo gastar menos en mantener tu web', html: `
      <p>Hay formas sensatas de ahorrar sin dejar la web abandonada:</p>
      <ul>
        <li><strong>Que la web tenga pocas piezas.</strong> Cuantos menos complementos y licencias, menos que actualizar y pagar.</li>
        <li><strong>Agrupar los cambios.</strong> Si pagas por encargo, pide varios cambios a la vez en lugar de uno cada semana.</li>
        <li><strong>Aprender los cambios sencillos.</strong> Cambiar un horario o una foto no debería obligarte a llamar a nadie.</li>
        <li><strong>No pagar dos veces lo mismo.</strong> Revisa si tu hosting ya incluye el certificado de seguridad o el correo antes de contratarlos aparte.</li>
      </ul>
      <p>Lo que no conviene recortar son las copias de seguridad y la renovación del dominio: son baratas y evitan los peores sustos.</p>` },
    { id: 'nuestro-mantenimiento', title: 'Cuánto cuesta el mantenimiento con JENO STUDIO', html: `
      <p>[RELLENAR: precio del mantenimiento mensual de JENO STUDIO y qué incluye].</p>
      <p>Nuestro mantenimiento web mensual funciona así: tú nos escribes por Instagram, WhatsApp o email y nosotros lo hacemos, y además nos ocupamos del hosting, la seguridad y las copias de seguridad. Si estás pensando en una web nueva, también te puede interesar <a href="/blog/cuanto-cuesta-una-pagina-web">cuánto cuesta una página web en España</a>.</p>` },
  ],
  cta: {
    title: 'Tu web al día, sin ocuparte de ella',
    text: 'Hosting, seguridad, copias de seguridad y los cambios que necesites. Tú nos escribes y nosotros lo hacemos.',
    path: '/mantenimiento-web',
    label: 'Ver mantenimiento web',
  },
  faq: [
    { q: '¿Es obligatorio pagar mantenimiento?', a: 'No. Lo único imprescindible es renovar el dominio y pagar el hosting. El mantenimiento lo puedes hacer tú, pagarlo por horas o contratar una cuota mensual.' },
    { q: '¿Qué incluye normalmente el mantenimiento web?', a: 'Actualizaciones, copias de seguridad, revisiones de seguridad y velocidad y, según el servicio, un número de cambios de contenido al mes. Pregunta siempre qué entra exactamente.' },
    { q: '¿Puedo cambiar de hosting sin perder mi web?', a: 'Sí, si tienes una copia de la web y acceso a tu dominio. Por eso es importante que el dominio esté a tu nombre.' },
    { q: '¿Cada cuánto hay que hacer copias de seguridad?', a: 'Depende de cuánto cambie tu web. Lo importante es que haya copias recientes y guardadas fuera del propio servidor.' },
  ],
});
