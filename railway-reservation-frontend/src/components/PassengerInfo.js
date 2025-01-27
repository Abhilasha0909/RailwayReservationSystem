import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PassengerInfo() {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/payment');
  };

  return (
    <div>
      <header>
        <h1>Passenger Information</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/account">My Account</Link>
          <Link to="/help">Help</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>
      <main>
        <section id="passenger-info">
          <h2>Enter Passenger Details</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" required />
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="id-proof">ID Proof:</label>
            <input type="text" id="id-proof" name="id-proof" required />
            <label htmlFor="contact">Contact Information:</label>
            <input type="text" id="contact" name="contact" required />

            <h3>Review Booking</h3>
            <p>Train: 1234</p>
            <p>Seats: 2A, 2B</p>
            <p>Fare: $100</p>

            <h3>Add Ons</h3>
            <label htmlFor="meals">Meals:</label>
            <input type="checkbox" id="meals" name="meals" />
            <label htmlFor="insurance">Travel Insurance:</label>
            <input type="checkbox" id="insurance" name="insurance" />

            <button type="button" onClick={handleProceed}>Proceed to Payment</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default PassengerInfo;