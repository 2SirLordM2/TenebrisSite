/*
  script.js
  ------------------------------------------------------------
  Este arquivo controla:
  - link do Discord;
  - estatísticas;
  - criação automática dos cards de membros;
  - criação automática da galeria;
  - partículas do fundo;
  - menu mobile;
  - animações suaves ao rolar a página.

  Para iniciantes:
  - Textos principais estão no index.html.
  - Cores e layout estão no style.css.
  - Lista de membros está no members.js.
*/

/* Link do Discord*/
const DISCORD_INVITE = "https://discord.gg/vzAkdxCnb2";

/* Estatísticas editáveis do clã. */
const clanStats = {
  foundationYear: 2025,
  victories: 200,
  serversDominated: 4
};

/*
  Galeria:
  - Coloque seus prints dentro da pasta src/imagens.
  - Depois troque o caminho "imagens/tnblogo.png" por algo como:
    "imagens/base-tenebris.png"
    "imagens/vitoria-factions.png"
*/
const galleryImages = [
  {
    src: "imagens/Tenebrisantigo1.png",
    title: "Primeira foto da Tenebris"
  },
  {
    src: "imagens/Tenebrisantigo2.jpeg",
    title: "Segunda foto da Tenebris"
  },
    {
    src: "imagens/Tenebrisantigo3.png",
    title: "Terceira foto da Tenebris"
  },
      {
    src: "imagens/tnblogo.png",
    title: "Quarta foto da Tenebris"
  },
      {
    src: "imagens/NeoLatinosxTenebris.png",
    title: "Quinta foto da Tenebris"
  },
  {
    src: "imagens/clanjuntoantigo.png",
    title: "Domínio do servidor no final de 2025"
  }
];

/* Função curta para selecionar elementos HTML. */
const select = (selector) => document.querySelector(selector);

/* Função para selecionar vários elementos HTML. */
const selectAll = (selector) => document.querySelectorAll(selector);

/* Atualiza todos os botões e textos que usam o convite do Discord. */
function setupDiscordLinks() {
  const buttons = [
    select("#discordHeroButton"),
    select("#discordSectionButton"),
    select("#discordFooterButton")
  ];

  buttons.forEach((button) => {
    if (button) {
      button.href = DISCORD_INVITE;
    }
  });

  const inviteText = select("#discordInviteText");
  if (inviteText) {
    inviteText.textContent = DISCORD_INVITE.replace("https://", "");
  }
}

/* Preenche as estatísticas do site. */
function setupStats() {
  const memberCount = Array.isArray(window.TNB_MEMBERS) ? window.TNB_MEMBERS.length : 0;

  const stats = {
    ...clanStats,
    memberCount
  };

  Object.entries(stats).forEach(([key, value]) => {
    const element = select(`[data-stat="${key}"]`);
    if (element) {
      element.textContent = value;
    }
  });
}

/* Monta a área visual de cargos usando as configurações do members.js. */
function renderRoles() {
  const roleList = select("#roleList");
  if (!roleList || !Array.isArray(window.TNB_ROLES)) {
    return;
  }

  roleList.innerHTML = window.TNB_ROLES
    .map((role) => {
      return `
        <article class="role-chip" style="--role-color: ${role.color}">
          <strong>${role.label}</strong>
          <span>${role.description}</span>
        </article>
      `;
    })
    .join("");
}

/* Encontra as informações visuais de um cargo. */
function getRoleConfig(roleId) {
  return window.TNB_ROLES.find((role) => role.id === roleId) || window.TNB_ROLES[window.TNB_ROLES.length - 1];
}

/* Cria a URL da cabeça do Minecraft automaticamente pelo nick. */
function getMinecraftHeadUrl(nickname) {
  /*
    Serviço usado: Minotar.
    Exemplo gerado: https://minotar.net/avatar/SrLordM/100.png
    Se quiser trocar por outro serviço no futuro, mude apenas esta função.
  */
  return `https://minotar.net/avatar/${encodeURIComponent(nickname)}/100.png`;
}

