import { Link } from "react-router-dom";

function PlayerNames() {
  return (
    <>
      <h2>Player Names</h2>
      <p>Enter player names</p>
      <div>
        <p>Player 1</p>
        <input></input>
      </div>
      <div>
        <p>Player 2</p>
        <input></input>
      </div><br/>
      <div>
        <Link to="/play-game">Start Game</Link>
      </div>
    </>
  );
}

export default PlayerNames;
