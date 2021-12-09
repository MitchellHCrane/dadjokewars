import { Link } from "react-router-dom";

function GameSetup() {
  return (
    <>
      <h2>Game Setup</h2>
      <div>
        <Link to="/player-names">Enter Player Names</Link>
      </div>
    </>
  );
}

export default GameSetup;
