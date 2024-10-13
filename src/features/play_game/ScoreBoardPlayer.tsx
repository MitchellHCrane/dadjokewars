import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { PlayerRecord } from "../../interfaces";
import { playerSlice } from "../../taskSlice";
// Props from PlayGame.tsx

interface Props {
  player: PlayerRecord;
  laughCount: number;
  isTurn: boolean;
}

const ScoreBoardPlayer: FC<Props> = ({ player, laughCount, isTurn }) => {
  const dispatch = useDispatch();

  const handleCount = (type: string) => {
    const data: PlayerRecord = {
      name: player.name,
      laughCount: laughCount,
    };
    dispatch(
      playerSlice.actions.setLaughScoreTest({
        data: data,
        type: type,
      })
    );
  };

  return (
    <div
      className={`${
        !isTurn ? "bg-gray-200 rounded-md px-2 my-2" : ""
      } scoreBoard`}
    >
      <p className="player.name">{player.name}</p>
      <div className="scoreBoardCount">
        <button
          onClick={() => handleCount("minusLaugh")}
          className={`${laughCount === 0 ? "noHover" : ""} minusLaugh`}
        />
        <p className="laughCount">{laughCount}</p>
        <button
          onClick={() => handleCount("plusLaugh")}
          className={`plusLaugh`}
        />
      </div>
    </div>
  );
};

export default ScoreBoardPlayer;
