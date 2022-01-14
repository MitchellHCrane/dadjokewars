import { Link } from "react-router-dom";
import LayoutWithHeader from "../layout/LayoutWithHeader";

function Intro() {
  return (
    <div className="gradientBack">
      <div className="introContents">
        <div className="introH1H2">
          <div>
            <h1 className="dadJokesIntroH1">Dad Jokes</h1>
          </div>
          <div>
            <h2 className="introH2">You Laugh, You Lose</h2>
          </div>
        </div>
        <div className="bottomButtons">
          <div className="btnDiv">
            <Link to="game-setup">
              <button id="introOrangeBtn" className="orangeBtn">
                Start Game
              </button>
            </Link>
          </div>
          <div className="howItWorksPDiv">
            <p className="howItWorksP">
              <Link to="how-it-works" className="whiteLinkBtn">
                How it Works?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
