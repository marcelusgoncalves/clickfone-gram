# ClickFone GRAM - Plataforma de Telefonia em Nuvem

## Projeto
**clickfone-gram** é um site landing page para o serviço **ClickFone** da **Memória RAM Solutions**, oferecendo solução de PABX virtual em nuvem com números únicos nacionais.

## Stack Tecnológico
- **Framework**: Next.js 16+ (App Router)
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Diretório de código**: `/src`
- **Alias de importação**: `@/*`

## Estrutura do Projeto
```
clickfone-gram/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Página inicial
│   │   ├── layout.tsx        # Layout raiz
│   │   └── globals.css       # Estilos globais
│   └── components/           # Componentes reutilizáveis
├── public/                   # Arquivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── .eslintrc.json
```

## Desenvolvimento

### Iniciar servidor
```bash
npm run dev
```
Servidor rodando em: **http://localhost:3000**

### Construir para produção
```bash
npm run build
npm run start
```

### Lint
```bash
npm run lint
```

## Página Inicial
Localização: `src/app/page.tsx`

Componentes:
- **Hero Section**: "Telefonia em nuvem. Performance. Controle. Inteligência."
- **Valor proposição**: PABX Virtual, números únicos nacionais (4004), relatórios em tempo real
- **CTA**: Botão "Solicitar demonstração" ou "Fale com um especialista"

Cores: Slate/Dark (baseado no design do ClickFone)
Design: Moderno, responsivo, inspirado nos mockups do ChatGPT

## Próximas Implementações
- [ ] Header com navegação (Home, Produtos, Planos, Clientes, Contato)
- [ ] Hero section com animações
- [ ] Seção de Features/Benefícios (PABX, URA, Relatórios, Segurança)
- [ ] Seção de Planos (Avançado, Enterprise, Ilimitado)
- [ ] Seção de Clientes/Cases
- [ ] Formulário de Contato
- [ ] Footer com links
- [ ] Responsive design completo
- [ ] Otimizações de SEO e performance

## Deploy
- Automaticamente deployado em Vercel ao fazer push em `master`
- Variáveis de ambiente definidas no Vercel

## Notas
- Hot-reload ativado em desenvolvimento
- Tailwind CSS configurado com theme escuro (inspirado nos mockups ClickFone)
- TypeScript strict mode habilitado
- Sempre fazer deploy após merge com `npm run deploy`
