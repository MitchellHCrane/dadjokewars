import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="introPage">
      <div className="dadJokesH1">
        <h1>Dad Jokes</h1>
      </div>
      <div className="introH2Div">
        <h2 className="introH2">You Laugh, You Lose</h2>
      </div>
      <div className="startGameBtnDiv">
        <Link to="game-setup">Start Game</Link>
      </div>
      <div className="howItWorksPDiv">
        <p>
          <Link to="how-it-works">How it Works?</Link>
        </p>
      </div>
    </div>
  );
}

export default Intro;
