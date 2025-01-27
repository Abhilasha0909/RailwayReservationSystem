import React from 'react';
import { Link } from 'react-router-dom';

function Confirmation() {
  return (
    <div>
      <header>
        <h1>Booking Confirmation</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/account">My Account</Link>
          <Link to="/help">Help</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>
      <main>
        <section id="confirmation-message">
          <h2>Booking Confirmed!</h2>
          <p>Your booking reference number is: ABC123</p>
          <p>Download your e-ticket or receive it via email/SMS.</p>
          <button onClick={() => window.print()}>Print E-Ticket</button>
        </section>

        <section id="booking-summary">
          <h3>Booking Summary</h3>
          <p>Train: 1234</p>
          <p>Seats: 2A, 2B</p>
          <p>Passenger: John Doe</p>
          <p>Fare: $100</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default Confirmation;