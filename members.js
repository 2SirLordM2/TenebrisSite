/*
  members.js
  ------------------------------------------------------------
  Este arquivo existe para facilitar a edição dos membros.

  Como adicionar membro:
  1. Copie um bloco dentro de TNB_MEMBERS.
  2. Troque nick, role e description.

  Como remover membro:
  1. Apague o bloco inteiro do membro.

  Como trocar cargo:
  1. Altere a propriedade role.
  2. Use um destes valores:
     - "dono"
     - "subdono"
     - "capitães"
     - "liderdivisao"
     - "oficial"
     - "veterano"
     - "membro"
     - "recruta"

  A cabeça/skin aparece automaticamente pelo nick do Minecraft.
*/

/* Configuração visual dos cargos. */
window.TNB_ROLES = [
  {
    id: "dono",
    label: "Dono",
    color: "#ffd700",
    description: "Responsável pela direção da Tenebris e pelas decisões finais do clã."
  },
  {
    id: "subdono",
    label: "Sub Donos",
    color: "#ff8c00",
    description: "Auxiliam diretamente na liderança e organização geral da TNB."
  },
  {
    id: "capitães",
    label: "Capitão",
    color: "#c2183a",
    description: "Comandam guerras, estratégias, calls e movimentação dos membros."
  },
  {
    id: "liderdivisao",
    label: "Líderes de Divisões",
    color: "#8f24ff",
    description: "Responsáveis pelas divisões internas e coordenação dos grupos do clã."
  },
  {
    id: "oficial",
    label: "Oficiais",
    color: "#4c7dff",
    description: "Auxiliam na organização, suporte interno e manutenção da disciplina."
  },
  {
    id: "veterano",
    label: "Veteranos",
    color: "#00b894",
    description: "Jogadores antigos e experientes que conquistaram respeito dentro da Tenebris."
  },
  {
    id: "membro",
    label: "Membros",
    color: "#aaaaaa",
    description: "Parte ativa da TNB, participando das atividades, guerras e evolução do clã."
  },
  {
    id: "recruta",
    label: "Recrutas",
    color: "#6c757d",
    description: "Jogadores em fase de adaptação e avaliação dentro da equipe."
  }
];

/* Lista de membros do clã. Edite livremente. */
window.TNB_MEMBERS = [
  {
    nick: "SrLordM",
    role: "dono",
    description: "Fundador e Organizador da TNB."
  },

  
  {
    nick: "Divisionbz",
    role: "subdono",
    description: "Líder dos treinamentos e testes de novos membros."
  },
    {
    nick: "PyromaniacVV",
    role: "subdono",
    description: "Líder de tickets e formulários."
  },
    {
    nick: "Ryven7",
    role: "subdono",
    description: "Líder do PvP Spawn."
  },


  {
    nick: "xCarlosBR",
    role: "liderdivisao",
    description: "Líder da divisão 1."
  },
  {
    nick: "Arrasto",
    role: "liderdivisao",
    description: "Líder da divisão 2."
  },


  {
    nick: "ZyroX_Isback",
    role: "oficial",
    description: ""
  },


  {
    nick: "LCDOLOVE_",
    role: "veterano",
    description: ""
  },
  {
    nick: "Colph",
    role: "veterano",
    description: ""
  },
    {
    nick: "zemdubs",
    role: "veterano",
    description: ""
  },
    {
    nick: "CavIsMewing",
    role: "veterano",
    description: ""
  },
    {
    nick: "RogerRivers",
    role: "veterano",
    description: ""
  },
    {
    nick: "Kitter4k",
    role: "veterano",
    description: ""
  },
    {
    nick: "oVelocityrs",
    role: "veterano",
    description: ""
  },
    {
    nick: "ghzv_",
    role: "veterano",
    description: ""
  },

    {
    nick: "_ISlight_",
    role: "recruta",
    description: ""
  },
    {
    nick: "ssobre",
    role: "membro",
    description: ""
  },
    {
    nick: "didizinhogod",
    role: "membro",
    description: ""
  },
    {
    nick: "caputtinno",
    role: "membro",
    description: ""
  },
    {
    nick: "bentofv",
    role: "membro",
    description: ""
  },
    {
    nick: "vvako",
    role: "membro",
    description: ""
  },



  {
    nick: "K91v1",
    role: "recruta",
    description: ""
  },

    {
    nick: "H3gkz",
    role: "recruta",
    description: ""
  },
    {
    nick: "Itzpaiva",
    role: "recruta",
    description: ""
  },
    {
    nick: "FlayzzBB",
    role: "recruta",
    description: ""
  },
    {
    nick: "legendaryclean",
    role: "recruta",
    description: ""
  },
    {
    nick: "carnetemperrado",
    role: "recruta",
    description: ""
  },
    {
    nick: "Akio_123hahagege",
    role: "recruta",
    description: ""
  },
    {
    nick: "pedrotriste",
    role: "recruta",
    description: ""
  },
    {
    nick: "Arth_turgita",
    role: "recruta",
    description: ""
  },
    {
    nick: "leonardoarqueiro",
    role: "recruta",
    description: ""
  },
    {
    nick: "AbyssifexXJ",
    role: "recruta",
    description: ""
  },
    {
    nick: "Renann067",
    role: "recruta",
    description: ""
  },
    {
    nick: "SpectralBR",
    role: "recruta",
    description: ""
  },
    {
    nick: "hqzyggez",
    role: "recruta",
    description: ""
  },
    {
    nick: "Wyzxzs",
    role: "recruta",
    description: ""
  },
    {
    nick: "Stripyduck01736",
    role: "recruta",
    description: ""
  },
    {
    nick: "Tomyyyy_",
    role: "recruta",
    description: ""
  },
    {
    nick: "mickael7z",
    role: "recruta",
    description: ""
  },
    {
    nick: "Vexx_xgh",
    role: "recruta",
    description: ""
  },
    {
    nick: "FlayzzBB",
    role: "recruta",
    description: ""
  },
    {
    nick: "M1dzz",
    role: "recruta",
    description: ""
  },
    {
    nick: "916Killua",
    role: "recruta",
    description: ""
  },
    {
    nick: "Luisdoxvds",
    role: "recruta",
    description: ""
  },
    {
    nick: "Comentario",
    role: "recruta",
    description: ""
  },
    {
    nick: "6wsd",
    role: "recruta",
    description: ""
  },
    {
    nick: "V3nyxWz",
    role: "recruta",
    description: ""
  },
    {
    nick: "KauaOPIS_BACK",
    role: "recruta",
    description: ""
  },
    {
    nick: "AuakgPRO",
    role: "recruta",
    description: ""
  },
    {
    nick: "Luisdoxvds",
    role: "recruta",
    description: ""
  },
  {
    nick: "916Killua",
    role: "recruta",
    description: ""
  },
    {
    nick: "M1dzz",
    role: "recruta",
    description: ""
  },


];
