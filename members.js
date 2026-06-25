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
  },
  {
    id: "bee_swarm",
    label: "Bee Swarm",
    color: "#f9d423"
  }
];

/*
  Lista de membros do cl?.
  ------------------------------------------------------------
  Use membro("Nick", ["cargo", "tag"], "descri??o opcional").

  Regras importantes:
  - Coloque pelo menos um cargo de hierarquia em cada membro.
  - Cargos de hierarquia: dono, subdono, capitaes, liderdivisao, oficial, veterano, membro, recruta.
  - Tags extras: pvp, builder, semi, homem, mulher, recrutador_tnb, bee_swarm, div1, sa etc.
  - Tags extras aparecem no card, mas n?o criam filtros nem categorias.
  - Se algu?m tiver v?rios cargos de hierarquia, aparece somente no mais alto.
*/
const membro = (nick, roles, description = "") => ({
  nick,
  roles,
  description
});

window.TNB_MEMBERS = [
  membro("SrLordM", ["dono", "subdono", "capitaes", "liderdivisao", "oficial", "veterano", "membro", "recruta", "pvp", "homem", "builder", "recrutador_tnb", "bee_swarm"], "Fundador e Organizador da TNB."),
  membro("Divisionbz", ["subdono", "lider_div_2", "sa", "div1", "sa", "recrutador_tnb", "homem", "semi", "pvp"], "Líder dos treinamentos e testes de novos membros."),
  membro("PyromaniacVV", ["subdono", "sa", "div1", "sa", "recrutador_tnb", "homem", "semi", "pvp"], "Líder de tickets e formulários."),

  membro("xCarlosBR", ["capitaes", "div1", "sa", "homem", "semi", "box", "pvp"], "Líder da divisão 1."),

  membro("Arrasto", ["liderdivisao", "lider_div_2", "div1", "sa", "homem", "semi", "pvp"], "Líder da divisão 2."),

  membro("oVelocityrs", ["oficial", "recrutador_tnb", "sa", "div1", "homem", "semi", "box", "pvp"], ""),

  membro("LCDOLOVE_", ["veterano", "div1", "sa", "homem", "semi", "pvp"], ""),
  membro("ghzv_", ["veterano", "sa", "div1", "homem", "semi", "pvp"], ""),
  membro("SecretToddynho", ["veterano", "eu", "div2", "homem", "semi", "pvp"], ""),
  membro("SecretToddynho", ["veterano", "sa", "div2", "homem", "semi", "pvp"], ""),
  
  membro("zemdubs", ["membro", "sa", "div2", "homem", "semi", "pvp"], ""),
  membro("Kitter4k", ["membro", "recrutador_tnb", "sa", "div2", "homem", "semi", "pvp"], ""),
  membro("vvako", ["membro", "sa", "div3", "homem", "semi", "pvp"], ""),
  membro("avezq", ["membro", "sa", "div2", "homem", "semi", "pvp"], ""),
  membro("ssobre", ["membro", "sa", "div3", "homem", "builder", "pvp"], ""),
  membro("caputtinno", ["membro", "sa", "div3", "homem", "semi", "builder", "pvp"], ""),
  membro("bentofv", ["membro", "sa", "div2", "homem", "semi", "pvp"], ""),
  membro("CavIsMewing", ["membro", "sa", "div3", "homem", "semi", "pvp"], ""),
  membro("RogerRivers", ["membro", "sa", "div3", "homem", "semi", "pvp"], ""),
  membro("Colph", ["membro", "sa", "div3", "homem", "semi", "pvp"], ""),

  membro("pedrotriste", ["recruta", "sa", "div3", "homem", "semi", "pvp"], ""),
  membro("Arth_turgita", ["recruta", "sa", "div2", "homem", "semi", "pvp"], ""),
  membro("AbyssifexXJ", ["recruta", "sa", "div3", "homem", "semi", "pvp"], ""),
  membro("Renann067", ["recruta", "sa", "div3", "homem", "semi", "pvp"], ""),
  membro("SpectralBR", ["recruta", "sa", "div2", "homem", "semi", "box", "pvp"], ""),
  membro("Stripyduck01736", ["recruta", "sa", "div2", "homem", "semi", "pvp"], ""),
  membro("M1dzz", ["recruta", "sa", "div3", "homem", "semi", "pvp"], ""),
  membro("Comentario", ["recruta", "sa", "eu", "div3", "homem", "semi", "pvp", "builder"], ""),
  membro("menor_progresso7", ["recruta", "sa", "div2", "homem", "semi", "pvp"], ""),
  membro("31003", ["recruta", "sa", "div2", "homem", "semi", "pvp"], ""),
  membro("Arth_turgita", ["recruta", "sa", "div2", "homem", "semi", "pvp"], ""),
  membro("Angelo123457892", ["recruta", "sa", "div2", "homem", "semi", "pvp"], ""),
  membro("_zyon_pvp", ["recruta", "sa", "div2", "homem", "semi", "pvp"], ""),
  membro("FlayzzBB", ["recruta", "recrutador_tnb", "sa", "div2", "homem", "semi", "pvp"], ""),
];