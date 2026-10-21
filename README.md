# Jeno Studio

Web de [Jeno Studio](https://www.instagram.com/jeno.studi0/): diseño web + Google Maps para negocios de Almería y de todo el mundo.

Sitio estático (HTML, CSS y JavaScript sin dependencias), publicado en Vercel. Cada push a `main` se despliega solo.

## Estructura

- `index.html` — la página
- `styles.css` — estilos
- `script.js` — animación de entrada, menú, vista previa de trabajos y vídeos bajo demanda
- `presupuesto.html` + `presupuesto.js` — formulario de presupuesto (`/presupuesto`): no envía nada a ningún servidor; prepara el mensaje y abre Instagram (copiándolo) o WhatsApp (ya escrito)
- `contacto.js` — **usuario de Instagram y número de WhatsApp, en un solo sitio**, sus enlaces y el botón flotante de Instagram; lo usan todas las páginas
- `analytics.js` — aviso de cookies y Google Analytics (solo se carga si el visitante acepta); lo usan todas las páginas
- `aviso-legal.html`, `privacidad.html`, `cookies.html` — páginas legales (se sirven como `/aviso-legal`, `/privacidad` y `/cookies`)
- `assets/work/` — capturas de las webs del portfolio
- `assets/video/` y `assets/reels/` — reels de Instagram y sus pósters
- `assets/fonts/` — Inter Tight y Lora (solo latín), alojadas aquí para no depender de Google Fonts
- `assets/logo-j.svg` — logo vectorial

## Ver en local

```bash
npx http-server@14.1.1 -p 5173 -c-1
```
