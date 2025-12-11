import './rekke.css'

export default function Rekke({ overskrift, ting }) {
  return (
    <article className="rekkeboks">
      <h3>{overskrift}</h3>
      
      <div className="tingliste">
        {ting.map((navn) => (
          <div key={navn} className="ting">
             {/* Den grå firkant er plads til billedet */}
             <div className="firkant"></div> 
             <p>{navn}</p>
          </div>
        ))}
      </div>
    </article>
  )
}