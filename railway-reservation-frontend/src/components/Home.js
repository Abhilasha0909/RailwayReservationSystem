import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Railway Reservation System</h1>
        <nav className="nav">
          <Link to="/account" className="nav-link">My Account</Link>
          <Link to="/help" className="nav-link">Help</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>
      </header>
      <main className="main">
        <section id="search" className="search-section">
          <h2 className="section-title">Search Trains</h2>
          <form action="/search-results" method="GET" className="search-form">
            <label htmlFor="source" className="form-label">Source Station:</label>
            <input type="text" id="source" name="source" required className="form-input" />
            <label htmlFor="destination" className="form-label">Destination Station:</label>
            <input type="text" id="destination" name="destination" required className="form-input" />
            <label htmlFor="date" className="form-label">Date of Journey:</label>
            <input type="date" id="date" name="date" required className="form-input" />
            <label htmlFor="class" className="form-label">Class of Travel:</label>
            <select id="class" name="class" className="form-select">
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
            <button type="submit" className="form-button">Search</button>
          </form>
        </section>
        <section id="promotions" className="promotions-section">
          <h2 className="section-title">Promotions</h2>
          <p className="promotions-text">Check out our latest discounts and offers!</p>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default Home;