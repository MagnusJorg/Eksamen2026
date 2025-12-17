import './Rekke.css'

export default function Rekke({ overskrift, ting }) {
  return (
    <article className="rekkeboks">
      <h3>{overskrift}</h3>
      
      <div className="tingliste">
        {ting.map((navn, index) => (
          <div key={index} className="ting">
             {/* HER ER DEN GRÅ FIRKANT: */}
             <div className="dummy-billede"></div> 
             
             <p>{navn}</p>
          </div>
        ))}
      </div>
    </article>
  )
}