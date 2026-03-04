"use strict";

// Theme toggle
const root = document.documentElement;
const btn  = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', saved);

btn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = `${i * 0.04}s`;
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => observer.observe(el));
