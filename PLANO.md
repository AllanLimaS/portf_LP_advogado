# Plano de Desenvolvimento — Landing Page Advogado Trabalhista

## Design System

### Fontes
| Variável CSS | Fonte | Uso |
|---|---|---|
| `--font-heading` | Playfair Display | Títulos, nomes, valores de métricas |
| `--font-body` | Inter | Textos, botões, labels, FAQ |
| `--font-serif` | DM Serif Display | Título do Hero ("Problemas no trabalho? Defenda seus direitos") |
| `--font-display` | Aboreto | Nome no Hero, título do CTA Final |

### Cores
| Variável CSS | Hex | Uso |
|---|---|---|
| `--color-primary` | `#111827` | Fundo escuro principal |
| `--color-accent` | `#c9a227` | Dourado principal, gradientes |
| `--color-accent-light` | `#f1daaa` | Texto claro sobre escuro |
| `--color-accent-dark` | `#cca733` | Dourado mais fechado, botão About |
| `--color-bg` | `#ffffff` | Fundo branco |
| `--color-bg-light` | `#f8f9fa` | Fundo dos cards de diferenciais |
| `--color-dark-card` | `#1a2235` | Cards internos em seções escuras |
| `--color-dark-footer` | `#0d1117` | Fundo do footer |
| `--color-border-dark` | `#443605` | Bordas douradas escuras |
| `--color-border-light` | `#e5e7eb` | Bordas claras |
| `--color-muted` | `#9ca3af` | Texto secundário (relógio, labels) |
| `--color-muted-dark` | `#6b7280` | Texto de descrição (About) |

### Gradientes
- **Botão CTA:** linear `#c9a227` → `#72530a` (180deg)
- **Borda cards:** linear `#c9a227` → `#433505` (180deg)
- **Ícones cards:** linear `#faf2e0` → `#c9a227`
- **Título Pain Points:** linear `#ffffff` → `#eccd8d`

---

## Estrutura de Pastas

```
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Metrics.astro
│   ├── PainPoints.astro
│   ├── HowItWorks.astro
│   ├── AboutLawyer.astro
│   ├── Differentiators.astro
│   ├── Testimonials.astro
│   ├── FAQ.astro
│   ├── FinalCTA.astro
│   ├── Footer.astro
│   └── ui/
│       ├── CTAButton.astro
│       ├── SectionEyebrow.astro
│       └── IconBox.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
├── styles/
│   └── global.css
└── constants/
    └── site.ts
```

---

## Componentes Base (UI)

### CTAButton.astro
- Gradiente linear `#c9a227` → `#72530a`
- Texto + ícone (arrow "→" ou emoji "💬")
- `cornerRadius: 8`, padding `16px 36px`
- Params via props: `text`, `icon`, `href`

### SectionEyebrow.astro
- Rótulo de seção com traços decorativos laterais
- Ex: `— DEPOIMENTOS —`, `— NOSSOS DIFERENCIAIS —`
- Cor dourada `#cca733`, fonte Inter 12px, letterSpacing 1.2

### IconBox.astro
- Caixa 36x36 ou 48x48 com fundo `#f3ead8` e `cornerRadius: 8`
- Ícone Lucide dentro, cor `#cca733`

---

## Seções (Ordem de Implementação)

### 1. Header (fixo, backdrop blur)
| Prop | Desktop | Mobile |
|---|---|---|
| Fundo | `#111827` com blur | `#111827` com blur |
| Conteúdo | Logo esq. + botão "Fale Conosco" dir. | Logo esq. + botão compacto dir. |
| Logo | "Ricardo Almeida" Playfair Display | Mesmo, menor |

### 2. Hero (589px)
| Elemento | Estilo |
|---|---|
| BG Image | `imgs/fundo hero.jpg`, blur(4px) |
| Overlay | `#11182799` |
| Gradientes decorativos | Radial esquerda e direita |
| Foto advogado | `imgs/advogado.png`, 500x620, canto direito, radius 8 |
| Nome | "Dr. Ricardo Almeida", `--font-display` (Aboreto), 42px, bold |
| Badge | "ADVOCACIA TRABALHISTA", Inter, 26px, dourado, letterSpacing 6 |
| Título L1 | "Problemas no trabalho?", `--font-serif` (DM Serif Display), 38px |
| Título L2 | "Defenda" + "seus direitos", DM Serif Display + dourado |
| CTA | "Solicitar Atendimento →", gradiente dourado |
| Relógio | "Atendimento em até 24 horas", Ícone clock, `#9ca3af` |
| **Mobile** | Sem foto, texto centralizado, sem gradientes laterais |

### 3. Metrics (160px)
| Elemento | Estilo |
|---|---|
| Fundo | `#111827` |
| Layout | 3 cards horizontais, centralizados |
| Valores | Playfair Display, dourado, 36px bold |
| Labels | Inter, branco, 14px |

### 4. Pain Points (600px)
| Elemento | Estilo |
|---|---|
| Fundo | `#111827` |
| Título | Gradiente `#ffffff` → `#eccd8d`, Playfair Display 30px |
| Grid | 3x2 cards (2 rows de 3) |
| Cards | Fundo `#111827`, borda gradiente dourada 2px, radius 10 |
| Ícone | 40x40, gradiente `#faf2e0` → `#c9a227` |
| Texto | Inter 17px, branco, centralizado |
| CTA | "Quero Analisar Meu Caso →" |
| **Mobile** | Grid 1 coluna (6 cards em pilha) |

