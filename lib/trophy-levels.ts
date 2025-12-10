// Sistema de níveis e métricas para troféus estilo RPG

export type TrophyCategory = 
  | 'commits'
  | 'stars'
  | 'repositories'
  | 'followers'
  | 'contributions'
  | 'pull-requests'
  | 'issues'
  | 'developer-level';

export type TrophyLevel = 
  | 'novice'
  | 'apprentice'
  | 'adept'
  | 'expert'
  | 'master'
  | 'grandmaster'
  | 'legend'
  | 'mythic'
  | 'divine'
  | 'transcendent';

export interface TrophyConfig {
  category: TrophyCategory;
  level: TrophyLevel;
  threshold: number;
  color: string;
  icon: string;
  title: string;
}

// Configurações de níveis estilo RPG com mais categorias e gaps menores
export const trophyConfigs: Record<TrophyCategory, TrophyConfig[]> = {
  commits: [
    { category: 'commits', level: 'novice', threshold: 10, color: '#9e9e9e', icon: '⚔️', title: 'Novato Codificador' },
    { category: 'commits', level: 'apprentice', threshold: 50, color: '#81c784', icon: '🗡️', title: 'Aprendiz Git' },
    { category: 'commits', level: 'adept', threshold: 150, color: '#64b5f6', icon: '⚡', title: 'Adepto do Commit' },
    { category: 'commits', level: 'expert', threshold: 300, color: '#42a5f5', icon: '🔥', title: 'Expert Committer' },
    { category: 'commits', level: 'master', threshold: 600, color: '#ba68c8', icon: '👑', title: 'Mestre do Código' },
    { category: 'commits', level: 'grandmaster', threshold: 1200, color: '#ab47bc', icon: '💎', title: 'Grão-Mestre Git' },
    { category: 'commits', level: 'legend', threshold: 2500, color: '#ff9800', icon: '🌟', title: 'Lenda do Commit' },
    { category: 'commits', level: 'mythic', threshold: 5000, color: '#ff6f00', icon: '✨', title: 'Mítico Codificador' },
    { category: 'commits', level: 'divine', threshold: 10000, color: '#e53935', icon: '⚡', title: 'Divino Developer' },
    { category: 'commits', level: 'transcendent', threshold: 20000, color: '#c62828', icon: '🌌', title: 'Transcendente' },
  ],
  stars: [
    { category: 'stars', level: 'novice', threshold: 1, color: '#9e9e9e', icon: '⭐', title: 'Estrela Inicial' },
    { category: 'stars', level: 'apprentice', threshold: 5, color: '#81c784', icon: '⭐', title: 'Aprendiz Estrelado' },
    { category: 'stars', level: 'adept', threshold: 15, color: '#64b5f6', icon: '⭐', title: 'Adepto Estrelado' },
    { category: 'stars', level: 'expert', threshold: 30, color: '#42a5f5', icon: '⭐', title: 'Expert Estrelado' },
    { category: 'stars', level: 'master', threshold: 75, color: '#ba68c8', icon: '⭐', title: 'Mestre Estrelado' },
    { category: 'stars', level: 'grandmaster', threshold: 150, color: '#ab47bc', icon: '⭐', title: 'Grão-Mestre Estrelado' },
    { category: 'stars', level: 'legend', threshold: 300, color: '#ff9800', icon: '⭐', title: 'Lenda Estrelada' },
    { category: 'stars', level: 'mythic', threshold: 600, color: '#ff6f00', icon: '⭐', title: 'Mítico Estrelado' },
    { category: 'stars', level: 'divine', threshold: 1500, color: '#e53935', icon: '⭐', title: 'Divino Estrelado' },
    { category: 'stars', level: 'transcendent', threshold: 3000, color: '#c62828', icon: '⭐', title: 'Transcendente Estrelado' },
  ],
  repositories: [
    { category: 'repositories', level: 'novice', threshold: 1, color: '#9e9e9e', icon: '📦', title: 'Novato Repo' },
    { category: 'repositories', level: 'apprentice', threshold: 3, color: '#81c784', icon: '📦', title: 'Aprendiz Repo' },
    { category: 'repositories', level: 'adept', threshold: 8, color: '#64b5f6', icon: '📦', title: 'Adepto Repo' },
    { category: 'repositories', level: 'expert', threshold: 15, color: '#42a5f5', icon: '📦', title: 'Expert Repo' },
    { category: 'repositories', level: 'master', threshold: 25, color: '#ba68c8', icon: '📦', title: 'Mestre Repo' },
    { category: 'repositories', level: 'grandmaster', threshold: 40, color: '#ab47bc', icon: '📦', title: 'Grão-Mestre Repo' },
    { category: 'repositories', level: 'legend', threshold: 60, color: '#ff9800', icon: '📦', title: 'Lenda Repo' },
    { category: 'repositories', level: 'mythic', threshold: 100, color: '#ff6f00', icon: '📦', title: 'Mítico Repo' },
    { category: 'repositories', level: 'divine', threshold: 150, color: '#e53935', icon: '📦', title: 'Divino Repo' },
    { category: 'repositories', level: 'transcendent', threshold: 250, color: '#c62828', icon: '📦', title: 'Transcendente Repo' },
  ],
  followers: [
    { category: 'followers', level: 'novice', threshold: 1, color: '#9e9e9e', icon: '👥', title: 'Novato Seguido' },
    { category: 'followers', level: 'apprentice', threshold: 5, color: '#81c784', icon: '👥', title: 'Aprendiz Seguido' },
    { category: 'followers', level: 'adept', threshold: 15, color: '#64b5f6', icon: '👥', title: 'Adepto Seguido' },
    { category: 'followers', level: 'expert', threshold: 30, color: '#42a5f5', icon: '👥', title: 'Expert Seguido' },
    { category: 'followers', level: 'master', threshold: 75, color: '#ba68c8', icon: '👥', title: 'Mestre Seguido' },
    { category: 'followers', level: 'grandmaster', threshold: 150, color: '#ab47bc', icon: '👥', title: 'Grão-Mestre Seguido' },
    { category: 'followers', level: 'legend', threshold: 300, color: '#ff9800', icon: '👥', title: 'Lenda Seguida' },
    { category: 'followers', level: 'mythic', threshold: 600, color: '#ff6f00', icon: '👥', title: 'Mítico Seguido' },
    { category: 'followers', level: 'divine', threshold: 1500, color: '#e53935', icon: '👥', title: 'Divino Seguido' },
    { category: 'followers', level: 'transcendent', threshold: 3000, color: '#c62828', icon: '👥', title: 'Transcendente Seguido' },
  ],
  contributions: [
    { category: 'contributions', level: 'novice', threshold: 10, color: '#9e9e9e', icon: '🔥', title: 'Novato Contribuidor' },
    { category: 'contributions', level: 'apprentice', threshold: 50, color: '#81c784', icon: '🔥', title: 'Aprendiz Contribuidor' },
    { category: 'contributions', level: 'adept', threshold: 150, color: '#64b5f6', icon: '🔥', title: 'Adepto Contribuidor' },
    { category: 'contributions', level: 'expert', threshold: 300, color: '#42a5f5', icon: '🔥', title: 'Expert Contribuidor' },
    { category: 'contributions', level: 'master', threshold: 600, color: '#ba68c8', icon: '🔥', title: 'Mestre Contribuidor' },
    { category: 'contributions', level: 'grandmaster', threshold: 1000, color: '#ab47bc', icon: '🔥', title: 'Grão-Mestre Contribuidor' },
    { category: 'contributions', level: 'legend', threshold: 2000, color: '#ff9800', icon: '🔥', title: 'Lenda Contribuidora' },
    { category: 'contributions', level: 'mythic', threshold: 4000, color: '#ff6f00', icon: '🔥', title: 'Mítico Contribuidor' },
    { category: 'contributions', level: 'divine', threshold: 8000, color: '#e53935', icon: '🔥', title: 'Divino Contribuidor' },
    { category: 'contributions', level: 'transcendent', threshold: 15000, color: '#c62828', icon: '🔥', title: 'Transcendente Contribuidor' },
  ],
  'pull-requests': [
    { category: 'pull-requests', level: 'novice', threshold: 1, color: '#9e9e9e', icon: '🔀', title: 'Novato PR' },
    { category: 'pull-requests', level: 'apprentice', threshold: 5, color: '#81c784', icon: '🔀', title: 'Aprendiz PR' },
    { category: 'pull-requests', level: 'adept', threshold: 15, color: '#64b5f6', icon: '🔀', title: 'Adepto PR' },
    { category: 'pull-requests', level: 'expert', threshold: 30, color: '#42a5f5', icon: '🔀', title: 'Expert PR' },
    { category: 'pull-requests', level: 'master', threshold: 75, color: '#ba68c8', icon: '🔀', title: 'Mestre PR' },
    { category: 'pull-requests', level: 'grandmaster', threshold: 150, color: '#ab47bc', icon: '🔀', title: 'Grão-Mestre PR' },
    { category: 'pull-requests', level: 'legend', threshold: 300, color: '#ff9800', icon: '🔀', title: 'Lenda PR' },
    { category: 'pull-requests', level: 'mythic', threshold: 600, color: '#ff6f00', icon: '🔀', title: 'Mítico PR' },
    { category: 'pull-requests', level: 'divine', threshold: 1200, color: '#e53935', icon: '🔀', title: 'Divino PR' },
    { category: 'pull-requests', level: 'transcendent', threshold: 2500, color: '#c62828', icon: '🔀', title: 'Transcendente PR' },
  ],
  issues: [
    { category: 'issues', level: 'novice', threshold: 1, color: '#9e9e9e', icon: '🐛', title: 'Novato Issue' },
    { category: 'issues', level: 'apprentice', threshold: 5, color: '#81c784', icon: '🐛', title: 'Aprendiz Issue' },
    { category: 'issues', level: 'adept', threshold: 15, color: '#64b5f6', icon: '🐛', title: 'Adepto Issue' },
    { category: 'issues', level: 'expert', threshold: 30, color: '#42a5f5', icon: '🐛', title: 'Expert Issue' },
    { category: 'issues', level: 'master', threshold: 75, color: '#ba68c8', icon: '🐛', title: 'Mestre Issue' },
    { category: 'issues', level: 'grandmaster', threshold: 150, color: '#ab47bc', icon: '🐛', title: 'Grão-Mestre Issue' },
    { category: 'issues', level: 'legend', threshold: 300, color: '#ff9800', icon: '🐛', title: 'Lenda Issue' },
    { category: 'issues', level: 'mythic', threshold: 600, color: '#ff6f00', icon: '🐛', title: 'Mítico Issue' },
    { category: 'issues', level: 'divine', threshold: 1200, color: '#e53935', icon: '🐛', title: 'Divino Issue' },
    { category: 'issues', level: 'transcendent', threshold: 2500, color: '#c62828', icon: '🐛', title: 'Transcendente Issue' },
  ],
  'developer-level': [
    { category: 'developer-level', level: 'novice', threshold: 0, color: '#9e9e9e', icon: '💻', title: 'Novato Dev' },
    { category: 'developer-level', level: 'apprentice', threshold: 100, color: '#81c784', icon: '💻', title: 'Aprendiz Dev' },
    { category: 'developer-level', level: 'adept', threshold: 300, color: '#64b5f6', icon: '💻', title: 'Adepto Dev' },
    { category: 'developer-level', level: 'expert', threshold: 600, color: '#42a5f5', icon: '💻', title: 'Expert Dev' },
    { category: 'developer-level', level: 'master', threshold: 1200, color: '#ba68c8', icon: '💻', title: 'Mestre Dev' },
    { category: 'developer-level', level: 'grandmaster', threshold: 2500, color: '#ab47bc', icon: '💻', title: 'Grão-Mestre Dev' },
    { category: 'developer-level', level: 'legend', threshold: 5000, color: '#ff9800', icon: '💻', title: 'Lenda Dev' },
    { category: 'developer-level', level: 'mythic', threshold: 10000, color: '#ff6f00', icon: '💻', title: 'Mítico Dev' },
    { category: 'developer-level', level: 'divine', threshold: 20000, color: '#e53935', icon: '💻', title: 'Divino Dev' },
    { category: 'developer-level', level: 'transcendent', threshold: 40000, color: '#c62828', icon: '💻', title: 'Transcendente Dev' },
  ],
};

