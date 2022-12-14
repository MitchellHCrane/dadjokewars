import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LayoutWithRounds from "../layout/LayoutWithRounds";
import ScoreBoardPlayer from "./ScoreBoardPlayer";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function PlayGame() {
  const players = useSelector((state: RootState) => state.players);

  // const players = [
  //   {
  //     name: "Mitchell",
  //     score: 7,
  //   },
  //   {
  //     name: "Skyler",
  //     score: 2,
  //   },
  // ];

  const scoreBoard = players.map((player) => {
    return (
      <ScoreBoardPlayer
        player={player}
        key={player.name}
        laughCount={player.laughCount}
      />
    );
  });

  const [jokeVisible, setJokeVisible] = useState(false);

  const jokeVisibleStyles = {
    filter: "blur(4px)",
  };

  const toggleBlurBtn = () => {
    setJokeVisible(!jokeVisible);
  };

  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  function getJokeFromApi() {
    setLoading(true);
    setJokeVisible(false);
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res: any) => {
        setLoading(false);
        const jokeString = `${res.data.joke}`;
        setJoke(jokeString);
      });
  }

  useEffect(() => {
    getJokeFromApi();
  }, []);

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
                <span>{loading ? "Loading Joke..." : joke}</span>{" "}
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
          <Link to="">
            <button onClick={() => getJokeFromApi()} className="orangeBtn">
              Next Player
            </button>
          </Link>
          <p className="bottomLink">
            <Link className="returnGreen" to="/game-over">
              End Game
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default PlayGame;
