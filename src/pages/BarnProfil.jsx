import { useParams, Link } from 'react-router-dom';
import { panelData } from '../data/panelData'; 
import Rekke from '../components/Rekke'; 
import "./BarnProfil.css"

export default function BarnProfil() {
    // 1. Find barnet baseret på ID fra URL'en
    const { id } = useParams();
    const barn = panelData.find(b => b.id === parseInt(id));

    // Hvis barnet ikke findes (sikkerhed)
    if (!barn) return <div>Fandt ikke barnet</div>;

    return (
       <section className='profilen'>
       <section className='topinfo'>
        <article className='barnpic'>
            <img src={barn.billede} alt={barn.navn} />
        </article>
        
        <article className='barninfo'>
            <div> 
                <h1>{barn.navn}, {barn.alder}</h1> 
            </div>
            
            <div className='tags'> 
                {barn.interesser.split(',').map(tag => (
                    <span key={tag} className="trend-tag">{tag}</span>
                ))}
            </div>
            
            <div className='by-aktiv'> 
                <p>{barn.by} • {barn.klasse}</p>
            </div>
            
            <div className='beskrivelseinfo'> 
                <p>{barn.beskrivelse }</p>
            </div>
        </article>
       </section>

        <section className='midtsec'> 
            
            {/* Citat boks */}
            <article className='citat'>
               <h2>"{barn.citat || "Jeg kan lide legetøj!"}"</h2>
            </article>

            {/* Rækkerne med data fra panelData.js */}
            <article className='vinfo'>
                
                {/* Vi sender listerne videre til Rekke komponenten */}
                {/* Hvis listerne mangler i dataen, sender vi en tom liste [] så siden ikke crasher */}
                <Rekke overskrift="Yndlings legetøj" ting={barn.legetoej || []} />
                
                <Rekke overskrift="Gave ønsker" ting={barn.oensker || []} />
                
                <Rekke overskrift="Favorit serier" ting={barn.serier || []} />

            </article>
        </section>
       </section>
    );
}