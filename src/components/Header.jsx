import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo1 from './logo1.png';
import logo2 from './logo2.png';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (event) => {
        event.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleDropdownClick = () => {
        closeDropdown();
    };

    return (
        <header>
            <div className="menu-container">
                <img src={logo1} alt="Logo 1" className="logo" />
                <nav>
                    <ul className="menu">
                        <li><Link to="/">Acceuil</Link></li>
                        <li><Link to="/apropos">Apropos</Link></li>
                        <li><Link to="/formations">Formation</Link></li>
                        <li className="dropdown" onMouseLeave={closeDropdown}>
                            <button onClick={toggleDropdown} className="dropdown-button">Coworking</button>
                            {isDropdownOpen && (
                                <div className="dropdown-content">
                                    <Link to="/coworking" onClick={handleDropdownClick}>Coworking</Link>
                                    <Link to="/domiciliation" onClick={handleDropdownClick}>Domiciliation</Link>
                                    <Link to="/evenement" onClick={handleDropdownClick}>Événement</Link>
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
