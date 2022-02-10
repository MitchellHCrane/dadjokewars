import { Link } from "react-router-dom";
import PlayerCounter from "./counter";
import RoundCounter from "./RoundCounter";

function GameSetup() {
  return (
    <>
      {/* Layout */}
      <div className="pageLayoutContainer">
        {/* Page Content */}
        <div className="pageContent desktopMaxWidth">
          {/* Page heading Styles */}
          <div className="pageHeading">
            <h2 className="pacificoBlueH2">Game Setup</h2>
            <p>Select the number of players and rounds you want to play</p>
          </div>
          {/* End Page Heading Styles */}
          {/* Players  */}
          <PlayerCounter />
          {/* Rounds  */}
          <RoundCounter />
        </div>
        {/* End Page Content */}

        <div className="bottomButtons">
          <Link to="/player-names">
            <button id="bottomBtn" className="orangeBtn">
              Enter Player Names
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default GameSetup;
