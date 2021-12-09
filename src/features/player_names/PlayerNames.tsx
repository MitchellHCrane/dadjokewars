import { Link } from "react-router-dom";

function PlayerNames() {
  return (
    <>
      <h2>Player Names</h2>
      <div>
        <Link to="/play-game">Start Game</Link>
      </div>
    </>
  );
}

export default PlayerNames;
