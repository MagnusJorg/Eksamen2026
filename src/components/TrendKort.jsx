import { Link } from 'react-router-dom';
import './TrendKort.css';

export default function TrendKort({ trend }) {
  return (
    /* 1. Vi flytter LINK helt ud og giver det klassen 'trendkort-link' */
    <Link to={`/trend/${trend.id}`} className="trendkort-link">
      
      {/* Vi beholder 'trendkort' klassen her for layoutet */}
      <article className="trendkort">
        <div className='billede'>
            <img src={trend.billede} alt={trend.titel} />
        </div>

        <div className='kortindhold'>
            <div><h2>{trend.titel}</h2></div> 
            
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
            
            <div className='beskrivelse'> 
                <p>{trend.beskrivelse}</p> 
            </div>
            
            <div className='knap'> 
                {/* 2. VIGTIGT: Vi ændrer <button> til <span> fordi den nu ligger inde i et link.
                   CSS'en 'btn-cta' vil stadig få den til at ligne en knap! */}
                <span className="btn-cta"> Se trend →</span>
            </div>

        </div>
      </article>
    </Link>
  );
}