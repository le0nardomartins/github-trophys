// API Route para gerar SVG dos troféus (versão corrigida)

import { NextRequest, NextResponse } from 'next/server';
import { calculateGitHubMetrics, fetchContributions } from '@/lib/github-api';
import { getAllAchievedTrophies, TrophyConfig } from '@/lib/trophy-levels';

function generateTrophySVG(trophy: TrophyConfig, size: number = 200): string {
  const padding = 20;
  const width = size;
  const height = size;
  
  const gradientColors: Record<string, { start: string; end: string }> = {
    basic: { start: '#bdbdbd', end: '#757575' },
    intermediate: { start: '#66bb6a', end: '#388e3c' },
    advanced: { start: '#42a5f5', end: '#1976d2' },
    expert: { start: '#ab47bc', end: '#7b1fa2' },
    master: { start: '#ffa726', end: '#f57c00' },
    legendary: { start: '#ef5350', end: '#c62828' },
  };

  const gradient = gradientColors[trophy.level] || gradientColors.basic;

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient-${trophy.level}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${gradient.start}" />
          <stop offset="100%" stop-color="${gradient.end}" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3" />
        </filter>
      </defs>
      <rect x="${padding / 2}" y="${padding / 2}" width="${width - padding}" height="${height - padding}" 
            rx="15" ry="15" fill="url(#gradient-${trophy.level})" filter="url(#shadow)" />
      <rect x="${padding / 2 + 3}" y="${padding / 2 + 3}" width="${width - padding - 6}" height="${height - padding - 6}" 
            rx="12" ry="12" fill="none" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2" />
      <text x="${width / 2}" y="${height / 2 - 10}" font-size="60" text-anchor="middle" 
            dominant-baseline="middle" filter="url(#shadow)">${trophy.icon}</text>
      <text x="${width / 2}" y="${height - padding - 15}" font-size="14" font-weight="bold" 
            text-anchor="middle" fill="white" filter="url(#shadow)">${trophy.title}</text>
      <text x="${width / 2}" y="${height - padding - 2}" font-size="11" text-anchor="middle" 
            fill="rgba(255, 255, 255, 0.9)" text-transform="uppercase">${trophy.level}</text>
    </svg>
  `.trim();
}

function generateTrophyRowSVG(trophies: TrophyConfig[], size: number = 150, spacing: number = 10): string {
  const totalWidth = trophies.length * size + (trophies.length - 1) * spacing;
  
  const trophySVGs = trophies.map((trophy, index) => {
    const x = index * (size + spacing);
    return `<g transform="translate(${x}, 0)">${generateTrophySVG(trophy, size)}</g>`;
  }).join('');

  return `
    <svg width="${totalWidth}" height="${size}" viewBox="0 0 ${totalWidth} ${size}" xmlns="http://www.w3.org/2000/svg">
      ${trophySVGs}
    </svg>
  `.trim();
}

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const username = params.username;
    const searchParams = request.nextUrl.searchParams;
    const format = searchParams.get('format') || 'row'; // 'row' ou 'single'
    const category = searchParams.get('category'); // categoria específica

    if (!username) {
      return new NextResponse('Username é obrigatório', { status: 400 });
    }

    // Buscar métricas do GitHub
    const metrics = await calculateGitHubMetrics(username);
    const contributions = await fetchContributions(username);
    
    if (contributions > 0) {
      metrics.commits = contributions;
      metrics.contributions = Math.round(contributions * 1.5);
    }

    // Calcular todos os troféus alcançados
    let trophies = getAllAchievedTrophies(metrics);

    // Filtrar por categoria se especificado
    if (category) {
      trophies = trophies.filter(t => t.category === category);
    }

    let svg: string;

    if (format === 'single' && trophies.length > 0) {
      // Retornar apenas o primeiro troféu ou o de desenvolvedor
      const devTrophy = trophies.find(t => t.category === 'developer-level') || trophies[0];
      svg = generateTrophySVG(devTrophy);
    } else {
      // Retornar todos em linha
      svg = generateTrophyRowSVG(trophies);
    }

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600', // Cache por 1 hora
      },
    });
  } catch (error: any) {
    console.error('Erro ao gerar SVG:', error);
    return new NextResponse('Erro ao gerar troféus', { status: 500 });
  }
}

