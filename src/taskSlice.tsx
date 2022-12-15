import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setLaughScore: (state, action: PayloadAction<{ data: PlayerRecord[] }>) => {
      const { data } = action.payload;
      console.log(data);
      if (data) {
        return data;
      } else {
        return state;
      }
    },
  },
});
