import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type letterParams = {
	value: string;
	current: boolean;
	status: 'none' | 'correct' | 'wrong';
}

type textParams = {
	text: string;
	lettersStates: letterParams[];
	currentLetter: number;
}

const initialState: textParams = {
	text: '',
	lettersStates: [],
	currentLetter: 0,
}

const TextSlice = createSlice({
	name: "text",
	initialState,
	reducers: {
		initializeText: (state, action: PayloadAction<{text: string;}>) => {
			state.text = action.payload.text;
			state.lettersStates = new Array(action.payload.text.length).fill(false);
		},
		initializeLetter: (state, action: PayloadAction<{id: number,value: string}>) => {
			state.lettersStates[action.payload.id] = {value: action.payload.value, current: false, status: 'none'};
		},
		// buttonPress: (state, action: PayloadAction<>) => {
		// 	state.
		// },
	}
})


export const {initializeText, initializeLetter} = TextSlice.actions;
export default TextSlice.reducer;