# 🏆 GitHub Trophys

<div align="center">

**Sistema de troféus personalizado e open-source para perfis do GitHub**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/le0nardomartins/github-trophys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

---

## 📖 Sobre o Projeto

GitHub Trophys é uma aplicação open-source que gera troféus SVG personalizados baseados nas atividades e métricas do GitHub. Diferente de outros sistemas que frequentemente saem do ar, este projeto permite que você hospede sua própria instância e tenha controle total sobre seus troféus.

### ✨ Características Principais

- 🎯 **8 Categorias de Troféus**: Commits, Stars, Repositórios, Seguidores, Contribuições, Pull Requests, Issues e Nível do Desenvolvedor
- 📊 **6 Níveis de Dificuldade**: Basic → Intermediate → Advanced → Expert → Master → Legendary
- 🎨 **Design Moderno**: SVGs com gradientes, sombras e ícones personalizados
- 🚀 **Fácil Integração**: Adicione uma única linha no seu README
- ⚡ **API RESTful**: Endpoints completos para integração
- 📱 **Interface Web**: Visualize seus troféus antes de adicionar ao README
- 🔒 **Open Source**: Use, modifique e contribua livremente
- 🌐 **Multi-usuário**: Qualquer pessoa pode usar sua instância

---

## 🚀 Instalação Rápida

### Passo 1: Clone e Instale

```bash
git clone https://github.com/le0nardomartins/github-trophys.git
cd github-trophys
npm install
```

### Passo 2: Teste Localmente (Opcional)

```bash
npm run dev
```

Acesse `http://localhost:3000` no seu navegador para testar localmente.

### Passo 3: Deploy na Vercel

**Opção A: Via Interface Web (Recomendado)**

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Importe seu repositório
5. A Vercel detectará automaticamente o Next.js
6. Clique em "Deploy"
7. Aguarde alguns minutos e sua aplicação estará no ar!

**Opção B: Via CLI**

```bash
npm i -g vercel
vercel
```

### Passo 4: Obtenha sua URL

Após o deploy, você receberá uma URL como:
```
https://github-trophys-abc123.vercel.app
```

**Pronto!** Sua instância está funcionando e qualquer pessoa pode usar.

---

## 📝 Como Usar no seu README

### Uso Básico

Adicione esta linha no seu `README.md`:

```markdown
![GitHub Trophys](https://sua-url.vercel.app/api/trophy/SEU_USERNAME/svg)
```

**Exemplo real:**
```markdown
![GitHub Trophys](https://github-trophys.vercel.app/api/trophy/octocat/svg)
```

### Personalização

#### Exibir apenas o nível do desenvolvedor

```markdown
![GitHub Trophys](https://sua-url.vercel.app/api/trophy/SEU_USERNAME/svg?format=single)
```

#### Exibir troféu de categoria específica

```markdown
![GitHub Trophys](https://sua-url.vercel.app/api/trophy/SEU_USERNAME/svg?category=commits)
```

**Categorias disponíveis:**
- `commits` - Troféus de commits
- `stars` - Troféus de estrelas recebidas
- `repositories` - Troféus de repositórios criados
- `followers` - Troféus de seguidores
- `contributions` - Troféus de contribuições
- `developer-level` - Nível geral do desenvolvedor

#### Combinar com outras badges

```markdown
# Meu Perfil

![GitHub Trophys](https://sua-url.vercel.app/api/trophy/SEU_USERNAME/svg)

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=SEU_USERNAME)
```

---

## 💡 Exemplos de Uso

### Exemplo 1: README Básico

```markdown
# João Silva

Desenvolvedor Full Stack

## 🏆 Troféus GitHub

![GitHub Trophys](https://sua-url.vercel.app/api/trophy/joaosilva/svg)
```

### Exemplo 2: README Completo

```markdown
# Maria Santos

💻 Desenvolvedora | 🌐 Open Source Enthusiast

## 🏆 Troféus GitHub

![GitHub Trophys](https://sua-url.vercel.app/api/trophy/mariasantos/svg)

## 📊 Estatísticas

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=mariasantos&show_icons=true)
```

