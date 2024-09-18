import React from 'react';
import './Services.css';
import logo from '../../assets/logo.png'; // Temporary logo for all services

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="services-container">
                <h2 data-aos="fade-up">Our Services</h2>
                <p className="services-description" data-aos="fade-up" data-aos-delay="200">
                    Providing exceptional aluminum craftsmanship for over 50 years.
                </p>

                <div className="services-grid">
                    {/* Service 1: Custom Gates */}
                    <div className="service-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-image">
                            <img src={logo} alt="Custom Gates" />
                        </div>
                        <div className="card-content">
                            <h3>Custom Gates</h3>
                            <p>Beautiful and secure custom gates designed to enhance your property's value and security.</p>
                            <a href="#contact" className="cta-btn">Learn More</a>
                        </div>
                    </div>

                    {/* Service 2: Fencing Solutions */}
                    <div className="service-card" data-aos="fade-up" data-aos-delay="400">
                        <div className="card-image">
                            <img src={logo} alt="Fencing Solutions" />
                        </div>
                        <div className="card-content">
                            <h3>Fencing Solutions</h3>
                            <p>Durable, elegant fencing options that combine privacy, style, and lasting quality.</p>
                            <a href="#contact" className="cta-btn">Get a Quote</a>
                        </div>
                    </div>

                    {/* Service 3: Architectural Designs */}
                    <div className="service-card" data-aos="fade-up" data-aos-delay="500">
                        <div className="card-image">
                            <img src={logo} alt="Architectural Designs" />
                        </div>
                        <div className="card-content">
                            <h3>Architectural Designs</h3>
                            <p>Innovative architectural aluminum structures designed to elevate modern projects.</p>
                            <a href="#contact" className="cta-btn">Explore Designs</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
