import { FC } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

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
      <label className="text-center" htmlFor="player">
        Players
      </label>
      <div className="inputNumber">
        <button onClick={handlePlayerMinus} className="px-3 cursor-pointer">
          <MinusIcon
            className={`size-8 ${
              counter === 2
                ? "text-gray-400"
                : "text-lightCta hover:text-cta bg-gray-100 rounded-md"
            }`}
          />
        </button>
        <input
          className="inputText"
          name="player"
          value={counter}
          onChange={handlePlayerMinus || handlePlayerPlus}
        />
        <button onClick={handlePlayerPlus} className="px-3 cursor-pointer">
          <PlusIcon
            className={`size-8 ${
              counter === 10
                ? "text-gray-400"
                : "text-lightCta hover:text-cta bg-gray-100 rounded-md"
            }`}
          />
        </button>
      </div>
    </div>
  );
};
