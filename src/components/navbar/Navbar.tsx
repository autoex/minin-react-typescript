import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper purple accent-2">
                <a href="#" className="brand-logo">React + Typescript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">List</a></li>
                    <li><a href="/">About Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;