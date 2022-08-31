import { data } from "../data/data";
import { useParams, Navigate } from "react-router-dom";
import Dropdown from "../components/dropdown";
import Gallery from "../components/gallery";
import Rating from "../components/rating";
import "../style/property.css";

function Property () {

  let urlParams = useParams();
    const houseData = data.find((data) => data.id === urlParams.id);
      if( houseData == null){
        return <Navigate to="/error"/>
      }
    const arrayLenght = houseData.pictures.length;

    return (
      <div className="propertyMain">
        <div className="propertyGallery">
          <Gallery index={0} array={houseData.pictures} lenght={arrayLenght} />
        </div>
        <div className="infoSection">

          <div className="propertyTL">
            <h1 className="propertyTitle">{houseData.title}</h1>
            <h2 className="propertyLocation">{houseData.location}</h2>
            <ul className="tagElt">
              {houseData.tags.map((tag) => {
                return (
                  <li key={tag} className="tagEltSp">
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="propertyHR">
            <div className="host">
              <h3 className="hostName">{houseData.host.name.split(" ")[0]}<br/>{houseData.host.name.split(" ")[1]}</h3>
            <div>
              <img
                src={houseData.host.picture}
                className="hostPicture"
                alt="host profile pic"
              />
            </div>
          </div>
          <div>
            <Rating rateElt={houseData.rating} />
          </div>

        </div>
      </div>
      
      <div className="description">
        <div className="dropdownDescription">
          <Dropdown title="Description" textContent={houseData.description} />
        </div>
        <div className="dropdownEquipments">
          <Dropdown title="Équipements" textContent={houseData.equipments.map((e) => {
              return (
                <li key={e} className="equipementElt">
                  {e}
                </li>
              );
          })}/>
        </div>
      </div>
    </div>
  );
}

export default Property