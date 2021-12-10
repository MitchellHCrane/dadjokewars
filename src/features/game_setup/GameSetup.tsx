import { Link } from "react-router-dom";

function GameSetup() {
  return (
    <>
      <h2>Game Setup</h2>
      <p>Select the number of players and rounds you want to play</p>
      <div>
        <p>Players</p>
        <input></input>
      </div>
      <div>
        <p>Rounds</p>
        <input></input>
      </div><br/>
      <div>
        <Link to="/player-names">Enter Player Names</Link>
      </div>
    </>
  );
}

export default GameSetup;
