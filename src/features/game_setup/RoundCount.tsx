import { FC } from "react";

interface Props {
  handleRoundPlus: () => void;
  handleRoundMinus: () => void;
  counter: number;
}
export const RoundCounter: FC<Props> = ({
  handleRoundPlus,
  handleRoundMinus,
  counter,
}): JSX.Element => {
  return (
    <div className="inputContainer">
      <label htmlFor="player">Rounds</label>
      <div className="inputNumber">
        <span onClick={handleRoundMinus} className="minusPlayer"></span>
        <input
          className="inputText"
          name="player"
          value={counter}
          onChange={handleRoundMinus || handleRoundPlus}
        />
        <span onClick={handleRoundPlus} className="plusPlayer"></span>
      </div>
    </div>
  );
};
