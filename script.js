// Mobile nav toggle
function toggleMenu() {
  const menu = document.getElementById('navMobile');
  menu.classList.toggle('open');
}

// Close mobile nav when clicking outside
document.addEventListener('click', function(e) {
  const menu = document.getElementById('navMobile');
  const hamburger = document.querySelector('.nav-hamburger');
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('nav').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Contact form submission via Formspree
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const success = document.getElementById('formSuccess');
    const error = document.getElementById('formError');

    btn.disabled = true;
    btn.textContent = 'Sending...';
    success.style.display = 'none';
    error.style.display = 'none';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        success.style.display = 'flex';
        form.reset();
        btn.textContent = 'Send My Request';
        btn.disabled = false;
        setTimeout(function() { success.style.display = 'none'; }, 6000);
      } else {
        throw new Error('Server error');
      }
    } catch {
      error.style.display = 'block';
      btn.textContent = 'Send My Request';
      btn.disabled = false;
      setTimeout(function() { error.style.display = 'none'; }, 8000);
    }
  });
}
