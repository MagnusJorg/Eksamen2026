// src/components/TrendKort.jsx
import './TrendKort.css';
// BEMÆRK: Ingen import af billede her! Det kommer med "trend"-objektet.

export default function TrendKort({ trend }) {
  return (
    <section className="trendkort">
        
        <article className='billede'>
            {/* Vi bruger trend.billede fra data-filen */}
            <img src={trend.billede} alt={trend.titel} />
        </article>

        <article className='kortindhold'>
            {/* Dynamisk titel */}
            <div><h2>{trend.titel}</h2></div> 
            
            {/* Dynamiske tags */}
            <div className='tags'>
                {trend.tags.join(', ')} {/* Dette sætter komma mellem tags */}
            </div>
            
            <div>
                 <h3>Kendskabsgrad: {trend.kendskabsgrad}%</h3> 
            </div>
            
            {/* Dynamisk beskrivelse */}
            <div className='beskrivelse'> 
                <p>{trend.beskrivelse}</p> 
            </div>
            
            <div className='knap'> <button>Se trend pil</button></div>

        </article>
 
    </section>
  );
}