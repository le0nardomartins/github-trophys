'use client';

import { useState } from 'react';
import { TrophyConfig } from '@/lib/trophy-levels';
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
        <h1>🏆 GitHub Trophys</h1>
        <p>Sistema de troféus personalizado e open-source para perfis do GitHub</p>
        <p className="subtitle">Use esta instância ou faça deploy da sua própria!</p>
      </div>

      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Digite seu username do GitHub..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
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
          ⚠️ {error}
        </div>
      )}

      {metrics && (
        <div className="metrics-section">
          <h2>📊 Métricas</h2>
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
          <h2>🏆 Seus Troféus</h2>
          <div className="trophies-container">
            <TrophyRow trophies={trophies} size={180} spacing={15} />
          </div>

          <div className="embed-section">
            <h3>📝 Como usar no seu README</h3>
            <p>Adicione este código no seu README.md para exibir seus troféus:</p>
            
            <div className="code-block">
              <code>
                {`![GitHub Trophys](https://sua-url.vercel.app/api/trophy/${username}/svg)`}
              </code>
            </div>
            <div className="code-block" style={{marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.8}}>
              <code>
                {`URL desta instância: ${process.env.NEXT_PUBLIC_APP_URL || 'https://sua-url.vercel.app'}/api/trophy/${username}/svg`}
              </code>
            </div>

            <p className="info-text">
              💡 <strong>Dica:</strong> Você pode usar esta instância pública ou fazer deploy da sua própria. 
              Veja o <a href="https://github.com/le0nardomartins/github-trophys" target="_blank" rel="noopener noreferrer" style={{color: '#2196f3', textDecoration: 'underline'}}>README</a> para mais informações.
            </p>

            <div className="info-text" style={{background: '#e8f5e9', borderLeftColor: '#4caf50'}}>
              🌐 <strong>Uso Público:</strong> Qualquer pessoa pode usar esta instância! 
              Compartilhe a URL com seus amigos e colegas.
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
          <p>🔍 Digite um username do GitHub para ver os troféus!</p>
        </div>
      )}
    </main>
  );
}

