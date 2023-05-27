import React, { useState } from 'react';
import '../Styling/ContactForm.css'
import WhatsAppButton from './WhatsAppButton';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., sending data to backend, displaying success message, etc.)
        console.log(formData);
        // Reset form fields after submission
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div>
            <h2>{t('contact')}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            <WhatsAppButton />
        </div>
    );
};

export default ContactForm;
