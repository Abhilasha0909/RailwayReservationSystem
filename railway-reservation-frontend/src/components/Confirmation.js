import React from 'react';
import { Link } from 'react-router-dom';
import './Confirmation.css';

function Confirmation() {
  return (
    <div className="confirmation-container">
      <header className="header">
        <h1 className="title">Booking Confirmation</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/account" className="nav-link">My Account</Link>
          <Link to="/help" className="nav-link">Help</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>
      </header>
      <main className="main">
        <section id="confirmation-message" className="confirmation-section">
          <h2 className="section-title">Booking Confirmed!</h2>
          <p className="confirmation-text">Your booking reference number is: <strong>ABC123</strong></p>
          <p className="confirmation-text">Download your e-ticket or receive it via email/SMS.</p>
          <button onClick={() => window.print()} className="print-button">Print E-Ticket</button>
        </section>

        <section id="booking-summary" className="summary-section">
          <h3 className="section-title">Booking Summary</h3>
          <p className="summary-text">Train: <strong>1234</strong></p>
          <p className="summary-text">Seats: <strong>2A, 2B</strong></p>
          <p className="summary-text">Passenger: <strong>John Doe</strong></p>
          <p className="summary-text">Fare: <strong>$100</strong></p>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default Confirmation;