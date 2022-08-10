import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "./interfaces";

const initialState: Game = {
  playerCount: 2,
  roundCount: 1,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState as Game,
  reducers: {
    //players
    //player names
    //points
    setScore: (state, action: PayloadAction<{ data: Game }>) => {
      const { data } = action.payload;
      if (data) {
        //do something here
      } else {
        return data;
      }
    },

    setPlayersAndRoundCount: (state, action: PayloadAction<{ data: Game }>) => {
      const { data } = action.payload;
      if (data) {
        //do something here
        return data;
      } else {
        return state;
      }
    },
    //rounds
  },
});
