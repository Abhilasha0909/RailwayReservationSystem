import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SearchResults() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/trains')
      .then(response => setTrains(response.data))
      .catch(error => console.error('Error fetching trains', error));
  }, []);

  return (
    <div>
      <header>
        <h1>Available Trains</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/account">My Account</Link>
          <Link to="/help">Help</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>
      <main>
        <section id="results">
          <h2>Trains from [Source] to [Destination] on [Date]</h2>
          <div className="filters">
            <label htmlFor="filter-time">Filter by Time:</label>
            <select id="filter-time">
              <option value="all">All</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>

            <label htmlFor="sort">Sort by:</label>
            <select id="sort">
              <option value="departure">Departure Time</option>
              <option value="arrival">Arrival Time</option>
              <option value="duration">Duration</option>
              <option value="price">Price</option>
            </select>
          </div>

          <ul className="train-list">
            {trains.map(train => (
              <li key={train._id}>
                <Link to={`/train-details/${train._id}`}>
                  <h3>{train.name}</h3>
                  <p>Departure: {train.departureTime} | Arrival: {train.arrivalTime} | Duration: {train.duration} | Classes: {train.classes.join(', ')}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default SearchResults;