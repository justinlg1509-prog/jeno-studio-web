// Precios, packs y condiciones, en un solo sitio. Todos son sin IVA.
// De aquí salen /precios, el resumen de la portada, el formulario de presupuesto,
// los mensajes de WhatsApp, el JSON-LD y llms.txt: para cambiar un precio, cámbialo aquí.

// Cada plan: id (el ?plan= de /presupuesto), nombre, precio en euros, period 'mes' si es mensual,
// from si es "desde", badge si va destacado, lo que incluye y, si hace falta, la casilla de «¿Qué necesitas?»
export const priceSections = [
  {
    id: 'redes',
    title: 'Redes sociales',
    kind: 'Cuota mensual, sin permanencia',
    intro: 'No grabamos en tu local: tú nos mandas fotos y vídeos y nosotros los editamos, escribimos los textos y lo publicamos.',
    need: 'Gestión de redes sociales',
    common: ['Textos con llamada a la acción', 'Calendario de publicaciones', 'Programación de cada publicación'],
    plans: [
      { id: 'redes-starter', name: 'Starter', price: 89, period: 'mes', items: ['Instagram', '4 vídeos al mes', '2 posts al mes', '4 historias al mes'] },
      { id: 'redes-growth', name: 'Growth', price: 129, period: 'mes', badge: 'Recomendado', items: ['Instagram', '8 vídeos al mes', '4 posts al mes', '8 historias al mes', 'Informe mensual'] },
      { id: 'redes-multiplataforma', name: 'Multiplataforma', price: 179, period: 'mes', items: ['Instagram, TikTok y Facebook', 'Los mismos 8 vídeos, adaptados a cada red', '4 posts al mes', '8 historias al mes', 'Informe mensual'] },
    ],
  },
  {
    id: 'webs',
    title: 'Páginas web',
    kind: 'Pago único',
    intro: 'Tu web hecha a medida, lista para que te encuentren y te escriban.',
    need: 'Página web nueva',
    common: ['Adaptada al móvil', 'Botón de WhatsApp', 'SEO inicial'],
    plans: [
      { id: 'web-esencial', name: 'Esencial', price: 299, items: ['1 página'] },
      { id: 'web-profesional', name: 'Profesional', price: 499, badge: 'Recomendada', items: ['Hasta 5 páginas'] },
      { id: 'web-premium', name: 'Premium', price: 699, items: ['Hasta 8 páginas', 'Galería de fotos', 'Formularios'] },
      { id: 'web-tienda', name: 'Tienda online', price: 999, from: true, need: 'Tienda online', items: ['Tienda para vender por internet', 'Precio final según tu catálogo'] },
    ],
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento web',
    kind: 'Cuota mensual, sin permanencia',
    intro: 'Para que tu web siga funcionando y al día sin que tengas que ocuparte de ella.',
    plans: [
      { id: 'mantenimiento-basico', name: 'Básico', price: 19, period: 'mes', items: ['Alojamiento', 'Conexión segura (HTTPS)', 'Copias de seguridad'] },
      { id: 'mantenimiento-estandar', name: 'Estándar', price: 39, period: 'mes', items: ['Todo lo del Básico', '3 cambios pequeños al mes'] },
    ],
  },
  {
    id: 'google',
    title: 'Ficha de Google',
    kind: 'Pago único o cuota mensual',
    intro: 'Tu negocio en Google Maps, con la información al día para que te encuentren cerca.',
    need: 'Aparecer en Google y Google Maps',
    plans: [
      { id: 'google-crear', name: 'Crear la ficha', price: 79, items: ['Creamos tu ficha de Google desde cero'] },
      { id: 'google-optimizar', name: 'Optimizar la ficha', price: 49, items: ['Revisamos y mejoramos la ficha que ya tienes'] },
      { id: 'google-gestion', name: 'Gestión', price: 19, period: 'mes', items: ['Mantenemos tu ficha al día cada mes'] },
      { id: 'google-gestion-publicaciones', name: 'Gestión con publicaciones', price: 35, period: 'mes', items: ['La gestión de la ficha', 'Publicaciones en tu ficha cada mes'] },
    ],
  },
];

