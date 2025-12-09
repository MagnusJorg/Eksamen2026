// src/pages/TrendProfil.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { trendsData } from '../data/trendsData';
import './TrendProfil.css'; // Vi henter stylingen fra CSS filen

// Vi henter graf-komponenterne fra biblioteket 'recharts'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function TrendProfil() {
  // 1. FIND TRENDEN
  // Vi henter ID fra URL'en (f.eks. "1") og finder den rigtige trend i vores data
  const { id } = useParams();
  const trend = trendsData.find(t => t.id === parseInt(id));

  // 2. STATE (HUKOMMELSE) TIL FILTRE
  // Vi bruger lister (arrays) [], så man kan vælge flere ting på én gang.
  // Standardvalg: 'Danmark' og '8-10 år'
  const [valgteLande, setValgteLande] = useState(['Danmark']);
  const [valgteGrupper, setValgteGrupper] = useState(['8-10 år']);

  // Lister over muligheder i filteret
  const lande = [
      { navn: 'Danmark', fil: 'dk.svg' },
      { navn: 'Norge', fil: 'no.svg' },
      { navn: 'Sverige', fil: 'se.svg' },
      { navn: 'Finland', fil: 'fi.svg' }
  ];

  // Disse navne SKAL matche dem, du har skrevet i trendsData.js
  const maalgrupper = ['6-7 år', '8-10 år', '11-12 år', 'Drenge', 'Piger'];

  // Sikkerheds-tjek: Hvis ID'et er forkert, stop her.
  if (!trend) return <div>Trend ikke fundet</div>;

  // 3. LOGIK: BEREGN GRAF-DATA
  // Denne kode kører hver gang du ændrer et filter.
  // Den løber alle måneder igennem og regner gennemsnittet ud for dine valg.
  const grafData = trend.grafData ? trend.grafData.map(punkt => {
      let totalSum = 0;
      let antalMaalinger = 0;

      // Loop igennem alle valgte lande (f.eks. Danmark, Norge)
      valgteLande.forEach(land => {
          // Loop igennem alle valgte målgrupper (f.eks. 6-7 år, Piger)
          valgteGrupper.forEach(gruppe => {
             // Tjekker om dataen findes i objektet før vi lægger sammen
             if (punkt[land] && punkt[land][gruppe] !== undefined) {
                 totalSum += punkt[land][gruppe];
                 antalMaalinger++; // Vi tæller op, så vi kan dividere til sidst
             }
          });
      });

      // Beregn gennemsnit (Sum / Antal)
      const gennemsnit = antalMaalinger > 0 
          ? Math.round(totalSum / antalMaalinger) 
          : 0;

      // Returner det færdige datapunkt til grafen
      return {
          navn: punkt.navn,
          procent: gennemsnit
      };
  }) : [];

  // Hjælpe-funktioner til at vælge/fravælge (toggle)
  const toggleLand = (land) => {
      if (valgteLande.includes(land)) {
          setValgteLande(valgteLande.filter(l => l !== land)); // Fjern hvis valgt
      } else {
          setValgteLande([...valgteLande, land]); // Tilføj hvis ikke valgt
      }
  };

  const toggleGruppe = (gruppe) => {
      if (valgteGrupper.includes(gruppe)) {
          setValgteGrupper(valgteGrupper.filter(g => g !== gruppe));
      } else {
          setValgteGrupper([...valgteGrupper, gruppe]);
      }
  };

  return (
    <>
      {/* --- TOP SEKTION (Titel og tilbage) --- */}
      <section className='top'>
         <div className="top-indhold">
            <Link to="/" className="tilbage-link">← Tilbage</Link>
            <article className='info'>
                <h1>{trend.titel}</h1>
                <p>{trend.beskrivelse}</p>
            </article>
         </div>
      </section>

      {/* --- HOVED INDHOLD --- */}
      <section className='indhold'>
        
        {/* VENSTRE KOLONNE */}
        <section className='venstre'>
           
           {/* Nordisk Status Boks */}
           <article className='nordisk'>
              <h2>Nordisk status</h2>
              {trend.nordiskStatus && (
                  <ul className="status-liste">
                     {trend.nordiskStatus.map((punkt, index) => (
                        <li key={index}>{punkt}</li>
                     ))}
                  </ul>
              )}
           </article>

           {/* Billeder Boks */}
           <article className='billeder'>
              <h2>Billeder</h2>
              <div className="galleri">
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
           
           {/* DATA OVERBLIK (GRAFEN) */}
           <article className='dataoverblik'>
              
              <div className="header-med-filter">
                  <h2>Data overblik</h2>
                  
                  {/* Container til filtrene */}
                  <div className="filter-container">
                      
                      {/* FILTER 1: LANDE (Flag) */}
                      <div className="lande-filter">
    {lande.map((land) => (
        <button 
            key={land.navn}
            // HER ER ÆNDRINGEN: Vi bruger nu 'btn-land' og 'active'
            className={valgteLande.includes(land.navn) ? 'btn-land active' : 'btn-land'}
            onClick={() => toggleLand(land.navn)}
            title={land.navn}
        >
            <img src={`/icons/${land.fil}`} alt={land.navn} className="flag-ikon" />
        </button>
    ))}
</div>

                      {/* FILTER 2: MÅLGRUPPER (Knapper) */}
                      <div className="aldersrekke">
                          {maalgrupper.map((gruppe) => (
                              <button
                                  key={gruppe}
                                  className={valgteGrupper.includes(gruppe) ? 'alder-knap aktiv' : 'alder-knap'}
                                  onClick={() => toggleGruppe(gruppe)}
                              >
                                  {gruppe}
                              </button>
                          ))}
                      </div>
                  </div>
              </div>
              
              {/* Grafen */}
              <div className="graf-container">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={grafData}>
                    <XAxis dataKey="navn" />
                    <YAxis 
                        domain={[0, 100]} 
                        ticks={[0, 25, 50, 75, 100]} 
                        tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Line 
                        type="monotone" 
                        dataKey="procent" 
                        stroke="#2d2d2d" 
                        strokeWidth={3} 
                        dot={{ r: 4 }}
                        isAnimationActive={true} 
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