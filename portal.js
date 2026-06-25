/*
  portal.js
  ------------------------------------------------------------
  Dados editáveis do portal da Tenebris.

  Aqui ficam:
  - Eventos programados
  - Parceiros, como servidores de Minecraft
  - Aliados dentro de servidores
  - Sorteios do clã

  Este arquivo é estático. Ou seja: para mudar algo, edite aqui e envie
  novamente para o GitHub.
*/

window.TNB_EVENTS = [
  {
    title: "Treino geral de PvP",
    status: "Programado",
    date: "Sábado",
    time: "20:00",
    server: "TfGames",
    type: "Treino",
    description: "Treino aberto para melhorar o PvP do clã.",
    requirements: "Entrar em call e ser do clã."
  },
  {
    title: "Formulários para entrar no clã",
    status: "Aberto",
    date: "Sem Data Definida de fechamento.",
    time: "N/A",
    server: "Discord TNB",
    type: "Avaliação",
    description: "Caso tenha interesse de entrar para a Tenebris, preencha o formulário de avaliação disponível no canal #recrutamento do nosso Discord.",
    requirements: "Ser ativo no Minecraft e no Discord, e estar disposto a participar das atividades do clã."
  }
];

window.TNB_PARTNERS = [
  {
    name: "Tellus MC",
    category: "Servidor parceiro",
    address: "discord.gg/fsFQfVdeN",
    status: "Em desenvolvimento",
    description: "Servidor de geopolítica na versão 1.21, com mapa inspirado no planeta Terra, nações, alianças, rotas comerciais, guerras e diplomacia."
  },
  {
    name: "Servidor de SrLordM",
    category: "Comunidade parceira",
    address: "discord.gg/CW8T6JsZtT",
    status: "Ativo",
    description: "Servidor criado para reunir desenvolvimento de plugins, projetos futuros, conteúdos, lives e materiais gratuitos da comunidade do SrLordM."
  },
  {
    name: "CookieMC",
    category: "Servidor parceiro",
    address: "Java: cookie.magnohost.com | Bedrock: porta 25603 | discord.gg/MeNz3fRA9",
    status: "Ativo",
    description: "Servidor Java e Bedrock com modos SMP, BoxPvP e eventos para a comunidade."
  },
  {
    name: "POLITICA-MC",
    category: "Servidor parceiro",
    address: "Java: politicamc.net.br | Bedrock: mc.politicamc.net.br porta 10303",
    status: "Ativo",
    description: "Servidor Java e Bedrock com modos Practice e Towny, treino PvP, civilizações, cidades, guerras, proteção de terreno e economia balanceada."
  },
  {
    name: "Servidor do Pyro",
    category: "Comunidade parceira",
    address: "discord.gg/VSXfqEQ2yn | BawMC: bawmc.net:19132",
    status: "Ativo",
    description: "Comunidade do PyromaniacVV com acesso a calls, avisos antecipados de sorteios e recompensas."
  },
  {
    name: "Blade Store",
    category: "Loja e comunidade parceira",
    address: "discord.gg/bladestore",
    status: "Ativo",
    description: "Comunidade focada em Roblox, Robux baratos, trades, sorteios frequentes, eventos especiais e oportunidades de ganhar itens."
  }
];

window.TNB_ALLIES = [
  {
    name: "Cruzada",
    server: "CRUZ",
    status: "Aliado",
    description: "Clã aliado da Tenebris. Conflitos envolvendo membros aliados devem ser gravados e resolvidos via ticket ou liderança."
  },
  {
    name: "Hollow",
    server: "HWL",
    status: "Aliado",
    description: "Clã aliado da Tenebris. É proibido atacar, provocar ou prejudicar membros aliados sem clip, reembolso ou punição quando aplicável."
  }
];

window.TNB_GIVEAWAYS = [
  /* {
    title: "Sorteio interno TNB",
    prize: "Prêmio 1 Milhão.",
    status: "Ativo",
    endsAt: "Finaliza em 06/06/2026 11:27",
    organizer: "Organizador: SrLordM",
    description: "Sorteio reservado para membros ativos do clã."
  } */
];
