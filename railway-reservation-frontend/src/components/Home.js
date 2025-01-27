import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header>
        <h1>Railway Reservation System</h1>
        <nav>
          <Link to="/account">My Account</Link>
          <Link to="/help">Help</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>
      <main>
        <section id="search">
          <h2>Search Trains</h2>
          <form action="/search-results" method="GET">
            <label htmlFor="source">Source Station:</label>
            <input type="text" id="source" name="source" required />
            <label htmlFor="destination">Destination Station:</label>
            <input type="text" id="destination" name="destination" required />
            <label htmlFor="date">Date of Journey:</label>
            <input type="date" id="date" name="date" required />
            <label htmlFor="class">Class of Travel:</label>
            <select id="class" name="class">
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
            <button type="submit">Search</button>
          </form>
        </section>
        <section id="promotions">
          <h2>Promotions</h2>
          <p>Check out our latest discounts and offers!</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default Home;