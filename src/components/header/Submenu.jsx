import { NavLink } from 'react-router-dom';
const Submenu = ({ submenu, subActive, subAction }) => {
  return (
    <div className={`submenu ${subActive ? 'is-active' : ''}`}>
      <ul className={`submenu-list`}>
        {submenu.map((item, index) => (
          <li key={item.title} className="submenu__item">
            <NavLink to={item.link} className="submenu__link">
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;