/* Monta todos os cards de membros e separa por cargo. */
function renderMembers() {
  const container = select("#memberGroups");
  if (!container || !Array.isArray(window.TNB_MEMBERS) || !Array.isArray(window.TNB_ROLES)) {
    return;
  }

  const groupsHtml = window.TNB_ROLES
    .map((role) => {
      const membersInRole = window.TNB_MEMBERS.filter((member) => member.role === role.id);

      if (membersInRole.length === 0) {
        return "";
      }

      const cardsHtml = membersInRole
        .map((member) => {
          return `
            <article class="member-card reveal" style="--role-color: ${role.color}">
              <img
                class="member-card__head"
                src="${getMinecraftHeadUrl(member.nick)}"
                alt="Cabeça Minecraft de ${member.nick}"
                loading="lazy"
              >
              <h3 class="member-card__nick">${member.nick}</h3>
              <span class="member-card__role">${role.label}</span>
              <p class="member-card__description">${member.description || "Membro da Tenebris."}</p>
            </article>
          `;
        })
        .join("");

      return `
        <section class="member-group" style="--role-color: ${role.color}">
          <h3 class="member-group__title">${role.label}</h3>
          <div class="member-grid">
            ${cardsHtml}
          </div>
        </section>
      `;
    })
    .join("");

  container.innerHTML = groupsHtml;
}

/* Cria a galeria de imagens. */
function renderGallery() {
  const gallery = select("#galleryGrid");
  if (!gallery) {
    return;
  }

  gallery.innerHTML = galleryImages
    .map((image) => {
      return `
        <article class="gallery-item reveal">
          <img src="${image.src}" alt="${image.title}" loading="lazy">
          <span>${image.title}</span>
        </article>
      `;
    })
    .join("");
}

/* Menu mobile: abre e fecha ao clicar no botão. */
function setupMobileMenu() {
  const button = select("#navToggle");
  const nav = select("#mainNav");

  if (!button || !nav) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  /* Fecha o menu quando o usuário clica em algum link. */
  selectAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

/* Anima elementos quando aparecem na tela. */
function setupRevealAnimations() {
  const elements = selectAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  elements.forEach((element) => observer.observe(element));
}

/* Atualiza o ano no rodapé automaticamente. */
function setupCurrentYear() {
  const yearElement = select("#currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* Remove a tela de carregamento. */
function hideLoader() {
  const loader = select("#loader");
  if (loader) {
    loader.classList.add("is-hidden");
  }
}

/* Cria partículas animadas no fundo do site. */
function setupParticles() {
  const canvas = select("#particleCanvas");
  if (!canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  const particles = [];
  const particleCount = window.innerWidth < 720 ? 42 : 78;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.6,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35,
      color: Math.random() > 0.5 ? "rgba(155, 16, 40, 0.65)" : "rgba(109, 26, 166, 0.72)"
    };
  }

  function fillParticles() {
    particles.length = 0;
    for (let index = 0; index < particleCount; index += 1) {
      particles.push(createParticle());
    }
  }

  function drawParticles() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -1;
      }

      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -1;
      }

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = particle.color;
      context.shadowBlur = 18;
      context.shadowColor = particle.color;
      context.fill();
    });

    requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  fillParticles();
  drawParticles();

  window.addEventListener("resize", () => {
    resizeCanvas();
    fillParticles();
  });
}

/*
  Inicialização do site:
  DOMContentLoaded acontece quando o HTML foi carregado e já pode ser manipulado.
*/
document.addEventListener("DOMContentLoaded", () => {
  setupDiscordLinks();
  setupStats();
  renderRoles();
  renderMembers();
  renderGallery();
  setupMobileMenu();
  setupRevealAnimations();
  setupCurrentYear();
  setupParticles();
});

/*
  load acontece quando imagens e outros arquivos também terminaram de carregar.
  Se alguma imagem externa demorar, o setTimeout garante que o loader saia mesmo assim.
*/
window.addEventListener("load", () => {
  window.setTimeout(hideLoader, 450);
});
