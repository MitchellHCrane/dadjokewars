import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PlayerRecord } from "../../interfaces";
import { playerSlice } from "../../taskSlice";
// Props from PlayGame.tsx
function ScoreBoardPlayer(props: any) {
  const dispatch = useDispatch();

  const [laughScore, setLaughScore] = useState(0);
  const playerName = props.player.name;

  // const dispatch = useDispatch();
  const handleMinus = () => {
    laughScore === 0 ? 0 : setLaughScore(laughScore - 1);
    const data: PlayerRecord = {
      name: playerName,
      laughCount: laughScore,
    };
    dispatch(
      playerSlice.actions.setLaughScore({
        data: data,
      })
    );
  };
  const handlePlus = () => {
    setLaughScore(laughScore + 1);
    const data: PlayerRecord = {
      name: playerName,
      laughCount: laughScore,
    };
    dispatch(
      playerSlice.actions.setLaughScore({
        data: data,
      })
    );
  };

  return (
    <div className="scoreBoard">
      <p className="playerName">{playerName}</p>
      <div className="scoreBoardCount">
        <span
          onClick={handleMinus}
          className={`${laughScore === 0 ? "noHover" : ""} minusLaugh`}
        />
        <p className="laughNumber">{laughScore}</p>
        <span onClick={handlePlus} className={`plusLaugh`} />
      </div>
    </div>
  );
}

export default ScoreBoardPlayer;
