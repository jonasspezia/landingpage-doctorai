# CLAUDE.md - DoctorAI Landing Page

Este arquivo fornece orientações ao Claude Code para trabalhar com este projeto.

## Visão Geral

Landing page de alta conversão para o **DoctorAI**, o copiloto médico com IA da Teledoc Journey Medical.

- **Domínio de produção:** https://teledocmedical.ai
- **Objetivo:** Captura de leads médicos para demonstração do DoctorAI
- **Público-alvo:** Médicos brasileiros que buscam otimizar documentação clínica

## Stack Tecnológica

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| Next.js | 16.1.3 | Framework React com App Router |
| React | 19.2.3 | Biblioteca UI |
| TypeScript | 5.x | Tipagem estática |
| Tailwind CSS | 4.x | Estilização utility-first |
| Lucide React | 0.562.0 | Ícones SVG |

## Comandos de Desenvolvimento

```bash
# Desenvolvimento local (porta 3000)
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Verificar linting (ESLint)
npm run lint
```

## Estrutura do Projeto

```
doctorai-landing/
├── src/
│   └── app/
│       ├── layout.tsx      # Layout raiz com GTM e metadata
│       ├── page.tsx        # Página principal da landing
│       ├── globals.css     # Estilos globais Tailwind
│       └── favicon.ico
├── public/
│   └── hero-screenshot.png # Imagem OG para redes sociais
├── next.config.ts          # Configuração Next.js (standalone)
├── Dockerfile              # Build multi-stage para produção
├── docker-compose.yml      # Desenvolvimento local com Docker
├── stack-portainer.yml     # Deploy em produção via Portainer
├── tailwind.config.ts      # Configuração Tailwind (se existir)
└── tsconfig.json           # Configuração TypeScript
```

## Configuração Next.js

O arquivo `next.config.ts` está configurado para:

```typescript
const nextConfig: NextConfig = {
  output: "standalone",      // Build otimizado para Docker
  images: {
    unoptimized: true,       // Imagens sem otimização (compatibilidade)
  },
  turbopack: {
    root: __dirname,         // Fix para monorepo (evita paths aninhados)
  },
};
```

### Por que `output: "standalone"`?

O modo standalone cria um build autocontido que inclui apenas os arquivos necessários para produção, reduzindo significativamente o tamanho da imagem Docker (de ~500MB para ~150MB).

### Por que `turbopack.root`?

Em ambientes monorepo com múltiplos `package-lock.json`, o Next.js pode inferir incorretamente o diretório raiz do workspace, causando paths aninhados no build (ex: `.next/standalone/dyad-apps/cto.../server.js`). A configuração `root: __dirname` força o diretório correto.

## Deploy via Portainer

### Acesso ao Portainer

- **URL:** https://painel.teledocmedical.ai
- **Usuário:** teledocmedical
- **Senha:** Columpios123_

### Passos para Deploy

1. Acesse o Portainer
2. Vá em **Stacks** → **Add Stack**
3. Nome da stack: `doctorai-landing`
4. Cole o conteúdo de `stack-portainer.yml`
5. Clique em **Deploy the stack**

### Stack de Produção (`stack-portainer.yml`)

```yaml
version: "3.8"

services:
  doctorai-landing:
    image: ghcr.io/teledocjourney/doctorai-landing:latest
    container_name: doctorai-landing
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
    networks:
      - traefik-public
    labels:
      # Traefik config
      - "traefik.enable=true"
      - "traefik.docker.network=traefik-public"

      # HTTPS router
      - "traefik.http.routers.doctorai-landing.rule=Host(`teledocmedical.ai`) || Host(`www.teledocmedical.ai`)"
      - "traefik.http.routers.doctorai-landing.entrypoints=websecure"
      - "traefik.http.routers.doctorai-landing.tls=true"
      - "traefik.http.routers.doctorai-landing.tls.certresolver=letsencrypt"
      - "traefik.http.services.doctorai-landing.loadbalancer.server.port=3000"

      # WWW to non-WWW redirect
      - "traefik.http.middlewares.doctorai-www-redirect.redirectregex.regex=^https://www\\.teledocmedical\\.ai/(.*)"
      - "traefik.http.middlewares.doctorai-www-redirect.redirectregex.replacement=https://teledocmedical.ai/$${1}"
      - "traefik.http.middlewares.doctorai-www-redirect.redirectregex.permanent=true"
      - "traefik.http.routers.doctorai-landing.middlewares=doctorai-www-redirect"

    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

    deploy:
      mode: replicated
      replicas: 1
      resources:
        limits:
          cpus: '0.5'
          memory: 256M
        reservations:
          cpus: '0.1'
          memory: 128M

networks:
  traefik-public:
    external: true
```

