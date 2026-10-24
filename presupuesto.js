// Formulario de presupuesto: no se envía a ningún servidor. Con lo que rellena
// el cliente se escribe un mensaje y se abre Instagram o WhatsApp para enviarlo.
(() => {
  const form = document.getElementById('presupuesto-form');
  if (!form) return;
  const f = form.elements;
  const needsBox = document.getElementById('necesidades');
  const webField = document.getElementById('web-campo');
  const submits = [...form.querySelectorAll('.quote-submit')];
  const status = document.getElementById('presupuesto-estado');
  const channels = { instagram: 'Instagram', whatsapp: 'WhatsApp' };
  const checkedNeeds = () => [...form.querySelectorAll('input[name="necesidad"]:checked')].map(i => i.value);

  // El enlace de la web solo se pide si dice que la tiene
  const syncWeb = () => { webField.hidden = f.tiene_web.value !== 'si'; };
  syncWeb();

  // Plan elegido en /precios (?plan=<id>): se deja seleccionado y marca sus casillas
  const planOption = () => f.plan.selectedOptions[0];
  const syncPlan = () => {
    const needs = planOption()?.dataset.needs;
    if (!needs) return;
    needs.split('|').forEach(n => {
      const box = form.querySelector(`input[name="necesidad"][value="${CSS.escape(n)}"]`);
      if (box) box.checked = true;
    });
  };
  const fromUrl = new URLSearchParams(location.search).get('plan');
  if (fromUrl && [...f.plan.options].some(o => o.value === fromUrl)) {
    f.plan.value = fromUrl;
    syncPlan();
  }

  function showError(id, message) {
    const el = document.getElementById(`${id}-error`);
    el.textContent = message;
    el.hidden = !message;
    if (id !== 'nombre') needsBox.classList.toggle('is-invalid', !!message);
    else if (message) f.nombre.setAttribute('aria-invalid', 'true');
    else f.nombre.removeAttribute('aria-invalid');
  }

  function validate() {
    const nameOk = f.nombre.value.trim() !== '';
    const needsOk = checkedNeeds().length > 0 || !!f.plan.value;
    showError('nombre', nameOk ? '' : 'Escribe tu nombre para saber cómo dirigirnos a ti.');
    showError('necesidades', needsOk ? '' : 'Marca al menos una opción en «¿Qué necesitas?».');
    // El foco va al primer campo con error para que se vea y se pueda corregir
    if (!nameOk) f.nombre.focus();
    else if (!needsOk) needsBox.querySelector('input').focus();
    return nameOk && needsOk;
  }

  // Los errores se quitan en cuanto se corrigen
  form.addEventListener('input', e => {
    if (e.target === f.nombre && f.nombre.value.trim()) showError('nombre', '');
  });
  form.addEventListener('change', e => {
    if (e.target.name === 'tiene_web') syncWeb();
    if (e.target === f.plan) { syncPlan(); if (f.plan.value) showError('necesidades', ''); }
    if (e.target.name === 'necesidad' && checkedNeeds().length) showError('necesidades', '');
  });

  function buildMessage() {
    const hasWeb = f.tiene_web.value;
    const web = f.web.value.trim();
    const lines = [
      'Hola JENO STUDIO, quiero pedir presupuesto.',
      `Nombre: ${f.nombre.value.trim()}`,
      f.negocio.value.trim() && `Negocio: ${f.negocio.value.trim()}`,
      f.plan.value && `Plan: ${planOption().closest('optgroup').label} · ${planOption().textContent}`,
      checkedNeeds().length && `Necesito: ${checkedNeeds().join(', ')}`,
      hasWeb === 'si' && `Web actual: ${web || 'Sí, tengo web'}`,
      hasWeb === 'no' && 'Web actual: No tengo web',
      f.mas.value.trim() && `Más info: ${f.mas.value.trim()}`
    ];
    return lines.filter(Boolean).join('\n');
  }

  // Instagram no deja abrir el chat con el mensaje escrito: se copia para que solo haya que pegarlo
  function copy(text) {
    const fallback = () => {
      const area = Object.assign(document.createElement('textarea'), { value: text, readOnly: true });
      area.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(area);
      area.select();
      try { document.execCommand('copy'); } catch {}
      area.remove();
    };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).catch(fallback);
    else fallback();
  }

  let busy = false;
  function setBusy(active) {
    busy = !!active;
    submits.forEach(b => {
      const name = channels[b.value];
      b.setAttribute('aria-busy', String(b === active));
      b.setAttribute('aria-disabled', String(busy));
      b.querySelector('.quote-submit-label').textContent = b === active ? `Abriendo ${name}…` : `Enviar por ${name}`;
    });
    status.textContent = active ? `Abriendo ${channels[active.value]} con tu mensaje.` : '';
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (busy || !validate()) return;
    // Al pulsar Intro en un campo cuenta como el primer botón (Instagram)
    const button = submits.includes(e.submitter) ? e.submitter : submits[0];
    const message = buildMessage();
    let url;
    if (button.value === 'instagram') {
      copy(message);
      url = instagramLink();
    } else {
      url = whatsappLink(message);
    }
    window.jenoTrack?.('generate_lead', { method: `${button.value}_form`, link_location: 'presupuesto' });
    setBusy(button);
    // En otra pestaña para no perder el formulario; si el navegador la bloquea, en esta
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    else window.location.href = url;
    setTimeout(() => setBusy(null), 2500);
  });
  // Al volver atrás desde Instagram o WhatsApp el botón no se queda cargando
  window.addEventListener('pageshow', () => setBusy(null));
})();
