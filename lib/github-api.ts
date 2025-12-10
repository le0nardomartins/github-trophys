// API do GitHub para buscar dados do usuário

export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubMetrics {
  commits: number;
  stars: number;
  repositories: number;
  followers: number;
  contributions: number;
  pullRequests?: number;
  issues?: number;
}

// Buscar dados básicos do usuário
export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar usuário: ${response.statusText}`);
  }

  return response.json();
}

// Buscar repositórios do usuário
export async function fetchUserRepositories(username: string): Promise<any[]> {
  const repos: any[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore && page <= 10) { // Limitar a 10 páginas para não exceder rate limit
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}&sort=updated`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      break;
    }

    const data = await response.json();

    if (data.length === 0) {
      hasMore = false;
    } else {
      repos.push(...data);
      page++;
    }
  }

  return repos;
}

// Calcular métricas do GitHub
export async function calculateGitHubMetrics(username: string): Promise<GitHubMetrics> {
  const [user, repos] = await Promise.all([
    fetchGitHubUser(username),
    fetchUserRepositories(username),
  ]);

  // Calcular total de estrelas
  const stars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);

  // Estimar commits (usando API de contribuições se possível)
  // Por limitações da API, vamos usar uma estimativa baseada nos repositórios
  const estimatedCommits = repos.length * 50; // Estimativa conservadora

  // Estimar contribuições (commits + PRs + issues)
  const estimatedContributions = estimatedCommits * 1.5;

  return {
    commits: estimatedCommits,
    stars,
    repositories: user.public_repos,
    followers: user.followers,
    contributions: Math.round(estimatedContributions),
  };
}

// Buscar contribuições do último ano (usando GitHub GraphQL API se disponível)
export async function fetchContributions(username: string): Promise<number> {
  try {
    // Tentar buscar via API de eventos públicos
    const response = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      return 0;
    }

    const events = await response.json();

    // Contar eventos de push (commits)
    const pushEvents = events.filter((event: any) => event.type === 'PushEvent');
    const commits = pushEvents.reduce((sum: number, event: any) => {
      return sum + (event.payload?.commits?.length || 0);
    }, 0);

    return commits;
  } catch (error) {
    console.error('Erro ao buscar contribuições:', error);
    return 0;
  }
}

