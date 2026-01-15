import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetPath } from '../utils/assetPath';

const ProjectsFinal = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const projects = [
        {
            id: 1,
            image: getAssetPath("/assets/images/LandingPage.png"),
            title: "Désignation intélligente de service opérationnel",
            description: "Une plateforme intègre l'Intélligence Artificielle et la géolocalisation pour les services opérationnels.",
            tags: ["Laravel", "React.js", "Tailwind", "Python", "MySQL"],
            link: "/designation-intelligente.html",
            icon: "fas fa-user-shield"
        },
        {
            id: 2,
            image: getAssetPath("/assets/images/img11.png"),
            title: "Géstion des locations de véhicule",
            description: "Application web pour la gestion des Locations de véhicules en temps réel",
            tags: ["React.js", "Express.js", "MySQL"],
            link: "/gestion-locations",
            icon: "fas fa-car"
        },
        {
            id: 3,
            image: getAssetPath("/assets/images/capture7.png"),
            title: "Gestion de facturation",
            description: "Analyse et suivi en temps réel des factures issues des compteurs",
            tags: ["JSP", "JavaScript", "MariaDB"],
            link: "/analyse-donnees",
            icon: "fas fa-file-invoice-dollar"
        },
        {
            id: 4,
            image: getAssetPath("/assets/images/photo5.png"),
            title: "Analyse de données et suggestion de décision intelligente basée sur l'IA",
            description: "Application d'analyse intelligente qui identifie les zones de dangerosité et recommande des décisions stratégiques.",
            tags: ["Python", "React", "LightGBM", "IA"],
            link: "/analyse-ia-decision",
            icon: "fas fa-brain"
        },
        {
            id: 5,
            image: getAssetPath("/assets/images/stock1.png"),
            title: "Gestion de Stock CISCO",
            description: "Application de gestion des manuels et kits scolaires pour la CISCO Brickaville.",
            tags: ["Laravel", "VueJS", "MySQL"],
            link: "/gestion-stock",
            icon: "fas fa-boxes"
        }
    ];

    const [activeProject, setActiveProject] = useState(projects[0]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1200) {
                setItemsPerPage(2); // Show 2 cards on medium screens
            } else {
                setItemsPerPage(4); // Show 4 cards on large screens
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Sync activeProject with currentIndex when scrolling
    useEffect(() => {
        setActiveProject(projects[currentIndex]);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }

    const handleCardClick = (project) => {
        setActiveProject(project);
    };

    const getVisibleProjects = () => {
        let visible = [];
        for (let i = 0; i < itemsPerPage; i++) {
            const index = (currentIndex + i) % projects.length;
            visible.push(projects[index]);
        }
        return visible;
    };

    return (
        <section id="projects" className="section projects">
            <div className="container" style={{ maxWidth: '1600px' }}>
                <h2 className="section-title reveal">Mes Projets</h2>

                {/* Featured Project Section - Dynamic based on activeProject */}
                <div className="featured-project reveal" style={{ marginBottom: '4rem', maxWidth: '1200px', margin: '0 auto 4rem auto' }}>
                    <div className="featured-content">
                        {/* Removed icon as per request, using image on the right */}
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeProject.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3>{activeProject.title}</h3>
                                <p>{activeProject.description}</p>
                                <div className="project-tags">
                                    {activeProject.tags.map((tag, idx) => (
                                        <span key={idx}>{tag}</span>
                                    ))}
                                </div>
                                <Link to={activeProject.link} className="btn btn-primary">Voir Détails</Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Featured Image on the Right */}
                    <div className="featured-image-container" style={{
                        borderRadius: '20px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        height: '300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#1a1025'
                    }}>
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={activeProject.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                src={activeProject.image}
                                alt={activeProject.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </AnimatePresence>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="projects-carousel-wrapper reveal">
                    <button onClick={prevSlide} className="carousel-nav-btn"><i className="fas fa-chevron-left"></i></button>

                    <div className="projects-carousel" style={{ display: 'grid', gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`, gap: '2rem' }}>
                        <AnimatePresence mode='popLayout'>
                            {getVisibleProjects().map((project) => (
                                <motion.article
                                    key={`${project.id}-${currentIndex}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    className={`project-card-new ${activeProject.id === project.id ? 'active-card' : ''}`}
                                    onClick={() => handleCardClick(project)}
                                    style={{
                                        cursor: 'pointer',
                                        border: activeProject.id === project.id ? '1px solid var(--primary-color)' : '1px solid transparent',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div className="card-icon">
                                        <i className={project.icon}></i>
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx}>{tag}</span>
                                        ))}
                                    </div>
                                    <Link to={project.link} className="project-link" style={{ marginTop: 'auto', color: '#8750f7' }} onClick={(e) => e.stopPropagation()}>
                                        Voir <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
                                    </Link>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>

                    <button onClick={nextSlide} className="carousel-nav-btn"><i className="fas fa-chevron-right"></i></button>
                </div>

            </div>
        </section>
    );
};

export default ProjectsFinal;
