

export default function BarnKort({ barn }) {
  return (
    <article className="barn-kort">
      <div className="barn-billede">
         {/* Vi bruger en placeholder hvis billedet mangler */}
         <img src={barn.billede} alt={barn.navn} />
      </div>
      
      <div className="barninfo">
        <h3>{barn.navn}</h3>
        <span className="barn-alder">{barn.alder}</span>
        
        <div className="barntags">
           {/* Vi splitter interesser ad ved komma, hvis det er en tekststreng */}
           {barn.interesser.split(',').map((interesse, i) => (
              <span key={i} className="barn-tag">{interesse.trim()}</span>
           ))}
        </div>
        
        <button className="btn-profil">Se profil →</button>
      </div>
    </article>
  );
}