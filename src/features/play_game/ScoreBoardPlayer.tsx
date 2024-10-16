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
        isTurn ? "bg-gray-200 rounded-md" : ""
      } flex items-center justify-between pl-4 p-2`}
    >
      <p className="">{player.name}</p>
      <div className="flex items-center justify-center">
        <button
          onClick={() => handleCount("minusLaugh")}
          className={`${
            laughCount === 0 ? "noHover cursor-not-allowed" : ""
          } minusLaugh`}
        />
        <p className="mx-3">{laughCount}</p>
        <button
          onClick={() => handleCount("plusLaugh")}
          className={`plusLaugh`}
        />
      </div>
    </div>
  );
};

export default ScoreBoardPlayer;
