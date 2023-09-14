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
      console.log('fds')
      console.log(action.payload)
      state.wrongLetters[action.payload]++;
    }
  }
})

export const { setWrongLetter } = StatsSlice.actions;
export default StatsSlice.reducer;
