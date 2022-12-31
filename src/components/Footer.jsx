import Social from "./footer/Social.jsx";
import Sponsor from "./footer/Sponsor.jsx";
import Newsletter from "./footer/Newsletter.jsx";
import {NavLink} from "react-router-dom";

const Footer = ()=>{
  return(
    <footer className="Footer">
      <div className="Footer__container container">
        <div className="brand">
          <img src="/img/logo.svg" alt="logotipo" className={'brand__logo'}/>
          <Social/>
        </div>
        <div className="sponsor-container">
          <Sponsor/>
        </div>
        <div className="newsletter-container">
          <Newsletter/>
        </div>
      </div>
      <div className="Footer__bar">
        <NavLink to={"privacidad"}>Aviso de Privacidad</NavLink>
      </div>
    </footer>
    // <h1>Footer</h1>
  )
}

export default  Footer
