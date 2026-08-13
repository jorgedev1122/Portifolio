document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     ELEMENTOS
  ========================================================== */

  const body = document.body;

  const themeToggle = document.getElementById("theme-toggle");
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  const btnPT = document.getElementById("btn-pt");
  const btnEN = document.getElementById("btn-en");

  const projectsGrid = document.getElementById("projects-grid");
  const gamesGrid = document.getElementById("games-grid");

  const certImg = document.getElementById("cert-img");
  const certTitulo = document.getElementById("cert-titulo");
  const certDescricao = document.getElementById("cert-descricao");
  const certLink = document.getElementById("btn-cert-link");
  const certCount = document.getElementById("cert-count");

  const previousCert = document.getElementById("anterior-cert");
  const nextCert = document.getElementById("proximo-cert");

  const githubStats = document.getElementById("gh-stats");
  const githubTopLangs = document.getElementById("gh-toplangs");
  const githubFallback = document.getElementById("gh-fallback");

  /* =========================================================
     TEMA
  ========================================================== */

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    body.classList.add("light");
  }

  function updateThemeIcon() {
    const icon = themeToggle.querySelector("ion-icon");

    if (!icon) return;

    icon.setAttribute(
      "name",
      body.classList.contains("light") ? "sunny-outline" : "moon-outline",
    );
  }

  updateThemeIcon();

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");

    localStorage.setItem(
      "theme",
      body.classList.contains("light") ? "light" : "dark",
    );

    updateThemeIcon();
  });

  /* =========================================================
     MENU MOBILE
  ========================================================== */

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    const icon = menuToggle.querySelector("ion-icon");

    if (icon) {
      icon.setAttribute("name", isOpen ? "close-outline" : "menu-outline");
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");

      const icon = menuToggle.querySelector("ion-icon");

      if (icon) {
        icon.setAttribute("name", "menu-outline");
      }
    });
  });

  /* =========================================================
     TRADUÇÕES
  ========================================================== */

  const translations = {
    pt: {
      pageTitle: "Jorge Enrique — Portfólio",

      navAbout: "Sobre",

      navProjects: "Projetos",

      navGames: "Jogos",

      navTech: "Tecnologias",

      navContact: "Contato",

      heroStatus: "Disponível para aprender e criar",

      heroSmall: "Olá, eu sou",

      heroRole: "Desenvolvedor Front-end & Desenvolvedor de Jogos",

      heroDescription:
        "Desenvolvo projetos web e jogos enquanto transformo ideias em experiências reais através da programação.",

      heroProjects: "Ver projetos",

      aboutLabel: "Conheça um pouco mais",

      aboutHeading: "👋 Sobre mim",

      aboutText: `Sou Jorge Enrique, desenvolvedor Front-end e desenvolvedor de jogos apaixonado por tecnologia.

Atualmente, crio projetos utilizando HTML, CSS, JavaScript e Python, enquanto continuo estudando por meio de cursos e projetos próprios para aprimorar minhas habilidades e ampliar meus conhecimentos.

Gosto de transformar ideias em projetos reais, explorando tanto o desenvolvimento web quanto a criação de jogos e experiências interativas.

Meu objetivo é evoluir constantemente como desenvolvedor, criar soluções úteis e transformar minhas ideias em projetos que possam impactar pessoas de forma positiva.`,

      aboutWebTitle: "Desenvolvimento Web",

      aboutWebText: "Interfaces modernas, responsivas e funcionais.",

      aboutGameTitle: "Desenvolvimento de Jogos",

      aboutGameText:
        "Criando jogos e experiências interativas com programação.",

      aboutLearningTitle: "Sempre aprendendo",

      aboutLearningText: "Cursos, projetos próprios e muita prática.",

      projectsLabel: "O que eu construí",

      projectsHeading: "🌐 Sites & Projetos",

      projectsDescription:
        "Projetos desenvolvidos para praticar programação, design, responsividade e criação de experiências para a web.",

      gamesLabel: "Projetos interativos",

      gamesHeading: "🎮 Jogos",

      gamesDescription:
        "Jogos e experiências interativas que desenvolvo para explorar lógica, programação e criação de sistemas.",

      techLabel: "O que utilizo",

      techHeading: "⚙️ Tecnologias",

      techLanguages: "Linguagens",

      techTools: "Ferramentas",

      githubTool: "Versionamento & projetos",

      vscodeTool: "Ambiente de desenvolvimento",

      copilotTool: "Assistência com IA",

      codexTool: "IA para desenvolvimento",

      certLabel: "Estudos e aprendizado",

      certHeading: "📜 Certificados",

      viewCertificate: "Ver certificado",

      githubHeading: "📊 Minha atividade",

      githubTitle: "Código, projetos e evolução",

      githubDescription:
        "Acompanhe meus projetos e veja no que estou trabalhando.",

      githubFallback:
        "GitHub Stats temporariamente indisponível. Confira meu perfil diretamente no GitHub.",

      contactLabel: "Vamos conversar?",

      contactHeading: "Tem um projeto em mente?",

      contactDescription:
        "Estou sempre aprendendo, criando e explorando novas ideias. Entre em contato para conhecer meu trabalho.",

      footerText:
        "© 2026 Jorge Enrique. Feito com código, criatividade e muita vontade de aprender.",

      footerBuilt: "HTML • CSS • JavaScript",
    },

    en: {
      pageTitle: "Jorge Enrique — Portfolio",

      navAbout: "About",

      navProjects: "Projects",

      navGames: "Games",

      navTech: "Technologies",

      navContact: "Contact",

      heroStatus: "Always learning and creating",

      heroSmall: "Hello, I'm",

      heroRole: "Front-end Developer & Game Developer",

      heroDescription:
        "I build web projects and games while turning ideas into real experiences through programming.",

      heroProjects: "View projects",

      aboutLabel: "Get to know me",

      aboutHeading: "👋 About me",

      aboutText: `I'm Jorge Enrique, a Front-end Developer and Game Developer passionate about technology.

I currently create projects using HTML, CSS, JavaScript, and Python while continuing to learn through courses and personal projects to improve my skills and expand my knowledge.

I enjoy turning ideas into real projects, exploring both web development and game development through interactive experiences.

My goal is to constantly grow as a developer, build useful solutions, and turn my ideas into projects that can have a positive impact on people.`,

      aboutWebTitle: "Web Development",

      aboutWebText: "Modern, responsive, and functional interfaces.",

      aboutGameTitle: "Game Development",

      aboutGameText:
        "Creating games and interactive experiences through programming.",

      aboutLearningTitle: "Always Learning",

      aboutLearningText: "Courses, personal projects, and lots of practice.",

      projectsLabel: "What I've built",

      projectsHeading: "🌐 Websites & Projects",

      projectsDescription:
        "Projects built to practice programming, design, responsiveness, and creating experiences for the web.",

      gamesLabel: "Interactive projects",

      gamesHeading: "🎮 Games",

      gamesDescription:
        "Games and interactive experiences I build to explore logic, programming, and system design.",

      techLabel: "What I use",

      techHeading: "⚙️ Technologies",

      techLanguages: "Languages",

      techTools: "Tools",

      githubTool: "Version control & projects",

      vscodeTool: "Development environment",

      copilotTool: "AI assistance",

      codexTool: "AI for development",

      certLabel: "Learning & education",

      certHeading: "📜 Certificates",

      viewCertificate: "View certificate",

      githubHeading: "📊 My activity",

      githubTitle: "Code, projects, and progress",

      githubDescription:
        "Check out my projects and see what I'm currently working on.",

      githubFallback:
        "GitHub Stats are temporarily unavailable. Check my GitHub profile directly.",

      contactLabel: "Let's talk?",

      contactHeading: "Have a project in mind?",

      contactDescription:
        "I'm always learning, creating, and exploring new ideas. Get in touch to learn more about my work.",

      footerText:
        "© 2026 Jorge Enrique. Built with code, creativity, and a lot of curiosity.",

      footerBuilt: "HTML • CSS • JavaScript",
    },
  };

  /* =========================================================
     PROJETOS
  ========================================================== */

  const projects = [
    {
      title: {
        pt: "🥊 IronFist",
        en: "🥊 IronFist",
      },

      description: {
        pt: "Landing page para uma academia de boxe fictícia, criada com foco em design moderno, organização e responsividade.",

        en: "Landing page for a fictional boxing gym, focused on modern design, organization, and responsiveness.",
      },

      image: "Assets/FotoBoxe.png",

      technologies: ["HTML", "CSS", "JavaScript"],

      online: "https://jorgedev1122.github.io/Iron-Fist/",

      github: "https://github.com/jorgedev1122/Iron-Fist",
    },

    {
      title: {
        pt: "🚴 Velocity Dash",
        en: "🚴 Velocity Dash",
      },

      description: {
        pt: "Dashboard para ciclistas com informações sobre rotas, desempenho e outros dados apresentados em uma interface moderna.",

        en: "A cycling dashboard featuring route information, performance data, and other information in a modern interface.",
      },

      image: "Assets/FotoVelocity.png",

      technologies: ["HTML", "CSS", "JavaScript"],

      online: "https://jorgedev1122.github.io/Velocity-Dash/",

      github: "https://github.com/jorgedev1122/Velocity-Dash",
    },

    {
      title: {
        pt: "🛹 SK8HUB",
        en: "🛹 SK8HUB",
      },

      description: {
        pt: "Loja virtual voltada para o público skatista, com roupas, acessórios, peças e uma identidade visual moderna.",

        en: "An online store designed for skaters, featuring clothing, accessories, parts, and a modern visual identity.",
      },

      image: "Assets/FotoSK8HUB.png",

      technologies: ["HTML", "CSS", "JavaScript"],

      online: "https://jorgedev1122.github.io/SK8HUB/",

      github: "https://github.com/jorgedev1122/SK8HUB",
    },

    {
      title: {
        pt: "🚚 DB-Imports",
        en: "🚚 DB-Imports",
      },

      description: {
        pt: "Landing page desenvolvida para uma empresa real de importação, com foco em apresentação de produtos, identidade visual e responsividade.",

        en: "A landing page developed for a real import company, focused on product presentation, visual identity, and responsiveness.",
      },

      image: "Assets/FotoDB.png",

      technologies: ["HTML", "CSS", "JavaScript"],

      online: "https://db-imports.vercel.app/",

      github: "https://github.com/jorgedev1122/DB-Imports",
    },

    {
      title: {
        pt: "🧮 Calculadora Modular",
        en: "🧮 Modular Calculator",
      },

      description: {
        pt: "Calculadora com diferentes modos, incluindo funções científicas e financeiras, utilizando lógica, localStorage e modularização.",

        en: "A calculator with multiple modes, including scientific and financial functions, using logic, localStorage, and modularization.",
      },

      image: "Assets/FotoCalcMod.png",

      technologies: ["HTML", "CSS", "JavaScript"],

      online: "https://jorgedev1122.github.io/CalcMod/",

      github: "https://github.com/jorgedev1122/CalcMod",
    },

    {
      title: {
        pt: "🎓 EduSpace",
        en: "🎓 EduSpace",
      },

      description: {
        pt: "Uma plataforma que reúne recursos, tarefas, mensagens e outras ferramentas para organizar experiências de aprendizado.",

        en: "A platform that brings together resources, tasks, messages, and other tools to organize learning experiences.",
      },

      image: "Assets/FotoEduspace.png",

      technologies: ["HTML", "CSS", "JavaScript"],

      online: "https://jorgedev1122.github.io/Eduspace/",

      github: "https://github.com/jorgedev1122/EduSpace",
    },
  ];

  /* =========================================================
     JOGOS
  ========================================================== */

  const games = [
    {
      title: {
        pt: "SWARM",
        en: "SWARM",
      },

      description: {
        pt: "Um top-down survival shooter onde o jogador enfrenta hordas de inimigos e diferentes desafios. O projeto explora combate, inimigos, personagens, progressão e sistemas de gameplay.",

        en: "A top-down survival shooter where the player faces enemy hordes and different challenges. The project explores combat, enemies, characters, progression, and gameplay systems.",
      },

      image: "Assets/FotoSWARM.jpeg",

      technologies: ["HTML", "CSS", "JavaScript", "Game Development"],

      online: "https://jorgedev1122.github.io/SWARM/",

      github: "https://github.com/jorgedev1122/SWARM",
    },
  ];

  /* =========================================================
     RENDER DE PROJETOS
  ========================================================== */

  function renderProjects(lang) {
    projectsGrid.innerHTML = "";

    projects.forEach((project) => {
      const card = document.createElement("article");

      card.className = "project-card reveal";

      const title = project.title[lang];

      const description = project.description[lang];

      const tags = project.technologies
        .map((technology) => `<span class="project-tag">${technology}</span>`)
        .join("");

      card.innerHTML = `

        <div class="project-image">

          <img
            src="${project.image}"
            alt="${title}"
            loading="lazy"
          />

          <div class="project-overlay">
            <span>
              <ion-icon name="open-outline"></ion-icon>
              ${lang === "pt" ? "Abrir projeto" : "Open project"}
            </span>
          </div>

        </div>


        <div class="project-content">

          <h3>${title}</h3>

          <p>
            ${description}
          </p>

          <div class="project-tags">
            ${tags}
          </div>

          <div class="project-links">

            <a
              href="${project.online}"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              <ion-icon name="globe-outline"></ion-icon>
              ${lang === "pt" ? "Ver online" : "View online"}
            </a>

            <a
              href="${project.github}"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              <i class="fa-brands fa-github"></i>
              ${lang === "pt" ? "Código" : "Code"}
            </a>

          </div>

        </div>

      `;

      projectsGrid.appendChild(card);
    });

    observeRevealElements();
  }

  /* =========================================================
     RENDER DE JOGOS
  ========================================================== */

  function renderGames(lang) {
    gamesGrid.innerHTML = "";

    games.forEach((game) => {
      const card = document.createElement("article");

      card.className = "game-card reveal";

      const title = game.title[lang];

      const description = game.description[lang];

      const tags = game.technologies
        .map((technology) => `<span class="project-tag">${technology}</span>`)
        .join("");

      card.innerHTML = `

        <div class="game-image">

          <img
            src="${game.image}"
            alt="${title}"
            loading="lazy"
          />

        </div>


        <div class="game-content">

          <span class="game-badge">
            ${lang === "pt" ? "Jogo em desenvolvimento" : "Game in development"}
          </span>

          <h3>${title}</h3>

          <p>
            ${description}
          </p>

          <div class="game-tags">
            ${tags}
          </div>

          <div class="project-links">

            <a
              href="${game.online}"
              target="_blank"
              rel="noopener noreferrer"
              class="primary-button"
            >
              <ion-icon name="game-controller-outline"></ion-icon>
              ${lang === "pt" ? "Jogar agora" : "Play now"}
            </a>

            <a
              href="${game.github}"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              <i class="fa-brands fa-github"></i>
              ${lang === "pt" ? "Código" : "Code"}
            </a>

          </div>

        </div>

      `;

      gamesGrid.appendChild(card);
    });

    observeRevealElements();
  }

  /* =========================================================
     CERTIFICADOS
  ========================================================== */

  const certificates = [
    {
      title: {
        pt: "Discover",
        en: "Discover Course",
      },

      description: {
        pt: "Curso da Rocketseat com uma introdução prática ao desenvolvimento web, abordando HTML, CSS, JavaScript e fundamentos importantes para começar na programação.",

        en: "A Rocketseat course providing a hands-on introduction to web development, covering HTML, CSS, JavaScript, and important programming fundamentals.",
      },

      image: "Assets/Certificado.png",

      link: "https://app.rocketseat.com.br/certificates/63f04b36-f352-422b-bc8c-41be7b914158",
    },

    {
      title: {
        pt: "Posicionamento nas Redes Sociais",
        en: "Social Media Positioning",
      },

      description: {
        pt: "Curso da Rocketseat sobre posicionamento online e branding pessoal para construir uma presença profissional na área de tecnologia.",

        en: "A Rocketseat course about online positioning and personal branding to build a professional presence in the technology field.",
      },

      image: "Assets/Certificado2.png",

      link: "https://app.rocketseat.com.br/certificates/e20b1bfe-1156-4170-979e-275e43f82357",
    },

    {
      title: {
        pt: "Desbloqueando a Programação",
        en: "Unlocking Programming",
      },

      description: {
        pt: "Curso introdutório sobre operadores, variáveis, estruturas de dados, loops e outros conceitos utilizando Scratch.",

        en: "An introductory course covering operators, variables, data structures, loops, and other programming concepts using Scratch.",
      },

      image: "Assets/Certificado3.png",

      link: "https://app.rocketseat.com.br/certificates/ab86655c-05aa-46fa-881b-30ed56e9c31c",
    },
  ];

  let currentCertificate = 0;

  function updateCertificate(lang) {
    const certificate = certificates[currentCertificate];

    certImg.src = certificate.image;

    certImg.alt = certificate.title[lang];

    certTitulo.textContent = certificate.title[lang];

    certDescricao.textContent = certificate.description[lang];

    certLink.href = certificate.link;

    certCount.textContent = `${String(currentCertificate + 1).padStart(2, "0")} / ${String(certificates.length).padStart(2, "0")}`;
  }

  previousCert.addEventListener("click", () => {
    currentCertificate =
      currentCertificate === 0
        ? certificates.length - 1
        : currentCertificate - 1;

    updateCertificate(getCurrentLanguage());
  });

  nextCert.addEventListener("click", () => {
    currentCertificate = (currentCertificate + 1) % certificates.length;

    updateCertificate(getCurrentLanguage());
  });

  /* =========================================================
     IDIOMA
  ========================================================== */

  function getCurrentLanguage() {
    return localStorage.getItem("site-lang") || "pt";
  }

  function setLanguage(lang) {
    const dictionary = translations[lang];

    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";

    document.title = dictionary.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (dictionary[key] !== undefined) {
        element.textContent = dictionary[key];
      }
    });

    btnPT.classList.toggle("active", lang === "pt");

    btnEN.classList.toggle("active", lang === "en");

    localStorage.setItem("site-lang", lang);

    renderProjects(lang);

    renderGames(lang);

    updateCertificate(lang);
  }

  btnPT.addEventListener("click", () => setLanguage("pt"));

  btnEN.addEventListener("click", () => setLanguage("en"));

  /* =========================================================
     GITHUB FALLBACK
  ========================================================== */

  let githubStatsFailed = false;
  let githubLanguagesFailed = false;

  function checkGithubFallback() {
    if (githubStatsFailed && githubLanguagesFailed) {
      githubFallback.style.display = "block";
    }
  }

  githubStats.addEventListener("error", () => {
    githubStats.style.display = "none";

    githubStatsFailed = true;

    checkGithubFallback();
  });

  githubTopLangs.addEventListener("error", () => {
    githubTopLangs.style.display = "none";

    githubLanguagesFailed = true;

    checkGithubFallback();
  });

  /* =========================================================
     SCROLL REVEAL
  ========================================================== */

  function observeRevealElements() {
    const elements = document.querySelectorAll(".reveal:not(.visible)");

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  }

  /* =========================================================
     INICIALIZAÇÃO
  ========================================================== */

  setLanguage(getCurrentLanguage());

  observeRevealElements();
});
