// src/OfficeList.js
import React from 'react';

const OfficeList = () => {
  const offices = [
    {
      name: 'WeWork Bangalore',
      rent: 75000,
      address: 'Koramangala, Bengaluru',
      image: 'https://via.placeholder.com/250x150?text=WeWork'
    },
    {
      name: 'Regus Mumbai',
      rent: 55000,
      address: 'Bandra, Mumbai',
      image: 'https://via.placeholder.com/250x150?text=Regus'
    },
    {
      name: '91Springboard Delhi',
      rent: 60000,
      address: 'Nehru Place, Delhi',
      image: 'https://via.placeholder.com/250x150?text=91Springboard'
    }
  ];

  const getRentStyle = (rent) => ({
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🏢 Office Space Rental Listings</h1>

      {offices.map((office, idx) => (
        <div key={idx} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <img src={office.image} alt={office.name} style={{ width: '250px', height: '150px' }} />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p style={getRentStyle(office.rent)}><strong>Rent:</strong> ₹{office.rent}</p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;
