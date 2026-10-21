// Contacto por Instagram y WhatsApp, compartido por todas las páginas.
// Los datos solo están aquí: para cambiarlos, cambia estas líneas.
const INSTAGRAM_USER = 'jeno.studi0';
const WHATSAPP_NUMBER = '34624108730'; // con prefijo de país, sin + ni espacios
const WHATSAPP_TEXT = 'Hola, quiero pedir presupuesto';

const instagramLink = () => `https://ig.me/m/${INSTAGRAM_USER}`;
const whatsappLink = (text = WHATSAPP_TEXT) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Enlaces marcados en el HTML: data-instagram (abre el chat) y data-whatsapp (con su propio texto o el de por defecto)
document.querySelectorAll('[data-instagram]').forEach(a => { a.href = instagramLink(); });
document.querySelectorAll('[data-whatsapp]').forEach(a => { a.href = whatsappLink(a.dataset.whatsapp || undefined); });

// Botón flotante para escribirnos por Instagram, en todas las páginas menos en la de presupuesto
if (!document.body.hasAttribute('data-no-float')) {
  const float = document.createElement('a');
  float.className = 'contact-float';
  float.href = instagramLink();
  float.target = '_blank';
  float.rel = 'noopener';
  float.dataset.location = 'boton_flotante';
  float.setAttribute('aria-label', 'Escríbenos por Instagram');
  float.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/></g><circle cx="17.4" cy="6.6" r="1.15" fill="currentColor"/></svg>';
  document.body.appendChild(float);
}
