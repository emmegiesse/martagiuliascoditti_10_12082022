import { Link } from "react-router-dom";

function Error () {
    
  return (
        <div className="errorPage">
          <div className="errorNumber">404</div>
        <div className="errorText">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <Link to="/">Retourner sur la page d'acceuil</Link>
      </div>
    );
  }
  
  export default Error