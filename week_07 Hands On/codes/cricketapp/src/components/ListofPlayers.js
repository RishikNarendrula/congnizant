import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 67 },
    { name: "Dhoni", score: 90 },
    { name: "Jadeja", score: 45 },
    { name: "Bumrah", score: 71 },
    { name: "Ashwin", score: 76 },
    { name: "Gill", score: 32 },
    { name: "Rahul", score: 69 },
    { name: "Shami", score: 55 },
    { name: "Surya", score: 95 },
    { name: "Pant", score: 73 },
  ];

  const filtered = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      {players.map((player, idx) => (
        <p key={idx}>{player.name} - {player.score}</p>
      ))}

      <h3>Players with Score Below 70</h3>
      {filtered.map((player, idx) => (
        <p key={idx}>{player.name} - {player.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
