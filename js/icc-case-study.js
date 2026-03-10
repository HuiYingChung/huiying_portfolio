// Scroll-triggered fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Figma iframe handling
// Mobile: hide iframes (memory pressure causes page reloads), show link fallback instead
// Desktop: set src normally
const isMobile = window.matchMedia('(max-width: 768px)').matches;

document.querySelectorAll('.figma-embed').forEach(iframe => {
  if (isMobile) {
    iframe.style.display = 'none';
  } else {
    iframe.src = iframe.dataset.src;
  }
});

if (isMobile) {
  document.querySelectorAll('.figma-fallback').forEach(link => {
    link.style.display = 'flex';
  });
}