// Calcular o nível baseado no valor
export function calculateTrophyLevel(
  category: TrophyCategory,
  value: number
): TrophyConfig | null {
  const configs = trophyConfigs[category];

  // Encontrar o maior nível alcançado
  let achieved: TrophyConfig | null = null;

  for (const config of configs) {
    if (value >= config.threshold) {
      achieved = config;
    } else {
      break;
    }
  }

  return achieved;
}

// Calcular nível geral do desenvolvedor baseado em múltiplas métricas
export function calculateDeveloperLevel(metrics: {
  commits: number;
  stars: number;
  repositories: number;
  followers: number;
  contributions: number;
}): TrophyConfig {
  // Pontuação ponderada
  const score =
    metrics.commits * 1 +
    metrics.stars * 2 +
    metrics.repositories * 10 +
    metrics.followers * 5 +
    metrics.contributions * 1;

  return calculateTrophyLevel('developer-level', score) || trophyConfigs['developer-level'][0];
}

// Obter todos os troféus alcançados
export function getAllAchievedTrophies(metrics: {
  commits: number;
  stars: number;
  repositories: number;
  followers: number;
  contributions: number;
  pullRequests?: number;
  issues?: number;
}): TrophyConfig[] {
  const trophies: TrophyConfig[] = [];

  trophies.push(calculateTrophyLevel('commits', metrics.commits) || trophyConfigs.commits[0]);
  trophies.push(calculateTrophyLevel('stars', metrics.stars) || trophyConfigs.stars[0]);
  trophies.push(calculateTrophyLevel('repositories', metrics.repositories) || trophyConfigs.repositories[0]);
  trophies.push(calculateTrophyLevel('followers', metrics.followers) || trophyConfigs.followers[0]);
  trophies.push(calculateTrophyLevel('contributions', metrics.contributions) || trophyConfigs.contributions[0]);

  if (metrics.pullRequests !== undefined) {
    trophies.push(calculateTrophyLevel('pull-requests', metrics.pullRequests) || trophyConfigs['pull-requests'][0]);
  }

  if (metrics.issues !== undefined) {
    trophies.push(calculateTrophyLevel('issues', metrics.issues) || trophyConfigs.issues[0]);
  }

  // Nível geral do desenvolvedor
  trophies.push(calculateDeveloperLevel(metrics));

  return trophies;
}
