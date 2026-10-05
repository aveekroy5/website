const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const toast = document.getElementById('toast');

hamburger.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('searchBtn').addEventListener('click', () => {
  toast.textContent = 'Product search can be connected here.';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1700);
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
