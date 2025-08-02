// src/TrainerDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

const TrainerDetail = ({ trainers }) => {
  const { id } = useParams();

  // FIX: Use 't.trainerId' to match your data structure
  const trainer = trainers.find((t) => t.trainerId === parseInt(id));

  if (!trainer) {
    return <h2>Trainer not found!</h2>;
  }
  return (
    <div>
      <h2>Trainer Details</h2>
      {/* FIX: Also use trainer.trainerId here for consistency */}
      <p><strong>ID:</strong> {trainer.trainerId}</p>
      <p><strong>Name:</strong> {trainer.name}</p>
      <p><strong>Email:</strong> {trainer.email}</p>
    </div>
  );
};

export default TrainerDetail;