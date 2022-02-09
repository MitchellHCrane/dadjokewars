import { Link } from "react-router-dom";

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
          <div className="inputContainer">
            <label htmlFor="player">Players</label>
            <div className="inputNumber">
              <span className="minusPlayer"></span>
              <input name="player" type="number" value="1" />
              <span className="plusPlayer"></span>
            </div>
          </div>

          {/* Rounds  */}

          <div className="inputContainer">
            <label htmlFor="player">Players</label>
            <div className="inputNumber">
              <span className="minusPlayer"></span>
              <input name="player" type="number" value="1" />
              <span className="plusPlayer"></span>
            </div>
          </div>
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
