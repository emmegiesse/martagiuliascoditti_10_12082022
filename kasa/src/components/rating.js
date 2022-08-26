import starOn from "../assets/starOn.svg"
import starOff from "../assets/starOff.svg"

function Rating({rateElt}) {
  const fullStar = <img src={starOn} alt="star" />
  const emptyStar = <img src={starOff} alt="star" />
  const rate = [1, 2, 3, 4, 5];
  
  return (
    <div className="starsRate">
      {rate.map((number) => number <= parseInt(rateElt) ?
        (<span key={rateElt.toString()}> {fullStar} </span>) : 
        (<span key={rateElt.toString()}> {emptyStar} </span>))}
    </div>
  );
}
    
export default Rating