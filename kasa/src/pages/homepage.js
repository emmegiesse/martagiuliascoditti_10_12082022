import { data } from "../data/data";
import Banner from "../components/banner";
import Thumb from "../components/thumbnails";
import "../style/homepage.css";
//import bannerHome from "../assets/banner_home.png";

function HomePage() {

    return (
        <div className="main">
            <Banner urlImg="../assets/banner_home.png" texte="Chez vous, partout et ailleurs" />
            <div className="thumGallery">
                {data.map((data) => {
                    return (
                        <Thumb
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            cover={data.cover}
                        />
                    );
                })}
            </div>
        </div>
    );
}
        
export default HomePage