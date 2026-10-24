// Páginas legales: noindex, follow y fuera del sitemap.
import { breadcrumbs } from '../layout.mjs';

const legal = (path, label, title, description, inner) => {
  const crumbs = [{ label: 'Inicio', path: '/' }, { label, path }];
  return {
    path, title, description, crumbs, noindex: true,
    mainClass: 'legal',
    body: `<div class="wrap legal-inner">
      ${breadcrumbs(crumbs)}${inner}
    </div>`,
  };
};

export default [
  legal('/aviso-legal', 'Aviso legal', 'Aviso legal | JENO STUDIO',
    'Aviso legal de JENO STUDIO, estudio de diseño web en Almería: datos del titular de la web, condiciones de uso, propiedad intelectual y ley aplicable.', `
      <h1>Aviso legal</h1>
      <p class="legal-updated">Última actualización: 19 de octubre de 2026</p>

      <h2>Quién está detrás de esta web</h2>
      <p>Estos son los datos de quien gestiona www.jenostudio.com. Para cualquier consulta, escríbenos al email de abajo.</p>
      <dl class="legal-data">
        <dt>Titular</dt><dd>Justin, que opera con el nombre comercial JENO STUDIO</dd>
        <dt>Ubicación</dt><dd>Almería, España</dd>
        <dt>Email</dt><dd><a href="mailto:jeno.studio.conctacto@gmail.com">jeno.studio.conctacto@gmail.com</a></dd>
        <dt>Actividad</dt><dd>Diseño y desarrollo de páginas web y gestión de fichas de Google Business Profile</dd>
      </dl>

      <h2>Uso de la web</h2>
      <p>Esta web informa sobre los servicios de JENO STUDIO y muestra trabajos realizados. Puedes navegar por ella libremente y sin registrarte. Al usarla te comprometes a hacerlo de buena fe, sin dañar su funcionamiento y sin usar sus contenidos con fines ilícitos.</p>

      <h2>Propiedad intelectual</h2>
      <p>Los textos, el diseño, el logotipo, los vídeos y el código de esta web son de JENO STUDIO o se usan con permiso de sus titulares. No puedes copiarlos, distribuirlos ni modificarlos para usarlos con fines comerciales sin nuestra autorización por escrito.</p>
      <p>Las capturas y vídeos de proyectos muestran webs hechas para nuestros clientes. Las marcas, logotipos y contenidos de esas webs pertenecen a sus respectivos dueños y aparecen aquí solo como muestra de nuestro trabajo.</p>

      <h2>Responsabilidad</h2>
      <p>Cuidamos que la información de esta web sea correcta y esté al día, pero puede contener errores o quedar desactualizada. Los precios, plazos y condiciones de cada proyecto se acuerdan siempre por escrito antes de empezar.</p>
      <p>No respondemos de los daños que pueda causar una interrupción del servicio, un fallo técnico o un virus ajeno a nosotros, aunque ponemos medios razonables para evitarlos.</p>

      <h2>Enlaces a otras webs</h2>
      <p>Esta web enlaza a sitios de terceros, como Instagram o las webs de nuestros clientes. No controlamos su contenido ni sus políticas de privacidad, y no somos responsables de ellos.</p>

      <h2>Datos personales y cookies</h2>
      <p>Cómo tratamos tus datos se explica en la <a href="/privacidad">política de privacidad</a>, y qué cookies usamos, en la <a href="/cookies">política de cookies</a>.</p>

      <h2>Ley aplicable</h2>
      <p>Esta web se rige por la ley española. Para cualquier conflicto, las partes se someten a los juzgados y tribunales de Almería, salvo que la normativa de consumidores te dé derecho a acudir a los de tu domicilio.</p>`),

  legal('/privacidad', 'Política de privacidad', 'Política de privacidad | JENO STUDIO',
    'Política de privacidad de JENO STUDIO: qué datos tratamos cuando visitas la web o nos escribes, para qué, cuánto tiempo y cómo ejercer tus derechos.', `
      <h1>Política de privacidad</h1>
      <p class="legal-updated">Última actualización: 21 de octubre de 2026</p>

      <p>Aquí te explicamos qué datos personales tratamos cuando visitas esta web o nos escribes, para qué los usamos y qué derechos tienes. Cumplimos el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos (LOPDGDD).</p>

      <h2>Responsable del tratamiento</h2>
      <dl class="legal-data">
        <dt>Responsable</dt><dd>Justin (JENO STUDIO)</dd>
        <dt>Ubicación</dt><dd>Almería, España</dd>
        <dt>Email</dt><dd><a href="mailto:jeno.studio.conctacto@gmail.com">jeno.studio.conctacto@gmail.com</a></dd>
      </dl>

      <h2>Qué datos tratamos</h2>
      <ul>
        <li><strong>Los que tú nos envías</strong> al escribirnos por Instagram, por WhatsApp o por email: tu nombre, tu forma de contacto, el nombre de tu negocio y lo que nos cuentes en el mensaje.</li>
        <li><strong>Los de tus clientes o proyecto</strong>, si llegamos a trabajar juntos y nos los facilitas para hacer la web.</li>
        <li><strong>Datos de navegación</strong>: solo si aceptas las cookies analíticas, Google Analytics recoge de forma seudónima qué páginas ves, desde qué tipo de dispositivo y de qué zona aproximada. Si no aceptas, no se recoge nada.</li>
        <li><strong>Datos técnicos</strong>: como cualquier web, el servidor que la aloja registra tu dirección IP y tu navegador por seguridad y para que la página funcione.</li>
      </ul>
      <p>Esta web no pide registrarse. El formulario de <a href="/presupuesto">presupuesto</a> no envía nada a ningún servidor ni guarda lo que escribes: solo prepara un mensaje para que tú decidas si nos lo envías por Instagram o por WhatsApp. Si eliges Instagram, lo copia en tu dispositivo para que puedas pegarlo en el chat.</p>

      <h2>Para qué los usamos y con qué base legal</h2>
      <ul>
        <li><strong>Responder a tu consulta</strong> y revisar tu web o tu ficha de Google cuando nos lo pides. Base legal: tu solicitud y las medidas previas a un posible contrato (art. 6.1.b RGPD).</li>
        <li><strong>Hacer el trabajo que nos encargues</strong>, facturarlo y cumplir nuestras obligaciones fiscales. Base legal: el contrato (art. 6.1.b) y las obligaciones legales (art. 6.1.c).</li>
        <li><strong>Medir las visitas</strong> para mejorar la web. Base legal: tu consentimiento (art. 6.1.a), que puedes retirar cuando quieras.</li>
        <li><strong>Mantener la web segura</strong>. Base legal: nuestro interés legítimo en proteger el servicio (art. 6.1.f).</li>
      </ul>
      <p>No usamos tus datos para enviarte publicidad sin tu permiso, no los vendemos y no tomamos decisiones automatizadas sobre ti.</p>

      <h2>Cuánto tiempo los guardamos</h2>
      <ul>
        <li>Consultas que no acaban en un encargo: hasta un año desde el último contacto.</li>
        <li>Clientes: mientras dure la relación y, después, el tiempo que exige la ley (hasta seis años para la documentación contable y fiscal).</li>
        <li>Datos de Google Analytics: 14 meses.</li>
      </ul>

      <h2>Con quién se comparten</h2>
      <p>No cedemos tus datos a nadie salvo obligación legal. Para funcionar usamos estos proveedores, que los tratan por cuenta nuestra o como responsables de su propio servicio:</p>
      <ul>
        <li><strong>Vercel Inc.</strong> (Estados Unidos), que aloja la web.</li>
        <li><strong>Google Ireland Ltd.</strong>, con Google Analytics, solo si lo aceptas.</li>
        <li><strong>WhatsApp Ireland Ltd.</strong>, si nos escribes por WhatsApp. Esos mensajes también se rigen por la <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener">política de privacidad de WhatsApp</a>.</li>
        <li><strong>Meta Platforms Ireland Ltd.</strong>, si nos escribes por Instagram. Esos mensajes también se rigen por la <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener">política de privacidad de Instagram</a>.</li>
        <li><strong>Google Ireland Ltd.</strong>, con Gmail, si nos escribes por email.</li>
      </ul>
      <p>Algunos de estos proveedores pueden tratar datos en Estados Unidos. Lo hacen con las garantías que exige el RGPD: el Marco de Privacidad de Datos UE-EE. UU. o las cláusulas contractuales tipo aprobadas por la Comisión Europea.</p>

      <h2>Tus derechos</h2>
      <p>Puedes pedirnos en cualquier momento acceder a tus datos, corregirlos, borrarlos, limitar su uso, oponerte a que los tratemos o recibirlos en un formato que puedas llevarte a otro sitio. También puedes retirar tu consentimiento cuando quieras, sin que eso afecte a lo hecho antes.</p>
      <p>Escríbenos a <a href="mailto:jeno.studio.conctacto@gmail.com">jeno.studio.conctacto@gmail.com</a> diciendo qué derecho quieres ejercer. Si tenemos dudas sobre quién eres, podemos pedirte que lo acredites. Te responderemos en un mes como máximo.</p>
      <p>Si crees que no hemos tratado bien tus datos, puedes reclamar ante la <a href="https://www.aepd.es" target="_blank" rel="noopener">Agencia Española de Protección de Datos</a>.</p>

      <h2>Menores</h2>
      <p>Esta web no se dirige a menores de 14 años. Si lo eres, no nos envíes datos personales sin permiso de tus padres o tutores.</p>

      <h2>Seguridad</h2>
      <p>La web funciona con conexión cifrada (HTTPS) y aplicamos medidas razonables para proteger tus datos frente a pérdidas, accesos no autorizados o usos indebidos.</p>

      <h2>Cambios en esta política</h2>
      <p>Si cambiamos cómo tratamos tus datos, actualizaremos esta página y la fecha de arriba.</p>`),

  legal('/cookies', 'Política de cookies', 'Política de cookies | JENO STUDIO',
    'Política de cookies de JENO STUDIO: qué cookies usa esta web, para qué sirven, cuánto duran y cómo aceptarlas, rechazarlas o borrarlas cuando quieras.', `
      <h1>Política de cookies</h1>
      <p class="legal-updated">Última actualización: 24 de octubre de 2026</p>

      <h2>Quién es el responsable</h2>
      <p>El responsable de esta web y de las cookies propias es Justin, que opera con el nombre comercial JENO STUDIO. Tienes sus datos en el <a href="/aviso-legal">aviso legal</a> y puedes escribirle a <a href="mailto:jeno.studio.conctacto@gmail.com">jeno.studio.conctacto@gmail.com</a>.</p>

      <h2>Qué son las cookies</h2>
      <p>Son pequeños archivos que una web guarda en tu navegador para recordar algo entre una visita y otra. Esta política también se aplica a otras formas de guardar datos en tu navegador, como el almacenamiento local. Esta web usa muy pocas: una para recordar tu decisión sobre las cookies y, solo si la aceptas, las de Google Analytics para contar visitas.</p>

      <h2>Tipos de cookies y base legal</h2>
      <ul>
        <li><strong>Técnicas (propias)</strong>: necesarias para que la web funcione y recuerde tu elección. No necesitan tu consentimiento (artículo 22.2 de la Ley 34/2002, LSSI).</li>
        <li><strong>De análisis (de terceros, Google)</strong>: sirven para medir las visitas. Solo se usan si las aceptas; la base legal es tu consentimiento (artículo 22.2 de la LSSI y artículo 6.1.a del RGPD), que puedes retirar cuando quieras.</li>
      </ul>
      <p>No usamos cookies de publicidad ni de perfiles.</p>

      <h2>Cookies que usamos</h2>
      <div class="legal-table">
        <table>
          <thead>
            <tr><th scope="col">Nombre</th><th scope="col">De quién es</th><th scope="col">Para qué sirve</th><th scope="col">Duración</th></tr>
          </thead>
          <tbody>
            <tr><td><code>jeno-consent</code></td><td>JENO STUDIO</td><td>Recordar si aceptaste o rechazaste las cookies analíticas. Es técnica y necesaria, se guarda en el almacenamiento local del navegador y no se envía a nadie.</td><td>12 meses; después te volvemos a preguntar</td></tr>
            <tr><td><code>_ga</code></td><td>Google Analytics</td><td>Distinguir a un visitante de otro de forma seudónima para contar visitas. Analítica, solo con tu consentimiento.</td><td>2 años</td></tr>
            <tr><td><code>_ga_R1B994S08P</code></td><td>Google Analytics</td><td>Mantener el estado de la visita (páginas vistas, duración). Analítica, solo con tu consentimiento.</td><td>2 años</td></tr>
          </tbody>
        </table>
      </div>
      <p>Las tipografías y los vídeos de esta web están alojados aquí mismo, así que no cargan cookies de otras empresas. Los enlaces a Instagram o a otras webs solo usan sus cookies si los abres, y se rigen por sus propias políticas.</p>

      <h2>Google Analytics</h2>
      <p>Google Analytics es un servicio de Google Ireland Ltd. que nos dice cuánta gente visita la web, qué páginas le interesan y desde dónde llega, sin decirnos quién eres. No se carga hasta que pulsas «Aceptar»: si rechazas o no decides, tu navegador no se conecta con Google desde esta web. Puedes leer cómo trata Google estos datos en su <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noopener">política de privacidad</a>.</p>
      <p>Google puede tratar estos datos en Estados Unidos. Lo hace con las garantías que exige el RGPD: Google LLC está adherida al Marco de Privacidad de Datos UE-EE. UU. Tienes más detalle en nuestra <a href="/privacidad">política de privacidad</a>.</p>

      <h2>Cómo cambiar tu decisión</h2>
      <p>Puedes aceptar o retirar tu permiso cuando quieras, de forma tan sencilla como lo diste: con el botón de abajo o con «Preferencias de cookies», al pie de cada página. Si lo retiras, borramos las cookies de Analytics que hubiera en tu navegador. Rechazar las cookies de análisis no te impide usar la web. Tu decisión se guarda 12 meses; pasado ese tiempo te volvemos a preguntar.</p>
      <p class="legal-action"><button class="btn btn-gold" type="button" data-open-consent>Cambiar preferencias de cookies</button></p>
      <p>También puedes bloquear o borrar las cookies desde tu navegador:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener">Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener">Firefox</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a></li>
        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener">Edge</a></li>
      </ul>

      <h2>Más información</h2>
      <p>Para saber cómo tratamos tus datos personales, lee la <a href="/privacidad">política de privacidad</a>. Si tienes dudas, escríbenos a <a href="mailto:jeno.studio.conctacto@gmail.com">jeno.studio.conctacto@gmail.com</a>.</p>`),

];
