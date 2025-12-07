// src/pages/TrendProfil.jsx
import { useParams, Link } from 'react-router-dom';
import { trendsData } from '../data/trendsData';

export default function TrendProfil() {
  const { id } = useParams();
  const trend = trendsData.find(t => t.id === parseInt(id));

  if (!trend) return <div>Trend ikke fundet</div>;

  return (
    <div>
      <Link to="/">Tilbage</Link>
      <h1>{trend.titel}</h1>
    </div>
  );
}