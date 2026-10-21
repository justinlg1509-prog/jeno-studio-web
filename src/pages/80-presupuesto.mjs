// Formulario de presupuesto (lo hace funcionar presupuesto.js)
import { breadcrumbs, ORG, abs } from '../layout.mjs';

const crumbs = [{ label: 'Inicio', path: '/' }, { label: 'Presupuesto', path: '/presupuesto' }];

export default {
  path: '/presupuesto',
  title: 'Pide presupuesto para tu web | JENO STUDIO',
  description: 'Pide presupuesto para tu página web, tienda online, vídeos con IA, redes sociales o Google Maps. Te respondemos en menos de 24 h por Instagram o WhatsApp.',
  crumbs,
  schema: [{ '@type': 'ContactPage', name: 'Pide presupuesto a JENO STUDIO', url: abs('/presupuesto'), about: ORG, inLanguage: 'es-ES' }],
  mainClass: 'quote',
  bodyAttr: 'data-no-float',
  scripts: ['/presupuesto.js'],
  body: `
<div class="hero-glow quote-glow" aria-hidden="true"></div>
<div class="wrap quote-inner">
  <div class="quote-head">
    ${breadcrumbs(crumbs)}
    <h1>Pide tu <em>presupuesto</em></h1>
    <p class="quote-lead">Pide presupuesto a JENO STUDIO para tu página web, tienda online, vídeos, redes o Google Maps: cuéntanos qué necesitas y te respondemos por Instagram o WhatsApp con una propuesta para tu negocio.</p>
    <ul class="quote-trust" aria-label="Lo que te garantizamos">
      <li>Respuesta en menos de 24 h</li>
      <li>Presupuesto sin compromiso</li>
      <li>Trabajamos con negocios de toda España</li>
    </ul>
  </div>

  <div class="quote-main">
    <form class="quote-form" id="presupuesto-form" novalidate>
      <div class="field">
        <label for="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" autocomplete="name" enterkeyhint="next" required aria-describedby="nombre-error">
        <p class="field-error" id="nombre-error" hidden></p>
      </div>

      <div class="field">
        <label for="negocio">Nombre del negocio <span class="field-opt">(opcional)</span></label>
        <input id="negocio" name="negocio" type="text" autocomplete="organization" enterkeyhint="next">
      </div>

      <fieldset class="field" id="necesidades" aria-describedby="necesidades-hint necesidades-error">
        <legend>¿Qué necesitas?</legend>
        <p class="field-hint" id="necesidades-hint">Puedes marcar varias.</p>
        <div class="chips">
          <label class="chip"><input type="checkbox" name="necesidad" value="Página web nueva"><span>Página web nueva</span></label>
          <label class="chip"><input type="checkbox" name="necesidad" value="Rediseño de mi web"><span>Rediseño de mi web</span></label>
          <label class="chip"><input type="checkbox" name="necesidad" value="Tienda online"><span>Tienda online</span></label>
          <label class="chip"><input type="checkbox" name="necesidad" value="Vídeos con IA / Reels y TikToks"><span>Vídeos con IA / Reels y TikToks</span></label>
          <label class="chip"><input type="checkbox" name="necesidad" value="Gestión de redes sociales"><span>Gestión de redes sociales</span></label>
          <label class="chip"><input type="checkbox" name="necesidad" value="Aparecer en Google y Google Maps"><span>Aparecer en Google y Google Maps</span></label>
          <label class="chip"><input type="checkbox" name="necesidad" value="Logo e imagen de marca"><span>Logo e imagen de marca</span></label>
          <label class="chip"><input type="checkbox" name="necesidad" value="Publicidad en Instagram, Facebook o TikTok"><span>Publicidad en Instagram, Facebook o TikTok</span></label>
          <label class="chip"><input type="checkbox" name="necesidad" value="Otra cosa"><span>Otra cosa</span></label>
        </div>
        <p class="field-error" id="necesidades-error" hidden></p>
      </fieldset>

      <fieldset class="field">
        <legend>¿Tienes web ahora?</legend>
        <div class="chips">
          <label class="chip"><input type="radio" name="tiene_web" value="si"><span>Sí</span></label>
          <label class="chip"><input type="radio" name="tiene_web" value="no"><span>No</span></label>
        </div>
        <div class="field field-sub" id="web-campo" hidden>
          <label for="web">Enlace de tu web <span class="field-opt">(opcional)</span></label>
          <input id="web" name="web" type="text" inputmode="url" autocomplete="url" autocapitalize="off" spellcheck="false" placeholder="Ej.: www.tunegocio.com">
        </div>
      </fieldset>

      <div class="field">
        <label for="mas">Cuéntanos un poco más <span class="field-opt">(opcional)</span></label>
        <textarea id="mas" name="mas" rows="4" placeholder="Ej.: tengo una peluquería en Almería y quiero que la gente pueda reservar desde la web"></textarea>
      </div>

      <div class="quote-send">
        <button class="btn btn-gold btn-lg quote-submit" type="submit" name="canal" value="instagram">
          <svg aria-hidden="true"><use href="#icon-instagram"/></svg>
          <span class="quote-submit-label">Enviar por Instagram</span>
        </button>
        <button class="btn btn-line btn-lg quote-submit" type="submit" name="canal" value="whatsapp">
          <svg aria-hidden="true"><use href="#icon-whatsapp"/></svg>
          <span class="quote-submit-label">Enviar por WhatsApp</span>
        </button>
        <p class="quote-note">Por Instagram copiamos tu mensaje y abrimos nuestro chat: solo tienes que pegarlo y enviarlo. Por WhatsApp se abre ya escrito. No guardamos tus datos.</p>
        <p class="sr-only" role="status" id="presupuesto-estado"></p>
      </div>
    </form>

    <section class="quote-direct" id="directo" aria-labelledby="directo-title">
      <h2 id="directo-title">¿Prefieres escribirnos directamente?</h2>
      <div class="quote-direct-actions">
        <a class="btn btn-line" href="#" data-instagram target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#icon-instagram"/></svg>Instagram</a>
        <a class="btn btn-line" href="#" data-whatsapp target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#icon-whatsapp"/></svg>WhatsApp</a>
      </div>
    </section>
  </div>
</div>`,
};
