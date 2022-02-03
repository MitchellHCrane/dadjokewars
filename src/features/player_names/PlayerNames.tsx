import { Link } from "react-router-dom";

function PlayerNames() {
  return (
    <>
      {/* Layout */}
      <div className="pageLayoutContainer">
        {/* Page Content */}
        <div className="pageContent">
          {/* Page heading Styles */}
          <div className="pageHeading">
            <h2 className="pacificoBlueH2">Player Names</h2>
            <p>Enter the names of everyone playing Dad Joke Wars.</p>
          </div>
          {/* End Page Heading Styles */}
          {/* Player Names  */}

          <div className="inputContainer">
            <label
              htmlFor="playerName"
              id="gameSetupPlayerP"
              className="playerP"
            >
              Player 1
            </label>
            <input
              className="playerNamesInput"
              name="player name"
              type="text"
            ></input>
          </div>

          <div className="inputContainer">
            <label
              htmlFor="playerName"
              id="gameSetupPlayerP"
              className="playerP"
            >
              Player 2
            </label>

            <input className="playerNamesInput" type="text"></input>
          </div>
        </div>
        {/* End Page Content */}

        <div className="bottomButtons">
          <Link to="/play-game">
            <button id="bottomBtn" className="orangeBtn">
              Start Game
            </button>
          </Link>
          <p className="bottomLink">
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
