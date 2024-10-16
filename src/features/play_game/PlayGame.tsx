import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScoreBoardPlayer from "./ScoreBoardPlayer";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function PlayGame() {
  const players = useSelector((state: RootState) => state.players);
  const [jokeVisible, setJokeVisible] = useState(false);
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0); // Track the current player's turn

  const currentPlayer = players[currentPlayerIndex]; // Get current player object
  const jokeVisibleStyles = {
    filter: "blur(4px)",
  };

  const toggleBlurBtn = () => {
    setJokeVisible(!jokeVisible);
  };

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

  const handleNext = () => {
    // Increment player turn first
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);

    // Then fetch a new joke
    getJokeFromApi();
  };

  useEffect(() => {
    getJokeFromApi();
  }, []);

  if (!players || players.length === 0) {
    return (
      <div className="flex items-center justify-center my-32">
        <p>Loading players...</p>
      </div>
    );
  } else {
    return (
      <>
        {/* Layout */}
        <div className="pageLayoutContainer">
          {/* Page Content */}
          <div className="pageContent desktopMaxWidth">
            <div className="pageHeading">
              {/* Display the current player's name */}
              <h2 className="pacificoBlueH2">
                {currentPlayer?.name}, You're Up!
              </h2>
              <p>Reveal the Dad Joke below and get other people to laugh!</p>
            </div>
            {/* Players */}
            <div className="jokeContainer">
              <div className="jokeBox">
                <p
                  className="randomJoke"
                  style={!jokeVisible ? jokeVisibleStyles : {}}
                  id="jokeDrop"
                >
                  <span>{loading ? "Loading Joke..." : joke}</span>
                </p>

                <button onClick={toggleBlurBtn} className="viewJoke"></button>
              </div>
            </div>
            <div className="scoreContent">
              <header className="playerLaughCount mb-2 ">
                <p className="playerLaughCountText">Player</p>
                <p className="playerLaughCountText">Laugh Count</p>
              </header>
              {players.map((player, index) => {
                return (
                  <ScoreBoardPlayer
                    key={player.name}
                    player={player}
                    laughCount={player.laughCount}
                    isTurn={index === currentPlayerIndex} // Highlight current player
                  />
                );
              })}
            </div>
          </div>
          {/* End Page Content */}
          <div className="bottomButtons">
            <Link to="">
              <button onClick={handleNext} className="orangeBtn">
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
}

export default PlayGame;
