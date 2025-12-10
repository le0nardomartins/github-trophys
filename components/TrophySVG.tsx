// Componente para gerar SVG dos troféus

import { TrophyConfig } from '@/lib/trophy-levels';

interface TrophySVGProps {
  trophy: TrophyConfig;
  size?: number;
}

export function TrophySVG({ trophy, size = 200 }: TrophySVGProps) {
  const padding = 20;
  const width = size;
  const height = size;
  
  // Cores de gradiente baseadas no nível
  const gradientColors: Record<string, { start: string; end: string }> = {
    basic: { start: '#bdbdbd', end: '#757575' },
    intermediate: { start: '#66bb6a', end: '#388e3c' },
    advanced: { start: '#42a5f5', end: '#1976d2' },
    expert: { start: '#ab47bc', end: '#7b1fa2' },
    master: { start: '#ffa726', end: '#f57c00' },
    legendary: { start: '#ef5350', end: '#c62828' },
  };

  const gradient = gradientColors[trophy.level] || gradientColors.basic;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`gradient-${trophy.level}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={gradient.start} />
          <stop offset="100%" stopColor={gradient.end} />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Fundo com borda arredondada */}
      <rect
        x={padding / 2}
        y={padding / 2}
        width={width - padding}
        height={height - padding}
        rx="15"
        ry="15"
        fill={`url(#gradient-${trophy.level})`}
        filter="url(#shadow)"
      />

      {/* Borda interna */}
      <rect
        x={padding / 2 + 3}
        y={padding / 2 + 3}
        width={width - padding - 6}
        height={height - padding - 6}
        rx="12"
        ry="12"
        fill="none"
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth="2"
      />

      {/* Ícone do troféu */}
      <text
        x={width / 2}
        y={height / 2 - 10}
        fontSize="60"
        textAnchor="middle"
        dominantBaseline="middle"
        filter="url(#shadow)"
      >
        {trophy.icon}
      </text>

      {/* Título */}
      <text
        x={width / 2}
        y={height - padding - 15}
        fontSize="14"
        fontWeight="bold"
        textAnchor="middle"
        fill="white"
        filter="url(#shadow)"
      >
        {trophy.title}
      </text>

      {/* Nível */}
      <text
        x={width / 2}
        y={height - padding - 2}
        fontSize="11"
        textAnchor="middle"
        fill="rgba(255, 255, 255, 0.9)"
      >
        {trophy.level.toUpperCase()}
      </text>
    </svg>
  );
}

// Componente para gerar SVG de múltiplos troféus em linha
interface TrophyRowProps {
  trophies: TrophyConfig[];
  size?: number;
  spacing?: number;
}

export function TrophyRow({ trophies, size = 150, spacing = 10 }: TrophyRowProps) {
  const totalWidth = trophies.length * size + (trophies.length - 1) * spacing;
  
  return (
    <svg
      width={totalWidth}
      height={size}
      viewBox={`0 0 ${totalWidth} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {trophies.map((trophy, index) => (
        <g key={`${trophy.category}-${trophy.level}`} transform={`translate(${index * (size + spacing)}, 0)`}>
          <TrophySVG trophy={trophy} size={size} />
        </g>
      ))}
    </svg>
  );
}

