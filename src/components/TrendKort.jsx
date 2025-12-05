import './TrendKort.css';
import labubu from './assets/trendbillede';
export default function TrendKort({ trend }) {
  return (
    <section className="trendkort">
        <article className='billede'>
            <img src="" alt="" />
        </article>
        <article className='kortindhold'>
            <div><h2>navn</h2></div>
            <div className='tags'> plys nøgleringe 8-12 år</div>
            <div> <h3>Kendskabsgrad</h3> </div>
            <div className='beskrivelse'> <p>Gået viralt på tiktok</p> </div>
            <div className='knap'> <button>Se trend pil</button></div>

        </article>
 
    </section>
  );
}