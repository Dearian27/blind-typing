import { createSlice } from "@reduxjs/toolkit";

type userStateParams = {
    name: string;
    stages: number
}

const initialState: userStateParams = {
    name: "Dearian",
    stages: 10,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
})

export const {  } = userSlice.actions;
export default userSlice.reducer;