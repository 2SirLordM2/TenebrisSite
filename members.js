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
  1. Use roles para colocar um ou mais cargos no membro.
  2. O site mostra o membro somente no cargo mais alto da hierarquia.
  3. Cargos extras como "semi", "builder" e "eventos" aparecem apenas como tags.
  4. Use estes cargos de hierarquia:
     - "dono"
     - "subdono"
     - "capitaes"
     - "liderdivisao"
     - "oficial"
     - "veterano"
     - "membro"
     - "recruta"

  Exemplo:
  {
    nick: "Jogador",
    roles: ["dono", "recruta", "semi"],
    description: "Descrição opcional."
  }

  No exemplo acima, o jogador aparece somente em Dono.

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
    id: "capitaes",
    label: "Capitães",
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

/* Cargos extras: aparecem no card, mas não criam categorias nem filtros. */
window.TNB_EXTRA_ROLES = [
  {
    id: "semi",
    label: "Semi Anarquia",
    color: "#c2183a"
  },
  {
    id: "pvp",
    label: "PvP",
    color: "#e00b35"
  },
  {
    id: "lider_div_1",
    label: "Líder da Divisão 1",
    color: "#ff4d4d",
  },
  {
    id: "lider_div_2",
    label: "Líder da Divisão 2",
    color: "#4da6ff",
  },
  {
    id: "lider_div_3",
    label: "Líder da Divisão 3",
    color: "#9b59ff",
  },
  {
    id: "builder",
    label: "Builder",
    color: "#00b894"
  },
  {
    id: "eventos",
    label: "Eventos",
    color: "#d6b76a"
  },
  {
    id: "homem",
    label: "Homem",
    color: "#3498db" // azul elegante
  },
  {
    id: "mulher",
    label: "Mulher",
    color: "#ff4fa3" // rosa moderno
  },
  {
    id: "recrutador_tnb",
    label: "Recrutador TNB",
    color: "#9b59b6" // roxo destaque
  },
  {
    id: "div1",
    label: "Divisão 1",
    color: "#f1c40f" // dourado
  },
  {
    id: "div2",
    label: "Divisão 2",
    color: "#e67e22" // laranja premium
  },
  {
    id: "div3",
    label: "Divisão 3",
    color: "#95a5a6" // prata/cinza
  },
  {
    id: "na",
    label: "NA",
    color: "#1abc9c" // verde água
  },
  {
    id: "eu",
    label: "EU",
    color: "#3b82f6" // azul europeu
  },
  {
    id: "sa",
    label: "SA",
    color: "#27ae60" // verde sul-america
  },
  {
    id: "booster",
    label: "Booster",
    color: "#e74c3c" // vermelho forte
  },
  {
    id: "influenciador_tnb",
    label: "Influenciador TNB",
    color: "#ff6b00" // laranja influencer
  },
  {
    id: "box",
    label: "Box",
    color: "#6c5ce7" // roxo neon suave
  }
];

