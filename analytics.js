// Google Analytics + aviso de cookies, compartido por todas las páginas.
// Google no se carga hasta que el visitante acepta: sin permiso no sale ningún dato.
(() => {
  const GA_ID = 'G-R1B994S08P';
  const KEY = 'jeno-consent';
  // La decisión vale 12 meses; después se vuelve a preguntar (la AEPD pide no más de 24)
  const MAX_AGE = 365 * 24 * 60 * 60 * 1000;
  const read = () => {
    try {
      const { value, at } = JSON.parse(localStorage.getItem(KEY)) || {};
      return ['granted', 'denied'].includes(value) && Date.now() - at < MAX_AGE ? value : null;
    } catch { return null; }
  };
  const save = value => { try { localStorage.setItem(KEY, JSON.stringify({ value, at: Date.now() })); } catch {} };

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };

  let loaded = false;
  function loadAnalytics() {
    window[`ga-disable-${GA_ID}`] = false;
    if (loaded) { gtag('consent', 'update', { analytics_storage: 'granted' }); return; }
    loaded = true;
    gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    gtag('js', new Date());
    gtag('config', GA_ID);
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  }

  // Si retira el permiso, Analytics deja de enviar y se borran sus cookies
  function stopAnalytics() {
    window[`ga-disable-${GA_ID}`] = true;
    if (loaded) gtag('consent', 'update', { analytics_storage: 'denied' });
    document.cookie.split(';').map(c => c.split('=')[0].trim()).filter(n => n.startsWith('_ga')).forEach(n => {
      document.cookie = `${n}=; Max-Age=0; path=/`;
      document.cookie = `${n}=; Max-Age=0; path=/; domain=${location.hostname}`;
    });
  }

  const banner = document.createElement('section');
  banner.className = 'consent';
  banner.setAttribute('aria-labelledby', 'consent-title');
  banner.hidden = true;
  // Primera capa del aviso (Guía de cookies de la AEPD): quién, para qué, de quién son, cómo aceptar,
  // rechazar o cambiar de opinión y enlace a la política. Aceptar y Rechazar tienen el mismo peso
  banner.innerHTML = `
    <p class="consent-title" id="consent-title">Cookies</p>
    <p>En JENO STUDIO usamos un almacenamiento técnico, necesario para recordar tu elección, y, solo si lo aceptas, cookies de análisis de Google Analytics (Google Ireland Ltd.) para contar las visitas y saber qué páginas se ven. Google puede tratar estos datos fuera de la UE. Puedes aceptarlas o rechazarlas, y cambiar de opinión cuando quieras en «Preferencias de cookies», al pie de la página. Más información en la <a href="/cookies">política de cookies</a>.</p>
    <div class="consent-actions">
      <button class="btn consent-btn" type="button" data-consent="denied">Rechazar</button>
      <button class="btn consent-btn" type="button" data-consent="granted">Aceptar</button>
    </div>`;
  document.body.appendChild(banner);

  banner.querySelectorAll('[data-consent]').forEach(b => b.addEventListener('click', () => {
    const value = b.dataset.consent;
    save(value);
    value === 'granted' ? loadAnalytics() : stopAnalytics();
    banner.hidden = true;
    document.dispatchEvent(new CustomEvent('consentchange', { detail: value }));
  }));
  document.querySelectorAll('[data-open-consent]').forEach(b => b.addEventListener('click', () => {
    banner.hidden = false;
    banner.querySelector('button').focus();
  }));

  const saved = read();
  if (saved === 'granted') loadAnalytics();
  else if (!saved) banner.hidden = false;

  // Eventos solo con permiso; el formulario de presupuesto también los usa
  const track = (name, params) => { if (loaded && read() === 'granted') gtag('event', name, params); };
  window.jenoTrack = track;

  // Escribir por Instagram, por WhatsApp o mandar un email cuenta como contacto (generate_lead)
  document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const where = a.dataset.location || a.closest('[id]')?.id || 'pagina';
    if (href.startsWith('https://ig.me/')) track('generate_lead', { method: 'instagram_dm', link_location: where });
    else if (href.startsWith('https://wa.me/')) track('generate_lead', { method: 'whatsapp', link_location: where });
    else if (href.startsWith('mailto:')) track('generate_lead', { method: 'email', link_location: where });
    else if (href === '/presupuesto') track('cta_click', { link_location: where });
  });
})();
