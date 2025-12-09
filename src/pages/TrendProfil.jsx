// src/pages/TrendProfil.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { trendsData } from '../data/trendsData';
import './TrendProfil.css';

// Vi henter graf-komponenterne fra biblioteket 'recharts'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function TrendProfil() {
  // 1. Vi finder ud af, hvilken trend vi er på, ved at kigge i URL'en (id)
  const { id } = useParams();
  const trend = trendsData.find(t => t.id === parseInt(id));
  
  // State til at huske, hvilket land man har klikket på (Starter på Danmark)
  const [valgtLand, setValgtLand] = useState('Danmark');

  // Vi leger, at der er 100 børn i panelet for at regne procent ud
  const TOTAL_PANEL = 100;

  // Sikkerheds-tjek: Hvis trenden ikke findes (f.eks. forkert ID), stop her.
  if (!trend) return <div>Trend ikke fundet</div>;

  // 2. Vi gør data klar til grafen
  // Vi laver en ny liste, hvor vi regner 'antal' om til 'procent'
  const grafData = trend.grafData ? trend.grafData.map(dataPunkt => ({
      navn: dataPunkt.navn,
      procent: Math.round((dataPunkt.antal / TOTAL_PANEL) * 100)
  })) : [];

  // Liste over de lande vi vil vise filter for
  // Husk at lægge svg-filer med disse navne i public/icons/ mappen (fx dk.svg)
  const lande = [
      { navn: 'Danmark', fil: 'dk.svg' },
      { navn: 'Norge', fil: 'no.svg' },
      { navn: 'Sverige', fil: 'se.svg' },
      { navn: 'Finland', fil: 'fi.svg' }
  ];

  return (
    <>
      {/* --- TOP SEKTION (Tilbage knap + Titel) --- */}
      <section className='top'>
         <div className="top-indhold">
            <Link to="/" className="tilbage-link">← Tilbage</Link>
            <article className='info'>
                <h1>{trend.titel}</h1>
                <p>{trend.beskrivelse}</p>
            </article>
         </div>
      </section>

      {/* --- HOVED INDHOLD (Opdelt i Venstre og Højre) --- */}
      <section className='indhold'>
        
        {/* VENSTRE KOLONNE */}
        <section className='venstre'>
           
           <article className='nordisk'>
              <h2>Nordisk status</h2>
              {/* Vi tjekker om listen findes før vi viser den (Best practice) */}
              {trend.nordiskStatus && (
                  <ul className="status-liste">
                     {trend.nordiskStatus.map((punkt, index) => (
                        <li key={index}>{punkt}</li>
                     ))}
                  </ul>
              )}
           </article>

           <article className='billeder'>
              <h2>Billeder</h2>
              <div className="galleri">
                 {/* Vi viser billederne hvis de findes */}
                 {trend.billeder?.map((billede, index) => (
                    <img 
                        key={index} 
                        src={billede} 
                        alt={`Galleri ${index}`} 
                        className="galleriimg" 
                    />
                 ))}
              </div>
           </article>

        </section>

        {/* HØJRE KOLONNE */}
        <section className='hojre'>
           
           <article className='dataoverblik'>
              
              <div className="header-med-filter">
                  <h2>Data overblik</h2>
                  
                  {/* Her er vores lande-filter */}
                  <div className="lande-filter">
                      {lande.map((land) => (
                          <button 
                              key={land.navn}
                              className={valgtLand === land.navn ? 'land-knap aktiv' : 'land-knap'}
                              onClick={() => setValgtLand(land.navn)}
                          >
                              {/* Vi bruger ikonet i stedet for tekst */}
                              <img src={`/icons/${land.fil}`} alt={land.navn} className="flag-ikon" />
                          </button>
                      ))}
                  </div>
              </div>
              
              {/* Selve Grafen */}
              <div className="graf-container">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={grafData}>
                    <XAxis dataKey="navn"/>
                    
                    {/* Y-aksen viser faste procenter: 0, 25, 50, 75, 100 */}
                    <YAxis 
                        domain={[0, 100]} 
                        ticks={[0, 25, 50, 75, 100]} 
                        tickFormatter={(value) => `${value}%`}
                        tickLine={false}
                    />
                    
                    <Tooltip formatter={(value) => `${value}%`} />
                    
                    <Line 
                        type="monotone" 
                        dataKey="procent" 
                        stroke="#000" 
                        strokeWidth={3} 
                        dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

           </article>

           <article className='indsigter'>
              <h2>Kvalitative indsigter</h2>
              <p>Her kommer citater fra børnene senere...</p>
           </article>

        </section>
      </section>
    </>
  );
}