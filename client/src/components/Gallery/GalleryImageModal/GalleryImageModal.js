import React from 'react';
import './GalleryImageModal.css';

const GalleryImageModal = ({ image, onClose }) => {
    return (
        <div className="modal" onClick={onClose}>
            <span className="close">&times;</span>
            <img className="modal-content" src={image} alt="Selected project" />
        </div>
    );
}

export default GalleryImageModal;
