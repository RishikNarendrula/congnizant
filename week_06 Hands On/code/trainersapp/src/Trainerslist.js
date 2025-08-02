import React from 'react';
import { Link } from 'react-router-dom';
import trainersMock from './TrainersMock';
const TrainersList = () => {
  return (
    <div>
      <h2>Trainers List</h2>
      <ul>
        {trainersMock.map((trainer) => (
          <li key={trainer.trainerId}>
            {/* Modify this component to add Links to TrainerDetail component while passing the ID  */}
            <Link to={`/trainers/${trainer.trainerId}`}>{trainer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainersList;