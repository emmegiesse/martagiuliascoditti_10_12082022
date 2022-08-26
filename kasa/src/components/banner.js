function Banner({ urlImg, texte, page }) {
  
  return (
    <div className={`banner-${page}`}
      style={{
      backgroundImage: `url(${urlImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPositionY: "40%",
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