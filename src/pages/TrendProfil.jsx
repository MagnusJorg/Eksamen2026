// src/pages/TrendProfil.jsx
import { useParams, Link } from 'react-router-dom';
import { trendsData } from '../data/trendsData';
import './TrendProfil.css';
// henter graf ting
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';

export default function TrendProfil() {
    const { id } = useParams();
    const trend = trendsData.find(t => t.id === parseInt(id));
    const TOTAL_PANEL = 100;
  
    if (!trend) return <div>Trend ikke fundet</div>;
  
    // En simpel udregning af procent
    const grafData = trend.grafData ? trend.grafData.map(p => ({
      navn: p.navn,
      procent: Math.round((p.antal / TOTAL_PANEL) * 100)
    })) : [];

  if (!trend) return <div>Trend ikke fundet</div>;

  return (
    <>
                <Link to="/">Tilbage</Link>
    <section className='top'>
        <article className='info'>
            <h1>{trend.titel}</h1>
            <p>paragraf tekst</p>
        </article>
    </section>

    <section className='indhold'>
        <section className='venstre'>
        <article className='nordisk'>
    <h2>Nordiske status</h2>
    <ul className="status-liste">
        {/* Vi går direkte til map, fordi vi stoler på dataen */}
        {trend.nordiskStatus.map((punkt, index) => (
            <li key={index}>{punkt}</li>
        ))}
    </ul>
</article>
            <article className='billeder'>
                <h2>Billeder</h2>
                <div className="galleri">
        {/* Tjek om billeder findes, ellers vis ingenting */}
        {trend.billeder?.map((billede, index) => (
            <img className="galleriimg" 
                key={index} 
                src={billede} 
                alt={` ${index + 1}`} 
            />
        ))}
    </div>
            </article>
        </section>

        <section className='hojre'>
           
           <article className='dataoverblik'>
              <h2>Data overblik</h2>
              
              {/* Vi bruger en CSS klasse i stedet for inline style */}
              <div className="graf-container">
                <ResponsiveContainer>
                  <LineChart data={grafData}>
                    {/* Simpel X-akse uden for meget styling */}
                    <XAxis dataKey="navn" />
                    
                    {/* Skjult Y-akse der går fra 0 til 100 */}
                    <YAxis 
                        domain={[0, 100]} 
                        ticks={[0, 25, 50, 75, 100]} 
                        tickFormatter={(value) => `${value}%`}
                    />
                                        
                    {/* Simpel Tooltip der bare viser tallet + % */}
                    <Tooltip formatter={(value) => value + " %"} />
                    
                    {/* Selve stregen */}
                    <Line 
                        type="monotone" 
                        dataKey="procent" 
                        stroke="#000" 
                        strokeWidth={2} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

           </article>

           <article className='indsigter'>
              <h2>Kvalitative indsigter</h2>
           </article>
        </section>
      </section>
    </>
  );
}