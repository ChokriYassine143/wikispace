import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo1 from './logo1.png';
import logo2 from './logo2.png';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <header>
            <div className="menu-container">
                <img src={logo1} alt="Logo 1" className="logo" />
                <nav>
                    <ul className="menu">
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/apropos">À propos</Link></li>
                        <li><Link to="/formations">Formation</Link></li>
                        <li className="dropdown" onMouseEnter={handleMouseEnter} >
                            <button className="dropdown-button">Coworking</button>
                            {isDropdownOpen && (
                                <div className="dropdown-content">
                                    <Link to="/coworking">Coworking</Link>
                                    <Link to="/domiciliation">Domiciliation</Link>
                                    <Link to="/evenement">Événement</Link>
                                </div>
                            )}
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <img src={logo2} alt="Logo 2" className="logo" />
            </div>
        </header>
    );
};

export default Header;
