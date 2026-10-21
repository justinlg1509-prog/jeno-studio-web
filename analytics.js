// Google Analytics + aviso de cookies, compartido por todas las páginas.
// Google no se carga hasta que el visitante acepta: sin permiso no sale ningún dato.
(() => {
  const GA_ID = 'G-R1B994S08P';
  const KEY = 'jeno-consent';
  const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };

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
  banner.setAttribute('aria-label', 'Aviso de cookies');
  banner.hidden = true;
  banner.innerHTML = `
    <p><strong>¿Nos dejas medir las visitas?</strong> Usamos Google Analytics para saber cuánta gente entra y qué le interesa. Solo se activa si aceptas. <a href="/cookies">Más información</a></p>
    <div class="consent-actions">
      <button class="btn btn-line" type="button" data-consent="denied">Rechazar</button>
      <button class="btn btn-gold" type="button" data-consent="granted">Aceptar</button>
    </div>`;
  document.body.appendChild(banner);

  banner.querySelectorAll('[data-consent]').forEach(b => b.addEventListener('click', () => {
    const value = b.dataset.consent;
    try { localStorage.setItem(KEY, value); } catch {}
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
