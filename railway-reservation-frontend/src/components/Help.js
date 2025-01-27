import React from 'react';
import { Link } from 'react-router-dom';
import './Help.css';

function Help() {
  return (
    <div className="help-container">
      <header className="header">
        <h1 className="title">Help & FAQ</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/account" className="nav-link">My Account</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>
      </header>
      <main className="main">
        <section id="faq" className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <article className="faq-item">
            <h3 className="faq-question">How do I book a ticket?</h3>
            <p className="faq-answer">You can book a ticket by searching for trains, selecting the desired train, and completing the booking process.</p>
          </article>
          {/* Add more FAQs here */}
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default Help;