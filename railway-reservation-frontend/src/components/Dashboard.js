import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="header">
        <h1 className="title">User Dashboard</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/help" className="nav-link">Help</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>
      </header>
      <main className="main">
        <section id="profile" className="profile-section">
          <h2 className="section-title">Profile Information</h2>
          <form className="form">
            <label htmlFor="profile-name" className="form-label">Name:</label>
            <input type="text" id="profile-name" name="profile-name" value="John Doe" className="form-input" />
            <label htmlFor="profile-email" className="form-label">Email:</label>
            <input type="email" id="profile-email" name="profile-email" value="john.doe@example.com" className="form-input" />
            <label htmlFor="profile-contact" className="form-label">Contact:</label>
            <input type="text" id="profile-contact" name="profile-contact" value="1234567890" className="form-input" />
            <button type="submit" className="form-button">Update Profile</button>
          </form>
        </section>

        <section id="booking-history" className="history-section">
          <h2 className="section-title">Booking History</h2>
          <ul className="history-list">
            <li className="history-item">
              <p>Booking Reference: <strong>ABC123</strong></p>
              <p>Train: <strong>1234</strong> | Seats: <strong>2A, 2B</strong></p>
              <button onClick={() => window.print()} className="history-button">Print</button>
              <button className="history-button">Cancel</button>
            </li>
            {/* Add more booking history items here */}
          </ul>
        </section>

        <section id="preferences" className="preferences-section">
          <h2 className="section-title">Saved Preferences</h2>
          <form className="form">
            <label htmlFor="preferred-class" className="form-label">Preferred Class:</label>
            <select id="preferred-class" name="preferred-class" className="form-select">
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
            <label htmlFor="frequent-routes" className="form-label">Frequent Routes:</label>
            <input type="text" id="frequent-routes" name="frequent-routes" value="Source - Destination" className="form-input" />
            <button type="submit" className="form-button">Update Preferences</button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default Dashboard;