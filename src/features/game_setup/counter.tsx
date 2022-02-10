import React, { useState } from "react";

function PlayerCounter() {
  const [counter, setCounter] = useState(2);

  const handleClickPlus = () => {
    if (counter < 10)
    setCounter(counter + 1);
  };
  const handleClickMinus = () => {
    if (counter > 2) setCounter(counter - 1);
  };
  return (
    <div className="inputContainer">
      <label htmlFor="player">Players</label>
      <div className="inputNumber">
        <span onClick={handleClickMinus} className="minusPlayer"></span>
        <input className="inputText" name="player" value={counter} />
        <span onClick={handleClickPlus} className="plusPlayer"></span>
      </div>
    </div>
  );
}

export default PlayerCounter;
