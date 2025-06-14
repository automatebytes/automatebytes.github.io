// ===== Theme Toggle =====
const toggleBtn = document.querySelector('.theme-toggle');
const body = document.body;
const storedTheme = localStorage.getItem('theme');

// Apply saved theme on page load
if (storedTheme) {
  body.setAttribute('data-theme', storedTheme);
}

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
});

// ===== Hamburger Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
