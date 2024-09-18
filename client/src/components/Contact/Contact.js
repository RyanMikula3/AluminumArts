import React, { useState } from 'react';
import './Contact.css'; // Ensure you create a CSS file for styles
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                setError('');
            } else {
                throw new Error('Failed to send message.');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="contact-section">
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out directly:</p>
            <div className="contact-info">
                <div className="contact-item">
                    <FaEnvelope className="icon" />
                    <a href="mailto:peytonjackcarter@gmail.com">peytonjackcarter@gmail.com</a>
                </div>
                <div className="contact-item">
                    <FaPhone className="icon" />
                    <span>(123) 456-7890</span> {/* Update with your actual phone number */}
                </div>
                <div className="contact-item">
                    <FaMapMarkerAlt className="icon" />
                    <span>123 Aluminum St, Metal City, CA 12345</span> {/* Update with your actual address */}
                </div>
            </div>
            <p>Or, fill out the form below!</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                {success && <p className="success-message">Message sent successfully!</p>}
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
