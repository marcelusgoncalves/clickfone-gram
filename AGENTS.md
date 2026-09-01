# Agentes & Automações para ClickFone GRAM

## Agentes Disponíveis

### 1. Designer (AI Designer)
Utilizado para criar e refinar designs visuais da landing page.

**Quando usar:**
- Criar mockups de seções
- Refinar layouts
- Revisar design do hero

### 2. Vercel Deployment Expert
Especializado em deployments na Vercel.

**Quando usar:**
- Configurar environment variables
- Troubleshoot de deployment
- Otimizar performance de build

### 3. Performance Optimizer
Otimiza Core Web Vitals e performance da página.

**Quando usar:**
- Melhorar Lighthouse scores
- Otimizar imagens
- Implementar lazy loading

## Hooks Configurados

Nenhum hook especial configurado até o momento. Faça alterações manualmente ou configure novos hooks conforme necessário.

## CI/CD

- **GitHub Actions**: Deploy automático ao fazer push em `master`
- **Vercel**: Deployment automático

## Notas

- Sempre run `npm run lint` antes de fazer commit
- Testar localmente com `npm run build` antes de fazer push

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
