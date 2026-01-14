const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container reveal">
                <h2 className="section-title">Me Contacter</h2>
                <div className="contact-content">
                    <p>Vous avez un projet en tête ou vous souhaitez simplement échanger ? N'hésitez pas à me contacter.
                    </p>
                    <a href="mailto:votre.email@example.com" className="btn btn-primary">Envoyer un email</a>

                    <div className="social-links">
                        <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
