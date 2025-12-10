import { useState } from 'react';
import { Link } from 'react-router-dom';
import { panelData } from '../data/panelData';
import BarnKort from '../components/PanelKort';
import './BoernePanel.css'; 

export default function BoernePanel() {
    // State til at gemme hvad der er valgt (null betyder "intet valgt")
    const [valgtLand, setValgtLand] = useState(null);
    const [valgtAlder, setValgtAlder] = useState(null);
    const [valgtKoen, setValgtKoen] = useState(null);
    const [valgtInteresse, setValgtInteresse] = useState(null);

    // --- MULIGHEDER ---
    const lande = [
        { fil: '/icons/dk.svg', id: '/icons/dk.svg' },
        { fil: '/icons/se.svg', id: '/icons/se.svg' },
        { fil: '/icons/no.svg', id: '/icons/no.svg' },
        { fil: '/icons/fi.svg', id: '/icons/fi.svg' }
    ];

    // Vi har ændret knapperne, så de matcher dataen præcist (Simpelt!)
    const aldersgrupper = ["7 år", "8 år", "10 år", "12 år"];
    const koen = ["Drenge", "Piger"];
    
    // Disse tags skal findes i teksten under "interesser" i dataen
    const interesser = ["Action", "Biler", "Bygger", "Dyr", "Dukker", "Kreativ", "Rolleleg"];

    // --- SIMPEL LOGIK ---
    const filtreretData = panelData.filter(barn => {
        // Hvis et filter er valgt, SKAL det matche. Ellers går vi videre.
        if (valgtLand && barn.flag !== valgtLand) return false;
        if (valgtAlder && barn.alder !== valgtAlder) return false; // Direkte match
        if (valgtKoen && barn.koen !== valgtKoen) return false;    // Direkte match
        if (valgtInteresse && !barn.interesser.includes(valgtInteresse)) return false;
        
        return true; // Vis barnet hvis det klarer alle tjek
    });

    // En lille hjælper til at tænde/slukke knapper
    const toggle = (nuvaerende, setFunktion, nyVaerdi) => {
        if (nuvaerende === nyVaerdi) setFunktion(null); // Sluk hvis den allerede er valgt
        else setFunktion(nyVaerdi); // Tænd den nye
    };

    return (
      <main> 
        <section className="top">
           <div className="top-indhold">
              <Link to="/" className="tilbage-link">← Tilbage</Link>
              <article className="info">
                <h1>Børnepanel</h1>
                
                {/* --- FILTER START --- */}
                <div className="filter-board">
                    
                    {/* Øverste række: Lande + Alder + Køn */}
                    <div className="filter-row top-row">
                        <div className="group-lande">
                            {lande.map((land) => (
                                <button 
                                    key={land.id}
                                    className={`btn-land ${valgtLand === land.id ? 'active' : ''}`}
                                    onClick={() => toggle(valgtLand, setValgtLand, land.id)}
                                >
                                    <img src={land.fil} alt="flag" style={{width: '24px'}} />
                                </button>
                            ))}
                        </div>
                        
                        <div className="group-buttons">
                            {aldersgrupper.map(alder => (
                                <button 
                                    key={alder}
                                    className={`btn-filter ${valgtAlder === alder ? 'active' : ''}`}
                                    onClick={() => toggle(valgtAlder, setValgtAlder, alder)}
                                >
                                    {alder}
                                </button>
                            ))}
                            
                            <div className="divider" style={{width:'15px'}}></div> {/* Mellemrum */}

                            {koen.map(k => (
                                <button 
                                    key={k}
                                    className={`btn-filter ${valgtKoen === k ? 'active' : ''}`}
                                    onClick={() => toggle(valgtKoen, setValgtKoen, k)}
                                >
                                    {k}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Nederste række: Interesser */}
                    <div className="filter-row bottom-row">
                        {interesser.map(tag => (
                            <button 
                                key={tag}
                                className={`btn-filter ${valgtInteresse === tag ? 'active' : ''}`}
                                onClick={() => toggle(valgtInteresse, setValgtInteresse, tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                </div>
                {/* --- FILTER SLUT --- */}

              </article>
           </div>
        </section>

        <section className="panelsec">
           <article className='kortgrid'>
               {filtreretData.length > 0 ? (
                   filtreretData.map((barn) => (
                      <BarnKort key={barn.id} barn={barn} />
                   ))
               ) : (
                   <p style={{padding: '20px', color: '#666'}}>Ingen børn matcher dine filtre.</p>
               )}
           </article>
        </section>
      </main>
    )
}