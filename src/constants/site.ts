export const SITE = {
  name: "Ricardo Lauer",
  fullName: "Dr. Ricardo Lauer",
  specialty: "Advocacia Trabalhista",
  description:
    "Atuação focada na defesa dos direitos dos trabalhadores, oferecendo atendimento personalizado e acompanhamento durante todas as etapas do processo.",
  tagline: "Advocacia trabalhista com dedicação, transparência e estratégia em cada etapa.",
  oab: "OAB/SP 00000",
  copyright: "© 2026 Ricardo Lauer Advocacia. Todos os direitos reservados.",
}

export const WHATSAPP = {
  number: "5511999996868",
  message: "Olá, gostaria de uma análise do meu caso.",
  get url() {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`
  },
}

export const CONTACT = {
  phone: "(11) 99999-6868",
  email: "contato@ricardolauer.adv.br",
  address: "Av. Paulista, 1000 — São Paulo, SP",
}

export const SOCIAL = {
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
}

export const NAV_LINKS = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre o advogado", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Perguntas frequentes", href: "#faq" },
]

export const METRICS = [
  { value: "10+", label: "anos de experiência" },
  { value: "500+", label: "casos analisados" },
  { value: "Atendimento", label: "Online e Presencial" },
]

export const ABOUT_METRICS = [
  { value: "10+", label: "ANOS DE EXPERIÊNCIA" },
  { value: "500+", label: "CASOS ATENDIDOS" },
  { value: "95%", label: "TAXA DE SUCESSO" },
]

export const PAIN_POINTS = [
  { icon: "briefcase", label: "Demissão sem justa causa" },
  { icon: "clock", label: "Horas extras não pagas" },
  { icon: "file-text", label: "Trabalho sem registro" },
  { icon: "alert-triangle", label: "Assédio moral" },
  { icon: "shield", label: "Acidente de trabalho" },
  { icon: "dollar-sign", label: "FGTS não depositado" },
]

export const STEPS = [
  { number: "1", icon: "message-circle", title: "Contato inicial", description: "Inicie uma conversa e relate seu caso." },
  { number: "2", icon: "search", title: "Análise do caso", description: "Avaliamos os detalhes que você compartilhou." },
  { number: "3", icon: "target", title: "Estratégia Jurídica", description: "Traçamos o melhor caminho para sua defesa." },
  { number: "4", icon: "users", title: "Acompanhamento", description: "Suporte em todas as etapas do processo." },
]

export const DIFFERENTIATORS = [
  { icon: "heart", label: "Atendimento Humanizado" },
  { icon: "target", label: "Estratégia Personalizada" },
  { icon: "eye", label: "Transparência em Todas as Etapas" },
  { icon: "message-circle", label: "Comunicação Clara" },
  { icon: "monitor", label: "Atendimento Online e Presencial" },
  { icon: "shield", label: "Acompanhamento Completo" },
]

export const TESTIMONIALS = [
  {
    quote: "Excelente atendimento e total suporte durante o processo.",
    initials: "MS",
    name: "Maria S.",
  },
  {
    quote: "Profissional extremamente competente e transparente.",
    initials: "CA",
    name: "Carlos A.",
  },
  {
    quote: "Me senti seguro durante todas as etapas.",
    initials: "AL",
    name: "Ana L.",
  },
]

export const FAQ_ITEMS = [
  {
    number: "01",
    question: "Quanto custa a consulta?",
    answer: "A consulta inicial é realizada para entendermos o seu caso. Entre em contato para saber os valores e condições de atendimento.",
  },
  {
    number: "02",
    question: "Preciso comparecer ao escritório?",
    answer: "Não necessariamente. Oferecemos atendimento online para sua comodidade, mas você também pode agendar uma visita presencial se preferir.",
  },
  {
    number: "03",
    question: "Quanto tempo dura um processo?",
    answer: "O prazo varia conforme a complexidade do caso e a fase processual. Durante a consulta inicial, faremos uma estimativa baseada na sua situação específica.",
  },
  {
    number: "04",
    question: "Posso ser atendido online?",
    answer: "Sim. Realizamos consultas e acompanhamentos por videochamada e WhatsApp, garantindo o mesmo suporte de qualidade do atendimento presencial.",
  },
  {
    number: "05",
    question: "Quais documentos preciso apresentar?",
    answer: "Documentos como RG, CPF, carteira de trabalho, comprovante de residência, holerites e qualquer comunicação com a empresa são importantes. Na consulta inicial orientamos você sobre tudo que será necessário.",
  },
]
