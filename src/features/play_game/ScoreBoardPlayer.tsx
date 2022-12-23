import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PlayerRecord } from "../../interfaces";
import { playerSlice } from "../../taskSlice";
// Props from PlayGame.tsx
function ScoreBoardPlayer(props: any) {
  const dispatch = useDispatch();

  // const [laughScore, setLaughScore] = useState(0);
  const playerName = props.player.name;
  const laughNumber = props.player.laughCount;

  // const handleMinus = () => {
  //   laughScore === 0 ? 0 : setLaughScore(laughScore - 1);
  //   const data: PlayerRecord = {
  //     name: playerName,
  //     laughCount: laughScore,
  //   };
  //   dispatch(
  //     playerSlice.actions.setLaughScore({
  //       data: data,
  //     })
  //   );
  // };
  // const handlePlus = () => {
  //   setLaughScore(laughScore + 1);
  //   const data: PlayerRecord = {
  //     name: playerName,
  //     laughCount: laughScore,
  //   };
  //   dispatch(
  //     playerSlice.actions.setLaughScore({
  //       data: data,
  //     })
  //   );
  // };

  const handleCount = (type: string) => {
    // switch (type) {
    //   case "minusLaugh":
    //     laughScore === 0 ? 0 : setLaughScore(laughScore - 1);
    //     break;
    //   case "plusLaugh":
    //     setLaughScore(laughScore + 1);
    //     break;
    //   default:
    //     setLaughScore(laughScore);
    // }
    const data: PlayerRecord = {
      name: playerName,
      laughCount: laughNumber,
    };
    dispatch(
      playerSlice.actions.setLaughScoreTest({
        data: data,
        type: type,
      })
    );
  };

  return (
    <div className="scoreBoard">
      <p className="playerName">{playerName}</p>
      {/* <div className="scoreBoardCount">
        <span
          onClick={handleMinus}
          className={`${laughScore === 0 ? "noHover" : ""} minusLaugh`}
        />
        <p className="laughNumber">{laughScore}</p>
        <span
          onClick={handlePlus}
          className={`plusLaugh`}
        />
      </div> */}
      <div className="scoreBoardCount">
        <button
          onClick={() => handleCount("minusLaugh")}
          className={`${laughNumber === 0 ? "noHover" : ""} minusLaugh`}
        />
        <p className="laughNumber">{laughNumber}</p>
        <button
          onClick={() => handleCount("plusLaugh")}
          className={`plusLaugh`}
        />
      </div>
    </div>
  );
}

export default ScoreBoardPlayer;
