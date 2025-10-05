document.addEventListener('DOMContentLoaded', () => {
  // ---------- Tema Dark/Light ----------
  const btn = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') body.classList.add('light');

  btn.addEventListener("click", () => {
    body.classList.toggle("light");
    localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
  });

  // ---------- ScrollReveal ----------
  ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
  });

  // ---------- Idiomas ----------
  const btnPT = document.getElementById('btn-pt');
  const btnEN = document.getElementById('btn-en');

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
    certTitulo: document.getElementById('cert-titulo'),
    certDescricao: document.getElementById('cert-descricao'),
    contactHeading: document.getElementById('contact-heading'),
    contactSub: document.getElementById('contact-sub'),
    contactEmail: document.getElementById('contact-email'),
    footerText: document.getElementById('footer-text')
  };

  const translations = {
    pt: {
      siteTitle: `Jorge Enrique - Portiólio`,
      sobreHeading: `👋 Sobre mim`,
      sobreText: `Meu nome é Jorge Enrique, tenho 12 anos e sou um jovem apaixonado por tecnologia. Desde cedo descobri que a programação é uma forma de mudar vidas, e por isso estudo todos os dias programação para aos poucos, me tornar um desenvolvedor cada vez melhor. <br><br> Acredito que começar cedo é o segredo para conquistar liberdade e estabilidade no futuro. Meu objetivo é construir soluções inovadoras, desenvolver projetos que ajudem pessoas e mostrar que dedicação e disciplina podem transformar sonhos em realidade. <br><br> Quando não estou estudando programação, também gosto de aprender sobre investimentos, andar de bicicleta e buscar novas formas de evoluir como pessoa. Estou sempre focado em dar o meu melhor, sem esperar a “hora certa”, porque acredito que o momento certo é aquele em que você começa.`,
      projectsHeading: `💻 Projetos`,
      projetoTitulo: `🌐 Linktree`,
      projetoDescricao: `Um site simples para reunir links importantes em um só lugar.  <br><strong>Tecnologias:</strong> HTML + CSS + JS <br><em>Aprendizado:</em> trabalhar responsividade e organização de CSS.`,
      btnOnline: `🔗 Ver Online`,
      btnCodigo: `💻 Código`,
      techHeading: `⚙️ Tecnologias`,
      certHeading: `📜 Certificados`,
      certificadosText: `<p>O <strong>Curso Discover</strong> da Rocketseat é uma introdução completa e prática ao desenvolvimento web, focada em fundamentos essenciais para a criação de aplicações modernas. Durante o curso, aprendi os conceitos básicos de <strong>HTML, CSS e JavaScript</strong>, além de entender como construir páginas responsivas e interativas.</p>`,
      certTitulo: `Curso Discover`,
      certDescricao: `O Curso Discover da Rocketseat é uma introdução prática ao desenvolvimento web, aprendendo HTML, CSS e JS.`,
      contactHeading: `Contato`,
      certVerCertificado: `🔗 Ver Certificado`,
      contactSub: `🢃 Entre em Contato comigo por email 🢃`,
      contactEmail: `jorgeenriqueantunes@gmail.com`,
      footerText: `© 2025 - Jorge Enrique`
    },
    en: {
      siteTitle: `Jorge Enrique - Portfolio`,
      sobreHeading: `👋 About me`,
      sobreText: `My name is Jorge Enrique, I'm 12 years old and I'm passionate about technology. I've been studying programming every day to become a better developer and build solutions that help people. <br><br>I believe starting early is the key to financial freedom and stability in the future. My goal is to create innovative projects, improve continuously and show that dedication and discipline can turn dreams into reality. <br><br>When I'm not coding, I like learning about investments, riding my bike, and finding ways to grow as a person. I'm always focused on giving my best — the right time to start is now.`,
      projectsHeading: `💻 Projects`,
      projetoTitulo: `🌐 Linktree`,
      projetoDescricao: `A simple site to gather important links in one place.  <br><strong>Technologies:</strong> HTML + CSS + JS <br><em>Learned:</em> responsive design and CSS organization.`,
      btnOnline: `🔗 View Online`,
      btnCodigo: `💻 Code`,
      techHeading: `⚙️ Technologies`,
      certHeading: `📜 Certificates`,
      certificadosText: `<p>The <strong>Discover course</strong> from Rocketseat is a practical introduction to web development, focused on key fundamentals for building modern applications.</p>`,
      certTitulo: `Discover Course`,
      certDescricao: `The Discover Course from Rocketseat is a hands-on introduction to web development, learning HTML, CSS and JS.`,
      contactHeading: `Contact`,
      certVerCertificado: `🔗 View the certificate`,
      contactSub: `🢃 Get in touch via email 🢃`,
      contactEmail: `jorgeenriqueantunes@gmail.com`,
      footerText: `© 2025 - Jorge Enrique`
    }
  };

  function setLangUI(lang) {
    btnPT.setAttribute('aria-pressed', lang === 'pt');
    btnEN.setAttribute('aria-pressed', lang === 'en');

    for (const key in elements) {
      if (elements[key]) {
        if (['sobreText','projetoDescricao','certificadosText','certDescricao'].includes(key)) {
          elements[key].innerHTML = translations[lang][key];
        } else {
          elements[key].textContent = translations[lang][key];
        }
      }
    }

    localStorage.setItem('site-lang', lang);
    document.documentElement.lang = (lang === 'en') ? 'en' : 'pt-br';
  }

  btnPT.addEventListener('click', () => setLangUI('pt'));
  btnEN.addEventListener('click', () => setLangUI('en'));

  const savedLang = localStorage.getItem('site-lang') || 'pt';
  setLangUI(savedLang);

  // ---------- Projetos Dinâmicos ----------
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
    }
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

  const observer = new MutationObserver(() => atualizarProjeto());
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  atualizarProjeto();

  // ---------- Certificados Dinâmicos ----------
  const certificados = [
    {
      titulo_pt: "Curso Discover",
      titulo_en: "Discover Course",
      descricao_pt: "O Curso Discover da Rocketseat é uma introdução prática ao desenvolvimento web, aprendendo HTML, CSS e JS.",
      descricao_en: "The Discover Course from Rocketseat is a hands-on introduction to web development, learning HTML, CSS and JS.",
      imagem: "Assets/Certificado.png",
      link: "https://app.rocketseat.com.br/certificates/63f04b36-f352-422b-bc8c-41be7b914158"
    },
    {
      titulo_pt: "Posicionamento nas Redes Sociais",
      titulo_en: "Social Media Positioning",
      descricao_pt: "Curso gratuito da Rocketseat sobre branding pessoal e posicionamento online para atrair oportunidades na área de tecnologia.",
      descricao_en: "Free Rocketseat course on personal branding and online positioning to attract tech opportunities.",
      imagem: "Assets/Certificado2.png",
      link: "https://app.rocketseat.com.br/certificates/e20b1bfe-1156-4170-979e-275e43f82357"
    }
  ];

  let certificadoAtual = 0;

  const certTitulo = document.getElementById("cert-titulo");
  const certDescricao = document.getElementById("cert-descricao");
  const certImg = document.getElementById("cert-img");
  const btnCertLink = document.getElementById("btn-cert-link");

  document.getElementById("proximo-cert").addEventListener("click", () => {
    certificadoAtual = (certificadoAtual + 1) % certificados.length;
    atualizarCertificado();
  });

  document.getElementById("anterior-cert").addEventListener("click", () => {
    certificadoAtual = (certificadoAtual - 1 + certificados.length) % certificados.length;
    atualizarCertificado();
  });

  function atualizarCertificado() {
    const c = certificados[certificadoAtual];
    const currentLang = localStorage.getItem('site-lang') || 'pt';
    certTitulo.innerHTML = (currentLang === 'pt') ? c.titulo_pt : c.titulo_en;
    certDescricao.innerHTML = (currentLang === 'pt') ? c.descricao_pt : c.descricao_en;
    certImg.src = c.imagem;
    btnCertLink.href = c.link;
  }

  const observerCert = new MutationObserver(() => atualizarCertificado());
  observerCert.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  atualizarCertificado();
});

