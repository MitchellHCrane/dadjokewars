import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import FinalScores from "./FinalScores";
import { playerSlice, taskSlice } from "../../taskSlice";
import { PlayerRecord } from "../../interfaces";

function GameOver() {
  const navigate = useNavigate();
  const players = useSelector((state: RootState) => state.players);

  // Sort players by laugh count (ascending order)
  const sortedPlayers = [...players].sort(
    (a, b) => a.laughCount - b.laughCount
  );

  // Find all players with the lowest laugh count (handle ties)
  const lowestScore = sortedPlayers[0].laughCount;
  const winners = sortedPlayers.filter(
    (player) => player.laughCount === lowestScore
  );

  // Prepare the winner message: single winner or multiple winners
  const winnerMessage =
    winners.length > 1
      ? `It's a tie between ${winners.map((w) => w.name).join(", ")}!`
      : `${winners[0].name} wins!`;

  // Prepare the final scoreboard
  const scoreBoard = players.map((player) => {
    return (
      <FinalScores
        key={player.name}
        player={player}
        laughCount={player.laughCount}
      />
    );
  });

  const handlePlayAgain = () => {
    for (let i = 0; i < players.length; i++) {
      const data: PlayerRecord = {
        name: players[i].name,
        laughCount: 0,
      };
      dispatch(
        playerSlice.actions.setLaughScoreTest({
          data: data,
          type: "reset",
        })
      );
    }
    navigate("/play-game");
  };

  return (
    <div className="gradientBack">
      <div className="pageLayoutContainer">
        {/* Trophy Icon  */}
        <div className="trophyContainer">
          <span className="trophyIcon"></span>
        </div>
        {/* Page Content */}
        <div className="pageContent desktopMaxWidth">
          {/* Page heading Styles */}
          <div className="pageHeading">
            <h2 className="pacificoBlueH2" id="whiteText">
              {winnerMessage}
            </h2>
            <p id="whiteText">
              Congratulations! You laughed at the least amount of jokes!
            </p>
          </div>
          {/* End Page Heading Styles */}
          {/* Scoreboard  */}
          <div>
            <h3>Final Scoreboard</h3>
          </div>
          {scoreBoard}
        </div>
        {/* End Page Content */}
        <div id="removeGradient" className="bottomButtons">
          <button
            id="bottomBtn"
            className="orangeBtn hidden"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>

          <p className="bottomLink">
            <Link
              className="text-white hover:text-dark cursor-pointer"
              to="/game-setup"
            >
              New Game
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
