import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/confirmation');
  };

  return (
    <div>
      <header>
        <h1>Payment</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/account">My Account</Link>
          <Link to="/help">Help</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>
      <main>
        <section id="payment-options">
          <h2>Select Payment Method</h2>
          <form>
            <label htmlFor="payment-method">Payment Method:</label>
            <select id="payment-method" name="payment-method">
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
              <option value="net-banking">Net Banking</option>
              <option value="upi">UPI</option>
              <option value="wallet">Digital Wallet</option>
            </select>

            <label htmlFor="promo-code">Promo Code:</label>
            <input type="text" id="promo-code" name="promo-code" />

            <button type="button" onClick={handlePayment}>Make Payment</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Railway Reservation System</p>
      </footer>
    </div>
  );
}

export default Payment;