### Exemplo 3: Troféu Específico

```markdown
## Meu Nível de Desenvolvedor

![Dev Level](https://sua-url.vercel.app/api/trophy/meuusuario/svg?format=single&category=developer-level)
```

### Exemplo 4: Múltiplos Troféus

```markdown
## Minhas Conquistas

**Commits:**
![Commits](https://sua-url.vercel.app/api/trophy/meuusuario/svg?format=single&category=commits)

**Stars:**
![Stars](https://sua-url.vercel.app/api/trophy/meuusuario/svg?format=single&category=stars)
```

### Exemplo 5: Layout em Grid

```markdown
## 🏆 Conquistas GitHub

<table>
  <tr>
    <td align="center">
      <strong>Nível Geral</strong><br/>
      <img src="https://sua-url.vercel.app/api/trophy/usuario/svg?format=single&category=developer-level" alt="Dev Level"/>
    </td>
    <td align="center">
      <strong>Commits</strong><br/>
      <img src="https://sua-url.vercel.app/api/trophy/usuario/svg?format=single&category=commits" alt="Commits"/>
    </td>
    <td align="center">
      <strong>Stars</strong><br/>
      <img src="https://sua-url.vercel.app/api/trophy/usuario/svg?format=single&category=stars" alt="Stars"/>
    </td>
  </tr>
</table>
```

---

## 🔌 API Endpoints

### Base URL

```
https://sua-url.vercel.app
```

### 1. GET `/api/trophy/[username]`

Retorna dados JSON com métricas e troféus do usuário.

**Endpoint:**
```
GET /api/trophy/{username}
```

**Exemplo de Requisição:**
```bash
curl https://sua-url.vercel.app/api/trophy/octocat
```

**Exemplo de Resposta:**
```json
{
  "username": "octocat",
  "metrics": {
    "commits": 1250,
    "stars": 350,
    "repositories": 45,
    "followers": 120,
    "contributions": 1875
  },
  "trophies": [
    {
      "category": "commits",
      "level": "advanced",
      "title": "Committer Avançado",
      "icon": "📝",
      "color": "#2196f3",
      "threshold": 1000
    },
    {
      "category": "developer-level",
      "level": "intermediate",
      "title": "Dev Intermediário",
      "icon": "💻",
      "color": "#4caf50",
      "threshold": 500
    }
  ]
}
```

### 2. GET `/api/trophy/[username]/svg`

Retorna SVG dos troféus (para usar em imagens).

**Endpoint:**
```
GET /api/trophy/{username}/svg
```

**Parâmetros de Query:**

| Parâmetro | Tipo | Padrão | Descrição |
|-----------|------|--------|-----------|
| `format` | string | `row` | Formato: `row` (todos) ou `single` (apenas nível dev) |
| `category` | string | - | Filtrar por categoria específica |

**Exemplos:**

```bash
# Todos os troféus em linha
curl https://sua-url.vercel.app/api/trophy/octocat/svg

# Apenas nível do desenvolvedor
curl https://sua-url.vercel.app/api/trophy/octocat/svg?format=single

# Troféu de commits apenas
curl https://sua-url.vercel.app/api/trophy/octocat/svg?category=commits

# Troféu único de stars
curl https://sua-url.vercel.app/api/trophy/octocat/svg?format=single&category=stars
```

**Resposta:**
Retorna um arquivo SVG que pode ser usado diretamente como imagem.

---

## 🎯 Sistema de Níveis

### Commits 📝

| Nível | Threshold | Cor |
|-------|-----------|-----|
| Basic | 100+ commits | Cinza |
| Intermediate | 500+ commits | Verde |
| Advanced | 1000+ commits | Azul |
| Expert | 2500+ commits | Roxo |
| Master | 5000+ commits | Laranja |
| Legendary | 10000+ commits | Vermelho |

### Stars ⭐

| Nível | Threshold | Cor |
|-------|-----------|-----|
| Basic | 10+ stars | Cinza |
| Intermediate | 50+ stars | Verde |
| Advanced | 100+ stars | Azul |
| Expert | 500+ stars | Roxo |
| Master | 1000+ stars | Laranja |
| Legendary | 5000+ stars | Vermelho |

