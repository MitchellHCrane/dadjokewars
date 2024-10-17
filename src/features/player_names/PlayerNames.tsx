import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import type { RootState } from "../../app/store";
import { playerSlice, taskSlice } from "../../taskSlice";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function PlayerNames() {
  const dispatch = useDispatch();
  const playerCountUserInput = useSelector(
    (state: RootState) => state.tasks.playerCount
  );
  const roundCountUserInput = useSelector(
    (state: RootState) => state.tasks.roundCount
  );

  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const navigate = useNavigate();
  const handleUserInput = (i: number, e: any) => {
    let inputNames: string[] = [...playerNames];
    inputNames[i] = e.target.value;
    setPlayerNames(inputNames);
  };

  const playerInputArr: any[] = [];

  for (let i = 0; i < playerCountUserInput; i++) {
    playerInputArr.push(
      <div key={i} className="inputContainer">
        <label htmlFor="playerName" id="gameSetupPlayerP" className="playerP">
          Player {i + 1}
        </label>
        <input
          className="playerNamesInput"
          name="player name"
          type="text"
          onChange={(e) => handleUserInput(i, e)}
        ></input>
      </div>
    );
  }

  const handlePlayerNames = () => {
    //Validation
    if (playerNames.length < playerCountUserInput) {
      alert("Please enter all usernames");
    } else {
      dispatch(playerSlice.actions.setPlayersNames({ data: playerNames }));
      navigate("/play-game");
    }
  };

  return (
    <>
      {/* Layout */}
      <div className="pageLayoutContainer">
        <div className="hidden orangeBanner">
          <h2 className="pacificoBlueH2" id="roundNumber">
            Rounds: {roundCountUserInput}
          </h2>
        </div>
        {/* Page Content */}
        <div className="pageContent desktopMaxWidth">
          <div className="flex mt-4">
            <Link
              to="/game-setup"
              className="flex items-center text-[16px] text-accent hover:text-black"
            >
              <ArrowLeftIcon className="size-4" /> Back to Game Setup
            </Link>
          </div>
          {/* Page heading Styles */}
          <div className="pageHeading">
            <h2 className="pacificoBlueH2">Player Names</h2>
            <p>Enter the names of everyone playing Dad Joke Wars.</p>
          </div>
          {/* End Page Heading Styles */}
          {/* Player Names  */}
          {playerInputArr}
        </div>
        {/* End Page Content Test*/}

        <div className="bottomButtons">
          {/* <Link to="/play-game"> */}
          <button
            onClick={handlePlayerNames}
            id="bottomBtn"
            className="orangeBtn"
          >
            Start Game
          </button>
        </div>
      </div>
    </>
  );
}

export default PlayerNames;
