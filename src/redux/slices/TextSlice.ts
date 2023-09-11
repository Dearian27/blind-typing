import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type letterParams = {
	value: string;
	// current: boolean;
	status: 'none' | 'correct' | 'wrong';
}

type textParams = {
	text: string;
	lettersStates: letterParams[];
	currentLetter: number;
	initialized: boolean;
}

const initialState: textParams = {
	text: '',
	lettersStates: [],
	currentLetter: 0,
	initialized: false
}

const TextSlice = createSlice({
	name: "text",
	initialState,
	reducers: {
		initializeText: (state, action: PayloadAction<{text: string;}>) => {
			state.text = action.payload.text;
			const array:letterParams[] = [];
			for(let i = 0; i < action.payload.text.length; i++) {
				array[i] = {
					value: state.text[i],
					// current: i === 0 ? true : false,
					status: 'none',
				}
			}
			console.log(array)
			state.lettersStates = array;
			state.initialized = true;
		},
		initializeLetter: (state, action: PayloadAction<{id: number,value: string}>) => {
			state.lettersStates[action.payload.id] = {
				value: action.payload.value,
				// current: false,
				status: 'none'
			};
		},
		// buttonPress: (state, action: PayloadAction<>) => {
		// 	state.
		// },
	}
})


export const {initializeText, initializeLetter} = TextSlice.actions;
export default TextSlice.reducer;