### Repositories 📦

| Nível | Threshold | Cor |
|-------|-----------|-----|
| Basic | 5+ repos | Cinza |
| Intermediate | 15+ repos | Verde |
| Advanced | 30+ repos | Azul |
| Expert | 50+ repos | Roxo |
| Master | 100+ repos | Laranja |
| Legendary | 200+ repos | Vermelho |

### Followers 👥

| Nível | Threshold | Cor |
|-------|-----------|-----|
| Basic | 10+ seguidores | Cinza |
| Intermediate | 50+ seguidores | Verde |
| Advanced | 100+ seguidores | Azul |
| Expert | 500+ seguidores | Roxo |
| Master | 1000+ seguidores | Laranja |
| Legendary | 5000+ seguidores | Vermelho |

### Contributions 🔥

| Nível | Threshold | Cor |
|-------|-----------|-----|
| Basic | 100+ contribuições | Cinza |
| Intermediate | 500+ contribuições | Verde |
| Advanced | 1000+ contribuições | Azul |
| Expert | 2000+ contribuições | Roxo |
| Master | 3000+ contribuições | Laranja |
| Legendary | 5000+ contribuições | Vermelho |

### Developer Level 💻

O nível do desenvolvedor é calculado com base em uma pontuação ponderada:
- Commits × 1
- Stars × 2
- Repositórios × 10
- Seguidores × 5
- Contribuições × 1

| Nível | Pontuação Mínima |
|-------|------------------|
| Basic | 0+ |
| Intermediate | 500+ |
| Advanced | 1500+ |
| Expert | 3000+ |
| Master | 6000+ |
| Legendary | 12000+ |

---

## 🌐 Usando Instâncias Públicas

Este projeto é open-source e qualquer pessoa pode fazer deploy de sua própria instância. Se você encontrar uma instância pública hospedada por outro desenvolvedor, pode usá-la livremente!

**Como usar uma instância pública:**

1. Encontre a URL da instância (ex: `https://github-trophys-abc.vercel.app`)
2. Use no seu README:

```markdown
![GitHub Trophys](https://github-trophys-abc.vercel.app/api/trophy/SEU_USERNAME/svg)
```

**⚠️ Importante:** 
- Instâncias públicas podem ter limites de rate da GitHub API
- Podem não estar sempre disponíveis
- Para uso em produção confiável, recomendamos fazer seu próprio deploy (é gratuito e leva menos de 5 minutos!)

**💡 Dica:** Se você fez deploy de uma instância pública e quer compartilhar, adicione uma seção no README com a URL para que outros possam usar!

---

## 🛠️ Desenvolvimento

### Estrutura do Projeto

```
github-trophys/
├── app/
│   ├── api/
│   │   └── trophy/
│   │       └── [username]/
│   │           ├── route.ts          # API JSON
│   │           └── svg/
│   │               └── route.ts      # API SVG
│   ├── page.tsx                       # Interface web
│   └── layout.tsx                     # Layout principal
├── components/
│   └── TrophySVG.tsx                  # Componentes SVG
├── lib/
│   ├── github-api.ts                  # Integração GitHub API
│   └── trophy-levels.ts               # Sistema de níveis
└── README.md
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint
```

### Customização

Você pode personalizar os níveis e cores editando `lib/trophy-levels.ts`:

```typescript
export const trophyConfigs: Record<TrophyCategory, TrophyConfig[]> = {
  commits: [
    { category: 'commits', level: 'basic', threshold: 100, color: '#9e9e9e', ... },
    // Adicione seus próprios níveis aqui
  ],
  // ...
};
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# URL da aplicação (opcional)
NEXT_PUBLIC_APP_URL=https://github-trophys-abc.vercel.app

# Token GitHub (opcional - aumenta rate limit de 60 para 5000 req/hora)
GITHUB_TOKEN=ghp_seu_token_aqui
```

**Como gerar um token GitHub:**

