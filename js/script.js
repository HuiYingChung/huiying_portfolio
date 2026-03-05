// Dark Mode Toggle
const toggle = document.getElementById('themeToggle');
const icon   = toggle.querySelector('.icon');
const label  = toggle.querySelector('.label');

// 讀取上次的設定
const saved = localStorage.getItem('theme');
if (saved === 'dark') applyDark();

toggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    applyLight();
    localStorage.setItem('theme', 'light');
  } else {
    applyDark();
    localStorage.setItem('theme', 'dark');
  }
});

function applyDark() {
  document.documentElement.setAttribute('data-theme', 'dark');
  icon.textContent  = '☀️';
  label.textContent = 'Light';
}
function applyLight() {
  document.documentElement.removeAttribute('data-theme');
  icon.textContent  = '🌙';
  label.textContent = 'Dark';
}

// Whole-card click
document.querySelectorAll('.card').forEach(card => {
  const link = card.querySelector('.card-link');
  if (!link) return;
  card.addEventListener('click', e => {
    // Let normal clicks on <a> tags inside the card work naturally
    if (e.target.closest('a')) return;
    window.location.href = link.href;
  });
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
