import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetailsLayout = ({ title, subtitle, meta, slides, description, contactText, githubLink }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="project-details-page">
            <section className="section" style={{ paddingTop: '8rem' }}>
                <div className="container">
                    <Link to="/#projects" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-light)', fontWeight: '500' }}>
                        <i className="fas fa-arrow-left"></i> Retour aux projets
                    </Link>

                    {/* Hero Carousel */}
                    <div className="carousel-container reveal active-reveal" style={{ marginBottom: '4rem' }}>
                        <div className="carousel-wrapper" style={{ minHeight: '60vh' }}>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="carousel-slide"
                                    style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                >
                                    <div
                                        className="detail-image-container"
                                        onClick={openLightbox}
                                        style={{ width: '100%', height: '500px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(135, 80, 247, 0.2)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', marginBottom: '2rem', cursor: 'pointer' }}
                                    >
                                        <img
                                            src={slides[currentIndex].image}
                                            alt={slides[currentIndex].title}
                                            className="detail-img"
                                            style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#1a1025' }}
                                        />
                                    </div>
                                    <div className="detail-block" style={{ textAlign: 'center', maxWidth: '800px' }}>
                                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--white)' }}>{slides[currentIndex].title}</h2>
                                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>{slides[currentIndex].description}</p>
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
                            {slides.map((slide, index) => (
                                <span
                                    key={slide.id}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>

                    {/* Lightbox Modal */}
                    <AnimatePresence>
                        {isLightboxOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="lightbox-overlay"
                                onClick={closeLightbox}
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    zIndex: 1000,
                                    padding: '2rem'
                                }}
                            >
                                <button
                                    onClick={closeLightbox}
                                    style={{
                                        position: 'absolute',
                                        top: '2rem',
                                        right: '2rem',
                                        background: 'transparent',
                                        border: 'none',
                                        color: 'white',
                                        fontSize: '2rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                                <motion.img
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0.8 }}
                                    src={slides[currentIndex].image}
                                    alt={slides[currentIndex].title}
                                    style={{
                                        maxWidth: '90%',
                                        maxHeight: '90%',
                                        objectFit: 'contain',
                                        borderRadius: '8px',
                                        boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                                    }}
                                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Project Info */}
                    <div className="project-info-section" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h1 className="project-title reveal active-reveal" style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>{title}</h1>
                        <p className="project-subtitle reveal active-reveal" style={{ fontSize: '1.2rem', color: 'var(--text-light)', textAlign: 'center', marginBottom: '3rem' }}>{subtitle}</p>

                        <div className="project-meta reveal active-reveal" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                            {meta.map((item, index) => (
                                <div key={index} className="meta-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                    <i className={item.icon} style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}></i>
                                    <span style={{ color: 'var(--white)', fontWeight: '500' }}>{item.text}</span>
                                </div>
                            ))}
                        </div>

                        {githubLink && (
                            <div className="github-link-section reveal active-reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                <a
                                    href={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.8rem',
                                        padding: '0.8rem 2rem',
                                        background: 'var(--dark-bg)',
                                        border: '1px solid var(--primary-color)',
                                        borderRadius: '50px',
                                        color: 'var(--white)',
                                        fontSize: '1.1rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = 'var(--primary-color)';
                                        e.currentTarget.style.boxShadow = '0 0 15px rgba(135, 80, 247, 0.4)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'var(--dark-bg)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <i className="fab fa-github" style={{ fontSize: '1.3rem' }}></i>
                                    Voir le code sur GitHub
                                </a>
                            </div>
                        )}

                        <div className="project-description reveal active-reveal" style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <h3 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>À propos du projet</h3>
                            {description}
                        </div>
                    </div>

                </div>
            </section>

            <section className="section contact">
                <div className="container reveal active-reveal">
                    <h2 className="section-title">Intéressé par ce projet ?</h2>
                    <div className="contact-content">
                        <p>{contactText || "N'hésitez pas à me contacter pour discuter de ce projet."}</p>
                        <a href="mailto:votre.email@example.com" className="btn btn-primary">Me contacter</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetailsLayout;
