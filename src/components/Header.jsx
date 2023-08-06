import { Link } from "react-router-dom";
import "../styles/header.css";

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div>
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo MARVEL" />
          </Link>
        </div>
       
        <div className="liens">
        <Link to={"/characters"}>Personnages</Link> 
        <Link to={"/comics"}> Bandes Dessinées</Link>
        </div>
  
      </div>
    </header>
  );
};

export default Header;
