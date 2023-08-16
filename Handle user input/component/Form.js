import React, { useState } from "react"; // Import useState from "react"

const FormComponent = () => {
  const divStyle = {
    textAlign: 'left',  
    color: 'blue',
    fontSize: '20px'
  };

  const [nameplayer, setNameplayer] = useState("");
  const [nameteams, setNameteams] = useState("");
  const [gender, setgender] = useState("");

  const handlesubmit = (e) =>{
    e.preventDefault();
    alert(`Nama yang anda masukkan ${nameplayer} dengan nama team ${nameteams}`);
    const dataplayers = {nameplayer, nameteams}

    console.log(dataplayers)
  }

  
  

  return (
    <div className="create" style={divStyle}>
      <h2 id="newplayer">Nama Player Baru</h2>
      <form onSubmit={handlesubmit}>
        <label htmlFor=""> Nama Pemain:</label>
        <input
          type="text"
          required
          value={nameplayer}
          onChange={(e) => setNameplayer(e.target.value)}
        />
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
        <button>Submit Data</button>
      </form>
    </div>
  );
};

export default FormComponent;
