import React from "react";
import { playerSlice } from "../../taskSlice";

function FinalScores(props: any) {
  return (
    <div className="scoreBoard">
      <p className="playerName" id="whiteP">
        {props.player.name}
      </p>
      <div className="scoreBoardCount">
        <p className="laughNumber" id="whiteP"></p>
      </div>
      <div className="three">
        <p className="nameList" id="whiteP">
          {props.player.laughCount}
        </p>
      </div>
    </div>
  );
}

export default FinalScores;
