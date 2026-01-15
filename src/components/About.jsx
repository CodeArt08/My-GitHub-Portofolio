const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container reveal">
                <h2 className="section-title">À Propos</h2>
                <div className="about-grid">
                    <div className="about-left">
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>HARIMBOAHANGY Mahaleo Ny Diary Vatosoa</h3>
                        <p className="about-description">
                            Développeur web diplômé en informatique de l’ENI, spécialisé en Laravel/PHP et JavaScript (React, Vue.js, Node.js). Passionné, rigoureux et créatif, je conçois des applications web modernes, performantes et orientées utilisateur, avec une attention particulière portée à la qualité du code et à l’expérience utilisateur.
                        </p>

                        <div className="info-grid">
                            <div className="info-card">
                                <span className="info-label">Email</span>
                                <span className="info-value">mahaleonydiaty@gmail.com</span>
                            </div>
                            <div className="info-card">
                                <span className="info-label">Localisation</span>
                                <span className="info-value">Fianarantsoa, Madagascar</span>
                            </div>
                            <div className="info-card">
                                <span className="info-label">WhatsApp</span>
                                <span className="info-value">+261 38 66 973 60</span>
                            </div>
                            <div className="info-card">
                                <span className="info-label">Situation matrimoniale</span>
                                <span className="info-value">Célibataire</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-right">
                        <div className="atouts-card">
                            <h3>Atouts</h3>
                            <ul className="atouts-list">
                                <li>Dynamique</li>
                                <li>Adaptabilité</li>
                                <li>Créatif</li>
                                <li>Travail en équipe</li>
                                <li>Bonne gestion du temps</li>
                                <li>Capacité d’écoute</li>
                                <li>Fiabilité</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
