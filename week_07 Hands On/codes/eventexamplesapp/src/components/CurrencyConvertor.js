// src/components/CurrencyConvertor.js
import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    if (!isNaN(rupees) && rupees !== '') {
      const converted = (parseFloat(rupees) / 88).toFixed(2); // 1 Euro = ₹88 approx.
      setEuro(converted);
    } else {
      setEuro('Invalid input');
    }
  };

  return (
    <div>
      <h2>💱 Currency Convertor</h2>
      <input
        type="text"
        placeholder="Enter amount in ₹ Rupees"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>Convert</button>
      <p>💶 Euro: {euro}</p>
    </div>
  );
};

export default CurrencyConvertor;
