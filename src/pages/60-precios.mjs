// Precios: tarjetas por sección, packs y condiciones. Todo sale de src/precios.mjs
import { pageHero, faq, contact, faqSchema, ORG, abs, esc } from '../layout.mjs';
import { priceSections, packs, priceFaq, priceLabel, whatsappText, fromPrice } from '../precios.mjs';

const path = '/precios';
const crumbs = [{ label: 'Inicio', path: '/' }, { label: 'Precios', path }];

// Precio grande y, si es un pack con cuota, la cuota al lado; el regalo va debajo
const price = p => `<div class="price-box">
              <p class="price">${p.from ? '<span class="price-per">desde</span> ' : ''}<span class="price-num">${p.price} €</span><span class="price-per">${p.period ? `/${p.period}` : ''}${p.monthly ? ` + ${p.monthly} €/mes` : ''} + IVA</span></p>${p.gift ? `
              <p class="price-gift">${p.gift}</p>` : ''}
            </div>`;

const card = p => `<li class="price-row${p.badge ? ' is-featured' : ''}">
            <h3>${p.name}${p.badge ? ` <span class="price-badge">${p.badge}</span>` : ''}</h3>
            ${price(p)}
            <ul class="price-items">${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
            <div class="price-actions">
              <a class="btn btn-gold" href="/presupuesto?plan=${p.id}">Lo quiero</a>
              <a class="btn btn-line" href="#" data-whatsapp="${esc(whatsappText(p))}" target="_blank" rel="noopener"><svg class="btn-icon" aria-hidden="true"><use href="#icon-whatsapp"/></svg>WhatsApp</a>
            </div>
          </li>`;

const section = ({ id, title, kind, intro, common, plans }) => `<section class="block prices" id="${id}" aria-labelledby="${id}-title">
      <div class="wrap">
        <div class="prices-head">
          <h2 class="block-title" id="${id}-title">${title}</h2>
          <p class="prices-kind">${kind}</p>
          <p>${intro}</p>
        </div>
        <ul class="price-list">
          ${plans.map(card).join('\n          ')}
        </ul>
        ${common ? `<p class="prices-common"><strong>Todos incluyen:</strong> ${common.join(", ")}.</p>` : ''}
      </div>
    </section>`;

// JSON-LD: un catálogo de ofertas por sección, con el precio sin IVA
const offer = (p, name = p.name) => ({
  '@type': 'Offer',
  name,
  url: abs(`/presupuesto?plan=${p.id}`),
  priceCurrency: 'EUR',
  price: p.price,
  priceSpecification: [
    {
      '@type': p.period ? 'UnitPriceSpecification' : 'PriceSpecification',
      ...(p.from ? { minPrice: p.price } : { price: p.price }),
      priceCurrency: 'EUR',
      valueAddedTaxIncluded: false,
      ...(p.period ? { unitCode: 'MON', unitText: 'mes' } : {}),
    },
    // La cuota mensual de un pack va como segunda parte del precio
    ...(p.monthly ? [{ '@type': 'UnitPriceSpecification', price: p.monthly, priceCurrency: 'EUR', valueAddedTaxIncluded: false, unitCode: 'MON', unitText: 'mes' }] : []),
  ],
  description: [...p.items, ...(p.gift ? [p.gift] : [])].join(', '),
  seller: ORG,
});
const catalog = {
  '@type': 'OfferCatalog',
  '@id': `${abs(path)}#precios`,
  name: 'Precios de JENO STUDIO',
  url: abs(path),
  itemListElement: [
    ...priceSections.map(s => ({ '@type': 'OfferCatalog', name: s.title, itemListElement: s.plans.map(p => offer(p, `${s.title}: ${p.name}`)) })),
    { '@type': 'OfferCatalog', name: 'Packs', itemListElement: packs.map(p => offer(p, `Pack ${p.name}`)) },
  ],
};

export default {
  path,
  title: 'Precios de webs, redes sociales y Google | JENO STUDIO',
  description: `Precios de JENO STUDIO: redes sociales desde ${fromPrice('redes', { monthly: true })}, páginas web desde ${fromPrice('webs')} y ficha de Google desde ${fromPrice('google')}. Todo + IVA; planes mensuales sin permanencia.`,
  crumbs,
  schema: [
    { '@type': 'WebPage', '@id': `${abs(path)}#webpage`, name: 'Precios de JENO STUDIO', url: abs(path), about: ORG, mainEntity: { '@id': catalog['@id'] }, inLanguage: 'es-ES' },
    catalog,
    faqSchema(priceFaq),
  ],
  body: `
${pageHero({
  crumbs,
  h1: 'Precios <em>claros</em>, sin sorpresas',
  lead: `Estos son los precios de JENO STUDIO para redes sociales, páginas web, mantenimiento y ficha de Google: redes desde ${fromPrice('redes', { monthly: true })}, webs desde ${fromPrice('webs')} y Google desde ${fromPrice('google')}. Todos los precios son sin IVA.`,
  extra: `<nav class="price-jump" aria-label="Secciones de precios">
          ${priceSections.map(s => `<a href="#${s.id}">${s.title}</a>`).join('\n          ')}
          <a href="#packs">Packs</a>
        </nav>`,
})}

    ${priceSections.map(section).join('\n\n    ')}

    ${section({ id: 'packs', title: 'Packs', kind: 'Para empezar con todo', intro: 'Junta la web con Google o con las redes y sale mejor de precio.', plans: packs })}

    ${faq(priceFaq, { title: 'Lo que debes saber' })}

    ${contact({ title: '¿No sabes qué plan <em>te encaja</em>?', text: 'Cuéntanos tu negocio y te decimos qué plan tiene sentido para ti, sin compromiso. Te respondemos por Instagram o WhatsApp.', badge: 'Te asesoramos gratis' })}`,
};
