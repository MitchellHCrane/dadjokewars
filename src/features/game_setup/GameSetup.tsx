import { Link } from "react-router-dom";

function GameSetup() {
  return (
    <>
      <div className="gameSetupDiv">
        <div className="pacificoBlueH2">
          <h2 className="gameSetupH2">Game Setup</h2>
        </div>
        <p className="playerAndRoundsP">
          Select the number of players and rounds you want to play
        </p>
        {/* Players  */}
        <div className="playerAndNumber">
          <p id="gameSetupPlayerP" className="playerP">
            Players
          </p>
          <div className="playerNumbers">
            <span className="minusPlayer"></span>
            <input className="playerInput" type="text" value="1"></input>
            <span className="plusPlayer"></span>
          </div>
        </div>
        {/* Rounds  */}
        <div className="playerAndNumber">
          <p id="gameSetupPlayerP" className="playerP">
            Rounds
          </p>
          <div className="playerNumbers">
            <span className="minusPlayer"></span>
            <input className="playerInput" type="text" value="1"></input>
            <span className="plusPlayer"></span>
          </div>
        </div>
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
