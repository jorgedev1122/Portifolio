document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') body.classList.add('light');

  btn.addEventListener("click", () => {
    body.classList.toggle("light");
    localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
  });

  // ScrollReveal animações
  ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
  });
});
