// src/pages/BoernePanel.jsx
import { Link } from 'react-router-dom';
import { panelData } from '../data/panelData';
import BarnKort from '../components/PanelKort'; // <--- VIGTIG IMPORT

export default function BoernePanel() {
    return (
      <main> {/* Vi genbruger 'trend-side' containeren */}
        
        {/* Header sektion */}
        <section className="top">
           <div className="top-indhold">
              <Link to="/" className="tilbage-link">← Tilbage</Link>
              <article className="info">
                <h1>Børnepanel</h1>
                <p>Mød eksperterne der tester alle trends.</p>
              </article>
           </div>
        </section>

        {/* Her viser vi kortene */}
        <section className="panel-grid">
           {panelData.map((barn) => (
              <BarnKort key={barn.id} barn={barn} />
           ))}
        </section>

      </main>
    )
}