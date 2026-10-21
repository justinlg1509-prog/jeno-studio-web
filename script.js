const root = document.documentElement;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// Entrada del hero: espera a las fuentes (máx. 1,2 s) para no animar texto que luego salta
Promise.race([document.fonts?.ready, new Promise(r => setTimeout(r, 1200))]).then(() => {
  requestAnimationFrame(() => root.classList.add('loaded'));
});

// Cabecera: fondo al bajar, se esconde al seguir bajando y vuelve al subir
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const isMenuOpen = () => nav.classList.contains('open');
let lastY = window.scrollY;
let scrollTicking = false;
function onScroll() {
  scrollTicking = false;
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 20);
  if (Math.abs(y - lastY) > 4) {
    header.classList.toggle('hidden', !isMenuOpen() && y > 400 && y > lastY);
    lastY = y;
  }
}
window.addEventListener('scroll', () => {
  if (!scrollTicking) { scrollTicking = true; requestAnimationFrame(onScroll); }
}, { passive: true });
onScroll();

// Menú móvil: bloquea el scroll de fondo y deja el resto de la página inerte
const outside = [document.getElementById('main'), document.querySelector('.footer')];
function setMenu(open, fromKeyboard = false) {
  if (open === isMenuOpen()) return;
  nav.classList.toggle('open', open);
  root.classList.toggle('menu-open', open);
  header.classList.remove('hidden');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  outside.forEach(el => el && (el.inert = open));
  // Con teclado, el foco entra en el menú; con el dedo no hace falta marcar nada
  if (open && fromKeyboard) nav.querySelector('a')?.focus({ preventScroll: true });
}
toggle.addEventListener('click', e => setMenu(!isMenuOpen(), e.detail === 0));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.querySelector('.brand').addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && isMenuOpen()) { setMenu(false); toggle.focus(); }
});
const desktop = window.matchMedia('(min-width: 901px)');
desktop.addEventListener('change', e => { if (e.matches) setMenu(false); });

// Desplegables del menú: solo uno abierto; se cierran al pulsar fuera, con Escape o al esconderse la cabecera
const drops = [...document.querySelectorAll('.nav-drop')];
const closeDrops = except => drops.forEach(d => { if (d !== except) d.open = false; });
drops.forEach(d => d.addEventListener('toggle', () => { if (d.open) closeDrops(d); }));
document.addEventListener('click', e => { if (!e.target.closest('.nav-drop')) closeDrops(); });
document.addEventListener('keydown', e => {
  const open = drops.find(d => d.open);
  // En el móvil, Escape ya cierra el menú entero
  if (e.key === 'Escape' && open && desktop.matches) { open.open = false; open.querySelector('summary').focus(); }
});
new MutationObserver(() => { if (header.classList.contains('hidden')) closeDrops(); }).observe(header, { attributes: true, attributeFilter: ['class'] });

// Cintas animadas: solo se mueven cuando se ven
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => target.classList.toggle('offscreen', !isIntersecting));
  });
  document.querySelectorAll('.reel-strip, .marquee').forEach(el => io.observe(el));
}

// Cinta de trabajos: se duplica para que el bucle no tenga corte
const track = document.querySelector('.reel-track');
if (track) {
  [...track.children].forEach(el => {
    const copy = el.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    copy.tabIndex = -1;
    track.appendChild(copy);
  });
}

// Manifiesto: las palabras se encienden según avanza el scroll
const manifesto = document.querySelector('[data-words]');
if (manifesto) {
  const text = manifesto.textContent.trim();
  const goldFrom = text.indexOf('Nosotros');
  let pos = 0;
  manifesto.innerHTML = text.split(' ').map(word => {
    const isGold = pos >= goldFrom;
    pos += word.length + 1;
    return `<span class="w${isGold ? ' gold' : ''}">${word}</span>`;
  }).join(' ');
  const words = manifesto.querySelectorAll('.w');

  if (reducedMotion) {
    words.forEach(w => w.classList.add('on'));
  } else {
    let ticking = false, near = true, lastLit = -1;
    const update = () => {
      ticking = false;
      const r = manifesto.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 cuando el texto entra por abajo, 1 cuando su final pasa el 40 % de la pantalla
      const progress = Math.min(Math.max((vh * 0.85 - r.top) / (r.height + vh * 0.45), 0), 1);
      const lit = Math.round(progress * words.length);
      if (lit === lastLit) return;
      lastLit = lit;
      words.forEach((w, i) => w.classList.toggle('on', i < lit));
    };
    // Solo se calcula mientras el texto está cerca de la pantalla
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => { near = e.isIntersecting; if (near) update(); }, { rootMargin: '50% 0px' }).observe(manifesto);
    }
    window.addEventListener('scroll', () => { if (near && !ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }
}

// Trabajos: vista previa flotante que sigue al cursor
const preview = document.querySelector('.work-preview');
if (preview && finePointer) {
  const img = preview.querySelector('img');
  let x = 0, y = 0, cx = 0, cy = 0, raf = null;
  const loop = () => {
    cx += (x - cx) * 0.18;
    cy += (y - cy) * 0.18;
    preview.style.transform = `translate(${cx}px, ${cy}px)`;
    raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.5 ? requestAnimationFrame(loop) : null;
  };
  const move = e => {
    const w = preview.offsetWidth, h = preview.offsetHeight;
    x = Math.min(e.clientX + 28, window.innerWidth - w - 16);
    y = Math.min(Math.max(e.clientY - h / 2, 16), window.innerHeight - h - 16);
    if (!raf) raf = requestAnimationFrame(loop);
  };
  document.querySelectorAll('.work-row').forEach(row => {
    // Precarga la imagen grande al acercarse
    const big = new Image();
    row.addEventListener('pointerenter', e => {
      if (!big.src) big.src = row.dataset.preview;
      img.src = row.dataset.preview;
      if (!preview.classList.contains('on')) {
        move(e); cx = x; cy = y;
        preview.style.transform = `translate(${cx}px, ${cy}px)`;
      }
      preview.classList.add('on');
    });
    row.addEventListener('pointermove', move);
    row.addEventListener('pointerleave', () => preview.classList.remove('on'));
  });
}

// Vídeos: se cargan solo cuando aparecen y se pausan al salir de pantalla
const videos = document.querySelectorAll('.lazy-video');
const loadVideo = v => {
  const s = v.querySelector('source[data-src]');
  if (s) { s.src = s.dataset.src; s.removeAttribute('data-src'); v.load(); }
};
// Los pósters también esperan: se piden cuando el vídeo está a media pantalla de aparecer
const showPoster = v => { if (v.dataset.poster) { v.poster = v.dataset.poster; v.removeAttribute('data-poster'); } };
if ('IntersectionObserver' in window) {
  const near = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => { if (isIntersecting) { showPoster(target); near.unobserve(target); } });
  }, { rootMargin: '50% 0px' });
  videos.forEach(v => near.observe(v));
} else {
  videos.forEach(showPoster);
}
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(({ target: v, isIntersecting }) => {
      if (isIntersecting) {
        loadVideo(v);
        if (!reducedMotion) v.play().catch(() => {});
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, { threshold: 0.35 });
  videos.forEach(v => io.observe(v));
}
// Con movimiento reducido: el vídeo de un caso se reproduce al pulsarlo
if (reducedMotion) {
  document.querySelectorAll('.phone video').forEach(v => {
    v.addEventListener('click', () => { loadVideo(v); v.paused ? v.play() : v.pause(); });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
