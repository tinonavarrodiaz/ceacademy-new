import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import menu from '../../utils/menu';
import Submenu from './Submenu';
// console.log(menu);

const Menu = ({ active, action, subActive, subAction }) => {
  return (
    <ul className={`Header__menu ${active ? 'is-active' : ''}`}>
      {menu.map((item, i) => (
        <li
          key={i}
          className={`Header__menu__item ${item.children ? 'li-children' : ''}`}
        >
          {!item.children ? (
            <NavLink
              to={item.link}
              className="Header__menu__link"
              onClick={action}
            >
              {item.title}
            </NavLink>
          ) : (
            <>
              <div className="Header__menu__link" onClick={subAction}>
                {item.title}
                <i
                  className={`fa-solid fa-chevron-down icon-chevron ${
                    subActive ? 'is-active' : ''
                  }`}
                ></i>
              </div>
              <Submenu submenu={item.children} subActive={subActive} />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
