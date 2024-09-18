import React from 'react';
import './Home.css';
import image from '../../assets/logo.png'; // Your image

const Home = () => {
    return (
        <section className="home-section">
            <div className="home-container">
                <div className="home-content" data-aos="fade-left">
                    <h2>Aluminum Artisans Since 1973</h2>
                    <p>
                        With over 50 years of experience, we’ve built a legacy of precision, innovation,
                        and craftsmanship in the aluminum industry. We’re passionate about delivering
                        exceptional products that stand the test of time, whether it's custom gates,
                        fences, or modern architectural designs.
                    </p>
                    <a href="#about" className="cta-btn">Learn More</a>
                </div>

                <div className="home-image" data-aos="fade-right">
                    <img
                        src={image}
                        alt="Craftsmanship"
                    />
                </div>
            </div>

            <div className="home-footer-text" data-aos="fade-up">
                <p>
                    Our work is rooted in family values, and we carry on the legacy of providing durable, artistic,
                    and precision-crafted aluminum structures for our clients. We believe in more than just
                    construction—we create lasting art.
                </p>
            </div>
        </section>
    );
};

export default Home;
