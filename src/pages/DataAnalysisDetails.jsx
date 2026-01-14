import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const projectSlides = [
    { id: 1, image: "/assets/images/capture1.png", title: "Visualisation des Données", description: "Graphiques interactifs pour l'analyse des tendances." },
    { id: 2, image: "/assets/images/capture2.png", title: "Traitement de Données", description: "Nettoyage et préparation des datasets." },
    { id: 3, image: "/assets/images/capture3.png", title: "Rapports Automatisés", description: "Génération automatique de rapports PDF." },
    { id: 4, image: "/assets/images/capture4.png", title: "Analyse Prédictive", description: "Modèles de prévision basés sur l'historique." },
    { id: 5, image: "/assets/images/capture5.png", title: "Tableau de Bord", description: "Vue synthétique des indicateurs clés." },
    { id: 6, image: "/assets/images/capture6.png", title: "Exportation", description: "Export des résultats en différents formats." },
    { id: 7, image: "/assets/images/capture7.png", title: "Configuration", description: "Paramétrage des sources de données." },
];

const DataAnalysisDetails = () => {
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

                    <h1 className="project-title reveal active-reveal">Analyse de Données</h1>
                    <p className="project-subtitle reveal active-reveal">Script Python pour l'automatisation de rapports et l'analyse de tendances.</p>

                    <div className="project-meta reveal active-reveal">
                        <div className="meta-item">
                            <i className="fas fa-code"></i>
                            <span>Python, Pandas, Matplotlib</span>
                        </div>
                        <div className="meta-item">
                            <i className="fas fa-database"></i>
                            <span>CSV / SQL</span>
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
                            Ce projet d'analyse de données vise à transformer des données brutes en informations exploitables.
                            En utilisant la puissance de Python et de ses bibliothèques (Pandas, Matplotlib), il permet d'automatiser
                            le traitement de grands volumes de données, de générer des visualisations claires et de produire des rapports détaillés
                            pour faciliter la prise de décision stratégique.
                        </p>
                    </div>

                </div>
            </section>

            <section className="section contact">
                <div className="container reveal active-reveal">
                    <h2 className="section-title">Intéressé par ce projet ?</h2>
                    <div className="contact-content">
                        <p>N'hésitez pas à me contacter pour discuter de vos besoins en analyse de données.</p>
                        <a href="mailto:votre.email@example.com" className="btn btn-primary">Me contacter</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DataAnalysisDetails;
