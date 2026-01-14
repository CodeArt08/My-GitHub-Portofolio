import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const projectSlides = [
    { id: 1, image: "/assets/images/photo1.png", title: "Collecte de Données", description: "Récupération automatique de données depuis les sites d'information et Facebook." },
    { id: 2, image: "/assets/images/photo2.png", title: "Analyse IA", description: "Traitement des données avec LightGBM pour identifier les tendances et risques." },
    { id: 3, image: "/assets/images/photo3.png", title: "Carte de Dangerosité", description: "Visualisation géographique des zones à risque identifiées par l'IA." },
    { id: 4, image: "/assets/images/photo4.png", title: "Recommandations", description: "Suggestions de décisions intelligentes basées sur l'analyse." },
    { id: 5, image: "/assets/images/photo5.png", title: "Tableau de Bord", description: "Interface de monitoring en temps réel des alertes et décisions." },
    { id: 6, image: "/assets/images/photo6.png", title: "Rapports", description: "Génération de rapports détaillés pour la prise de décision." },
];

const AIDecisionAnalysisDetails = () => {
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

                    <h1 className="project-title reveal active-reveal">Analyse de Données et Suggestion de Décision Intelligente basée sur l'IA</h1>
                    <p className="project-subtitle reveal active-reveal">Une application intelligente qui analyse les données web et réseaux sociaux pour identifier les zones de dangerosité et recommander des décisions stratégiques.</p>

                    <div className="project-meta reveal active-reveal">
                        <div className="meta-item">
                            <i className="fas fa-code"></i>
                            <span>Python, React, LightGBM</span>
                        </div>
                        <div className="meta-item">
                            <i className="fas fa-brain"></i>
                            <span>Machine Learning</span>
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
                            Ce projet innovant combine l'intelligence artificielle et l'analyse de données pour fournir des insights stratégiques en temps réel.
                            En exploitant les données publiques issues des sites d'information et des réseaux sociaux comme Facebook, le système utilise
                            des algorithmes de machine learning (LightGBM) pour détecter les patterns, identifier les zones géographiques à risque,
                            et proposer des recommandations de décisions intelligentes aux décideurs.
                        </p>
                        <p>
                            L'application offre une interface React moderne permettant de visualiser les résultats sur une carte interactive,
                            de consulter les analyses en temps réel, et de générer des rapports détaillés pour faciliter la prise de décision stratégique.
                        </p>
                    </div>

                </div>
            </section>

            <section className="section contact">
                <div className="container reveal active-reveal">
                    <h2 className="section-title">Intéressé par ce projet ?</h2>
                    <div className="contact-content">
                        <p>N'hésitez pas à me contacter pour discuter de solutions d'analyse intelligente basées sur l'IA.</p>
                        <a href="mailto:votre.email@example.com" className="btn btn-primary">Me contacter</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AIDecisionAnalysisDetails;
