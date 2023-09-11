import { createSlice } from "@reduxjs/toolkit";

type userStateParams = {
    name: string;
    stages: number
}

const initialState: userStateParams = {
    name: "Dearian",
    stages: 10,
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
})

export const {  } = UserSlice.actions;
export default UserSlice.reducer;