import { useState } from 'react';
import TrendKort from '../components/TrendKort';
import { trendsData } from '../data/trendsData';
import './Trends.css';

export default function Trends() {
  const [kategori, setKategori] = useState('Etableret');

  const getGliderPosition = () => {
    if (kategori === 'Etableret') return 'pos-0';
    if (kategori === 'Vækst') return 'pos-1';
    if (kategori === 'Under radaren') return 'pos-2';
    return 'pos-0';
  };

  const visteTrends = trendsData.filter(trend => {
    if (kategori === 'Etableret')    return trend.kendskabsgrad > 70;
    if (kategori === 'Vækst')        return trend.kendskabsgrad >= 25 && trend.kendskabsgrad <= 70;
    if (kategori === 'Under radaren') return trend.kendskabsgrad < 25;
  }).sort((a, b) => b.kendskabsgrad - a.kendskabsgrad);

  return (
    <main className="trend-side">
      <div className="intro-container">
        
        <div className='overskrift'>
          <h1>Trend Overblik</h1>
        </div>
        
        <nav className="filter-menu">
          <div className={`glider ${getGliderPosition()}`}></div>

          {/* Knap 1: Etableret */}
          <button 
            className={kategori === 'Etableret' ? 'aktiv' : ''} 
            onClick={() => setKategori('Etableret')}
          >
            {/* Vi bruger bare den sorte SVG. CSS gør den hvid, når den er aktiv! */}
            <img src="/icons/ild.svg" alt="" className="btn-icon" />
            Etableret
          </button>

          {/* Knap 2: Vækst */}
          <button 
            className={kategori === 'Vækst' ? 'aktiv' : ''} 
            onClick={() => setKategori('Vækst')}
          >
            <img src="/icons/stjerne.svg" alt="" className="btn-icon" />
            Vækst
          </button>

          {/* Knap 3: Under radaren */}
          <button 
            className={kategori === 'Under radaren' ? 'aktiv' : ''} 
            onClick={() => setKategori('Under radaren')}
          >
            <img src="/icons/rader.svg" alt="" className="btn-icon" />
            Under radaren
          </button>
        </nav>
      </div>

      <section className="trend-liste">
        {visteTrends.map(trend => (
          <TrendKort key={trend.id} trend={trend} />
        ))}
        {visteTrends.length === 0 && <p>Ingen trends i denne kategori.</p>}
      </section>
    </main>
  );
}