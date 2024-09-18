import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once or every time you scroll
        });
    }, []);

    return (
        <div className="App">
            <Navbar />
            <div data-aos="fade-up">
                <Home />
            </div>
            <div data-aos="fade-up">
                <About />
            </div>
            <div data-aos="fade-up">
                <Services />
            </div>
            <div data-aos="fade-up">
                <Gallery />
            </div>
            <div data-aos="fade-up">
                <Contact />
            </div>
        </div>
    );
}

export default App;
