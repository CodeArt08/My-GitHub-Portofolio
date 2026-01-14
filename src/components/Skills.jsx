const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title reveal">Mes Compétences</h2>
                <div className="skills-grid">
                    <div className="skill-card reveal">
                        <i className="fab fa-laravel"></i>
                        <h3>Laravel</h3>
                    </div>
                    <div className="skill-card reveal">
                        <i className="fab fa-react"></i>
                        <h3>React</h3>
                    </div>
                    <div className="skill-card reveal">
                        <i className="fab fa-vuejs"></i>
                        <h3>Vue.js</h3>
                    </div>
                    <div className="skill-card reveal">
                        <i className="fab fa-python"></i>
                        <h3>Python</h3>
                    </div>
                    <div className="skill-card reveal">
                        <i className="fab fa-java"></i>
                        <h3>Java</h3>
                    </div>
                    <div className="skill-card reveal">
                        <i className="fas fa-database"></i>
                        <h3>SQL / NoSQL</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
