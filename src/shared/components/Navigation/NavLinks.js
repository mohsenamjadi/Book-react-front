import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>All Books</NavLink>
        </li>
        <li>
            <NavLink to="/category">Categories</NavLink>
        </li>
        <li>
            <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
            <NavLink to="/authentication">Authenticate</NavLink>
        </li>
    </ul>
};

export default NavLinks;