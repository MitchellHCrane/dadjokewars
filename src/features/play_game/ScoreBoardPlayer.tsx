import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { store } from "../../app/store";
// import { playerSlice } from "../../taskSlice";
// Props from PlayGame.tsx
function ScoreBoardPlayer(props: any) {
  // Laughs from redux store. Should be 0 props.player.laughCount is probably something I don't need
  // const laughs = props.player.laughCount;

  const [laughScore, setLaughScore] = useState(0);
  const playerName = props.player.name;
  // const dispatch = useDispatch();
  const handleMinus = () => {
    laughScore === 0 ? 0 : setLaughScore(laughScore - 1);
  };
  const handlePlus = () => {
    setLaughScore(laughScore + 1);
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
