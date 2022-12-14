import React from "react";

function ScoreBoardPlayer(props: any) {
  return (
    <div className="scoreBoard">
      <p className="playerName">{props.player.name}</p>
      <div className="scoreBoardCount">
        <span className="minusLaugh"></span>
        <p className="laughNumber">{props.player.laughCount}</p>
        <span className="plusLaugh"></span>
      </div>
    </div>
  );
}

export default ScoreBoardPlayer;
