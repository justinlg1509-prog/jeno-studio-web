// Contacto por WhatsApp y teléfono, compartido por todas las páginas.
// El número solo está aquí: para cambiarlo, cambia esta línea (con prefijo de país, sin + ni espacios).
const WHATSAPP_NUMBER = '34624108730';
const WHATSAPP_TEXT = 'Hola, quiero pedir presupuesto';

const whatsappLink = (text = WHATSAPP_TEXT) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
const phoneLink = () => `tel:+${WHATSAPP_NUMBER}`;

// Enlaces marcados en el HTML: data-whatsapp (con su propio texto o el de por defecto) y data-phone
document.querySelectorAll('[data-whatsapp]').forEach(a => { a.href = whatsappLink(a.dataset.whatsapp || undefined); });
document.querySelectorAll('[data-phone]').forEach(a => { a.href = phoneLink(); });

// Botón flotante de WhatsApp, en todas las páginas menos en la de presupuesto
if (!document.body.hasAttribute('data-no-whatsapp-float')) {
  const float = document.createElement('a');
  float.className = 'wa-float';
  float.href = whatsappLink();
  float.target = '_blank';
  float.rel = 'noopener';
  float.dataset.location = 'boton_flotante';
  float.setAttribute('aria-label', 'Escríbenos por WhatsApp');
  float.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.37l-.36-.22-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41"/></svg>';
  document.body.appendChild(float);
}