## Dockerfile Multi-Stage

O Dockerfile utiliza 3 estágios para otimização:

1. **deps** - Instala dependências (node_modules)
2. **builder** - Executa o build do Next.js
3. **runner** - Imagem final mínima para produção

### Build Manual da Imagem

```bash
# Build local
docker build -t doctorai-landing:latest .

# Tag para registry
docker tag doctorai-landing:latest ghcr.io/teledocjourney/doctorai-landing:latest

# Push para GitHub Container Registry
docker push ghcr.io/teledocjourney/doctorai-landing:latest
```

## Google Tag Manager

A landing page inclui integração com GTM para analytics:

- **Variável de ambiente:** `NEXT_PUBLIC_GTM_ID`
- **Valor padrão:** `GTM-XXXXXXX` (substituir pelo ID real)
- **DataLayer inicial:**
  ```javascript
  {
    pageType: 'landing_high_conversion',
    pageName: 'DoctorAI LP',
    pageCategory: 'produto',
    product: 'DoctorAI',
    productVersion: '6.5'
  }
  ```

## SEO e Metadata

Configurado em `src/app/layout.tsx`:

- **Title:** "DoctorAI - Seu Copiloto Médico com IA | Teledoc Journey Medical"
- **Description:** "Economize 2h por dia com documentação automática..."
- **Open Graph:** Configurado para compartilhamento em redes sociais
- **Twitter Card:** summary_large_image
- **Robots:** index, follow

## Validações Realizadas

### ESLint
- **Status:** Aprovado
- **Warnings:** 3 (não críticos)
  - 2x uso de `<img>` ao invés de `<Image>` do Next.js
  - 1x variável `PRICES` definida mas não utilizada

### TypeScript
- **Status:** Aprovado
- **Erros:** 0

### Build
- **Status:** Aprovado
- **Modo:** Standalone
- **Arquivos gerados:** `.next/standalone/`, `.next/static/`

## Troubleshooting

### Erro: "Cannot find module 'server.js'"

**Causa:** Build gerou paths aninhados incorretos.

**Solução:** Adicionar `turbopack: { root: __dirname }` em `next.config.ts`

### Erro: "Docker daemon not running"

**Causa:** Docker Desktop não está iniciado.

**Solução:** Iniciar Docker Desktop ou usar deploy direto via Portainer.

### Imagem Docker muito grande (>500MB)

**Causa:** Build sem modo standalone.

**Solução:** Verificar se `output: "standalone"` está em `next.config.ts`.

## Próximos Passos

1. [ ] Configurar CI/CD no GitHub Actions para build automático
2. [ ] Adicionar ID real do GTM
3. [ ] Criar imagem de hero-screenshot.png para OG
4. [ ] Configurar DNS do domínio teledocmedical.ai

## Referências

- [Next.js Standalone Output](https://nextjs.org/docs/pages/api-reference/next-config-js/output)
- [Docker Multi-Stage Builds](https://docs.docker.com/build/building/multi-stage/)
- [Traefik Labels](https://doc.traefik.io/traefik/providers/docker/)
- [Portainer Stacks](https://docs.portainer.io/user/docker/stacks)

---

**Última atualização:** 22 de janeiro de 2026
**Autor:** Claude Code (sessão de deploy para produção)
