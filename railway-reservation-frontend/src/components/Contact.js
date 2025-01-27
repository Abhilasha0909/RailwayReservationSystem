import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <header className="header">
        <h1 className="title">Contact Us</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/account" className="nav-link">My Account</Link>
          <Link to="/help" className="nav-link">Help</Link>
        </nav>
      </header>
      <main className="main">
        <section id="contact-form" className="form-section">
          <h2 className="section-title">Get in Touch</h2>
          <form className="form">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" name="name" required className="form-input" />
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" name="email" required className="form-input" />
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea id="message" name="message" required className="form-textarea"></textarea>
            <button type="submit" className="form-button">Send</button>
          </form>
        </section>
        <section id="contact-info" className="info-section">
          <h3 className="section-title">Contact Information</h3>
          <p className="info-text">Email: <a href="mailto:support@railwayreservation.com" className="info-link">support@railwayreservation.com</a></p>
          <p className="info-text">Phone: <a href="tel:+1234567890" className="info-link">+123 456 7890</a></p>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default Contact;