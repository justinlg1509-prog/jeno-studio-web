// Formulario de presupuesto: no se envía a ningún servidor. Con lo que rellena
// el cliente se escribe un mensaje y se abre WhatsApp con él listo para enviar.
(() => {
  const form = document.getElementById('presupuesto-form');
  if (!form) return;
  const f = form.elements;
  const needsBox = document.getElementById('necesidades');
  const webField = document.getElementById('web-campo');
  const submit = form.querySelector('.quote-submit');
  const submitLabel = submit.querySelector('.quote-submit-label');
  const status = document.getElementById('presupuesto-estado');
  const checkedNeeds = () => [...form.querySelectorAll('input[name="necesidad"]:checked')].map(i => i.value);

  // El enlace de la web solo se pide si dice que la tiene
  const syncWeb = () => { webField.hidden = f.tiene_web.value !== 'si'; };
  syncWeb();

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
    const needsOk = checkedNeeds().length > 0;
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
    if (e.target.name === 'necesidad' && checkedNeeds().length) showError('necesidades', '');
  });

  function buildMessage() {
    const hasWeb = f.tiene_web.value;
    const web = f.web.value.trim();
    const lines = [
      'Hola JENO STUDIO, quiero pedir presupuesto.',
      `Nombre: ${f.nombre.value.trim()}`,
      f.negocio.value.trim() && `Negocio: ${f.negocio.value.trim()}`,
      `Necesito: ${checkedNeeds().join(', ')}`,
      hasWeb === 'si' && `Web actual: ${web || 'Sí, tengo web'}`,
      hasWeb === 'no' && 'Web actual: No tengo web',
      `Prefiero: ${f.contacto.value}`,
      f.mas.value.trim() && `Más info: ${f.mas.value.trim()}`
    ];
    return lines.filter(Boolean).join('\n');
  }

  let busy = false;
  function setBusy(on) {
    busy = on;
    submit.setAttribute('aria-busy', String(on));
    submit.setAttribute('aria-disabled', String(on));
    submitLabel.textContent = on ? 'Abriendo WhatsApp…' : 'Enviar por WhatsApp';
    status.textContent = on ? 'Abriendo WhatsApp con tu mensaje.' : '';
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (busy || !validate()) return;
    const url = whatsappLink(buildMessage());
    window.jenoTrack?.('generate_lead', { method: 'whatsapp_form', link_location: 'presupuesto' });
    setBusy(true);
    // En otra pestaña para no perder el formulario; si el navegador la bloquea, en esta
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    else window.location.href = url;
    setTimeout(() => setBusy(false), 2500);
  });
  // Al volver atrás desde WhatsApp el botón no se queda cargando
  window.addEventListener('pageshow', () => setBusy(false));
})();
