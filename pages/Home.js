import React from 'react';
import { useState } from "react";
import ModalComponent from "./component/Modal";
import FormComponent from "./component/form";
import logo from './image/logo.png';
import Navbar from './pages/Navbar';
import './App.css';

const Greeting = (props) => {
  return <h1>Selamat Datang {props.name}, Silakan Pilih Pemain Sepak Bola Favorit</h1>;
};

function Home() {
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

  return (
    <div className="App">
      <Navbar />
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
      <FormComponent/>
    </div>
  );
}

export default Home;
