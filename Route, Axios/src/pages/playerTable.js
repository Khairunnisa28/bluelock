import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerTable = () => {
    const [players, setPlayers] = useState([]);
  
    useEffect(() => {
      axios.get('../data/player.json') // Gunakan path yang relatif terhadap src
        .then((response) => {
          console.log('Data from JSON file:', response.data);
          setPlayers(response.data.player);
        })
        .catch((error) => {
          console.error('Error fetching player data:', error);
        });
    }, []);
      

  return (
    <div>
      <h2>Player Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Team</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
