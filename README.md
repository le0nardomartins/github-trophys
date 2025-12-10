# 🏆 GitHub Trophys

<div align="center">

**Sistema de troféus personalizado para perfis do GitHub**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Serviço público e gratuito - Use diretamente no seu README!**

</div>

---

## 📖 Sobre

GitHub Trophys é um serviço público que gera troféus SVG personalizados baseados nas atividades e métricas do GitHub. Adicione troféus ao seu perfil do GitHub de forma simples e rápida!

### ✨ Características

- 🎯 **8 Categorias de Troféus**: Commits, Stars, Repositórios, Seguidores, Contribuições, Pull Requests, Issues e Nível do Desenvolvedor
- 📊 **6 Níveis de Dificuldade**: Basic → Intermediate → Advanced → Expert → Master → Legendary
- 🎨 **Design Moderno**: SVGs com gradientes, sombras e ícones personalizados
- 🚀 **Fácil Integração**: Adicione uma única linha no seu README
- ⚡ **API RESTful**: Endpoints completos para integração
- 🌐 **100% Gratuito**: Serviço público disponível para todos

---

## 🚀 Como Usar

### Uso Básico

Adicione esta linha no seu `README.md`:

```markdown
![GitHub Trophys](https://github-trophys.vercel.app/api/trophy/SEU_USERNAME/svg)
```

**Exemplo real:**
```markdown
![GitHub Trophys](https://github-trophys.vercel.app/api/trophy/le0nardomartins/svg)
```

### Personalização

#### Exibir apenas o nível do desenvolvedor

```markdown
![GitHub Trophys](https://github-trophys.vercel.app/api/trophy/SEU_USERNAME/svg?format=single)
```

#### Exibir troféu de categoria específica

```markdown
![GitHub Trophys](https://github-trophys.vercel.app/api/trophy/SEU_USERNAME/svg?category=commits)
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

![GitHub Trophys](https://github-trophys.vercel.app/api/trophy/SEU_USERNAME/svg)

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=SEU_USERNAME)
```

---

## 💡 Exemplos de Uso

### Exemplo 1: README Básico

```markdown
# João Silva

Desenvolvedor Full Stack

## 🏆 Troféus GitHub

![GitHub Trophys](https://github-trophys.vercel.app/api/trophy/joaosilva/svg)
```

### Exemplo 2: README Completo

```markdown
# Maria Santos

💻 Desenvolvedora | 🌐 Open Source Enthusiast

## 🏆 Troféus GitHub

![GitHub Trophys](https://github-trophys.vercel.app/api/trophy/mariasantos/svg)

## 📊 Estatísticas

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=mariasantos&show_icons=true)
```

### Exemplo 3: Troféu Específico

```markdown
## Meu Nível de Desenvolvedor

![Dev Level](https://github-trophys.vercel.app/api/trophy/meuusuario/svg?format=single&category=developer-level)
```

### Exemplo 4: Múltiplos Troféus

```markdown
## Minhas Conquistas

**Commits:**
![Commits](https://github-trophys.vercel.app/api/trophy/meuusuario/svg?format=single&category=commits)

**Stars:**
![Stars](https://github-trophys.vercel.app/api/trophy/meuusuario/svg?format=single&category=stars)
```

### Exemplo 5: Layout em Grid

```markdown
## 🏆 Conquistas GitHub

<table>
  <tr>
    <td align="center">
      <strong>Nível Geral</strong><br/>
      <img src="https://github-trophys.vercel.app/api/trophy/usuario/svg?format=single&category=developer-level" alt="Dev Level"/>
    </td>
    <td align="center">
      <strong>Commits</strong><br/>
      <img src="https://github-trophys.vercel.app/api/trophy/usuario/svg?format=single&category=commits" alt="Commits"/>
    </td>
    <td align="center">
      <strong>Stars</strong><br/>
      <img src="https://github-trophys.vercel.app/api/trophy/usuario/svg?format=single&category=stars" alt="Stars"/>
    </td>
  </tr>
</table>
```

---

## 🔌 API Endpoints

### Base URL

```
https://github-trophys.vercel.app
```

### 1. GET `/api/trophy/[username]`

Retorna dados JSON com métricas e troféus do usuário.

**Endpoint:**
```
GET /api/trophy/{username}
```

**Exemplo de Requisição:**
```bash
curl https://github-trophys.vercel.app/api/trophy/le0nardomartins
```

**Exemplo de Resposta:**
```json
{
  "username": "le0nardomartins",
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
curl https://github-trophys.vercel.app/api/trophy/le0nardomartins/svg

# Apenas nível do desenvolvedor
curl https://github-trophys.vercel.app/api/trophy/le0nardomartins/svg?format=single

# Troféu de commits apenas
curl https://github-trophys.vercel.app/api/trophy/le0nardomartins/svg?category=commits

# Troféu único de stars
curl https://github-trophys.vercel.app/api/trophy/le0nardomartins/svg?format=single&category=stars
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

## ❓ FAQ

### P: Como uso os troféus?

R: Basta adicionar a linha de código no seu README.md substituindo `SEU_USERNAME` pelo seu username do GitHub. Veja a seção [Como Usar](#-como-usar) acima.

### P: Os dados são atualizados em tempo real?

R: Os dados são buscados da GitHub API a cada requisição. O SVG é cacheado por 1 hora para melhor performance.

### P: Há limite de requisições?

R: O serviço usa a GitHub API que tem limite de 60 requisições/hora por IP. Os SVGs são cacheados por 1 hora para reduzir chamadas à API.

### P: É gratuito?

R: Sim! Este é um serviço público e totalmente gratuito para todos.

### P: Funciona com organizações do GitHub?

R: Atualmente funciona apenas com usuários individuais. Suporte para organizações pode ser adicionado no futuro.

### P: Os troféus aparecem no perfil do GitHub?

R: Sim! Eles aparecem no seu README, que é exibido automaticamente no seu perfil do GitHub quando você tem um repositório com o mesmo nome do seu username (ex: `github.com/le0nardomartins/le0nardomartins`).

### P: Posso usar em múltiplos repositórios?

R: Sim! Você pode usar os troféus em qualquer README.md de qualquer repositório.

---

## 🐛 Troubleshooting

### Troféus não aparecem no README

- Verifique se o username está correto na URL
- Certifique-se de que o username existe no GitHub
- Tente acessar a URL diretamente no navegador: `https://github-trophys.vercel.app/api/trophy/SEU_USERNAME/svg`

### Erro ao carregar

- Pode ser rate limit da GitHub API. Aguarde alguns minutos e tente novamente
- Verifique sua conexão com a internet
- Verifique se o username está correto

### SVG não carrega

- Verifique se o formato da URL está correto
- Limpe o cache do navegador
- Tente acessar a URL diretamente no navegador

---

## 🤝 Contribuindo

Este projeto é open-source! Contribuições são muito bem-vindas.

### Como Contribuir

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Ideias de Contribuições

- ✨ Novas categorias de troféus
- 🎨 Melhorias no design dos SVGs
- 📊 Novas métricas e estatísticas
- 🌐 Suporte para organizações
- 📱 Melhorias na interface web
- 🌍 Traduções para outros idiomas

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
