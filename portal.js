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
    name: "Rede Ancestral",
    category: "Servidor parceiro",
    address: "redeancestral.blazebr.com",
    status: "Ativo",
    description: "Servidor focado na modalidade de RankUp com diversas funcionalidades novas."
  }
];

window.TNB_ALLIES = [
  {
    name: "CROW",
    server: "BawMc",
    status: "Ativo",
    description: "Aliança formada em 03/06/2026."
  }
];

window.TNB_GIVEAWAYS = [
  {
    title: "Sorteio interno TNB",
    prize: "Prêmio 1 Milhão.",
    status: "Ativo",
    endsAt: "Finaliza em 06/06/2026 11:27",
    organizer: "Organizador: SrLordM",
    description: "Sorteio reservado para membros ativos do clã."
  }
];
