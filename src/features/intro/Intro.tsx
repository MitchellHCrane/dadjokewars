import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="gradientBack">
      <div className="introContents desktopMaxWidth">
        <div className="introH1H2">
          <div>
            <h1 className="dadJokesIntroH1">Dad Jokes</h1>
          </div>
          <div>
            <h2 className="introH2">Laugh, You Lose</h2>
          </div>
        </div>
        <div id="removeGradient" className="bottomButtons">
          <Link to="game-setup">
            <button className="orangeBtn">Start Game</button>
          </Link>

          <p className="bottomLink">
            <Link
              to="how-it-works"
              className="text-white hover:text-dark cursor-pointer text-sm"
            >
              How it Works?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
