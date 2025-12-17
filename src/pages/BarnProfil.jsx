import { useParams } from 'react-router-dom';
import { panelData } from '../data/panelData'; 
import Rekke from '../components/Rekke'; 
import "./BarnProfil.css";


import tidslinjeGrafik from '../assets/tidslinje1.webp'; 

export default function BarnProfil() {
    const { id } = useParams();
    const barn = panelData.find(b => b.id === parseInt(id));

    if (!barn) return <div>Fandt ikke barnet</div>;

    const dummyTing = ["Hot Wheels", "Lego City", "Tegneblok"];
    const dummySerier = ["YouTube", "Disney+", "Ramasjang"];
    const dummyOnsker = ["PlayStation 5", "Fodbold", "Slik"];

    return (
       <section className='profilen'>
           <section className='topinfo'>
            <article className='barnpic'>
                <img src={barn.billede} alt={barn.navn} />
            </article>
            
            <article className='barninfo'>
                <h1>{barn.navn}, {barn.alder}</h1> 
                
                <div className='tags'> 
                    {barn.interesser.split(',').map(tag => (
                        <span key={tag} className="trend-tag">{tag.trim()}</span>
                    ))}
                </div>
                
                <div className='by-aktiv'> 
                    <p>{barn.by} • {barn.klasse}</p>
                </div>
                
                <div className='beskrivelseinfo'> 
                    <p>{barn.beskrivelse || "Her står en kort beskrivelse af barnet. Vi har ikke modtaget den fulde tekst endnu, men vi ved at barnet er aktivt i panelet og bidrager med gode inputs til vores undersøgelser." }</p>
                </div>
            </article>
           </section>

            <section className='midtsec'> 
                <article className='citat'>
                   {/* dummybillede */}
                   <img src={tidslinjeGrafik} alt="Tidslinje grafik" style={{width: '100%', display: 'block'}} />
                </article>

                <article className='vinfo'>
                    <Rekke overskrift="Yndlings legetøj" ting={barn.legetoej || dummyTing} />
                    <Rekke overskrift="Gave ønsker" ting={barn.oensker || dummyOnsker} />
                    <Rekke overskrift="Favorit serier" ting={barn.serier || dummySerier} />
                </article>
            </section>
       </section>
    );
}