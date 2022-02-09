import { url } from "inspector";
import { Link } from "react-router-dom";
import FinalScores from './FinalScores'

function GameOver() {

  const players = [
    {
      name: "Mitchell",
      score: 7,
    },
    {
      name: "Skyler",
      score: 2,
    },
  ];

  function lowScoreName() {

    const playerArray = players.map((e)=> e.name);
    console.log(playerArray);
    const scoreArray = players.map((e)=> e.score);
    console.log(scoreArray);
    const lowScore = (Math.min(...scoreArray));
    console.log(lowScore);
    // const playerWithLowScore = ;

    if (lowScore){
      return playerArray
    }
    
  }
  lowScoreName();

  




  const scoreBoard = players.map((player) => {
    return <FinalScores player={player} key={player.name} />;
  });

  return (
    <>
      {/* Layout */}
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
                Mitchell Wins!
              </h2>
              <p id="whiteText">
                Congratulations you laughed at the least amount of jokes!
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
            <Link to="/game-setup">
              <button id="bottomBtn" className="orangeBtn">
                Play Again
              </button>
            </Link>
            <p className="bottomLink">
              <Link className="whiteLinkBtn" to="/game-setup">
                New Game
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameOver;
