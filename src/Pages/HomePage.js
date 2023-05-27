import React from 'react';
import '../Styling/HomePage.css';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>{t('welcome to')}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut libero mauris.</p>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>{t('about us')}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris tellus. Nullam ultrices diam sed dui ultricies, in rutrum justo pulvinar.</p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris tellus. Nullam ultrices diam sed dui ultricies, in rutrum justo pulvinar.</p>
      </section>

      {/* Photo Gallery Section */}
      <section className="gallery">
        <h2>Photo Gallery</h2>
        {/* Photo gallery component or content goes here */}
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        {/* Testimonials component or content goes here */}
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        {/* Contact component or content goes here */}
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2023 Meester Stoffeerders. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
