# Ricardo Lauer Advocacia

Landing page para escritório de advocacia trabalhista feita apenas para portfólio, construída com Astro e Tailwind CSS.

## Stack

- [Astro](https://astro.build) v6
- [Tailwind CSS](https://tailwindcss.com) v4
- TypeScript

## Comandos

| Comando              | Ação                                       |
| :------------------- | :----------------------------------------- |
| `npm install`        | Instala dependências                       |
| `npm run dev`        | Servidor de desenvolvimento em `localhost:4321` |
| `npm run build`      | Build de produção em `./dist/`             |
| `npm run preview`    | Preview do build de produção               |
| `npm run screenshot` | Captura screenshots automáticos            |

## Estrutura

```
/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/images/
│   ├── components/
│   │   └── ui/
│   ├── constants/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
└── tailwind.config.ts (via @tailwindcss/vite)
```
