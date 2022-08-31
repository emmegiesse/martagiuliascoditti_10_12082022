import { useState } from "react";
//import arrowUp from "../assets/arrowUp.svg";
//import arrowDown from "../assets/arrowDown.svg";

function Dropdown({ title, textContent, page }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`dropdown-${page}`} >
      <div className={`dropdownBanner-${page}`} > 
        <h4 className={`dropdownTitle-${page}`} >{title}</h4>
        { isOpen ? 
          <div className = "arrowUp">
            <img src="/assets/arrowUp.svg" alt="arrowUp" onClick={() => setIsOpen(false)} />
          </div> : 
          <div className = "arrowDown">
            <img src="/assets/arrowDown.svg" alt="arrowDown" onClick={() => setIsOpen(true)} />
          </div> }
      </div>  
        {isOpen && <p className={`dropdownContent-${page}`}>{textContent}</p>}  
    </div>
  ) 
}

export default Dropdown