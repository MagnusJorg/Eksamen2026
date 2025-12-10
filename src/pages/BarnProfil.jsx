import { useParams, Link } from 'react-router-dom';
import { panelData } from '../data/panelData'; // Vi henter vores data
import './BarnProfil.css'; 

export default function BarnProfil() {
    // 1. Hent ID fra URL'en (f.eks. "1")
    const { id } = useParams();
    
    // 2. Find det barn i listen der har dette ID
    const barn = panelData.find(b => b.id === parseInt(id));

    // Hvis barnet ikke findes (f.eks. forkert ID), vis en fejl
    if (!barn) return <div>Profilen blev ikke fundet.</div>;

    return (
        <main className="profilside">
            
            {/* Tilbage knap */}
            <div className="navigationsbar">
                <Link to="/boernepanel" className="tilbage-link">← Tilbage til oversigt</Link>
            </div>

            {/* Selve profilboksen */}
            <section className="profilkasse">
                
                {/* Venstre side: Billede */}
                <div className="billedesektion">
                    <img src={barn.billede} alt={barn.navn} className="stortbillede" />
                </div>

                {/* Højre side: Info */}
                <article className="tekstsektion">
                    <div className="navnheader">
                        <h1>{barn.navn}</h1>
                        <img src={barn.flag} alt="flag" className="stortflag" />
                    </div>
                    
                    <h3 className="subtitel">{barn.alder} • {barn.klasse} • {barn.by}</h3>
                    
                    {/* Vi genbruger tags designet */}
                    <div className="interesse-tags">
                        {barn.interesser.split(',').map((tag, i) => (
                            <span key={i} className="trend-tag">{tag.trim()}</span>
                        ))}
                    </div>

                    <div className="beskrivelse">
                        <h3>Om {barn.navn}</h3>
                        <p>Her kan du skrive en længere tekst om barnet senere. Vi ved at {barn.navn} går i {barn.klasse} og bor i {barn.by}.</p>
                    </div>

                    <div className="detaljer">
                        <div className="fakta">
                            <span>Køn</span>
                            <strong>{barn.koen}</strong>
                        </div>
                        <div className="fakta">
                            <span>By</span>
                            <strong>{barn.by}</strong>
                        </div>
                    </div>

                </article>
            </section>
        </main>
    );
}