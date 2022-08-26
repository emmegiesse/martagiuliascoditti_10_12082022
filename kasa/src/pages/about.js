import Banner from "../components/banner";
import Dropdown from "../components/dropdown";
//import BannerAbout from "../assets/banner_about.png";
import "../style/about.css";

const text = [
  "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
];

function About() {
  return (
    <div className="main">
      <Banner urlImg="../assets/banner_about.png" />
      <div className="aboutMain">
        <Dropdown title="Fiabilité" textContent={text[0]} />
        <Dropdown title="Respect" textContent={text[1]} />
        <Dropdown title="Service" textContent={text[2]} />
        <Dropdown title="Responsabilité" textContent={text[3]} />
      </div>
    </div>
  );
}

export default About