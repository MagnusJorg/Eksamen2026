import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { trendsData } from '../data/trendsData';
import './TrendProfil.css'; 
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// 1. IMPORTER BILLEDET HER (Husk at filen skal ligge i src/assets/)
import borneIndsigter from '../assets/borneindsigter.webp'; 

export default function TrendProfil() {
    // ... (resten af din kode er uændret) ...
    const { id } = useParams();
    const trend = trendsData.find(t => t.id === parseInt(id));
    const [valgteLande, setValgteLande] = useState(['Danmark']);
    const [valgteGrupper, setValgteGrupper] = useState(['8-10 år']);

    const lande = [
        { navn: 'Danmark', fil: 'dk.svg' },
        { navn: 'Norge', fil: 'no.svg' },
        { navn: 'Sverige', fil: 'se.svg' },
        { navn: 'Finland', fil: 'fi.svg' }
    ];

    const maalgrupper = ['6-7 år', '8-10 år', '11-12 år', 'Drenge', 'Piger'];

    if (!trend) return <div>Trend ikke fundet</div>;

    const grafData = trend.grafData ? trend.grafData.map(punkt => {
        let totalSum = 0;
        let antalMaalinger = 0;
        valgteLande.forEach(land => {
            valgteGrupper.forEach(gruppe => {
                if (punkt[land] && punkt[land][gruppe] !== undefined) {
                    totalSum += punkt[land][gruppe];
                    antalMaalinger++; 
                }
            });
        });
        const gennemsnit = antalMaalinger > 0
            ? Math.round(totalSum / antalMaalinger)
            : 0;

        return {
            navn: punkt.navn,
            procent: gennemsnit
        };
    }) : [];

    const toggleLand = (land) => {
        if (valgteLande.includes(land)) {
            setValgteLande(valgteLande.filter(l => l !== land)); 
        } else {
            setValgteLande([...valgteLande, land]); 
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
            <section className='top'>
                <div className="top-indhold">
                    <article className='info'>
                        <h1>{trend.titel}</h1>
                        <p>{trend.beskrivelse}</p>
                    </article>
                </div>
            </section>

            <section className='indhold'>
                <section className='venstre'>
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

                <section className='hojre'>
                    <article className='dataoverblik'>
                        <div className="header-med-filter">
                            <h2>Data overblik</h2>
                            <div className="filter-container">
                                <div className="lande-filter">
                                    {lande.map((land) => (
                                        <button
                                            key={land.navn}
                                            className={valgteLande.includes(land.navn) ? 'btn-land active' : 'btn-land'}
                                            onClick={() => toggleLand(land.navn)}
                                            title={land.navn}
                                        >
                                            <img src={`/icons/${land.fil}`} alt={land.navn} className="flag-ikon" />
                                        </button>
                                    ))}
                                </div>

                                <div className="aldersrekke">
                                    {maalgrupper.map((gruppe) => (
                                        <button
                                            key={gruppe}
                                            className={valgteGrupper.includes(gruppe) ? 'btn-filter active' : 'btn-filter'}
                                            onClick={() => toggleGruppe(gruppe)}
                                        >
                                            {gruppe}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
<p>Kendskabsgrad</p>
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
                        
                        {/* 2. INDSÆT BILLEDE HER */}
<img 
    src={borneIndsigter} 
    alt="Kvalitative indsigter" 
    style={{ width: '80%', display: 'block', paddingTop: '10px' }} 
/>
                        
                    </article>

                </section>
            </section>
        </>
    );
}