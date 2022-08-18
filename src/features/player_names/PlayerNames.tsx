import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../app/store";

function PlayerNames() {
  const playerCountUserInput = useSelector(
    (state: RootState) => state.tasks.playerCount
  );

  const playerInputArr = [];

  for (let i = 1; i <= playerCountUserInput; i++) {
    playerInputArr.push(
      <div key={i} className="inputContainer">
        <label htmlFor="playerName" id="gameSetupPlayerP" className="playerP">
          Player {i}
        </label>
        <input
          className="playerNamesInput"
          name="player name"
          type="text"
        ></input>
      </div>
    );
  }

  return (
    <>
      {/* Layout */}
      <div className="pageLayoutContainer">
        {/* Page Content */}
        <div className="pageContent desktopMaxWidth">
          {/* Page heading Styles */}
          <div className="pageHeading">
            <h2 className="pacificoBlueH2">Player Names</h2>
            <p>Enter the names of everyone playing Dad Joke Wars.</p>
          </div>
          {/* End Page Heading Styles */}
          {/* Player Names  */}
          {playerInputArr}
        </div>
        {/* End Page Content Test*/}

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
