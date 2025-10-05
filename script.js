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

  // ---------- LINGUAS ----------
  const btnPT = document.getElementById('btn-pt');
  const btnEN = document.getElementById('btn-en');

  // elementos que vamos traduzir
  const elements = {
    siteTitle: document.getElementById('site-title'),
    sobreHeading: document.getElementById('sobre-heading'),
    sobreText: document.getElementById('sobre-text'),
    projectsHeading: document.getElementById('projects-heading'),
    projetoTitulo: document.getElementById('projeto-titulo'),
    projetoDescricao: document.getElementById('projeto-descricao'),
    btnOnline: document.getElementById('btn-online'),
    btnCodigo: document.getElementById('btn-codigo'),
    techHeading: document.getElementById('tech-heading'),
    certHeading: document.getElementById('cert-heading'),
    certificadosText: document.getElementById('certificados-text'),
    contactHeading: document.getElementById('contact-heading'),
    contactSub: document.getElementById('contact-sub'),
    contactEmail: document.getElementById('contact-email'),
    footerText: document.getElementById('footer-text')
  };

  const translations = {
    pt: {
      siteTitle: `<span class="highlight">Jorge Enrique</span> - Portfólio`,
      sobreHeading: `👋 Sobre mim`,
      sobreText: `Meu nome é Jorge Enrique, tenho 12 anos e sou um jovem apaixonado por tecnologia. Desde cedo descobri que a programação é uma forma de mudar vidas, e por isso estudo todos os dias programação para aos poucos, me tornar um desenvolvedor cada vez melhor. <br><br> Acredito que começar cedo é o segredo para conquistar liberdade e estabilidade no futuro. Meu objetivo é construir soluções inovadoras, desenvolver projetos que ajudem pessoas e mostrar que dedicação e disciplina podem transformar sonhos em realidade. <br><br> Quando não estou estudando programação, também gosto de aprender sobre investimentos, andar de bicicleta e buscar novas formas de evoluir como pessoa. Estou sempre focado em dar o meu melhor, sem esperar a “hora certa”, porque acredito que o momento certo é aquele em que você começa.`,
      projectsHeading: `💻 Projetos`,
      projetoTitulo: `🌐 Linktree`,
      projetoDescricao: `Um site simples para reunir links importantes em um só lugar.  <br><strong>Tecnologias:</strong> HTML + CSS + JS <br><em>Aprendizado:</em> trabalhar responsividade e organização de CSS.`,
      btnOnline: `🔗 Ver Online`,
      btnCodigo: `💻 Código`,
      techHeading: `⚙️ Tecnologias`,
      certHeading: `📜 Certificados`,
      certificadosText: `<p>O <strong>Curso Discover</strong> da Rocketseat é uma introdução completa e prática ao desenvolvimento web, focada em fundamentos essenciais para a criação de aplicações modernas. Durante o curso, aprendi os conceitos básicos de <strong>HTML, CSS e JavaScript</strong>, além de entender como construir páginas responsivas e interativas.</p><p>O curso aborda a importância da estruturação semântica com HTML, a estilização eficiente usando CSS, e a lógica de programação e manipulação do DOM com JavaScript. Também aprendi sobre boas práticas de desenvolvimento, organização de código e a utilização de ferramentas que facilitam o fluxo de trabalho.</p><p>Esse curso foi fundamental para consolidar minha base em front-end, preparando-me para avançar em projetos mais complexos e integrar outras tecnologias no meu processo de aprendizado.</p>`,
      contactHeading: `Contato`,
      contactSub: `🢃 Entre em Contato comigo por email 🢃`,
      contactEmail: `jorgeenriqueantunes@gmail.com`,
      footerText: `© 2025 - Jorge Enrique`
    },
    en: {
      siteTitle: `<span class="highlight">Jorge Enrique</span> - Portfolio`,
      sobreHeading: `👋 About me`,
      sobreText: `My name is Jorge Enrique, I'm 12 years old and I'm passionate about technology. I've been studying programming every day to become a better developer and build solutions that help people. <br><br>I believe starting early is the key to financial freedom and stability in the future. My goal is to create innovative projects, improve continuously and show that dedication and discipline can turn dreams into reality. <br><br>When I'm not coding, I like learning about investments, riding my bike, and finding ways to grow as a person. I'm always focused on giving my best — the right time to start is now.`,
      projectsHeading: `💻 Projects`,
      projetoTitulo: `🌐 Linktree`,
      projetoDescricao: `A simple site to gather important links in one place.  <br><strong>Technologies:</strong> HTML + CSS + JS <br><em>Learned:</em> responsive design and CSS organization.`,
      btnOnline: `🔗 View Online`,
      btnCodigo: `💻 Code`,
      techHeading: `⚙️ Technologies`,
      certHeading: `📜 Certificates`,
      certificadosText: `<p>The <strong>Discover course</strong> from Rocketseat is a practical introduction to web development, focused on key fundamentals for building modern applications. During the course I learned the basics of <strong>HTML, CSS and JavaScript</strong>, besides how to build responsive and interactive pages.</p><p>The course covers semantic HTML structure, efficient styling with CSS, and programming logic and DOM manipulation with JavaScript. I also learned best practices, code organization, and tools that improve the workflow.</p><p>This course was essential to consolidate my front-end foundation and prepare me to tackle more complex projects and integrate other technologies into my learning path.</p>`,
      contactHeading: `Contact`,
      contactSub: `🢃 Get in touch via email 🢃`,
      contactEmail: `jorgeenriqueantunes@gmail.com`,
      footerText: `© 2025 - Jorge Enrique`
    }
  };

  function setLangUI(lang) {
    // set aria-pressed
    btnPT.setAttribute('aria-pressed', lang === 'pt');
    btnEN.setAttribute('aria-pressed', lang === 'en');

    // update elements (use innerHTML where markup exists)
    elements.siteTitle.innerHTML = translations[lang].siteTitle;
    elements.sobreHeading.textContent = translations[lang].sobreHeading;
    elements.sobreText.innerHTML = translations[lang].sobreText;
    elements.projectsHeading.textContent = translations[lang].projectsHeading;
    elements.projetoTitulo.innerHTML = translations[lang].projetoTitulo;
    elements.projetoDescricao.innerHTML = translations[lang].projetoDescricao;
    elements.btnOnline.textContent = translations[lang].btnOnline;
    elements.btnCodigo.textContent = translations[lang].btnCodigo;
    elements.techHeading.textContent = translations[lang].techHeading;
    elements.certHeading.textContent = translations[lang].certHeading;
    elements.certificadosText.innerHTML = translations[lang].certificadosText;
    elements.contactHeading.textContent = translations[lang].contactHeading;
    elements.contactSub.textContent = translations[lang].contactSub;
    elements.contactEmail.textContent = translations[lang].contactEmail;
    elements.footerText.textContent = translations[lang].footerText;

    // save preference
    localStorage.setItem('site-lang', lang);
    // update html lang attribute for accessibility / SEO (keeps pt-br by default)
    document.documentElement.lang = (lang === 'en') ? 'en' : 'pt-br';
  }

  // eventos dos botões
  btnPT.addEventListener('click', () => setLangUI('pt'));
  btnEN.addEventListener('click', () => setLangUI('en'));

  // load saved or default
  const savedLang = localStorage.getItem('site-lang') || 'pt';
  setLangUI(savedLang);

  // ---------- Projetos dinamicos (mantive a tua lógica) ----------
  const projetos = [
    {
      titulo_pt: "🌐 Linktree",
      descricao_pt: `Um site simples para reunir links importantes em um só lugar.  <br><strong>Tecnologias:</strong> HTML + CSS + JS <br><em>Aprendizado:</em> trabalhar responsividade e organização de CSS.`,
      titulo_en: "🌐 Linktree",
      descricao_en: `A simple site to gather important links in one place.  <br><strong>Technologies:</strong> HTML + CSS + JS <br><em>Learned:</em> responsive design and CSS organization.`,
      imagem: "Assets/FotoLinktree.png",
      online: "https://jorgedev1122.github.io/My-Linktree/",
      codigo: "https://github.com/jorgedev1122/My-Linktree"
    },
    {
      titulo_pt: "🧮 Calculadora Modular",
      descricao_pt: `Uma calculadora com modos científicos, financeiros e mais.<br><strong>Tecnologias:</strong> HTML + CSS + JS<br><em>Aprendizado:</em> lógica, localStorage e modularização.`,
      titulo_en: "🧮 Modular Calculator",
      descricao_en: `A calculator with scientific and financial modes.<br><strong>Technologies:</strong> HTML + CSS + JS<br><em>Learned:</em> logic, localStorage and modularization.`,
      imagem: "Assets/FotoCalcMod.png",
      online: "https://jorgedev1122.github.io/CalcMod/",
      codigo: "https://github.com/jorgedev1122/CalcMod"
    },
    // add more if needed
  ];

  let projetoAtual = 0;

  const titulo = document.getElementById("projeto-titulo");
  const descricao = document.getElementById("projeto-descricao");
  const imagem = document.getElementById("projeto-img");
  const btnOnline2 = document.getElementById("btn-online");
  const btnCodigo2 = document.getElementById("btn-codigo");

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
    const currentLang = localStorage.getItem('site-lang') || 'pt';
    titulo.innerHTML = (currentLang === 'pt') ? p.titulo_pt : p.titulo_en;
    descricao.innerHTML = (currentLang === 'pt') ? p.descricao_pt : p.descricao_en;
    imagem.src = p.imagem;
    btnOnline2.href = p.online;
    btnCodigo2.href = p.codigo;
  }

  // atualiza quando trocar idioma também (pra projetos)
  const observer = new MutationObserver(() => atualizarProjeto());
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  // initialize project display
  atualizarProjeto();
});

