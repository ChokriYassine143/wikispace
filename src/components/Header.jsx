import React, { useState } from 'react';
import './Header.css';
import logo1 from './logo1.png';
import logo2 from './logo1.png';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <header>
            <div className="menu-container">
                <img src={logo1} alt="Logo 1" className="logo" />
                <nav>
                    <ul className="menu">
                        <li><a href="/">Acceuil</a></li>
                        <li><a href="/apropos">Apropos</a></li>
                        <li><a href="/formations">Formation</a></li>
                        <li className="dropdown" onMouseLeave={closeDropdown}>
                            <a href="#" onClick={toggleDropdown}>Coworking</a>
                            {isDropdownOpen && (
                                <div className="dropdown-content">
                                    <a href="/cowrking">Coworking</a>
                                    <a href="/Domiciliation">Domiciliation</a>
                                    <a href="#">Événement</a>
                                </div>
                            )}
                        </li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <img src={logo2} alt="Logo 2" className="logo" />
            </div>
        </header>
    );
};

export default Header;
