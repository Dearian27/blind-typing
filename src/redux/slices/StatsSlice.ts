import { createSlice } from "@reduxjs/toolkit";

type StatsParams = {
  wrongLetters: { [key: string]: number };
}

const initialState: StatsParams = {
  wrongLetters: {},
}

const StatsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    setWrongLetter: (state, action) => {
      state.wrongLetters[action.payload]++;
    }
  }
})

export const { setWrongLetter } = StatsSlice.actions;
export default StatsSlice.reducer;
