import React, { useState, useEffect } from "react";
import axios from 'axios';

const FormComponent = () => {
  const divStyle = {
    textAlign: 'left',  
    color: 'blue',
    fontSize: '20px'
  };

  const [nameplayer, setNameplayer] = useState(""); // Change this to an empty string
  const [nameteams, setNameteams] = useState("");
  const [gender, setgender] = useState("");
  const [players, setPlayers] = useState([]); // Define the 'players' state

  // Fetch the player data from the JSON file using Axios and update the 'players' state
  useEffect(() => {
    axios.get("players.json")
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching player data:", error);
      });
  }, []);

  const handleSubmit = async (e) => { // Change 'handlesubmit' to 'handleSubmit'
    e.preventDefault();

    try {
      const response = await axios.post('your-api-endpoint', {
        nameplayer,
        nameteams,
        gender,
      });

      // Handle the API response here, you can show a success message or update the UI.
      console.log('API Response:', response.data);

    } catch (error) {
      // Handle errors here, show an error message or log the error.
      console.error('API Error:', error);
    }
  };

  return (
    <div className="create" style={divStyle}>
      <h2 id="newplayer">Nama Player Baru</h2>
      <form onSubmit={handleSubmit}>
        <label>Pilih Pemain:</label>
        <select value={nameplayer} onChange={(e) => setNameplayer(e.target.value)}>
          <option value="">Pilih Pemain</option>
          {players.map((player) => (
            <option key={player.id} value={player.name}>
              {player.name}
            </option>
          ))}
        </select>
        <label htmlFor=""> Nama Pemain:</label>
        <input
          type="text"
          required
          value={nameteams}
          onChange={(e) => setNameteams(e.target.value)}
        />
        <label>Gender</label>
        <select value={gender} onChange={(e) => {setgender(e.target.value)}}>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <button type="submit">Submit Data</button>
      </form>
    </div>
  );
};

export default FormComponent;
