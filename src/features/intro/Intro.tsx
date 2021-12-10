import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="gradientBack">
      <div>
        <h1 className="dadJokesIntroH1">Dad Jokes</h1>
      </div>
      <div>
        <h2 className="introH2">You Laugh, You Lose</h2>
      </div>
      <div className="btnDiv">
        <Link to="game-setup"><button className="orangeBtn">Start Game</button></Link>
      </div>
      <div className="howItWorksPDiv">
        <p>
          <Link to="how-it-works" className="whiteLinkBtn">How it Works?</Link>
        </p>
      </div>
    </div>
  );
}

export default Intro;
