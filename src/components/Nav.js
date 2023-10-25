import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

function Nav() {
    const [activeLink, setActiveLink] = useState('nav__link_home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    return (
        <nav className="nav">
        <Link
            to="/"
            className={`nav__link nav__link_home ${activeLink === 'nav__link_home' ? 'underline-on-click active' : 'underline-on-click'}`}
            onClick={() => handleLinkClick('nav__link_home')}
        >
            Accueil
        </Link>
        <Link
            to="/about"
            className={`nav__link nav__link_about ${activeLink === 'nav__link_about' ? 'underline-on-click active' : 'underline-on-click'}`}
            onClick={() => handleLinkClick('nav__link_about')}
        >
            A propos
        </Link>
        </nav>
    );
}
export default Nav;
