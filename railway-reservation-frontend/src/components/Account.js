import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css';

function Account() {
  return (
    <div className="account-container">
      <header className="header">
        <h1 className="title">User Account</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/help" className="nav-link">Help</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>
      </header>
      <main className="main">
        <section id="login" className="login-section">
          <h2 className="section-title">Login</h2>
          <form action="/dashboard" method="POST" className="form">
            <label htmlFor="username" className="form-label">Username/Email:</label>
            <input type="text" id="username" name="username" required className="form-input" />
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" id="password" name="password" required className="form-input" />
            <button type="submit" className="form-button">Login</button>
          </form>
          <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
        </section>

        <section id="registration" className="registration-section">
          <h2 className="section-title">New User Registration</h2>
          <form action="/dashboard" method="POST" className="form">
            <label htmlFor="reg-name" className="form-label">Name:</label>
            <input type="text" id="reg-name" name="reg-name" required className="form-input" />
            <label htmlFor="reg-email" className="form-label">Email:</label>
            <input type="email" id="reg-email" name="reg-email" required className="form-input" />
            <label htmlFor="reg-password" className="form-label">Password:</label>
            <input type="password" id="reg-password" name="reg-password" required className="form-input" />
            <label htmlFor="reg-contact" className="form-label">Contact:</label>
            <input type="text" id="reg-contact" name="reg-contact" required className="form-input" />
            <button type="submit" className="form-button">Register</button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default Account;