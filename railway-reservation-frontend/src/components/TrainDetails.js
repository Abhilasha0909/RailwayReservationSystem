import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TrainDetails() {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/trains/${trainId}`)
      .then(response => setTrain(response.data))
      .catch(error => console.error('Error fetching train details', error));
  }, [trainId]);

  const handleProceed = () => {
    navigate('/passenger-info');
  };

  return (
    <div>
      <header>
        <h1>Train Details</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/account">My Account</Link>
          <Link to="/help">Help</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>
      <main>
        {train ? (
          <div>
            <section id="train-info">
              <h2>{train.name}</h2>
              <p>Route: {train.source} to {train.destination}</p>
              <p>Departure: {train.departureTime}</p>
              <p>Arrival: {train.arrivalTime}</p>
              <p>Duration: {train.duration}</p>
              <p>Classes Available: {train.classes.join(', ')}</p>
            </section>

            <section id="seat-availability">
              <h3>Seat Availability</h3>
              {train.seatAvailability.map((availability, index) => (
                <p key={index}>{availability.class}: {availability.seatsAvailable} seats available</p>
              ))}
            </section>

            <section id="select-seats">
              <h3>Select Seats</h3>
              <p>Interactive seat map goes here</p>
              <button onClick={handleProceed}>Proceed</button>
            </section>
          </div>
        ) : (
          <p>Loading train details...</p>
        )}
      </main>
      <footer>
        <p>&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default TrainDetails;