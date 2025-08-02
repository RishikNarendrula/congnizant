import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './Trainerslist';
import TrainerDetail from './TrainerDetail';
import trainersMock from './TrainersMock';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My Academy Trainers App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/trainers">Show Trainers</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList />} />
          <Route 
            path="/trainers/:id" 
            element={<TrainerDetail trainers={trainersMock} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;