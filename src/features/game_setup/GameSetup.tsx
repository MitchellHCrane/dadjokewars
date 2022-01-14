import { Link } from "react-router-dom";

function GameSetup() {
  return (
    <>
      <div className="gameSetupDiv">
        <div className="pacificoBlueH2">
          <h2 className="gameSetupH2">Game Setup</h2>
        </div>
        <p className="howItWorksP">
          Select the number of players and rounds you want to play
        </p>
        <div>
          <p id="gameSetupPlayerP" className="playerP">
            Players
          </p>
          <input></input>
        </div>
        <div>
          <p id="gameSetupPlayerP" className="playerP">
            Rounds
          </p>
          <input></input>
        </div>
        <br />
        <div className="btnDiv">
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
