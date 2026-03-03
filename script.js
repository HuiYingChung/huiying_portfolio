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
