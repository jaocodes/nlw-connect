# Backend de Inscrições para Eventos

Serviço backend para gerenciamento de inscrições em eventos com sistema de
tracking de indicações e ranking. Desenvolvido com Node.js, TypeScript e
tecnologias modernas.

## Funcionalidades Principais ✨

- Gerenciamento de inscrições de usuários
- Sistema de tracking de links de indicação
- Ranking em tempo real dos melhores indicadores
- API REST com documentação OpenAPI completa
- Sistema de validação de variáveis de ambiente
- Análises de dados com Redis

## Tecnologias Utilizadas 🛠️

**Stack Principal**

- 🚀 Fastify - Framework web de alta performance
- 🔒 Zod - Validação de schemas e integração com TypeScript
- 🗄️ Drizzle ORM - Interações type-safe com o banco de dados
- 🐘 PostgreSQL - Armazenamento de dados relacional
- 🔥 Redis - Métricas e ranking em tempo real
- 📦 tsup - Bundler para TypeScript

**Ferramentas de Apoio**

- Biome - Formatação e linting de código
- Docker - Infraestrutura containerizada
- Swagger - Documentação da API
- ioredis - Client Redis

## Requisitos Funcionais ✅

1. Sistema de Inscrições
   - Registrar novos inscritos
   - Rastrear fontes de indicação
   - Prevenir registros duplicados

2. Tracking de Indicações
   - Geração de links de indicação únicos
   - Contagem de cliques
   - Sistema de atribuição de indicações

3. Análises e Ranking
   - Leaderboard de indicações em tempo real
   - Métricas individuais de performance
   - Acompanhamento de posição no ranking

## Requisitos Não Funcionais 🛡️

- Validação de ambiente no startup
- CORS restrito a origens específicas
- Endpoints da API type-safe
- Infraestrutura de banco de dados containerizada
- Documentação da API gerada automaticamente
- Padrões rígidos de qualidade de código (Biome)

## Como Executar o Projeto 🚀

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- PostgreSQL 15+
- Redis 7+

### Instalação

1. Clone o repositório

```bash
git clone https://github.com/jaocodes/nlw-connect.git
```

1. Instale as dependências

```bash
npm install
```

1. Configure o ambiente

```bash
cp .env.example .env
# Atualize os valores no .env
```

1. Inicie a infraestrutura

```bash
docker compose up -d
```

### Executando a Aplicação

**Modo Desenvolvimento**

```bash
npm run dev
```

**Build de Produção**

```bash
npm run build && npm start
```

## Documentação da API 📖

Documentação interativa disponível em:

```
http://localhost:3333/docs
```

Inclui:

- Documentação de todos os endpoints
- Definições de schemas
- Exemplos de requests/responses
- Capacidade de testar diretamente

## Práticas de Desenvolvimento 🧑💻

### Qualidade de Código

- Biome para linting/formatação:
  ```bash
  npm run lint
  npm run format
  ```

### Gerenciamento do Banco de Dados

- Definições de schema com Drizzle ORM
- Queries SQL type-safe
- Suporte a migrações de banco de dados

### Detalhes Importantes da Implementação

**Fluxo de Dados**

1. Criação de inscrição
2. Tracking de indicação (Redis)
3. Atualizações de ranking (Sorted Sets)
4. Consultas de análises

**Estrutura do Redis**

- `referral:acess-count`: Hash com contagem de cliques por inscrito
- `referral:ranking`: Sorted Set para posições no leaderboard
