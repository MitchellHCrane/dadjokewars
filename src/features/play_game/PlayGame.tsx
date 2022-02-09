import { Link } from "react-router-dom";
import React, { useState } from "react";
import GetJoke from "./getJoke";
import LayoutWithRounds from "../layout/LayoutWithRounds";
import ScoreBoardPlayer from "./ScoreBoardPlayer";

function PlayGame() {
  //Blur Joke Functionality.

  const players = [
    {
      name: "Mitchell",
      score: 7,
    },
    {
      name: "Skyler",
      score: 2,
    },
  ];

  const scoreBoard = players.map((player) => {
    return <ScoreBoardPlayer player={player} key={player.name} />;
  });

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
        <LayoutWithRounds />
        {/* Page Content */}
        <div className="pageContent desktopMaxWidth">
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
              >
                Past, present, and future walked into a bar.... It was tense.
              </p>

              <button onClick={toggleBlurBtn} className="viewJoke"></button>
            </div>
            {/* <button onClick={blurEffect}></button> */}
          </div>
          <div className="scoreContent">
            <header className="playerLaughCount">
              <p className="playerLaughCountText">Player</p>
              <p className="playerLaughCountText">Laugh Count</p>
            </header>
            {scoreBoard}
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
