# ClickFone GRAM

Landing page profissional para a plataforma **ClickFone** — Solução de Telefonia VoIP em Nuvem da Memória RAM Solutions.

## 🎯 Sobre o Projeto

ClickFone GRAM é uma landing page moderna e responsiva que apresenta a solução de PABX Virtual em Nuvem, com foco em:

- **PABX Virtual em Nuvem** — Infraestrutura escalável sem limites físicos
- **Números Únicos Nacionais** — 4004, 4003, 3003 com tarifação local
- **Inteligência Operacional** — Dashboards em tempo real e relatórios avançados
- **Mobilidade Total** — Softphone, app mobile e SIP trunks
- **Segurança Corporativa** — Criptografia, LGPD, SLA 99,5%

## 🚀 Stack Tecnológico

- **Framework**: [Next.js](https://nextjs.org/) 16+ (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Desenvolvimento Local

### Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

### Iniciar servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
pnpm dev
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador.

A página auto-atualiza ao editar arquivos em `src/`.

### Build para produção

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## 📄 Estrutura do Projeto

```
clickfone-gram/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Página inicial
│   │   ├── layout.tsx            # Layout raiz
│   │   ├── globals.css           # Estilos globais
│   │   ├── opengraph-image.tsx   # OG image para SEO
│   │   ├── robots.ts             # robots.txt
│   │   └── sitemap.ts            # Sitemap XML
│   └── components/               # Componentes reutilizáveis
│       ├── Header.tsx            # Navegação
│       ├── Hero.tsx              # Hero section
│       ├── About.tsx             # Sobre ClickFone
│       ├── Solutions.tsx         # Soluções e features
│       ├── Differentials.tsx     # Diferenciais
│       ├── Dashboard.tsx         # Mockup do painel
│       ├── SecurityChecklist.tsx # Segurança
│       ├── PricingModel.tsx      # Modelo de preços
│       ├── Coverage.tsx          # Abrangência
│       ├── ContactForm.tsx       # Formulário de contato
│       ├── CTA.tsx              # Call-to-action section
│       ├── Footer.tsx            # Rodapé
│       └── ...icons e components auxiliares
├── public/                        # Assets estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🚢 Deploy

### Vercel (Recomendado)

O projeto é configurado para deploy automático em [Vercel](https://vercel.com/).

1. Push para GitHub
2. Deploy automático no Vercel
3. Variáveis de ambiente gerenciadas no painel Vercel

URL de produção: `https://clickfone-gram.vercel.app`

### Build manual

```bash
npm run build
npm run start
```

## 🔗 Links Úteis

- **Site oficial**: [clickfone.com.br](https://clickfone.com.br)
- **Contato**: comercial@clickfone.com.br
- **Telefone**: 0800 728 5800
- **GitHub**: [marcelusgoncalves/clickfone-gram](https://github.com/marcelusgoncalves/clickfone-gram)

## 📚 Documentação

- [CLAUDE.md](./CLAUDE.md) — Instruções de desenvolvimento
- [AGENTS.md](./AGENTS.md) — Automações e agentes

## 📝 Licença

Propriedade intelectual de Memória RAM Solutions e ClickFone.