// Packs: combinan planes de arriba
export const packs = [
  { id: 'pack-web-ficha', name: 'Web Profesional + ficha de Google', price: 549, needs: ['Página web nueva', 'Aparecer en Google y Google Maps'], items: ['Web Profesional (hasta 5 páginas)', 'Creamos tu ficha de Google'] },
  // Pack con pago único + cuota: price es el pago único y monthly, la cuota al mes
  { id: 'pack-web-growth', name: 'Web Profesional + Growth', price: 499, monthly: 129, gift: 'Ficha de Google de regalo', needs: ['Página web nueva', 'Gestión de redes sociales', 'Aparecer en Google y Google Maps'], items: ['Web Profesional (hasta 5 páginas), pago único', 'Redes Growth cada mes, sin permanencia', `Te creamos la ficha de Google gratis (valorada en ${priceSections.find(s => s.id === 'google').plans[0].price} €)`] },
];

// Condiciones (la FAQ de /precios y su FAQPage)
export const priceFaq = [
  { q: '¿Venís a grabar a mi local?', a: 'No. Tú nos mandas las fotos y los vídeos de tu negocio y nosotros los editamos, escribimos los textos y lo publicamos.' },
  { q: '¿Cuándo tengo que mandar el material?', a: 'Antes del día 25 de cada mes, para tener listo el contenido del mes siguiente.' },
  { q: '¿Cuántos cambios puedo pedir?', a: 'En redes, 1 ronda de cambios por cada pieza. En las webs, 2 rondas de cambios.' },
  { q: '¿Hay permanencia?', a: 'No. Los planes mensuales no tienen permanencia.' },
  { q: '¿Cómo se paga una web?', a: 'La mitad al empezar y la otra mitad al terminar (50/50).' },
  { q: '¿A nombre de quién va el dominio?', a: 'A tu nombre. El dominio es tuyo.' },
  { q: '¿Garantizáis ventas o salir los primeros en Google?', a: 'No. Nadie puede garantizar ventas ni posiciones en Google. Lo que sí hacemos es trabajar para que tu negocio se vea bien y sea fácil de encontrar.' },
  { q: '¿Los precios llevan IVA?', a: 'No. A todos los precios hay que sumarles el IVA.' },
];

// ---------- Ayudas ----------
// Espacio que no se parte: el € nunca se queda solo en la línea siguiente
const euros = n => `${n} €`;
// Cada plan sabe a qué sección pertenece (los packs no tienen)
for (const s of priceSections) for (const p of s.plans) Object.defineProperty(p, 'section', { value: s });

// "129 €/mes", "desde 999 €" o "499 € + 129 €/mes"
export const priceLabel = p => `${p.from ? 'desde ' : ''}${euros(p.price)}${p.period ? `/${p.period}` : ''}${p.monthly ? ` + ${euros(p.monthly)}/mes` : ''}`;
// "Esencial 299 €, Profesional 499 €, Premium 699 € y Tienda online desde 999 €" (para textos y FAQ de otras páginas)
export function pricesSentence(sectionId) {
  const list = priceSections.find(s => s.id === sectionId).plans.map(p => `${p.name} ${priceLabel(p)}`);
  return `${list.slice(0, -1).join(', ')} y ${list.at(-1)}, todo + IVA`;
}
export const planById = id => [...priceSections.flatMap(s => s.plans), ...packs].find(p => p.id === id);
// "Redes sociales · Growth" para el formulario y los mensajes
export const planName = p => p.section ? `${p.section.title} · ${p.name}` : `Pack ${p.name}`;
// Casillas de «¿Qué necesitas?» que marca cada plan en /presupuesto
export const planNeeds = p => p.needs || [p.need || p.section.need].filter(Boolean);
export const whatsappText = p => `Hola, me interesa ${p.section ? `el plan ${planName(p)}` : `el pack ${p.name}`} (${priceLabel(p)} + IVA${p.gift ? `, con la ${p.gift.charAt(0).toLowerCase()}${p.gift.slice(1)}` : ''}). ¿Me contáis más?`;

// Precio más bajo de una sección, solo mensual o solo de pago único: "desde 89 €/mes"
export function fromPrice(sectionId, { monthly = false } = {}) {
  const plans = priceSections.find(s => s.id === sectionId).plans.filter(p => !!p.period === monthly);
  const min = plans.reduce((a, b) => (b.price < a.price ? b : a));
  return `${euros(min.price)}${min.period ? `/${min.period}` : ''}`;
}
// La frase del resumen: portada, description y llms.txt
export const priceSummary = [
  { label: 'Redes', from: fromPrice('redes', { monthly: true }), href: '/precios#redes' },
  { label: 'Webs', from: fromPrice('webs'), href: '/precios#webs' },
  { label: 'Google', from: fromPrice('google'), href: '/precios#google' },
];
