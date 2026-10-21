# JENO STUDIO

Web de [JENO STUDIO](https://www.jenostudio.com): diseño web + Google Maps para negocios de Almería y de todo el mundo.

Sitio estático (HTML, CSS y JavaScript sin dependencias), publicado en Vercel. Cada push a `main` se despliega solo.

## Cómo se editan las páginas

Los `.html` de la raíz **se generan**: no los edites a mano.

- `src/pages/*.mjs`: el contenido de cada página (title, meta, migas, JSON-LD y cuerpo)
- `src/layout.mjs`: `<head>`, cabecera con el menú, pie, migas de pan y bloques comunes
- `src/data.mjs`: marca, email, Instagram, servicios, sectores, zonas y trabajos (de aquí salen el menú, el pie y el sitemap)
- `src/build.mjs`: genera los `.html` y el `sitemap.xml`

Después de cambiar algo en `src/`:

```bash
node src/build.mjs
```

Y sube a la vez los `.html` generados. `src/` no se publica (`.vercelignore`).

## Resto de archivos

- `styles.css`: estilos
- `script.js`: animación de entrada, menú y desplegables, vista previa de trabajos y vídeos bajo demanda
- `presupuesto.js`: formulario de presupuesto (`/presupuesto`). No envía nada a ningún servidor: prepara el mensaje y abre Instagram (copiándolo) o WhatsApp (ya escrito)
- `contacto.js`: **usuario de Instagram y número de WhatsApp, en un solo sitio**, sus enlaces y el botón flotante de Instagram
- `analytics.js`: aviso de cookies y Google Analytics (solo se carga si el visitante acepta)
- `robots.txt`, `sitemap.xml` (generado) y `llms.txt`
- `assets/work/`: capturas de las webs del portfolio
- `assets/video/` y `assets/reels/`: reels de Instagram y sus pósters
- `assets/fonts/`: Inter Tight y Lora (solo latín), alojadas aquí para no depender de Google Fonts

## Ver en local

```bash
npx http-server@14.1.1 -p 5173 -c-1
```
