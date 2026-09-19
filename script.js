const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const form = document.querySelector('#contactForm');
const message = document.querySelector('.form-message');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  message.textContent = `Terima kasih, ${name || 'Bapak/Ibu'}! Konsultan kami akan segera menghubungi Anda.`;
  form.reset();
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 40 ? 'rgba(251,250,247,.98)' : 'rgba(251,250,247,.95)';
  header.style.boxShadow = window.scrollY > 40 ? '0 5px 25px rgba(23,33,31,.08)' : 'none';
}, { passive: true });

const revealItems = document.querySelectorAll('.unit-card, .amenity-item, .project, .image-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach(item => { item.classList.add('reveal'); observer.observe(item); });
