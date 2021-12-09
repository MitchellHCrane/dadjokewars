import { Link } from "react-router-dom";


function HowItWorks() {
  return (
    <>
      <div className="howItWorksH2">
        <h2>How it Works</h2>
      </div>
      <div className="howItWorksP">
        <p>
          Try not to laugh at ridiculous dad jokes. Be the one with the least
          amount of laughs at the end of the game to win.
        </p>
      </div>
      <div>
      <Link to="/game-setup">Start Game</Link>
      </div>
    </>
  );
}

export default HowItWorks;
