import { Link } from 'react-router-dom';
import './PanelKort.css'; 

export default function BarnKort({ barn }) {
  return (
    /* 1. Vi flytter LINK helt ud omkring hele kortet */
    <Link to={`/barn/${barn.id}`} className="barnkort-link">
        <article className="barnkort">
          <div className="barn-billede">
             <img src={barn.billede} alt={barn.navn} loading="lazy" />
          </div>
          
          <article className="barninfo">
            <article className='topinfo'>
              <h2>{barn.navn}</h2>
              <article className='underinfo'>
                <img 
                     src={barn.flag} 
                     className="land-flag" 
                     loading="lazy"
                     alt="flag"
                   />
                <span className="barn-by">{barn.by}</span>
                <span className="barn-klasse">{barn.klasse}</span>
                <span className="barn-alder">{barn.alder}</span>
              </article>
            </article> 
            
            <div className="tags">
               {barn.interesser.split(',').map((interesse, i) => (
                  <span key={i} className="trend-tag">{interesse.trim()}</span>
               ))}
            </div>
                  
            <div className='pknap'>
             {/* 2. Vi ændrer <button> til <span> fordi den nu ligger inde i et link.
                CSS-klassen 'btn-cta' får den stadig til at ligne en knap. */}
             <span className="btn-cta">Se profil →</span>
            </div>
         </article>
        </article>
    </Link>
  );
}