import { Link } from "react-router-dom";

function PlayGame() {
  return (
    <div className="gameSetup">
      <h2>Round #</h2>
      <p>Reveal the Dad Joke below and get other people to laugh!</p>
      <div>
        <Link to="/play-game">Play Again</Link>
      </div>
      <div>
        <Link to="/game-setup">New Game</Link>
      </div>
    </div>
  );
}

export default PlayGame;
