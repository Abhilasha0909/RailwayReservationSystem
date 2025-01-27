import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import TrainDetails from './components/TrainDetails';
import PassengerInfo from './components/PassengerInfo';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import Account from './components/Account';
import Help from './components/Help';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/train-details/:trainId" element={<TrainDetails />} />
          <Route path="/passenger-info" element={<PassengerInfo />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/account" element={<Account />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;