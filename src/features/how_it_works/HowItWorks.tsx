import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <>
      <div className="howItWorksDiv">
        <div className="pacificoBlueH2">
          <h2 className="howItWorksH2">How it Works</h2>
        </div>
        <div>
          <p className="howItWorksP">
            Try not to laugh at ridiculous dad jokes. Be the one with the least
            amount of laughs at the end of the game to win.
          </p>
        </div>
        <div className="btnDiv">
          <Link to="/game-setup">
            <button id="bottomBtn" className="orangeBtn">Game Setup</button></Link>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
