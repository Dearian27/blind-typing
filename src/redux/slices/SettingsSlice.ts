import { createSlice } from "@reduxjs/toolkit";

type settingsParams = {
	cursor: 'none' | 'default' | 'terminal';
}

const initialState: settingsParams = {
	cursor: 'default',
}

const SettingsSlice = createSlice({
	initialState,
	name: 'settings',
	reducers: {
		setCursor: (state, action) => {
			state.cursor = action.payload;
		}
	}
});

export const {setCursor} = SettingsSlice.actions;
export default SettingsSlice.reducer;