1. Acesse [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Clique em "Generate new token (classic)"
3. Dê um nome descritivo
4. Clique em "Generate token"
5. Copie o token e cole no `.env.local`

**⚠️ Segurança:** Nunca commite o token no Git. O arquivo `.env.local` está no `.gitignore`.

**Na Vercel:** Adicione as variáveis em Settings > Environment Variables.

---

## ❓ FAQ

### P: Posso usar sem fazer deploy próprio?

R: Sim! Você pode usar instâncias públicas ou fazer fork e deploy na Vercel gratuitamente.

### P: Os dados são atualizados em tempo real?

R: Os dados são buscados da GitHub API a cada requisição. O SVG é cacheado por 1 hora para melhor performance.

### P: Há limite de requisições?

R: A GitHub API tem limite de 60 requisições/hora para IPs não autenticados. Para uso intenso, você pode:
- Configurar um token GitHub (aumenta para 5000 req/hora)
- Fazer deploy próprio (cada instância tem seu próprio rate limit)
- Usar cache (os SVGs são cacheados por 1 hora)

### P: Posso adicionar novos tipos de troféus?

R: Sim! O código é open-source. Você pode modificar `lib/trophy-levels.ts` para adicionar novas categorias.

### P: Funciona com organizações do GitHub?

R: Atualmente funciona apenas com usuários individuais. Suporte para organizações pode ser adicionado no futuro.

### P: Os troféus aparecem no perfil do GitHub?

R: Sim! Eles aparecem no seu README, que é exibido automaticamente no seu perfil do GitHub quando você tem um repositório com o mesmo nome do seu username (ex: `github.com/seu-usuario/seu-usuario`).

### P: Outras pessoas podem usar minha instância?

R: Sim! Qualquer pessoa pode usar sua instância pública. Basta compartilhar a URL. Isso é encorajado e faz parte do espírito open-source!

---

## 🐛 Troubleshooting

### Erro: "Username é obrigatório"

- Verifique se o username está correto na URL
- Certifique-se de que o username existe no GitHub

### Erro: "Erro ao buscar dados do GitHub"

- Pode ser rate limit da GitHub API. Aguarde alguns minutos
- Verifique sua conexão com a internet
- Verifique se o username está correto

### Troféus não aparecem no README

- Verifique se a URL está correta
- Certifique-se de que o deploy foi concluído
- Tente acessar a URL diretamente no navegador

### SVG não carrega

- Verifique se o formato da URL está correto
- Limpe o cache do navegador
- Verifique os logs da Vercel para erros

### Token não está funcionando

- Verifique se o token está correto
- Certifique-se de que adicionou na Vercel (Settings > Environment Variables)
- Faça um novo deploy após adicionar variáveis

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Este projeto é open-source e foi feito para a comunidade.

### Como Contribuir

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código

- Use TypeScript
- Siga o estilo de código existente
- Adicione comentários para código complexo
- Mantenha funções pequenas e focadas
- Use nomes descritivos para variáveis e funções

### Mensagens de Commit

Use mensagens descritivas seguindo o padrão:
- `feat:` para novas features
- `fix:` para correções de bugs
- `docs:` para documentação
- `style:` para formatação
- `refactor:` para refatoração
- `test:` para testes

### Ideias de Contribuições

- ✨ Novas categorias de troféus
- 🎨 Melhorias no design dos SVGs
- 📊 Novas métricas e estatísticas
- 🌐 Suporte para organizações
- 🔐 Autenticação com GitHub token
- 📱 Interface mobile melhorada
- 🌍 Traduções para outros idiomas
- 🧪 Testes automatizados

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🙏 Agradecimentos

- GitHub pela API incrível
- Vercel pelo hosting gratuito
- Comunidade open-source por toda inspiração

---

<div align="center">

**Feito com ❤️ para a comunidade GitHub**

[⭐ Dê uma estrela](https://github.com/le0nardomartins/github-trophys) • [🐛 Reportar Bug](https://github.com/le0nardomartins/github-trophys/issues) • [💡 Sugerir Feature](https://github.com/le0nardomartins/github-trophys/issues)

</div>
