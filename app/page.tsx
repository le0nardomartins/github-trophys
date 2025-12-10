'use client';

import { useState, Fragment } from 'react';
import { TrophyConfig, trophyConfigs } from '@/lib/trophy-levels';
import { TrophyRow } from '@/components/TrophySVG';
import './page.css';

export default function Home() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [trophies, setTrophies] = useState<TrophyConfig[]>([]);
  const [metrics, setMetrics] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!username.trim()) {
      setError('Por favor, insira um username do GitHub');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/trophy/${username}`);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erro ao buscar dados');
      }

      const data = await response.json();

      // Converter os dados de volta para TrophyConfig
      const trophyConfigs: TrophyConfig[] = data.trophies.map((t: any) => ({
        category: t.category,
        level: t.level,
        threshold: t.threshold,
        color: t.color,
        icon: t.icon,
        title: t.title,
      }));

      setTrophies(trophyConfigs);
      setMetrics(data.metrics);
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar troféus');
      setTrophies([]);
      setMetrics(null);
    } finally {
      setLoading(false);
    }
  };

  const getSVGUrl = (format: 'row' | 'single' = 'row', category?: string) => {
    const baseUrl = `/api/trophy/${username}/svg?format=${format}`;
    return category ? `${baseUrl}&category=${category}` : baseUrl;
  };

  return (
    <main className="container">
      <div className="header">
        <h1>RPG Github Trophys</h1>
        <p>Sistema de troféus personalizado e open-source para perfis do GitHub</p>
        <p className="subtitle">Use esta instância ou faça deploy da sua própria!</p>
      </div>

      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Digite seu username do GitHub..."
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
            onKeyPress={(e: any) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            className="search-input"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="search-button"
          >
            {loading ? 'Buscando...' : 'Buscar Troféus'}
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          {error}
        </div>
      )}

      {metrics && (
        <div className="metrics-section">
          <h2>
            <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
            Métricas
          </h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">{metrics.commits.toLocaleString()}</div>
              <div className="metric-label">Commits</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{metrics.stars.toLocaleString()}</div>
              <div className="metric-label">Estrelas</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{metrics.repositories.toLocaleString()}</div>
              <div className="metric-label">Repositórios</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{metrics.followers.toLocaleString()}</div>
              <div className="metric-label">Seguidores</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{metrics.contributions.toLocaleString()}</div>
              <div className="metric-label">Contribuições</div>
            </div>
          </div>
        </div>
      )}

      {trophies.length > 0 && (
        <div className="trophies-section">
          <h2>
            <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"/>
              <path d="M18 9v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/>
              <path d="M6 14h12"/>
            </svg>
            Seus Troféus
          </h2>
          <div className="trophies-container">
            <TrophyRow trophies={trophies} size={180} spacing={15} />
          </div>

          <div className="embed-section">
            <h3>
              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              Como usar no seu README
            </h3>
            <p>Adicione este código no seu README.md para exibir seus troféus:</p>

            <div className="code-block">
              <code>
                {`![GitHub Trophys](https://sua-url.vercel.app/api/trophy/${username}/svg)`}
              </code>
            </div>
            <div className="code-block" style={{marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.9}}>
              <code>
                {`URL desta instância: https://github-trophys-pdd5.vercel.app/api/trophy/${username}/svg`}
              </code>
            </div>

            <p className="info-text">
              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <strong>Dica:</strong> Você pode usar esta instância pública ou fazer deploy da sua própria. 
              Veja o <a href="https://github.com/le0nardomartins/github-trophys" target="_blank" rel="noopener noreferrer" style={{color: '#2196f3', textDecoration: 'underline'}}>README</a> para mais informações.
            </p>

            <div className="info-text" style={{background: 'rgba(76, 175, 80, 0.15)', borderLeftColor: 'rgba(76, 175, 80, 0.4)'}}>
              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <strong>Uso Público:</strong> Qualquer pessoa pode usar esta instância! 
              Compartilhe a URL com seus amigos e colegas.
            </div>

            <div className="info-text" style={{background: 'rgba(255, 152, 0, 0.15)', borderLeftColor: 'rgba(255, 152, 0, 0.4)', marginTop: '1rem'}}>
              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <div>
                <strong>Repositórios Privados:</strong> Por padrão, apenas repositórios públicos são contabilizados. 
                Para incluir repositórios privados, é necessário autenticação OAuth com token do GitHub. 
                Veja a documentação da API do GitHub para mais detalhes.
              </div>
            </div>

            <div className="preview-section">
              <h4>Preview:</h4>
              <div className="svg-preview">
                <img 
                  src={getSVGUrl('row')} 
                  alt="GitHub Trophys" 
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {!loading && trophies.length === 0 && !error && (
        <div className="empty-state">
          <svg className="icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <p>Digite um username do GitHub para ver os troféus!</p>
        </div>
      )}

      {/* Seção de Requisitos */}
      <div className="requirements-section">
        <h2>
          <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 11l3 3L22 4"/>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
          </svg>
          Requisitos para Cada Nível
        </h2>
        
        <div className="requirements-grid">
          {Object.entries(trophyConfigs).map(([category, configs]) => {
            const categoryNames: Record<string, string> = {
              commits: 'Commits',
              stars: 'Estrelas',
              repositories: 'Repositórios',
              followers: 'Seguidores',
              contributions: 'Contribuições',
              'pull-requests': 'Pull Requests',
              issues: 'Issues',
              'developer-level': 'Nível de Desenvolvedor'
            };

            return (
              <Fragment key={category}>
                <div className="requirement-category">
                  <h3>{categoryNames[category] || category}</h3>
                  <div className="requirement-levels">
                    {configs.map((config, index) => (
                      <Fragment key={`${category}-${index}`}>
                        <div className="requirement-level">
                          <span className="level-name">{config.level.toUpperCase()}</span>
                          <span className="level-threshold">
                            {config.threshold === 0 ? 'Inicial' : `≥ ${config.threshold.toLocaleString()}`}
                          </span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </main>
  );
}

