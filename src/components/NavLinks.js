import { links } from '../utils/links';
import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/NavLinks';

const NavLinks = ({ toggleSidebar }) => {
  return (
    <Wrapper>
      <div className='nav-links'>
        {links.map((link) => {
          const { text, path, id, icon } = link;

          return (
            <NavLink
              to={path}
              key={id}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              end
            >
              <span className='icon'>{icon}</span>
              {text}
            </NavLink>
          );
        })}
        {/* <div className="dropdown">
          <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default NavLinks;
