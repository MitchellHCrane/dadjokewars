import { FC } from "react";

interface Props {
  handlePlayerPlus: () => void;
  handlePlayerMinus: () => void;
  counter: number;
}
export const PlayerCounter: FC<Props> = ({
  handlePlayerPlus,
  handlePlayerMinus,
  counter,
}): JSX.Element => {
  return (
    <div className="inputContainer">
      <label htmlFor="player">Players</label>
      <div className="inputNumber">
        <span onClick={handlePlayerMinus} className="minusPlayer"></span>
        <input
          className="inputText"
          name="player"
          value={counter}
          onChange={handlePlayerMinus || handlePlayerPlus}
        />
        <span onClick={handlePlayerPlus} className="plusPlayer"></span>
      </div>
    </div>
  );
};
