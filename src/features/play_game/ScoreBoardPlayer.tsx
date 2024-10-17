import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { PlayerRecord } from "../../interfaces";
import { playerSlice } from "../../taskSlice";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
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
      <div className="flex items-center gap-x-3 w-32 justify-between">
        <button
          onClick={() => handleCount("minusLaugh")}
          className={`${
            laughCount === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-lightCta hover:text-cta bg-gray-100 rounded-md"
          }`}
        >
          <MinusIcon className="size-8" />
        </button>

        <p className="">{laughCount}</p>
        <button
          onClick={() => handleCount("plusLaugh")}
          className={`text-lightCta hover:text-cta bg-gray-100 rounded-md`}
        >
          <PlusIcon className="size-8" />
        </button>
      </div>
    </div>
  );
};

export default ScoreBoardPlayer;
