import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "./interfaces";

const initialState: Game[] = [];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState as [],
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
    //rounds
  },
});
