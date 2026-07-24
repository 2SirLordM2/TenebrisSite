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
    name: "Servidor de SrLordM",
    category: "Comunidade parceira",
    address: "discord.gg/CW8T6JsZtT",
    status: "Ativo",
    description: "Servidor criado para reunir desenvolvimento de plugins, projetos futuros, conteúdos, lives e materiais gratuitos da comunidade do SrLordM."
  },
  {
    name: "Servidor do Pyro",
    category: "Comunidade parceira",
    address: "discord.gg/VSXfqEQ2yn | BawMC: bawmc.net:19132",
    status: "Ativo",
    description: "Comunidade do PyromaniacVV com acesso a calls, avisos antecipados de sorteios e recompensas."
  }
];

window.TNB_ALLIES = [
  {
    name: "GOATS",
    server: "GOAT",
    status: "Aliado",
    description: "Clã aliado da Tenebris. Conflitos envolvendo membros aliados devem ser gravados e resolvidos via ticket ou liderança."
  },
  {
    name: "Sevilha",
    server: "SVL",
    status: "Aliado",
    description: "Clã aliado da Tenebris. Conflitos envolvendo membros aliados devem ser gravados e resolvidos via ticket ou liderança."
  },
  {
    name: "Nova Era",
    server: "NOVA",
    status: "Aliado",
    description: "Clã aliado da Tenebris. Conflitos envolvendo membros aliados devem ser gravados e resolvidos via ticket ou liderança."
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
