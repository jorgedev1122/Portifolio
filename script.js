document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById("theme-toggle");
  const body = document.body;

  // Aplica o tema salvo anteriormente (persistência)
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light');
    btn.textContent = "🙂";
  } else {
    body.classList.remove('light');
    btn.textContent = "😎";
  }

  // Alterna tema ao clicar no botão
  btn.addEventListener("click", () => {
    body.classList.toggle("light");

    const isLight = body.classList.contains("light");
    btn.textContent = isLight ? "🙂" : "😎";

    // Salva preferência
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}); 

document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll(".tech-icon");
  let current = 0;

  setInterval(() => {
    // remove animação de todos
    icons.forEach(icon => icon.classList.remove("pulando"));

    // adiciona a animação ao ícone atual
    icons[current].classList.add("pulando");

    // passa pro próximo
    current = (current + 1) % icons.length;
  }, 300);
});
