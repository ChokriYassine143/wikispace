import React, { useState } from 'react';
import './Header.css';
import logo1 from './logo1.png';
import logo2 from './logo1.png';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (event) => {
        event.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleDropdownClick = (event) => {
        event.preventDefault();
        closeDropdown();
    };

    return (
        <header>
            <div className="menu-container">
                <img src={logo1} alt="Logo 1" className="logo" />
                <nav>
                    <ul className="menu">
                        <li><a href="/">Acceuil</a></li>
                        <li><a href="https://wikispace.onrender.com/apropos">Apropos</a></li>
                        <li><a href="https://wikispace.onrender.com/formations">Formation</a></li>
                        <li className="dropdown" onMouseLeave={closeDropdown}>
                            <button onClick={toggleDropdown} className="dropdown-button">Coworking</button>
                            {isDropdownOpen && (
                                <div className="dropdown-content">
                                    <a href="https://wikispace.onrender.com/cowrking" onClick={handleDropdownClick}>Coworking</a>
                                    <a href="https://wikispace.onrender.com/Domiciliation" onClick={handleDropdownClick}>Domiciliation</a>
                                    <a href="#" onClick={handleDropdownClick}>Événement</a>
                                </div>
                            )}
                        </li>
                        <li><a href="https://wikispace.onrender.com/contact">Contact</a></li>
                    </ul>
                </nav>
                <img src={logo2} alt="Logo 2" className="logo" />
            </div>
        </header>
    );
};

export default Header;
