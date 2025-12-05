import './TrendKort.css';

export default function TrendKort({ trend }) {
  return (
    <section className="trendkort">
        <article className='billede'>
            <img src={trend.billede} alt={trend.titel} />
        </article>

        <article className='kortindhold'>
            {/* Dynamisk titel */}
            <div><h2>{trend.titel}</h2></div> 
            
            {/* Dynamiske tags */}
            <div className='tags'>
                {trend.tags.map((tag, index) => (
                    <span key={index} className="trend-tag">
                        {tag}
                    </span>
                ))}
            </div>
            
            <div>
                 <h3>Kendskabsgrad: {trend.kendskabsgrad}%</h3> 
            </div>
            
            {/* Dynamisk beskrivelse */}
            <div className='beskrivelse'> 
                <p>{trend.beskrivelse}</p> 
            </div>
            
            <div className='knap'> 
                <button className="btn-cta"> Se trend →</button>
            </div>
        </article>
    </section>
  );
}