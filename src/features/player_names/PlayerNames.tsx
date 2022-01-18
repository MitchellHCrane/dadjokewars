import { Link } from "react-router-dom";

function PlayerNames() {
  return (
    <>
      <div className="pageLayoutContainer">
        <h2 className="pacificoBlueH2">Player Names</h2>
        <p className="playerAndRoundsP">
          Enter the names of everyone playing Dad Joke Wars.
        </p>
        <div className="playerAndNumber">
          <p id="gameSetupPlayerP" className="playerP">
            Player 1
          </p>
          <input className="playerNamesInput" type="text"></input>
        </div>
        <div className="playerAndNumber">
          <p id="gameSetupPlayerP" className="playerP">
            Player 2
          </p>
          
          <input className="playerNamesInput" type="text"></input>
        </div>
        <div className="bottomButtons">
          <Link to="/play-game">
            <button id="bottomBtn" className="orangeBtn">
              Start Game
            </button>
          </Link>
        </div>
        <div className="howItWorksPDiv">
          <p className="howItWorksP">
            <Link id="returnGreen" to="/game-setup" className="whiteLinkBtn">
              Back to Game Setup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default PlayerNames;
