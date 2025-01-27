import React from 'react';
import { Link } from 'react-router-dom';

function Account() {
  return (
    <div>
      <header>
        <h1>User Account</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>
      <main>
        <section id="login">
          <h2>Login</h2>
          <form action="/dashboard" method="POST">
            <label htmlFor="username">Username/Email:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Login</button>
          </form>
          <Link to="/forgot-password">Forgot Password?</Link>
        </section>

        <section id="registration">
          <h2>New User Registration</h2>
          <form action="/dashboard" method="POST">
            <label htmlFor="reg-name">Name:</label>
            <input type="text" id="reg-name" name="reg-name" required />
            <label htmlFor="reg-email">Email:</label>
            <input type="email" id="reg-email" name="reg-email" required />
            <label htmlFor="reg-password">Password:</label>
            <input type="password" id="reg-password" name="reg-password" required />
            <label htmlFor="reg-contact">Contact:</label>
            <input type="text" id="reg-contact" name="reg-contact" required />
            <button type="submit">Register</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default Account;