/* Lista de membros do clã. Edite livremente. */
window.TNB_MEMBERS = [
  {
    nick: "SrLordM",
    roles: ["dono", "lider_div_1", "influenciador_tnb", "sa", "div1", "box", "recrutador_tnb", "homem", "semi", "builder"],
    description: "Fundador e Organizador da TNB."
  },
  {
    nick: "Divisionbz",
    roles: ["subdono", "lider_div_2", "sa", "div1", "sa", "recrutador_tnb", "homem", "semi"],
    description: "Líder dos treinamentos e testes de novos membros."
  },
  {
    nick: "PyromaniacVV",
    roles: ["subdono", "sa", "div1", "sa", "recrutador_tnb", "homem", "semi"],
    description: "Líder de tickets e formulários."
  },
  {
    nick: "Ryven7",
    roles: ["subdono", "lider_div_1", "div1", "sa", "recrutador_tnb", "homem", "semi"],
    description: "Líder do semi Spawn."
  },
  {
    nick: "xCarlosBR",
    roles: ["capitaes", "div1", "sa", "homem", "semi", "box"],
    description: "Líder da divisão 1."
  },
  {
    nick: "Arrasto",
    roles: ["liderdivisao", "lider_div_2", "div1", "sa", "homem", "semi"],
    description: "Líder da divisão 2."
  },
  {
    nick: "ZyroX_Isback",
    roles: ["oficial", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "LCDOLOVE_",
    roles: ["veterano", "div1", "sa", "homem", "semi"],
    description: ""
  },
  {
    nick: "Colph",
    roles: ["veterano", "sa", "div3", "homem", "semi"],
    description: ""
  },
  {
    nick: "zemdubs",
    roles: ["veterano", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "CavIsMewing",
    roles: ["veterano", "sa", "div3", "homem", "semi"],
    description: ""
  },
  {
    nick: "RogerRivers",
    roles: ["veterano", "sa", "div3", "homem", "semi"],
    description: ""
  },
  {
    nick: "Kitter4k",
    roles: ["veterano", "recrutador_tnb", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "oVelocityrs",
    roles: ["veterano", "recrutador_tnb", "sa", "div1", "homem", "semi", "box"],
    description: ""
  },
  {
    nick: "ghzv_",
    roles: ["veterano", "sa", "div1", "homem", "semi"],
    description: ""
  },
  {
    nick: "ssobre",
    roles: ["veterano", "sa", "div3", "homem", "builder"],
    description: ""
  },
  {
    nick: "didizinhogod",
    roles: ["membro", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "caputtinno",
    roles: ["membro", "sa", "div3", "homem", "semi", "builder"],
    description: ""
  },
  {
    nick: "bentofv",
    roles: ["membro", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "vvako",
    roles: ["membro", "sa", "div3", "homem", "semi"],
    description: ""
  },
  {
    nick: "_ISlight_",
    roles: ["recruta", "sa", "div1", "homem", "semi"],
    description: ""
  },
  {
    nick: "K91v1",
    roles: ["recruta", "eu", "div1", "homem", "semi"],
    description: ""
  },
  {
    nick: "H3gkz",
    roles: ["recruta", "sa", "div1", "homem", "semi"],
    description: ""
  },
  {
    nick: "Itzpaiva",
    roles: ["recruta", "eu", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "FlayzzBB",
    roles: ["recruta", "sa", "div1", "homem", "semi"],
    description: ""
  },
  {
    nick: "carnetemperrado",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "Akio_123hahagege",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "pedrotriste",
    roles: ["recruta", "sa", "div3", "homem", "semi"],
    description: ""
  },
  {
    nick: "Arth_turgita",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "leonardoarqueiro",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "AbyssifexXJ",
    roles: ["recruta", "sa", "div3", "homem", "semi"],
    description: ""
  },
  {
    nick: "Renann067",
    roles: ["recruta", "sa", "div3", "homem", "semi"],
    description: ""
  },
  {
    nick: "SpectralBR",
    roles: ["recruta", "sa", "div2", "homem", "semi", "box"],
    description: ""
  },
  {
    nick: "hqzyggez",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "Wyzxzs",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "Stripyduck01736",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "Tomyyyy_",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "mickael7z",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "Vexx_xgh",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "M1dzz",
    roles: ["recruta", "sa", "div3", "homem", "semi"],
    description: ""
  },
  {
    nick: "916Killua",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "Luisdoxvds",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "Comentario",
    roles: ["recruta", "sa", "eu", "div3", "homem", "semi", "builder"],
    description: ""
  },
  {
    nick: "6wsd",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "V3nyxWz",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "KauaOPIS_BACK",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "AuakgPRO",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "menor_progresso7",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "LAGARXIXA_4M",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "EspadachimPreto",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "31003",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "SW1GHT7",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "shadowcraft00",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  },
  {
    nick: "Arth_turgita ",
    roles: ["recruta", "sa", "div2", "homem", "semi"],
    description: ""
  }
];
