import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/account">My Account</Link>
          <Link to="/help">Help</Link>
        </nav>
      </header>
      <main>
        <section id="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
        <section id="contact-info">
          <h3>Contact Information</h3>
          <p>Email: support@railwayreservation.com</p>
          <p>Phone: +123 456 7890</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default Contact;