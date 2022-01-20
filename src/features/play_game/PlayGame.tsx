import { Link } from "react-router-dom";

function PlayGame() {
  return (
    <div className="pageLayoutContainer">
      <h2 className="pacificoBlueH2">Round #</h2>
      <h2 className="pacificoBlueH2">Name You're Up!</h2>
      <p className="playerAndRoundsP">
        Reveal the Dad Joke below and get other people to laugh!
      </p>
      <div className="bottomButtons">
        <Link to="">
          <button id="bottomBtn" className="orangeBtn">
            Next Player
          </button>
        </Link>
      </div>
      <div className="howItWorksPDiv">
        <p className="howItWorksP">
          <Link id="returnGreen" className="whiteLinkBtn" to="/game-over">
            End Game
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PlayGame;
