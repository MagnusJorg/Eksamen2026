import TrendKort from '../components/TrendKort';
import { trendsData } from '../data/trendsData'; // Husk at stien skal passe
import './Trends.css';

export default function Trends() {
  return (
    <div className="trendindpakning"> 
      <section className="trendoverblik">
        <article className="top">
          <h1>Trend Overblik</h1>
          {/* Her kommer filteret senere */}
          <div className="filter"></div>
        </article>
      </section>

      <section className="trendliste">
        <article className="indhold">
          {trendsData.map((enkeltTrend) => (
            <TrendKort key={enkeltTrend.id} trend={enkeltTrend} />
          ))}
        </article>
      </section>
    </div>
  );
}