import { useState } from "react";
import arrowRight from "../assets/arrowRight.svg";
import arrowLeft from "../assets/arrowLeft.svg";

function Gallery({ array, lenght }) {
  const ArrowLeft = <img src={arrowLeft} alt="Left" />
  const ArrowRight = <img src={arrowRight} alt="Right" />
  const [currentIndex, setCurrentIndex] = useState(0);
  const isArrayShort = lenght === 1;
  
  const goNext = () => {
    if (currentIndex === lenght - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const goPrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(lenght - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  return isArrayShort ? (
    <div className="galleryDisplay" 
      style={{
        backgroundImage: `url(${array[currentIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "60%",
      }}
    ></div> ) : (
    <div className="galleryDisplay"
      style={{
        backgroundImage: `url(${array[currentIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "60%",
      }}
    >
      <ArrowLeft className="galleryArrow" onClick={() => goPrevious()} />
        <p className="currentImgIndex">{currentIndex + 1} / {array.length}</p>
      <ArrowRight className="galleryArrow" onClick={() => goNext()} />
    </div>
    );
  }
  
  export default Gallery