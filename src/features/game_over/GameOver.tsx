import { Link } from "react-router-dom";

function GameOver() {
  return (
    <>
      <h2>Winner!</h2>
      <div>
        <p>Congratulations you laughed at the least amount of jokes!</p>
      </div>
      <div>
        <h3>Final Scoreboard</h3>
      </div>
      <div>
          <Link to="/game-setup">Play Again</Link>
      </div>
    </>
  );
}

export default GameOver;
