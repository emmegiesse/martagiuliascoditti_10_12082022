function Banner({ urlImg, texte }) {
  
  return (
    <div className="banner" 
      style={{
      backgroundImage: `url(${urlImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      //backgroundPositionY: "40%",
      }}
    >
    <div className="bannerBg"></div>
    {texte && 
      <p className="bannerText">
      <span>{texte}</span>
      </p>
    }
    </div> 
  ) 
}
  
export default Banner