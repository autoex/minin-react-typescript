import React from 'react';
import {NavLink} from 'react-router-dom'
const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper teal darken-3 px1">
                <a href="#" className="brand-logo">React + Typescript + ToDo Again))))))))))</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to='/' >List</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;