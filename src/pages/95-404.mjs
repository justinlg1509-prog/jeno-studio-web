// Página 404: Vercel la sirve sola para cualquier URL que no exista
import { breadcrumbs } from '../layout.mjs';

const crumbs = [{ label: 'Inicio', path: '/' }, { label: 'Página no encontrada', path: '/404' }];

export default {
  path: '/404',
  title: 'Página no encontrada | JENO STUDIO',
  description: 'La página que buscas no existe o ha cambiado de dirección. Vuelve al inicio, mira nuestros servicios de diseño web o pide presupuesto para tu negocio.',
  noindex: true,
  canonical: false,
  body: `
<section class="page-hero not-found">
  <div class="hero-glow page-glow" aria-hidden="true"></div>
  <div class="wrap page-hero-inner">
    ${breadcrumbs(crumbs)}
    <h1 class="page-title">Esta página <em>no existe</em></h1>
    <p class="page-lead">Puede que el enlace esté mal escrito o que la página haya cambiado de dirección. Desde aquí puedes seguir:</p>
    <div class="hero-actions">
      <a class="btn btn-gold" href="/">Ir al inicio</a>
      <a class="btn btn-line" href="/#servicios">Ver servicios</a>
      <a class="btn btn-line" href="/presupuesto">Pedir presupuesto</a>
    </div>
  </div>
</section>`,
};
