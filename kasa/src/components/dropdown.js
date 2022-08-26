import { useState } from "react";
//import arrowUp from "../assets/arrowUp.svg";
//import arrowDown from "../assets/arrowDown.svg";

function Dropdown({ title, textContent }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdownBanner"> 
        <h4 className="dropdownTitle">{title}</h4>
        { isOpen ? 
          <div>
            <img src="/assets/arrowUp.svg" alt="arrowUp" onClick={() => setIsOpen(false)} />
          </div> : 
          <div>
            <img src="/assets/arrowDown.svg" alt="arrowDown" onClick={() => setIsOpen(true)} />
          </div> }
      </div>  
        {isOpen && <p className="dropdownContent">{textContent}</p>}  
    </div>
  ) 
}

export default Dropdown