import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalComponent = ({ show, message, toggleModal, updateSelectedPlayer }) => {
  const [checked, setChecked] = useState([]);
  const players = [
    "Yoichi Isagi",
    "Ranze Kurona",
    "Rensuke Kunigami",
    "Gin Gagamaru",
    "Kenyu Yukimiya",
    "Jingo Raichi",
    "Hiori Yo",
    "Gurimu Igarashi",
    "Jin Kiyora",
    "Teppei Neru",
    "Meguru Bachira",
    "Eita Otoya",
    "Haru Hayate",
    "Miroku Darai",
    "Teru Kitsunezato",
    "Tatsuki Wakatsuki",
    "Tetsu Sokura",
    "Aiki Himizu",
    "Shizuka Haiji",
    "Reo Mikage",
    "Hyoma Chigiri",
    "Seishiro Nagi",
    "Junichi Wanima",
    "Taiga Tsunzaki",
    "Kazuma Nio",
    "Hajime Nishioka",
    "Reiji Hiiragi",
    "Kairu Saramadara",
    "Shoei Baro",
    "Rin Itoshi",
  ];

  const handleOnCheck = (e) => {
    const updatedChecked = e.target.checked
      ? [...checked, e.target.value]
      : checked.filter((player) => player !== e.target.value);

    setChecked(updatedChecked);
  };

  const selectedPlayers = checked.length ? checked.join(", ") : "Tidak ada pemain dipilih";

  const onButtonClick = () => {
    toggleModal();
    updateSelectedPlayer(selectedPlayers);
  };

  if (!show) {
    return null;
  } else {
    return (
      <div>
        <Modal
          appElement={document.getElementById("root")}
          isOpen={show}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>{message}</div>
          {players.map((player, index) => (
            <div key={index}>
              <input value={player} type="checkbox" onChange={handleOnCheck} />
              <span>{player}</span>
            </div>
          ))}
          <button onClick={onButtonClick}>Selesai</button>
        </Modal>
      </div>
    );
  }
};

export default ModalComponent;

