import { Link } from "react-router-dom";
import React, { useState } from "react";
import GetJoke from "./getJoke";

function PlayGame() {
  //Blur Joke Functionality.

  const [jokeVisible, setJokeVisible] = useState(false);

  const jokeVisibleStyles = {
    filter: "blur(4px)",
  };

  const toggleBlurBtn = () => {
    setJokeVisible(!jokeVisible);
  };

  return (
    <>
      {/* Layout */}
      <div className="pageLayoutContainer">
        {/* Page Content */}
        <div className="pageContent">
          {/* Page heading Styles */}
          <div className="pageHeading">
            <h2 className="pacificoBlueH2">Name You're Up!</h2>
            <p>Reveal the Dad Joke below and get other people to laugh!</p>
          </div>
          {/* End Page Heading Styles */}
          {/* Players  */}
          <div className="jokeContainer">
            <div className="jokeBox">
              <p
                className="randomJoke"
                style={!jokeVisible ? jokeVisibleStyles : {}}
                id="jokeDrop"
              ></p>

              <button onClick={toggleBlurBtn} className="viewJoke"></button>
            </div>
            {/* <button onClick={blurEffect}></button> */}
          </div>
          <div className="scoreContent">
            <header className="playerLaughCount">
              <p className="playerLaughCountText">Player</p>
              <p className="playerLaughCountText">Laugh Count</p>
            </header>
            <div className="scoreBoard">
              <div className="scoreBoardName">
                <p className="playerName">Mitchell</p>
              </div>
              <div className="scoreBoardCount">
                <span className="minusLaugh"></span>
                <p className="laughNumber">2</p>
                <span className="plusLaugh"></span>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Content */}
        <div className="bottomButtons">
          <GetJoke />
          <p className="bottomLink">
            <Link id="returnGreen" className="whiteLinkBtn" to="/game-over">
              End Game
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default PlayGame;
