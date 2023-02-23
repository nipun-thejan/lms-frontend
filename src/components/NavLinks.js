import { links } from '../utils/links';
import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/NavLinks';
import NavlinkDropdown from './NavlinkDropdown';

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
        <NavlinkDropdown/>
      </div>
    </Wrapper>
  );
};

export default NavLinks;
