import { Link } from "react-router-dom";


function PlayGame() {
  return (
    <div>
      <div className="roundContainer">
        <h2 className="pacificoBlueH2" id="roundNumber">
          Round:
        </h2>
      </div>
      <div className="pageLayoutContainer">
        <h2 className="pacificoBlueH2">Name You're Up!</h2>
        <p className="playerAndRoundsP">
          Reveal the Dad Joke below and get other people to laugh!
        </p>
        <div className="jokeContainer">
          <div className="jokeBox">
            <p className="randomJoke">Random Joke</p>
          </div>
          {/* <button onClick={blurEffect}></button> */}
        </div>
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
    </div>
  );
}

export default PlayGame;
