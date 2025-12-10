// API Route para gerar troféus do usuário

import { NextRequest, NextResponse } from 'next/server';
import { calculateGitHubMetrics, fetchContributions } from '@/lib/github-api';
import { getAllAchievedTrophies } from '@/lib/trophy-levels';
import { TrophySVG } from '@/components/TrophySVG';

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const username = params.username;

    if (!username) {
      return NextResponse.json(
        { error: 'Username é obrigatório' },
        { status: 400 }
      );
    }

    // Buscar métricas do GitHub
    const metrics = await calculateGitHubMetrics(username);
    
    // Buscar contribuições adicionais
    const contributions = await fetchContributions(username);
    if (contributions > 0) {
      metrics.commits = contributions;
      metrics.contributions = contributions * 1.5;
    }

    // Calcular todos os troféus alcançados
    const trophies = getAllAchievedTrophies(metrics);

    return NextResponse.json({
      username,
      metrics,
      trophies: trophies.map(t => ({
        category: t.category,
        level: t.level,
        title: t.title,
        icon: t.icon,
        color: t.color,
        threshold: t.threshold,
      })),
    });
  } catch (error: any) {
    console.error('Erro ao buscar troféus:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao buscar dados do GitHub' },
      { status: 500 }
    );
  }
}

