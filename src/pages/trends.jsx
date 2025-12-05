import { useState } from 'react';
import TrendKort from '../components/TrendKort';
import { trendsData } from '../data/trendsData';
import './Trends.css';

export default function Trends() {
  const [kategori, setKategori] = useState('Etableret');

  // Hjælpefunktion til at styre gliderens position
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
      <header className="side-hoved">
        <h1>Trend Overblik</h1>
        
        {/* Navigationen skal være "relative" for at glideren kan styres */}
        <nav className="filter-menu">
          
          {/* HER ER DEN NYE GLIDER DIV! */}
          {/* Den får en klasse baseret på hvilken knap der er valgt */}
          <div className={`glider ${getGliderPosition()}`}></div>

          <button 
            className={kategori === 'Etableret' ? 'aktiv' : ''} 
            onClick={() => setKategori('Etableret')}
          >
            Etableret
          </button>

          <button 
            className={kategori === 'Vækst' ? 'aktiv' : ''} 
            onClick={() => setKategori('Vækst')}
          >
            Vækst
          </button>

          <button 
            className={kategori === 'Under radaren' ? 'aktiv' : ''} 
            onClick={() => setKategori('Under radaren')}
          >
            Under radaren
          </button>
        </nav>
      </header>

      <section className="trend-liste">
        {visteTrends.map(trend => (
          <TrendKort key={trend.id} trend={trend} />
        ))}
        {visteTrends.length === 0 && <p>Ingen trends i denne kategori.</p>}
      </section>
    </main>
  );
}