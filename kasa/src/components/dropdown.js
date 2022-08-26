import { useState } from "react";
import arrowUp from "../assets/arrowUp.svg";
import arrowDown from "../assets/arrowDown.svg";

function Dropdown({ title, textContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const ArrowUp = <img src={arrowUp} alt="Up" />
  const ArrowDown = <img src={arrowDown} alt="Down" />
  
  return (
    <div className="dropdown">
      <div className="dropdownBanner">
        <h4 className="dropdownTitle">{title}</h4>
        { isOpen ? <div>Up</div> : <div>Down</div> }
          <ArrowUp className="dropdownArrow" id="arrowUp" onClick={() => setIsOpen(false)}/>
          <ArrowDown className="dropdownArrow" id="arrowDown" onClick={() => setIsOpen(true)}/>
      </div>  
        {isOpen && <p className="dropdownContent">{textContent}</p>}  
    </div>
  ) 
}

export default Dropdown