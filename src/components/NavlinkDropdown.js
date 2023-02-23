import React from 'react'
import { NavLink } from 'react-router-dom';
import { admin_links } from '../utils/links';

const NavlinkDropdown = ({toggleSidebar}) => {
  return (
    <div>
      <div className='nav-links'>
        
      <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Register</a>
    <ul class="dropdown-menu">
      {/* <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li> */}
      {admin_links.map((link) => {
          const { text, path, id, icon } = link;

          return (
            <NavLink
              to={path}
              key={id}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                isActive ? 'nav-link active ' : 'nav-link'
              }
              end
            >
              {text}
            </NavLink>
          );
        })}
    </ul>
  </li>

        
      </div>
    </div>
  )
}

export default NavlinkDropdown
