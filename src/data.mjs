// Datos de la marca y del mapa de la web, en un solo sitio.
// El menú, el pie, el sitemap, llms.txt y el JSON-LD salen de aquí.
export const SITE = 'https://www.jenostudio.com';
export const BRAND = 'JENO STUDIO';
export const EMAIL = 'jeno.studio.conctacto@gmail.com';
export const INSTAGRAM = 'https://www.instagram.com/jeno.studi0/';
export const INSTAGRAM_USER = '@jeno.studi0';
export const OG_IMAGE = '/assets/og-image.jpg';
// Fecha de la última revisión de los textos (lastmod del sitemap)
export const UPDATED = '2026-10-21';

// Servicios: el primero es la portada, que es la página de diseño web
export const services = [
  { path: '/', label: 'Diseño web en Almería' },
  { path: '/seo-local-almeria', label: 'SEO local y Google Maps' },
  { path: '/tiendas-online-shopify', label: 'Tiendas online con Shopify' },
  { path: '/rediseno-web', label: 'Rediseño web' },
  { path: '/mantenimiento-web', label: 'Mantenimiento web' },
  { path: '/videos-con-ia-para-empresas', label: 'Vídeos con IA' },
  { path: '/gestion-redes-sociales-almeria', label: 'Gestión de redes sociales' },
  { path: '/visibilidad-en-ia', label: 'Visibilidad en la IA' },
];

export const sectors = [
  { path: '/paginas-web-para-restaurantes', label: 'Restaurantes y bares' },
  { path: '/paginas-web-para-peluquerias-y-barberias', label: 'Peluquerías y barberías' },
  { path: '/paginas-web-para-clinicas', label: 'Clínicas' },
  { path: '/paginas-web-para-empresas-de-reformas', label: 'Empresas de reformas' },
];

export const zones = [
  { path: '/', label: 'Almería' },
  { path: '/diseno-web-roquetas-de-mar', label: 'Roquetas de Mar y Aguadulce' },
  { path: '/diseno-web-el-ejido', label: 'El Ejido y Almerimar' },
];

// Zonas para el JSON-LD (areaServed)
export const areaServed = [
  { '@type': 'City', name: 'Almería' },
  { '@type': 'City', name: 'Roquetas de Mar' },
  { '@type': 'City', name: 'El Ejido' },
  { '@type': 'City', name: 'Málaga' },
  { '@type': 'Country', name: 'España' },
];

// Trabajos reales. Los que tienen caso propio enlazan a /trabajos/<id>
export const works = [
  { id: 'enterprise-thinking', name: 'Enterprise Thinking', type: 'Consultoría directiva y libro', place: 'Web en 3 idiomas', url: 'https://www.fialka.es/es/', img: 'fialka', alt: 'Web de Enterprise Thinking, de Alex Fialka', hasCase: true },
  { id: 'elite-solution-pro', name: 'Elite Solution Pro', type: 'Consultoría para emprendedores', place: 'Nueva Jersey, EE. UU.', url: 'https://www.elitesolutionpro.com/', img: 'elitesolutionpro', alt: 'Web de Elite Solution Pro', hasCase: true },
  { id: 'ecological-villas', name: 'Ecological Villas', type: 'Constructora de casas pasivas', place: 'Málaga y Granada', url: 'https://www.ecologicalvillas.com/', img: 'ecologicalvillas', alt: 'Web de Ecological Villas, casas pasivas y ecológicas', hasCase: true },
  { id: 'pet-health-care-guide', name: 'Pet Health Care Guide', type: 'Guía de salud para mascotas', place: 'Portal de contenidos', url: 'https://pethealthcareguide.com/', img: 'pethealthcareguide', alt: 'Web de Pet Health Care Guide' },
  { id: 'bar-meridiano', name: 'Bar Meridiano', type: 'Pub y coctelería', place: 'Concepto para hostelería', url: 'https://bar-meridiano.vercel.app/', img: 'bar-meridiano', alt: 'Web de Bar Meridiano' },
];
export const work = id => works.find(w => w.id === id);

// Reels de Instagram que ya salen en la portada
export const reels = [
  { url: 'https://www.instagram.com/jeno.studi0/reel/DepgAURqXvX/', id: 'purpurina', caption: 'Suplicó que dejaran de comprarle y acabó ganando 85.000 $' },
  { url: 'https://www.instagram.com/jeno.studi0/reel/DemAScVK_1i/', id: 'google', caption: 'Soy Google y tu negocio, para mí, no existe' },
  { url: 'https://www.instagram.com/jeno.studi0/reel/DesAwrbqkdn/', id: 'q4', caption: '¿De verdad hace falta una web para el Q4?' },
  { url: 'https://www.instagram.com/jeno.studi0/reel/DeosGzxKIUL/', id: 'cronometro', caption: '¿De verdad te buscan en Google antes de contratarte? Lo hemos cronometrado' },
];
