import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <header>
        <h1>User Dashboard</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>
      <main>
        <section id="profile">
          <h2>Profile Information</h2>
          <form>
            <label htmlFor="profile-name">Name:</label>
            <input type="text" id="profile-name" name="profile-name" value="John Doe" />
            <label htmlFor="profile-email">Email:</label>
            <input type="email" id="profile-email" name="profile-email" value="john.doe@example.com" />
            <label htmlFor="profile-contact">Contact:</label>
            <input type="text" id="profile-contact" name="profile-contact" value="1234567890" />
            <button type="submit">Update Profile</button>
          </form>
        </section>

        <section id="booking-history">
          <h2>Booking History</h2>
          <ul>
            <li>
              <p>Booking Reference: ABC123</p>
              <p>Train: 1234 | Seats: 2A, 2B</p>
              <button onClick={() => window.print()}>Print</button>
              <button>Cancel</button>
            </li>
            {/* Add more booking history items here */}
          </ul>
        </section>

        <section id="preferences">
          <h2>Saved Preferences</h2>
          <form>
            <label htmlFor="preferred-class">Preferred Class:</label>
            <select id="preferred-class" name="preferred-class">
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
            <label htmlFor="frequent-routes">Frequent Routes:</label>
            <input type="text" id="frequent-routes" name="frequent-routes" value="Source - Destination" />
            <button type="submit">Update Preferences</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default Dashboard;