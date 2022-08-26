//import starOn from "../assets/starOn.svg"
//import starOff from "../assets/starOff.svg"

function Rating({rateElt}) {
  const fullStar = <img src="../assets/starOn.svg" alt="full star" />
  const emptyStar = <img src="../assets/starOff.svg" alt="empty star" />
  const rate = [1, 2, 3, 4, 5];
  
  return (
    <div className="starsRate">
      {rate.map((number) => 
      number <= parseInt(rateElt) ?
      (<span key={number}> {fullStar} </span>) : 
      (<span key={number}> {emptyStar} </span>))}
    </div>
  );
}
    
export default Rating