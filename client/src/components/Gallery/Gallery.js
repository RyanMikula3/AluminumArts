import React, { useEffect, useState } from 'react';
import './Gallery.css';
import logo from '../../assets/gallery/img1.jpg'; // Temporary logo for images

const Gallery = () => {
    const [visibleItems, setVisibleItems] = useState([]);

    const galleryItems = [
        { id: 1, src: logo, alt: 'Gallery Image 1', description: 'Our custom aluminum gates are designed with precision and durability to enhance any property.', layout: 'grid-large' },
        { id: 2, src: logo, alt: 'Gallery Image 2', description: 'Beautiful aluminum fences that combine strength and elegance for your outdoor spaces.', layout: 'grid-small' },
        { id: 3, src: logo, alt: 'Gallery Image 3', description: 'Sleek and modern architectural aluminum solutions, tailored to your unique style.', layout: 'grid-large' },
        { id: 4, src: logo, alt: 'Gallery Image 4', description: 'Our team creates aluminum structures that stand the test of time with outstanding craftsmanship.', layout: 'grid-small' },
        { id: 5, src: logo, alt: 'Gallery Image 5', description: 'Innovative aluminum designs that merge functionality and beauty.', layout: 'grid-small' },
        { id: 6, src: logo, alt: 'Gallery Image 6', description: 'Precision-engineered aluminum gates that offer security without compromising aesthetics.', layout: 'grid-large' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.gallery-item');
            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setVisibleItems((prev) => {
                        if (!prev.includes(index)) {
                            return [...prev, index]; // Add index to visibleItems
                        }
                        return prev;
                    });
                } else {
                    setVisibleItems((prev) => prev.filter(i => i !== index)); // Remove index when not visible
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on initial render
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="gallery-section" id="gallery">
            <div className="gallery-background"></div> {/* Add background here */}
            <div className="gallery-container">
                <h2>Our Work Gallery</h2>
                <p className="gallery-description">
                    A showcase of our finest craftsmanship in aluminum artistry.
                </p>

                <div className="gallery-grid">
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`gallery-item ${item.layout} ${visibleItems.includes(index) ? 'visible' : ''}`}
                        >
                            <img src={item.src} alt={item.alt} className="gallery-image" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
