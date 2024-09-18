import React, { useEffect, useState } from 'react';
import './About.css';
import aboutImage from '../../assets/logo.png'; // Replace with your actual image

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const section = document.getElementById('about');
        const rect = section.getBoundingClientRect();
        // Set visibility based on the section's position
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on initial render
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={`about-section ${isVisible ? 'visible' : 'hidden'}`} id="about">
            <div className="about-container">
                <div className="about-image">
                    <img src={aboutImage} alt="About Aluminum Arts" />
                </div>

                <div className="about-content">
                    <h2>Our Legacy of Craftsmanship</h2>
                    <p>
                        With over 50 years of experience, Aluminum Arts has been a trusted name in creating high-quality, durable, and artistic aluminum structures.
                        Our commitment to precision, innovation, and customer satisfaction is at the heart of everything we do.
                    </p>
                    <p>
                        As a family-owned business, we take pride in every project we undertake, from custom gates to architectural masterpieces. Our passion for craftsmanship is reflected in every detail.
                    </p>
                    <a href="#services" className="cta-btn">Discover Our Services</a>
                </div>
            </div>
        </section>
    );
};

export default About;
