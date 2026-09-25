const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
const desktopQuery = window.matchMedia('(min-width: 851px)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}

function menuIsOpen() {
  return nav.classList.contains('is-open');
}

menuButton.addEventListener('click', () => {
  const willOpen = !menuIsOpen();
  closeMenu();
  if (willOpen) {
    menuButton.setAttribute('aria-expanded', 'true');
    nav.classList.add('is-open');
  }
});

document.addEventListener('click', (event) => {
  if (!menuIsOpen()) return;
  if (nav.contains(event.target) || menuButton.contains(event.target)) return;
  closeMenu();
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (event) => {
    const hash = link.getAttribute('href') || '';

    if (!hash.startsWith('#') || hash.length < 2) {
      closeMenu();
      return;
    }

    // Fechar o menu tira os links de exibição (display:none), o que descarta o foco
    // do elemento ativado. Por isso a navegação é feita manualmente, movendo o foco
    // para o destino — sem isso o teclado recomeçaria do topo da página.
    event.preventDefault();
    const target = document.getElementById(hash.slice(1));
    closeMenu();
    if (!target) return;

    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    target.scrollIntoView({
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
      block: 'start'
    });
    history.replaceState(null, '', hash);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuIsOpen()) {
    closeMenu();
    menuButton.focus();
  }
});

desktopQuery.addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});
