import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const projectSlides = [
    { id: 1, image: "/assets/images/img1.png", title: "Tableau de Bord", description: "Vue d'ensemble des activités de location." },
    { id: 2, image: "/assets/images/img2.png", title: "Gestion des Véhicules", description: "Interface de gestion de la flotte de véhicules." },
    { id: 3, image: "/assets/images/img3.png", title: "Suivi des Locations", description: "Suivi en temps réel des locations en cours." },
    { id: 4, image: "/assets/images/img4.png", title: "Réservations", description: "Module de gestion des réservations clients." },
    { id: 5, image: "/assets/images/img5.png", title: "Clients", description: "Base de données et gestion des clients." },
    { id: 6, image: "/assets/images/img6.png", title: "Facturation", description: "Système de facturation et paiements." },
    { id: 7, image: "/assets/images/img7.png", title: "Maintenance", description: "Suivi de la maintenance des véhicules." },
    { id: 8, image: "/assets/images/img8.png", title: "Statistiques", description: "Rapports et analyses statistiques." },
    { id: 9, image: "/assets/images/img9.png", title: "Paramètres", description: "Configuration de l'application." },
    { id: 10, image: "/assets/images/img10.png", title: "Notifications", description: "Centre de notifications." },
    { id: 11, image: "/assets/images/img11.png", title: "Profil Utilisateur", description: "Gestion du profil et des accès." },
];

const RentalManagementDetails = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectSlides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projectSlides.length) % projectSlides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="project-details-page">
            <section className="section">
                <div className="container">
                    <Link to="/#projects" className="back-link"><i className="fas fa-arrow-left"></i> Retour aux projets</Link>

                    <h1 className="project-title reveal active-reveal">Gestion des Locations de Véhicules</h1>
                    <p className="project-subtitle reveal active-reveal">Une application web complète pour la gestion en temps réel d'une flotte de véhicules.</p>

                    <div className="project-meta reveal active-reveal">
                        <div className="meta-item">
                            <i className="fas fa-code"></i>
                            <span>React.js, Express.js</span>
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

                    <div className="project-description reveal active-reveal" style={{ marginTop: '3rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                        <h3>À propos du projet</h3>
                        <p>
                            Ce projet est une solution clé en main pour les agences de location de voitures. Il permet de centraliser toutes les opérations,
                            de la gestion du parc automobile à la facturation client, en passant par le suivi des réservations et la maintenance.
                            L'interface utilisateur a été conçue pour être intuitive et réactive, offrant une expérience fluide sur tous les appareils.
                        </p>
                    </div>

                </div>
            </section>

            <section className="section contact">
                <div className="container reveal active-reveal">
                    <h2 className="section-title">Intéressé par ce projet ?</h2>
                    <div className="contact-content">
                        <p>N'hésitez pas à me contacter pour discuter des fonctionnalités ou pour une démonstration.</p>
                        <a href="mailto:votre.email@example.com" className="btn btn-primary">Me contacter</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RentalManagementDetails;
