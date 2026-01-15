const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title reveal">Compétences</h2>

                {/* Skills Categories Grid */}
                <div className="skills-categories-grid">
                    {/* Langages */}
                    <div className="skill-category-card reveal">
                        <h3>Langages</h3>
                        <div className="skill-list">
                            
                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>JavaScript</span>
                                    <span>90%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '90%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>PHP</span>
                                    <span>80%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '80%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>Java</span>
                                    <span>70%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '70%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>C++</span>
                                    <span>70%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '70%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>HTML/CSS</span>
                                    <span>95%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '95%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>Python</span>
                                    <span>85%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '85%' }}></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="skill-category-card reveal">
                        <h3>Frameworks</h3>
                        <div className="skill-list">
                            
                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>React</span>
                                    <span>85%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '85%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>Vue.js</span>
                                    <span>75%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '75%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>Laravel</span>
                                    <span>75%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '75%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>Node.js</span>
                                    <span>75%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '75%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>Express</span>
                                    <span>70%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '70%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>Flutter</span>
                                    <span>70%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '70%' }}></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Outils */}
                    <div className="skill-category-card reveal">
                        <h3>Outils</h3>
                        <div className="skill-list">
                            
                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>Figma</span>
                                    <span>80%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '80%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>Git</span>
                                    <span>85%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '85%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>MySQL</span>
                                    <span>80%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '80%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>PostgreSQL</span>
                                    <span>75%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '75%' }}></div>
                                </div>
                            </div>

                            <div className="mastery-item">
                                <div className="mastery-header">
                                    <span>MongoDB</span>
                                    <span>70%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '70%' }}></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
