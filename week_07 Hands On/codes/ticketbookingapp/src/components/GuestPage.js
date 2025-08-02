// src/components/GuestPage.js
import React from 'react';

const GuestPage = () => {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Please login to book tickets.</p>
      <h3>Available Flights</h3>
      <ul>
        <li>✈️ Indigo - Delhi to Mumbai</li>
        <li>✈️ Air India - Bangalore to Goa</li>
        <li>✈️ SpiceJet - Kolkata to Chennai</li>
      </ul>
    </div>
  );
};

export default GuestPage;
