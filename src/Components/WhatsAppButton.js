import React from 'react';
import '../Styling/WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+31681677899"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      Click here to message on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
