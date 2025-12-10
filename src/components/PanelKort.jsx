import { Link } from 'react-router-dom';
import './PanelKort.css'; // Vi forbinder designet her

export default function BarnKort({ barn }) {
  return (
    <article className="barnkort">
      <div className="barn-billede">
         {/* Vi bruger en placeholder hvis billedet mangler */}
         <img src={barn.billede} alt={barn.navn} />
      </div>
      
      <article className="barninfo">
        <article className='topinfo'>
          <h2>{barn.navn}</h2>
          <img 
                 src={barn.flag} 
                 className="land-flag" 
               />
          <span className="barn-by">{barn.by}</span>
          <span className="barn-klasse">{barn.klasse}</span>
          <span className="barn-alder">{barn.alder}</span>

        </article> 
        <div className="tags">
           {/* Vi splitter interesser ad ved komma, hvis det er en tekststreng */}
           {barn.interesser.split(',').map((interesse, i) => (
              <span key={i} className="trend-tag">{interesse.trim()}</span>
           ))}
        </div>
        
        <button className="btn-profil">Se profil →</button>
      </article>
    </article>
  );
}