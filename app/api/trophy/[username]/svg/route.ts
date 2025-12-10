// API Route para gerar SVG dos troféus (versão corrigida)

import { NextRequest, NextResponse } from 'next/server';
import { calculateGitHubMetrics, fetchContributions } from '@/lib/github-api';
import { getAllAchievedTrophies, TrophyConfig } from '@/lib/trophy-levels';

// Ícones SVG estilo RPG
const trophyIcons: Record<string, string> = {
  '⚔️': 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z M8 11h8M8 15h8',
  '🗡️': 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z M12 8v8',
  '⚡': 'M13 2L3 14h8l-1 8 10-12h-8l1-8z',
  '🔥': 'M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z',
  '👑': 'M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm2.7-1h8.6l.9-6.4-3.8 3.8L12 8l-2.4 4.4-3.8-3.8L5.7 15z',
  '💎': 'M6 2l6 6 6-6M6 22l6-6 6 6M2 12l10-8 10 8-10 8-10-8z',
  '🌟': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  '✨': 'M12 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z M3 15l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z M21 18l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z',
  '🌌': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M8 8h8M8 12h8M8 16h8',
  '⭐': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  '📦': 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
  '👥': 'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z',
  '🔀': 'M9.83 23L17 15.82V4h-2v11.82L9.83 21 4 16.17l1.41-1.41L9.83 19l4.42-4.25L15.82 13 9.83 23z',
  '🐛': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  '💻': 'M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z',
};

function getIconPath(icon: string): string {
  return trophyIcons[icon] || trophyIcons['💻'];
}

function generateTrophySVG(trophy: TrophyConfig, size: number = 200): string {
  const padding = 20;
  const width = size;
  const height = size;

  const gradientColors: Record<string, { start: string; end: string }> = {
    novice: { start: '#bdbdbd', end: '#9e9e9e' },
    apprentice: { start: '#81c784', end: '#66bb6a' },
    adept: { start: '#64b5f6', end: '#42a5f5' },
    expert: { start: '#42a5f5', end: '#1e88e5' },
    master: { start: '#ba68c8', end: '#ab47bc' },
    grandmaster: { start: '#ab47bc', end: '#8e24aa' },
    legend: { start: '#ff9800', end: '#f57c00' },
    mythic: { start: '#ff6f00', end: '#e65100' },
    divine: { start: '#e53935', end: '#c62828' },
    transcendent: { start: '#c62828', end: '#b71c1c' },
  };

  const gradient = gradientColors[trophy.level] || gradientColors.novice;
  const iconPath = getIconPath(trophy.icon);

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient-${trophy.level}-${trophy.category}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${gradient.start}" />
          <stop offset="100%" stop-color="${gradient.end}" />
        </linearGradient>
        <filter id="shadow-${trophy.level}">
          <feDropShadow dx="0" dy="2" stdDeviation="4" flood-opacity="0.2" />
        </filter>
        <filter id="glow-${trophy.level}">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" in="SourceAlpha"/>
          <feOffset in="coloredBlur" dx="0" dy="0" result="offsetBlur"/>
          <feMerge>
            <feMergeNode in="offsetBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect x="${padding / 2}" y="${padding / 2}" width="${width - padding}" height="${height - padding}" 
            rx="22" ry="22" fill="url(#gradient-${trophy.level}-${trophy.category})" filter="url(#shadow-${trophy.level})" />
      <rect x="${padding / 2 + 3}" y="${padding / 2 + 3}" width="${width - padding - 6}" height="${height - padding - 6}" 
            rx="19" ry="19" fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="2" />
      <rect x="${padding / 2 + 5}" y="${padding / 2 + 5}" width="${width - padding - 10}" height="${height / 2 - padding / 2 - 5}" 
            rx="17" ry="17" fill="rgba(255, 255, 255, 0.1)" />
      <g transform="translate(${width / 2}, ${height / 2 - 12})">
        <path d="${iconPath}" fill="white" opacity="0.98" filter="url(#glow-${trophy.level})" transform="scale(2.8) translate(-12, -12)" style="mix-blend-mode: normal;" />
      </g>
      ${trophy.title.length > 16 ? `
        <text x="${width / 2}" y="${height - padding - 30}" 
              font-size="8.5" 
              font-weight="700" 
              text-anchor="middle" 
              fill="white" 
              opacity="0.98" 
              letter-spacing="0.15px">${trophy.title.split(' ').slice(0, Math.ceil(trophy.title.split(' ').length / 2)).join(' ')}</text>
        <text x="${width / 2}" y="${height - padding - 18}" 
              font-size="8.5" 
              font-weight="700" 
              text-anchor="middle" 
              fill="white" 
              opacity="0.98" 
              letter-spacing="0.15px">${trophy.title.split(' ').slice(Math.ceil(trophy.title.split(' ').length / 2)).join(' ')}</text>
      ` : `
        <text x="${width / 2}" y="${height - padding - 22}" 
              font-size="11" 
              font-weight="700" 
              text-anchor="middle" 
              fill="white" 
              opacity="0.98" 
              letter-spacing="0.3px">${trophy.title}</text>
      `}
      <text x="${width / 2}" y="${height - padding - 6}" font-size="8" text-anchor="middle" 
            fill="rgba(255, 255, 255, 0.9)" letter-spacing="1.2px" font-weight="600">${trophy.level.toUpperCase()}</text>
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
    const realCommits = await fetchContributions(username);

    if (realCommits > 0) {
      metrics.commits = realCommits;
      // Contribuições = usar o valor real de commits como base
      metrics.contributions = Math.max(metrics.contributions, realCommits);
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

