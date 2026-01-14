import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">Portfolio<span>.</span></div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="/#home" onClick={closeMenu}>Accueil</a></li>
                    <li><a href="/#about" onClick={closeMenu}>À propos</a></li>
                    <li><a href="/#skills" onClick={closeMenu}>Compétences</a></li>
                    <li><a href="/#projects" onClick={closeMenu}>Projets</a></li>
                    <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
