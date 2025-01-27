import React from 'react';
import { Link } from 'react-router-dom';

function Help() {
  return (
    <div>
      <header>
        <h1>Help & FAQ</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/account">My Account</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>
      <main>
        <section id="faq">
          <h2>Frequently Asked Questions</h2>
          <article>
            <h3>How do I book a ticket?</h3>
            <p>You can book a ticket by searching for trains, selecting the desired train, and completing the booking process.</p>
          </article>
          {/* Add more FAQs here */}
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default Help;