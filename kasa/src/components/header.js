import { Link, NavLink } from "react-router-dom"
//import LogoRed from "../assets/logo_red.png";
import "../style/header.css";

function Header() {

    return (
        <header id="header">
            <nav>
                <Link to='/'>
                    <img src="/assets/logo_red.png" alt="logo kasa" className="logoHeader" />
                </Link>
                <div className="navLinks">
                    <NavLink 
                        className={(navData) => navData.isActive ? "active" : "" } 
                        //style={{ textDecoration: match ? "underline" : "none" }}
                        to='/'> Accueil </NavLink>
                    <NavLink 
                        className={(navData) => navData.isActive ? "active" : "" } 
                        to='/about'> A Propos </NavLink>
                </div>
            </nav>
        </header>
    );
}
    
export default Header