### 5. How It Works (608px)
| Elemento | Estilo |
|---|---|
| Fundo | `#111827` |
| Watermark | Ícone balança (scale), `#1a2235`, opacity 0.5, topo esquerdo |
| Título | "Sua Jornada de Defesa," + "COMO FUNCIONA ?" |
| Cards | 4 cards lado a lado com conectores entre eles |
| Card | Fundo `#1a2235`, borda `#443605`, radius 10 |
| Número | Playfair Display 40px, dourado, opacity 0.5 |
| Ícone | Caixa 48x48 `#f1daaa` com ícone `#443605` |
| Título card | Inter 15px, `#f1daaa`, semibold |
| Descrição | Inter 13px, `#f1daaa`, opacity 0.7 |

### 6. About Lawyer (460px)
| Elemento | Estilo |
|---|---|
| Fundo | Branco `#ffffff`, radius 16 |
| Acento | Barra vertical dourada 4px à esquerda |
| Foto | `imgs/Advogado com fundo.jpg`, radius 12, borda dourada 2px, sombra |
| Especialidade | Linha dourada + "ESPECIALISTA EM DIREITO TRABALHISTA" |
| Nome | "Dr. Ricardo Almeida", Playfair Display 30px |
| Descrição | Inter 14px, `#6b7280`, lineHeight 1.7 |
| Métricas | 10+ / 500+ / 95% em colunas, com divisores |
| CTA | "Agendar Consulta", fundo `#cca733`, ícone calendário |

### 7. Differentiators (417px)
| Elemento | Estilo |
|---|---|
| Fundo | Branco `#ffffff` |
| Eyebrow | `— NOSSOS DIFERENCIAIS —` |
| Título | "Por que escolher nosso escritório?", Playfair Display 24px |
| Grid | 3x2 cards |
| Card | Fundo `#fafaf9`, borda `#e5e7eb`, radius 12 |
| Ícone | Caixa 36x36 `#f3ead8` com ícone dourado |
| Label | Inter 14px, `#111827` |

### 8. Testimonials (361px)
| Elemento | Estilo |
|---|---|
| Fundo | `#111827`, radius inferior 16 |
| Eyebrow | `— DEPOIMENTOS —` |
| Título | "O que nossos clientes dizem", Playfair Display 24px, `#f1daaa` |
| Cards | 3 cards, fundo `#1a2235`, borda `#443605`, radius 12 |
| Estrelas | `★★★★★`, `#cca733` |
| Citação | Inter 13px, itálico, `#f1daaa`, opacity 0.75 |
| Avatar | Círculo 32px, fundo `#443605`, iniciais `#f1daaa` |
| Nome | Inter 13px, `#f1daaa` |

### 9. FAQ (655px)
| Elemento | Estilo |
|---|---|
| Fundo | Branco `#ffffff`, radius 16 |
| Título | "Perguntas" + "Frequentes", Playfair Display 30px |
| Accordion | 5 itens com bordas `#e5e7eb` |
| Item ativo | Número + pergunta dourados, botão "+" preenchido |
| Item inativo | Número + pergunta escuros, botão "+" outline cinza |
| Resposta | Inter 13px, `#6b7280`, lineHeight 1.7 |
| Mini-CTA | Fundo `#111827`, "Ainda tem dúvidas? Falar pelo WhatsApp" |

### 10. Final CTA (673px)
| Elemento | Estilo |
|---|---|
| BG Image | `imgs/Martelinho.jpg`, fill |
| Overlay | `#111827CC` |
| Título | "Não deixe seus direitos / para depois", Aboreto |
| Descrição | "Fale agora com um especialista...", Inter 16px |
| Botão | "Falar pelo WhatsApp 💬", gradiente dourado |

### 11. Footer (271px)
| Elemento | Estilo |
|---|---|
| Fundo | `#0d1117`, radius inferior 16 |
| Col 1 | "Ricardo Almeida" + tagline + redes sociais (Instagram, LinkedIn, YouTube) |
| Col 2 | Contato: telefone, email, endereço |
| Col 3 | Navegação: links internos |
| Bottom | Copyright + OAB/SP |

---

## Integração WhatsApp

```ts
// constants/site.ts
export const WHATSAPP_NUMBER = "5511999996868"
export const WHATSAPP_MESSAGE = "Olá, gostaria de uma análise do meu caso."
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
```

Todos os botões CTA e "Fale Conosco" apontam para essa URL.

---

## Responsividade

- Mobile-first usando design `xV5Ct` (375px) como referência
- Breakpoints Tailwind padrão: `sm` (640px), `md` (768px), `lg` (1024px)
- Hero: sem foto, sem gradientes laterais no mobile
- Pain Points: grid 1 coluna no mobile
- Footer: colunas empilhadas no mobile

---

## Ordem de Execução

1. `constants/site.ts` — dados estáticos
2. `ui/CTAButton.astro`, `ui/SectionEyebrow.astro`, `ui/IconBox.astro`
3. `layouts/BaseLayout.astro`
4. `Header.astro` → `Hero.astro` → `Metrics.astro` → ... → `Footer.astro`
5. `pages/index.astro` — montagem final
6. Teste responsivo e ajustes finos
