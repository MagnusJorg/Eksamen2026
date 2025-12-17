import { useState } from 'react';
import { Link } from 'react-router-dom';
import { panelData } from '../data/panelData';
import BarnKort from '../components/PanelKort';
import './BoernePanel.css'; 

export default function BoernePanel() {

    const [valgtLand, setValgtLand] = useState(null);
    const [valgtAlder, setValgtAlder] = useState(null);
    const [valgtKoen, setValgtKoen] = useState(null);
    const [valgtInteresse, setValgtInteresse] = useState(null);


    const lande = [
        { fil: '/icons/dk.svg', id: '/icons/dk.svg' },
        { fil: '/icons/se.svg', id: '/icons/se.svg' },
        { fil: '/icons/no.svg', id: '/icons/no.svg' },
        { fil: '/icons/fi.svg', id: '/icons/fi.svg' }
    ];

    const aldersgrupper = ["7-8 år", "9-10 år", "11-12 år"];
    const koen = ["Drenge", "Piger"];
    

    const interesser = ["Action", "Biler", "Bygger", "Dyr", "Dukker", "Kreativ", "Rolleleg"];


    const filtreretData = panelData.filter(barn => {

        if (valgtLand && barn.flag !== valgtLand) return false;
        
       
        if (valgtAlder) {
            const alder = parseInt(barn.alder);
            if (valgtAlder === "7-8 år" && (alder < 7 || alder > 8)) return false;
            if (valgtAlder === "9-10 år" && (alder < 9 || alder > 10)) return false;
            if (valgtAlder === "11-12 år" && (alder < 11 || alder > 12)) return false;
        }

        if (valgtKoen && barn.koen !== valgtKoen) return false;   
        if (valgtInteresse && !barn.interesser.includes(valgtInteresse)) return false;
        
        return true; 
    });


    const toggle = (nuvaerende, setFunktion, nyVaerdi) => {
        if (nuvaerende === nyVaerdi) setFunktion(null); 
        else setFunktion(nyVaerdi); 
    };

    return (
      <> 
        <section className="top">
           <div className="top-indhold">
              <Link to="/" className="tilbage-link">← Tilbage</Link>
              <article className="info">
                <h1>Børnepanel</h1>
                
                {/* --- FILTER START --- */}
                <div className="filtermenu">
                    {/* Øverste række: Lande + Alder + Køn */}
                    <div className="demografifilter">
                        <div className="landfilter">
                            {lande.map((land) => (
                                <button 
                                    key={land.id}
                                    className={`btn-land ${valgtLand === land.id ? 'active' : ''}`}
                                    onClick={() => toggle(valgtLand, setValgtLand, land.id)} >
                                    <img src={land.fil} alt="flag" />
                                </button>
                            ))}
                        </div>
                        
                        <div className="demografiknapper">
                            {aldersgrupper.map(alder => (
                                <button 
                                    key={alder}
                                    className={`btn-filter ${valgtAlder === alder ? 'active' : ''}`}
                                    onClick={() => toggle(valgtAlder, setValgtAlder, alder)}
                                >
                                    {alder}
                                </button>
                            ))}
                           <div className='koenplads'>
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
                    </div>

                    {/* Nederste række: Interesser */}
                    <div className="filterinteresser">
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
      </>
    )
}