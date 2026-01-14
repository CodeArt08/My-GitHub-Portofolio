import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active-reveal');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, {
            root: null,
            threshold: 0.15, // Trigger when 15% of the element is visible
            rootMargin: "0px"
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });

        return () => {
            revealElements.forEach(el => {
                revealObserver.unobserve(el);
            });
        };
    }, []);

    return (
        <div className="home-page">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
