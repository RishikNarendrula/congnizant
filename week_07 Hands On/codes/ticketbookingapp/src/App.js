// src/App.js
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let message;
  let button;

  if (isLoggedIn) {
    message = <h2>Welcome back</h2>;
    button = <button onClick={handleLogout}>Logout</button>;
  } else {
    message = <h2>Please sign up.</h2>;
    button = <button onClick={handleLogin}>Login</button>;
  }

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial', textAlign: 'center' }}>
      {message}
      <br />
      {button}
    </div>
  );
}

export default App;
