// Sistema de níveis e métricas para troféus

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
  | 'basic'
  | 'intermediate'
  | 'advanced'
  | 'expert'
  | 'master'
  | 'legendary';

export interface TrophyConfig {
  category: TrophyCategory;
  level: TrophyLevel;
  threshold: number;
  color: string;
  icon: string;
  title: string;
}

// Configurações de níveis para cada categoria
export const trophyConfigs: Record<TrophyCategory, TrophyConfig[]> = {
  commits: [
    { category: 'commits', level: 'basic', threshold: 100, color: '#9e9e9e', icon: '📝', title: 'Committer Básico' },
    { category: 'commits', level: 'intermediate', threshold: 500, color: '#4caf50', icon: '📝', title: 'Committer Intermediário' },
    { category: 'commits', level: 'advanced', threshold: 1000, color: '#2196f3', icon: '📝', title: 'Committer Avançado' },
    { category: 'commits', level: 'expert', threshold: 2500, color: '#9c27b0', icon: '📝', title: 'Committer Expert' },
    { category: 'commits', level: 'master', threshold: 5000, color: '#ff9800', icon: '📝', title: 'Committer Master' },
    { category: 'commits', level: 'legendary', threshold: 10000, color: '#f44336', icon: '📝', title: 'Committer Lendário' },
  ],
  stars: [
    { category: 'stars', level: 'basic', threshold: 10, color: '#9e9e9e', icon: '⭐', title: 'Estrela Básica' },
    { category: 'stars', level: 'intermediate', threshold: 50, color: '#4caf50', icon: '⭐', title: 'Estrela Intermediária' },
    { category: 'stars', level: 'advanced', threshold: 100, color: '#2196f3', icon: '⭐', title: 'Estrela Avançada' },
    { category: 'stars', level: 'expert', threshold: 500, color: '#9c27b0', icon: '⭐', title: 'Estrela Expert' },
    { category: 'stars', level: 'master', threshold: 1000, color: '#ff9800', icon: '⭐', title: 'Estrela Master' },
    { category: 'stars', level: 'legendary', threshold: 5000, color: '#f44336', icon: '⭐', title: 'Estrela Lendária' },
  ],
  repositories: [
    { category: 'repositories', level: 'basic', threshold: 5, color: '#9e9e9e', icon: '📦', title: 'Repositório Básico' },
    { category: 'repositories', level: 'intermediate', threshold: 15, color: '#4caf50', icon: '📦', title: 'Repositório Intermediário' },
    { category: 'repositories', level: 'advanced', threshold: 30, color: '#2196f3', icon: '📦', title: 'Repositório Avançado' },
    { category: 'repositories', level: 'expert', threshold: 50, color: '#9c27b0', icon: '📦', title: 'Repositório Expert' },
    { category: 'repositories', level: 'master', threshold: 100, color: '#ff9800', icon: '📦', title: 'Repositório Master' },
    { category: 'repositories', level: 'legendary', threshold: 200, color: '#f44336', icon: '📦', title: 'Repositório Lendário' },
  ],
  followers: [
    { category: 'followers', level: 'basic', threshold: 10, color: '#9e9e9e', icon: '👥', title: 'Seguidor Básico' },
    { category: 'followers', level: 'intermediate', threshold: 50, color: '#4caf50', icon: '👥', title: 'Seguidor Intermediário' },
    { category: 'followers', level: 'advanced', threshold: 100, color: '#2196f3', icon: '👥', title: 'Seguidor Avançado' },
    { category: 'followers', level: 'expert', threshold: 500, color: '#9c27b0', icon: '👥', title: 'Seguidor Expert' },
    { category: 'followers', level: 'master', threshold: 1000, color: '#ff9800', icon: '👥', title: 'Seguidor Master' },
    { category: 'followers', level: 'legendary', threshold: 5000, color: '#f44336', icon: '👥', title: 'Seguidor Lendário' },
  ],
  contributions: [
    { category: 'contributions', level: 'basic', threshold: 100, color: '#9e9e9e', icon: '🔥', title: 'Contribuidor Básico' },
    { category: 'contributions', level: 'intermediate', threshold: 500, color: '#4caf50', icon: '🔥', title: 'Contribuidor Intermediário' },
    { category: 'contributions', level: 'advanced', threshold: 1000, color: '#2196f3', icon: '🔥', title: 'Contribuidor Avançado' },
    { category: 'contributions', level: 'expert', threshold: 2000, color: '#9c27b0', icon: '🔥', title: 'Contribuidor Expert' },
    { category: 'contributions', level: 'master', threshold: 3000, color: '#ff9800', icon: '🔥', title: 'Contribuidor Master' },
    { category: 'contributions', level: 'legendary', threshold: 5000, color: '#f44336', icon: '🔥', title: 'Contribuidor Lendário' },
  ],
  'pull-requests': [
    { category: 'pull-requests', level: 'basic', threshold: 10, color: '#9e9e9e', icon: '🔀', title: 'PR Básico' },
    { category: 'pull-requests', level: 'intermediate', threshold: 50, color: '#4caf50', icon: '🔀', title: 'PR Intermediário' },
    { category: 'pull-requests', level: 'advanced', threshold: 100, color: '#2196f3', icon: '🔀', title: 'PR Avançado' },
    { category: 'pull-requests', level: 'expert', threshold: 250, color: '#9c27b0', icon: '🔀', title: 'PR Expert' },
    { category: 'pull-requests', level: 'master', threshold: 500, color: '#ff9800', icon: '🔀', title: 'PR Master' },
    { category: 'pull-requests', level: 'legendary', threshold: 1000, color: '#f44336', icon: '🔀', title: 'PR Lendário' },
  ],
  issues: [
    { category: 'issues', level: 'basic', threshold: 10, color: '#9e9e9e', icon: '🐛', title: 'Issue Básica' },
    { category: 'issues', level: 'intermediate', threshold: 50, color: '#4caf50', icon: '🐛', title: 'Issue Intermediária' },
    { category: 'issues', level: 'advanced', threshold: 100, color: '#2196f3', icon: '🐛', title: 'Issue Avançada' },
    { category: 'issues', level: 'expert', threshold: 250, color: '#9c27b0', icon: '🐛', title: 'Issue Expert' },
    { category: 'issues', level: 'master', threshold: 500, color: '#ff9800', icon: '🐛', title: 'Issue Master' },
    { category: 'issues', level: 'legendary', threshold: 1000, color: '#f44336', icon: '🐛', title: 'Issue Lendária' },
  ],
  'developer-level': [
    { category: 'developer-level', level: 'basic', threshold: 0, color: '#9e9e9e', icon: '💻', title: 'Dev Básico' },
    { category: 'developer-level', level: 'intermediate', threshold: 500, color: '#4caf50', icon: '💻', title: 'Dev Intermediário' },
    { category: 'developer-level', level: 'advanced', threshold: 1500, color: '#2196f3', icon: '💻', title: 'Dev Avançado' },
    { category: 'developer-level', level: 'expert', threshold: 3000, color: '#9c27b0', icon: '💻', title: 'Dev Expert' },
    { category: 'developer-level', level: 'master', threshold: 6000, color: '#ff9800', icon: '💻', title: 'Dev Master' },
    { category: 'developer-level', level: 'legendary', threshold: 12000, color: '#f44336', icon: '💻', title: 'Dev Lendário' },
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

