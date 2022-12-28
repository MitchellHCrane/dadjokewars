import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { taskSlice } from "../../taskSlice";

import { PlayerCounter } from "./PlayerCount";
import { RoundCounter } from "./RoundCount";

export const GameSetup = () => {
  const dispatch = useDispatch();

  // Logic for Player count
  const [playerCount, setPlayerCount] = useState(2);

  const handlePlayerPlus = () => {
    if (playerCount < 10) setPlayerCount(playerCount + 1);
  };
  const handlePlayerMinus = () => {
    if (playerCount > 2) setPlayerCount(playerCount - 1);
  };

  // Logic for Round Counter
  const [roundCount, setRoundCount] = useState(1);

  // const handleRoundPlus = () => {
  //   if (roundCount < 10) setRoundCount(roundCount + 1);
  // };
  // const handleRoundMinus = () => {
  //   if (roundCount > 1) setRoundCount(roundCount - 1);
  // };
  // uses dispatch to call taskSlice and use action to update redux state off of button. Updates players and rounds to then populate next page.
  const handlePlayerRoundCountSubmit = () => {
    const data = {
      playerCount: playerCount,
      roundCount: roundCount,
    };
    dispatch(taskSlice.actions.setPlayersAndRoundCount({ data: data }));
  };

  return (
    <>
      {/* Layout */}
      <div className="pageLayoutContainer">
        {/* Page Content */}
        <div className="pageContent desktopMaxWidth">
          {/* Page heading Styles */}
          <div className="pageHeading">
            <h2 className="pacificoBlueH2">Game Setup</h2>
            <p>Select the number of players and rounds you want to play</p>
          </div>
          {/* End Page Heading Styles */}
          {/* Players  */}
          <PlayerCounter
            handlePlayerPlus={handlePlayerPlus}
            handlePlayerMinus={handlePlayerMinus}
            counter={playerCount}
          />
          {/* Rounds  */}
          {/* <RoundCounter
            handleRoundPlus={handleRoundPlus}
            handleRoundMinus={handleRoundMinus}
            counter={roundCount}
          /> */}
        </div>
        {/* End Page Content */}

        <div className="bottomButtons">
          <Link to="/player-names">
            <button
              id="bottomBtn"
              className="orangeBtn"
              onClick={handlePlayerRoundCountSubmit}
            >
              Enter Player Names
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
