import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationType, setNotificationType] = useState('success'); // 'success' or 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceId = 'service_2y8wxkr';
        const templateId = 'template_y2bfzbs';
        const publicKey = 'IOUhbkeE0PcaaDBia';

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: "Nouveau message de " + formData.name, // Dynamic subject
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setNotificationType('success');
            setShowNotification(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setShowNotification(false), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setNotificationType('error');
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section contact" style={{ position: 'relative' }}>
            {/* Notification Popup */}
            <AnimatePresence>
                {showNotification && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -50, x: '-50%' }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 1000,
                            background: notificationType === 'success' ? 'rgba(135, 80, 247, 0.95)' : 'rgba(220, 53, 69, 0.95)',
                            color: '#fff',
                            padding: '1rem 2rem',
                            borderRadius: '12px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            minWidth: '300px',
                            justifyContent: 'center'
                        }}
                    >
                        <i className={notificationType === 'success' ? "fas fa-check-circle" : "fas fa-exclamation-circle"} style={{ fontSize: '1.5rem' }}></i>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{notificationType === 'success' ? 'Succès !' : 'Erreur'}</h4>
                            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>
                                {notificationType === 'success' ? 'Votre message a été envoyé avec succès.' : 'Une erreur est survenue. Veuillez réessayer.'}
                            </p>
                        </div>
                        <button
                            onClick={() => setShowNotification(false)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#fff',
                                cursor: 'pointer',
                                marginLeft: 'auto',
                                fontSize: '1.2rem'
                            }}
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container reveal">
                <h2 className="section-title">Me Contacter</h2>

                <div className="contact-container">
                    {/* Left Column: Contact Info */}
                    <div className="contact-info-column">
                        <div className="contact-card">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Email</h3>
                                <p>mahaleonydiary@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Téléphone</h3>
                                <p>+261 33 66 973 60</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Localisation</h3>
                                <p>Fianarantsoa, Madagascar</p>
                            </div>
                        </div>

                        <div className="social-card">
                            <h3>Réseaux Sociaux</h3>
                            <div className="social-icons">
                                <a href="https://github.com/CodeArt08" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/mahaleo-ny-diary-325459379/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                                <a href="https://www.facebook.com/diarii.mahleo" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="contact-form-column">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Votre nom"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="votre@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Votre message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <span><i className="fas fa-spinner fa-spin"></i> Envoi en cours...</span>
                                ) : (
                                    'Envoyer'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
