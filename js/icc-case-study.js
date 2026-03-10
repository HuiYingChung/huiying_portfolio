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
// On mobile: show link fallback instead of iframe (avoids memory pressure & accidental reloads)
// On desktop: lazy-load iframes only when scrolled into view
const isMobile = window.matchMedia('(max-width: 768px)').matches;

if (isMobile) {
  document.querySelectorAll('.figma-embed').forEach(iframe => {
    iframe.style.display = 'none';
  });
  document.querySelectorAll('.figma-fallback').forEach(link => {
    link.style.display = 'flex';
  });
} else {
  const iframeObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && e.target.dataset.src) {
        e.target.src = e.target.dataset.src;
        delete e.target.dataset.src;
        iframeObserver.unobserve(e.target);
      }
    });
  }, { rootMargin: '200px' });

  document.querySelectorAll('.figma-embed[data-src]').forEach(iframe => {
    iframeObserver.observe(iframe);
  });
}
