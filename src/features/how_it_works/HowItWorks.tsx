import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <>
      {/* Layout */}
      <div className="pageLayoutContainer">
        {/* Page Content */}
        <div className="pageContent desktopMaxWidth">
          {/* Page heading Styles */}
          <div className="pageHeading">
            <h2 className="pacificoBlueH2">How it Works</h2>
            <p className="bottomLink">
              Try not to laugh at ridiculous dad jokes. Be the one with the
              least amount of laughs at the end of the game to win.
            </p>
          </div>
          {/* End Page Heading Styles */}
        </div>
        {/* End Page Content */}
        <div className="bottomButtons">
          <Link to="/game-setup">
            <button id="bottomBtn" className="orangeBtn">
              Game Setup
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
