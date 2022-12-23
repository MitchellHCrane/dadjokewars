import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { Game, PlayerRecord } from "./interfaces";

const initialState: Game = {
  playerCount: 2,
  roundCount: 1,
};
const playerState: PlayerRecord[] = [];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState as Game,
  reducers: {
    setPlayersAndRoundCount: (state, action: PayloadAction<{ data: Game }>) => {
      const { data } = action.payload;
      if (data) {
        return data;
      } else {
        return state;
      }
    },
  },
});

export const playerSlice = createSlice({
  name: "players",
  initialState: playerState as PlayerRecord[],
  reducers: {
    setPlayersNames: (state, action: PayloadAction<{ data: string[] }>) => {
      const { data } = action.payload;
      if (data) {
        const playerRecordsArray = data.map((name) => ({
          name,
          laughCount: 0,
        }));
        return playerRecordsArray;
      } else {
        return state;
      }
    },
    setLaughScore: (state, action: PayloadAction<{ data: PlayerRecord }>) => {
      const { data } = action.payload;

      if (data) {
        const foundIndexName = state.findIndex((e) => e.name === data.name);
        if (foundIndexName === -1) {
          return state;
        }
        state[foundIndexName] = data;
      } else {
        return state;
      }
    },
    setLaughScoreTest: (
      state,
      action: PayloadAction<{ data: PlayerRecord; type: string }>
    ) => {
      const { data, type } = action.payload;
      const foundIndexName = state.findIndex((e) => e.name === data.name);
      if (type === "plusLaugh") {
        data.laughCount += 1;
        state[foundIndexName] = data;
      } else if (type === "minusLaugh") {
        data.laughCount === 0 ? 0 : (data.laughCount -= 1);
        state[foundIndexName] = data;
      } else {
        return state;
      }
    },
  },
});
