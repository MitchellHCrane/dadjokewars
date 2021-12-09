import { Link } from "react-router-dom";

function PlayGame() {
  return (
    <div className="gameSetup">
        <h2>Game Setup</h2>
        <div>
            <Link to="/player-names">Enter Player Names</Link>
        </div>
    </div>
  );
}

export default PlayGame;