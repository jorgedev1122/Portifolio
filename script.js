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

const projetos = [
  {
    titulo: "🌐 Linktree",
    descricao: `Um site simples para reunir links importantes em um só lugar.  
<strong>Tecnologias:</strong> HTML + CSS + JS 
<br><em>Aprendizado:</em> trabalhar responsividade e organização de CSS.`,
    imagem: "Assets/FotoLinktree.png",
    online: "https://jorgedev1122.github.io/My-Linktree/",
    codigo: "https://github.com/jorgedev1122/My-Linktree"
  },
  {
    titulo: "🧮 Calculadora Modular",
    descricao: `Uma calculadora com modos científicos, financeiros e mais.
<br><strong>Tecnologias:</strong> HTML + CSS + JS
<br><em>Aprendizado:</em> lógica, localStorage e modularização.`,
    imagem: "Assets/FotoCalcMod.png",
    online: "https://jorgedev1122.github.io/CalcMod/",
    codigo: "https://github.com/jorgedev1122/CalcMod"
  },
  // Adicione mais projetos se quiser
];

let projetoAtual = 0;

const titulo = document.getElementById("projeto-titulo");
const descricao = document.getElementById("projeto-descricao");
const imagem = document.getElementById("projeto-img");
const btnOnline = document.getElementById("btn-online");
const btnCodigo = document.getElementById("btn-codigo");

document.getElementById("proximo").addEventListener("click", () => {
  projetoAtual = (projetoAtual + 1) % projetos.length;
  atualizarProjeto();
});

document.getElementById("anterior").addEventListener("click", () => {
  projetoAtual = (projetoAtual - 1 + projetos.length) % projetos.length;
  atualizarProjeto();
});

function atualizarProjeto() {
  const p = projetos[projetoAtual];
  titulo.innerHTML = p.titulo;
  descricao.innerHTML = p.descricao;
  imagem.src = p.imagem;
  btnOnline.href = p.online;
  btnCodigo.href = p.codigo;
}
