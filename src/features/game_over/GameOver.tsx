import { url } from "inspector";
import { Link } from "react-router-dom";

function GameOver() {
  return (
    <>
      {/* Layout */}
      <div className="gradientBack">
        <div className="pageLayoutContainer desktopMaxWidth">
          {/* Trophy Icon  */}
          <div className="trophyContainer">
            <span className="trophyIcon"></span>
          </div>
          {/* Page Content */}
          <div className="pageContent">
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
            <div className="scoreboardGrid">
              <div className="wrapper">
                <div className="one">
                  <p className="nameList" id="whiteP">Mitchell</p>
                </div>
                <div className="two">
                  <p className="nameList" id="whiteP"> - 0</p>
                </div>
                <div className="three">
                  <p className="nameList" id="whiteP">7</p>
                </div>

              </div>
            </div>
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
