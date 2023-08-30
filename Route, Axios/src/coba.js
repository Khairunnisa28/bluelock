import React from 'react';
import { useState } from "react";
import ModalComponent from "./component/Modal";
import logo from './image/logo.png';
import './App.css';

const Greeting = (props) => {
  return <h1>Selamat Datang {props.name}, Silakan Pilih Pemain Sepak Bola Favorit</h1>;
};

function App() {
  const [show, setShow] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState("Pilih pemain terlebih dahulu");
  const [score, setScore] = useState(0); // State untuk fitur skor poin
  const modalMessage = "Pesan dalam Modal dari Komponen Induk";

  const toggleModal = () => {
    setShow(!show);
  };

  const updateSelectedPlayer = (player) => {
    setSelectedPlayer(player);
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  const decrementScore = () => {
    if (score > 0) {
      setScore(score - 1);
    }
  };
  const [randomScore, setRandomScore] = useState(null);
  const [randomScore2, setRandomScore2] = useState(null);

  const generateRandomScore = () => {
    const minScore = 0;
    const maxScore = 100;
    const random = Math.floor(Math.random() * (maxScore - minScore + 1)) + minScore;
    setRandomScore(random);
    const random2 = Math.floor(Math.random() * (maxScore - minScore + 1)) + minScore;
    setRandomScore2(random2);
  };
  return (
    <div className="App">
      <img src={logo} alt="Logo" />
      <Greeting name="Nida" />
      <ModalComponent show={show} message={modalMessage} toggleModal={toggleModal} updateSelectedPlayer={updateSelectedPlayer} />
      <button onClick={() => toggleModal()}>Pilih Pemain Sepak Bola Favorit</button>
      <div>
        <h1>Buatlah Tim, Pemain Tim :</h1>
        <p>{selectedPlayer}</p>
      </div>
      <div>
        <h1>Skor Poin:</h1>
        <p>Skor: {score}</p>
        <button onClick={incrementScore}>Tambah Poin</button>
        <button onClick={decrementScore}>Kurangi Poin</button>
      </div>
      <br/>
      <br/>
      <div>
        <button onClick={generateRandomScore}>Generate Random Score</button>
        {randomScore !== null && randomScore2 !== null}
        <p>{randomScore} : {randomScore2}</p>
      </div>
    </div>
  );
}

export default App;
