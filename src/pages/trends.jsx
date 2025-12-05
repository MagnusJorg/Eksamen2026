import TrendKort from '../components/TrendKort';
import { trendsData } from '../data/trendsData'; // Vi henter dataen her
import './Trends.css';

export default function Trends() {
  return (
    <section className="trendoverblik">
      <article className="top">
        <h1>Trend Overblik</h1>
        <div className="filter"></div>
      </article>

      <article className="indhold">
        {/* Her sker magien: Vi mapper dataen til kort */}
        {trendsData.map((enkeltTrend) => (
          <TrendKort key={enkeltTrend.id} trend={enkeltTrend} />
        ))}
      </article>
    </section>
  );
}