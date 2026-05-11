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

  // ---------- GitHub Status Fallback ----------
  window.showGithubFallback = function() {
    const currentLang = localStorage.getItem('site-lang') || 'pt';
    const fallbackPT = document.getElementById('gh-fallback-pt');
    const fallbackEN = document.getElementById('gh-fallback-en');
    
    if (fallbackPT) fallbackPT.style.display = 'none';
    if (fallbackEN) fallbackEN.style.display = 'none';
    
    if (currentLang === 'pt' && fallbackPT) {
      fallbackPT.style.display = 'block';
    } else if (currentLang === 'en' && fallbackEN) {
      fallbackEN.style.display = 'block';
    }
  };

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
      siteTitle: `Jorge Enrique - Portifólio`,
      sobreHeading: `👋 Sobre mim`,
      sobreText: `Sou Jorge Enrique, desenvolvedor iniciante apaixonado por tecnologia.

Comecei a estudar programação cedo e atualmente desenvolvo projetos em
HTML, CSS, JavaScript e Python para aprimorar minhas habilidades.

Meu objetivo é evoluir constantemente como desenvolvedor e construir
soluções que impactem pessoas de forma positiva.`,
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
      github: `🔗 My GitHub`,
      contactSub: `🢃 Entre em Contato comigo por email 🢃`,
      contactEmail: `jorgeenriqueantunes@gmail.com`,
      footerText: `© 2025 - Jorge Enrique`
    },
    en: {
      siteTitle: `Jorge Enrique - Portifolio`,
      sobreHeading: `👋 About me`,
      sobreText: `I'm Jorge Enrique, a beginner developer passionate about technology.

I started studying programming early and currently develop projects in HTML, CSS, JavaScript, and Python to improve my skills.

My goal is to constantly evolve as a developer and build solutions that positively impact people.`,
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
      github: `🔗 My GitHub`,
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
    
    // Atualizar mensagem de fallback do GitHub
    window.showGithubFallback();
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
      imagem: "Assets/FotoLinktree2.png",
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
    {titulo_pt: "📝 Roadmap",
      descricao_pt: `Um roadmap para organizar seu aprendizado em programação.<br><strong>Tecnologias:</strong> HTML + CSS + JS<br><em>Aprendizado:</em> planejamento e organização.`,
      titulo_en: "📝 Roadmap",
      descricao_en: `A roadmap to organize your learning in programming.<br><strong>Technologies:</strong> HTML + CSS + JS<br><em>Learned:</em> planning and organization.`,
      imagem: "Assets/FotoRoadmap.png",
      online: "https://jorgedev1122.github.io/Roadmap-Fullstack/",
      codigo: "https://github.com/jorgedev1122/Roadmap-Fullstack"
    },  
    {titulo_pt: "🎓 EduSpace",
      descricao_pt: `Um espaço que une recursos, tarefas, mensagens e mais para organizar seu aprendizado na escola.<br><strong>Tecnologias:</strong> HTML + CSS + JS<br><em>Aprendizado:</em> organização de paineis.`,
      titulo_en: "🎓 EduSpace",
      descricao_en: `A space that brings together resources, tasks, messages and more to organize your learning at school.<br><strong>Technologies:</strong> HTML + CSS + JS<br><em>Learned:</em> panel organization.`,
      imagem: "Assets/FotoEduspace.png",
      online: "https://jorgedev1122.github.io/Eduspace/",
      codigo: "https://github.com/jorgedev1122/EduSpace"
    },
    {titulo_pt: "🥊 Landing page de academia de Boxe - IronFist",
      descricao_pt: `Uma landing page para uma academia de boxe fictícia chamada IronFist, com um design moderno e responsivo.<br><strong>Tecnologias:</strong> HTML + CSS + JS<br><em>Aprendizado:</em> design moderno e responsivo.`,
      titulo_en: "🥊 Boxing Gym Landing Page - IronFist",
      descricao_en: `A landing page for a fictional boxing gym called IronFist, with a modern and responsive design.<br><strong>Technologies:</strong> HTML + CSS + JS<br><em>Learned:</em> modern and responsive design.`,
      imagem: "Assets/FotoBoxe.png",
      online: "https://jorgedev1122.github.io/Iron-Fist/",
      codigo: "https://github.com/jorgedev1122/Iron-Fist"
    },
    {titulo_pt: '🚴 Dashboard para ciclistas - Velocity Dash',
      descricao_pt: `Um dashboard para ciclistas, com informações sobre rotas, desempenho e mais.<br><strong>Tecnologias:</strong> HTML + CSS + JS<br><em>Aprendizado:</em> design moderno e responsivo.`,
      titulo_en: '🚴 Cycling Dashboard - Velocity Dash',
      descricao_en: `A dashboard for cyclists, with information about routes, performance and more.<br><strong>Technologies:</strong> HTML + CSS + JS<br><em>Learned:</em> modern and responsive design.`,
      imagem: "Assets/FotoVelocity.png",
      online: "https://jorgedev1122.github.io/Velocity-Dash/",
      codigo: "https://github.com/jorgedev1122/Velocity-Dash"
    },
    {titulo_pt: '🛹 Loja skatista - SK8HUB',
      descricao_pt: 'loja online para público skatista, roupas, acessórios, peças e design ciano moderno.',
      titulo_en: '🛹 Skater Store - SK8HUB',
      descricao_en: 'Online store for skaters, with clothes, accessories, parts and modern cyan design.',
      imagem: "Assets/FotoSK8HUB.png",
      online: "https://jorgedev1122.github.io/SK8HUB/",
      codigo: "https://github.com/jorgedev1122/SK8HUB"
    },
    {titulo_pt: '🚚 Landing page premium (REAL) - DB-imports',
      descricao_pt: 'Projeto de vitrine digital feita para a empresa de importação DB-imports, com design moderno e responsivo.',
      titulo_en: '🚚 Premium Landing Page (REAL) - DB-imports',
      descricao_en: 'Digital showcase project made for the import company DB-imports, with a modern and responsive design.',
      imagem: "Assets/FotoDB.png",
      online: "https://db-imports.vercel.app/",
      codigo: "https://github.com/jorgedev1122/DB-Imports"
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
      titulo_pt: "Discover",
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
    },
    {
      titulo_pt: "Desbloqueando a Programação",
      titulo_en: "Unlocking Programming",
      descricao_pt: "Curso gratuito para iniciantes que apresenta operadores, váriaveis, estrutura de dados, loops e mais utilizando o Scratch (plataforma de programação visual utilizando blocos).",
      descricao_en: "Free beginner course that introduces operators, variables, data structures, loops and more using Scratch (a visual programming platform using blocks).",
      imagem: "Assets/Certificado3.png",
      link: "https://app.rocketseat.com.br/certificates/ab86655c-05aa-46fa-881b-30ed56e9c31c"
    },
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

const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

elements.forEach(el => observer.observe(el));