import { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            id: 1,
            image: "/assets/images/LandingPage.png",
            title: "Désignation intélligente de service opérationnel",
            description: "Une plateforme intègre l'Intélligence Artificielle et la géolocalisation pour les services opérationnels.",
            tags: ["Laravel", "React.js", "Tailwind", "Python", "MySQL"],
            link: "/designation-intelligente.html"
        },
        {
            id: 2,
            image: "/assets/images/img11.png",
            title: "Géstion des locations de véhicule",
            description: "Application web pour la gestion des Locations de véhicules en temps réel",
            tags: ["React.js", "Express.js", "MySQL"],
            link: "/gestion-locations"
        },
        {
            id: 3,
            image: "/assets/images/capture7.png",
            title: "Gestion de facturation",
            description: "Analyse et suivi en temps réel des factures issues des compteurs",
            tags: ["Java", "Spring Boot", "MySQL"],
            link: "/analyse-donnees"
        },
        {
            id: 4,
            image: "/assets/images/photo1.png",
            title: "Analyse de données et suggestion de décision intelligente basée sur l'IA",
            description: "Application d'analyse intelligente qui identifie les zones de dangerosité et recommande des décisions stratégiques.",
            tags: ["Python", "React", "LightGBM", "IA"],
            link: "/analyse-ia-decision"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % projects.length;
            visible.push(projects[index]);
        }
        return visible;
    };

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title reveal">Mes Projets</h2>

                <div className="projects-carousel-wrapper">
                    <button className="carousel-nav-btn prev-btn" onClick={prevSlide}>
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <div className="projects-carousel">
                        {getVisibleProjects().map((project) => (
                            <article key={project.id} className="project-card reveal">
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} className="project-cover" />
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, index) => (
                                            <span key={index}>{tag}</span>
                                        ))}
                                    </div>
                                    <Link to={project.link} className="project-link">
                                        Voir le projet <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    <button className="carousel-nav-btn next-btn" onClick={nextSlide}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                <div className="carousel-indicators">
                    {projects.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
