import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const projectSlides = [
    {
        id: 1,
        title: "Page d'accueil",
        image: "/assets/images/PageAccueil.png",
        description: "Cette page d'accueil sert de point d'entrée central pour la plateforme. Elle présente une vue d'ensemble du projet, qui est basé sur la géolocalisation et l'intelligence artificielle pour la gestion efficace des services opérationnels au sein d'une force armée. L'interface est conçue pour être intuitive et rapide d'accès."
    },
    {
        id: 2,
        title: "Connexion Sécurisée",
        image: "/assets/images/Login.png",
        description: "L'accès à la plateforme est protégé par un système d'authentification robuste. L'interface de connexion garantit que seul le personnel autorisé peut accéder aux données sensibles et aux fonctionnalités opérationnelles."
    },
    {
        id: 3,
        title: "Scrapping et Analyse IA",
        image: "/assets/images/ScrappingFacebook.png",
        description: "Le module de scrapping, développé en Python, collecte des informations pertinentes depuis des sources externes comme Facebook. Ces données sont ensuite analysées par des algorithmes d'Intelligence Artificielle pour extraire des renseignements utiles à la prise de décision opérationnelle."
    },
    {
        id: 4,
        title: "Système de Géolocalisation",
        image: "/assets/images/Geolocalisation.png",
        description: "Le cœur du système repose sur une fonctionnalité de géolocalisation avancée. Elle permet de visualiser en temps réel le déploiement des services, de suivre les unités sur le terrain et d'optimiser la répartition des ressources en fonction de la situation géographique."
    }
];

const ProjectDetails = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectSlides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projectSlides.length) % projectSlides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto-play every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="project-details-page">
            <section className="section">
                <div className="container">
                    <Link to="/#projects" className="back-link"><i className="fas fa-arrow-left"></i> Retour aux projets</Link>

                    <h1 className="project-title reveal active-reveal">Désignation Intelligente de Service Opérationnel</h1>
                    <p className="project-subtitle reveal active-reveal">Une plateforme intégrant l'Intelligence Artificielle et la
                        géolocalisation pour optimiser les services opérationnels.</p>

                    <div className="project-meta reveal active-reveal">
                        <div className="meta-item">
                            <i className="fas fa-code"></i>
                            <span>Laravel, React.js, Python</span>
                        </div>
                        <div className="meta-item">
                            <i className="fas fa-database"></i>
                            <span>MySQL</span>
                        </div>
                        <div className="meta-item">
                            <i className="fas fa-calendar"></i>
                            <span>2024</span>
                        </div>
                    </div>

                    <div className="carousel-container reveal active-reveal">
                        <div className="carousel-wrapper">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    className="carousel-slide"
                                >
                                    <div className="detail-block">
                                        <h2>{projectSlides[currentIndex].title}</h2>
                                        <div className="detail-image-container">
                                            <img src={projectSlides[currentIndex].image} alt={projectSlides[currentIndex].title} className="detail-img" />
                                        </div>
                                        <p>{projectSlides[currentIndex].description}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <button className="carousel-btn prev" onClick={prevSlide}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="carousel-btn next" onClick={nextSlide}>
                            <i className="fas fa-chevron-right"></i>
                        </button>

                        <div className="carousel-dots">
                            {projectSlides.map((slide, index) => (
                                <span
                                    key={slide.id}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section contact">
                <div className="container reveal active-reveal">
                    <h2 className="section-title">Intéressé par ce projet ?</h2>
                    <div className="contact-content">
                        <p>N'hésitez pas à me contacter pour en savoir plus sur la conception et les défis techniques de
                            cette réalisation.</p>
                        <a href="mailto:votre.email@example.com" className="btn btn-primary">Me contacter</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;
