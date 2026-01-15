import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleNavClick = (sectionId) => {
        closeMenu();

        // Si on n'est pas sur la page d'accueil, naviguer d'abord vers l'accueil
        if (location.pathname !== '/') {
            navigate('/');
            // Attendre que la navigation soit terminée avant de scroller
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Si on est déjà sur la page d'accueil, juste scroller
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">Portfolio<span>.</span></div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Accueil</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>À propos</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>Compétences</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projets</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
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
