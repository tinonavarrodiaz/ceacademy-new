import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/img/logo.svg';

import Hamburger from './header/Hamburger';
import Menu from './header/Menu';

const Header = () => {
  const [active, setActive] = useState(false);
  const [subActive, setSubActive] = useState(false);

  const ToggleMenuFunction = (e) => {
    console.log(e.target);
    !active ? setActive(true) : setActive(false);
  };
  const ToggleSubMenuFunction = (e) => {
    console.log(e.target);
    !subActive ? setSubActive(true) : setSubActive(false);
  };
  return (
    <header className="Header container">
      <NavLink to={'/'} className="Header__logo">
        <img src={logo} alt="Logotipo" className="Header__logo--img" />
      </NavLink>
      <nav className="Nav">
        <Hamburger active={active} action={ToggleMenuFunction} />
        <Menu
          active={active}
          action={ToggleMenuFunction}
          subActive={subActive}
          subAction={ToggleSubMenuFunction}
        />
      </nav>
    </header>
  );
};
export default Header;
