import logoWhite from "../assets/logo_white.png";

function Footer(){

   return (
    <footer className="footer">
        <img src={logoWhite} alt="logo" />
        <p className="footerText">© 2020 Kasa. All rights reserved</p>
    </footer>
   )

}

export default Footer