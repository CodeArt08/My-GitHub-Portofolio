const Experience = () => {
    return (
        <section id="experience" className="section experience">
            <div className="container">

                <div className="experience-grid">
                    {/* Professional Experience */}
                    <div className="experience-column">
                        <h2 className="section-title reveal">Expériences Professionnelles</h2>
                        <div className="timeline">

                            <div className="timeline-item reveal">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Stagiaire</h3>
                                    <span className="company">CIRGN Fianarantsoa</span>
                                    <span className="period">Août 2025 – Novembre 2025</span>
                                    <p>Conception et Réalisation d’une Plateforme Web Intelligente intégrant la Géolocalisation pour la Gestion des Services Opérationnels.</p>
                                    <p style={{ fontSize: '0.9rem', color: '#8750f7', marginTop: '0.5rem' }}>Technologies : Laravel (PHP), Python, ReactJS, SGBD MySQL</p>
                                </div>
                            </div>

                            <div className="timeline-item reveal">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Stagiaire</h3>
                                    <span className="company">CISCO Brickaville</span>
                                    <span className="period">Décembre 2024 à novembre 2025</span>
                                    <p>Conception et réalisation d'une application web de gestion des entrées et sorties des manuels et kits scolaires</p>
                                </div>
                            </div>

                            <div className="timeline-item reveal">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Développeur logiciel à la SEMIPI</h3>
                                    <span className="company">Sekoly Miaramila-Pirenena Fianarantsoa, HM, Madagascar</span>
                                    <span className="period">D'avril 2023 à mai 2025</span>
                                    <p>Création et intégration d'un logiciel d'AET (Ancien Enfant de Troupe)</p>
                                </div>
                            </div>

                            <div className="timeline-item reveal">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Stagiaire</h3>
                                    <span className="company">JIRAMA Brickaville</span>
                                    <span className="period">Août 2023 – Novembre 2023</span>
                                    <p>Gestion de facturation</p>
                                    <p style={{ fontSize: '0.9rem', color: '#8750f7', marginTop: '0.5rem' }}>Technologies : JSP, JavaScript, MariaDB</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Education */}
                    <div className="experience-column">
                        <h2 className="section-title reveal">Diplômes et Formations</h2>
                        <div className="timeline">

                            <div className="timeline-item reveal">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Diplôme d’Etude de la Langue Française B2, C1 (DELF B2, DALF C1)</h3>
                                    <span className="period">2019-2021</span>
                                    <p>Obtention de Diplôme d’Etude de la Langue Française B2, C1.</p>
                                </div>
                            </div>

                            <div className="timeline-item reveal">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Baccalauréat série C</h3>
                                    <span className="company">SEMIPI Fianarantsoa, HM, Madagascar</span>
                                    <span className="period">De septembre 2021 à juillet 2022</span>
                                    <p>2021-2022 : Diplôme Baccalauréat série C avec mention : Très Bien</p>
                                </div>
                            </div>

                            <div className="timeline-item reveal">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>Diplôme de Licence Professionnnelle en Informatique</h3>
                                    <span className="company">Ecole Nationale d'Informatique (ENI) Fianarantsoa, HM, Madagascar</span>
                                    <span className="period">Depuis janvier 2023</span>
                                    <p>Formation en informatique, développement web et intégration système</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
