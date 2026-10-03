const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const cartCount = document.getElementById('cartCount');
const toast = document.getElementById('toast');

menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

let count = 0;
document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = count;
    toast.textContent = `${button.dataset.product} added to your collection`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
  });
});

document.getElementById('searchBtn').addEventListener('click', () => {
  toast.textContent = 'Search is ready for product integration.';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
});

document.getElementById('bagBtn').addEventListener('click', () => {
  toast.textContent = count ? `${count} item${count > 1 ? 's' : ''} in your bag` : 'Your bag is empty';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
