import { getAssetPath } from '../utils/assetPath';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text reveal">
                    <span className="greeting">Bonjour, je suis</span>
                    <h1 className="name">Développeur Fullstack</h1>
                    <p className="description">Spécialisé en PHP/Laravel, JavaScript (React/Node.js) et Python. Je crée des solutions web
                        modernes, performantes et intuitives.</p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn btn-primary">Voir mes projets</a>
                        <a href="#contact" className="btn btn-secondary">Me contacter</a>
                    </div>

                    <div className="stats-bar">
                        <div className="stat-item">
                            <h3>3+</h3>
                            <p>Années d'Expérience</p>
                        </div>
                        <div className="stat-item">
                            <h3>10+</h3>
                            <p>Projets Réalisés</p>
                        </div>
                        <div className="stat-item">
                            <h3>5</h3>
                            <p>Langages Maîtrisés</p>
                        </div>
                    </div>
                </div>
                <div className="hero-image reveal">
                    <div className="img-container">
                        <img src={getAssetPath('/assets/images/profile.png')} alt="Photo de profil" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
