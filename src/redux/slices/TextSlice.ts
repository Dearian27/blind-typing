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
	currentLetterValue: string;
	initialized: boolean;
	stopped: boolean;
	cursorPos: any;
}

const initialState: textParams = {
	text: '',
	lettersStates: [],
	currentLetter: 0,
	currentLetterValue: '',
	initialized: false,
	stopped: false,
	cursorPos: null,
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
					status: 'none',
				}
			}
			state.currentLetterValue = array[0].value;
			state.lettersStates = array;
			state.initialized = true;
		},
		keyPress: (state, action: PayloadAction<string>) => {
			if(state.stopped) return;

			if(action.payload === state.lettersStates[state.currentLetter].value) {
				state.lettersStates[state.currentLetter].status = 'correct';
			} else {
				state.lettersStates[state.currentLetter].status = 'wrong';
			}
			if(state.currentLetter === state.text.length-1) {
				state.stopped = true;
			} else {
				state.currentLetterValue = state.lettersStates[state.currentLetter+1].value;
				state.currentLetter++;
			}
		},
		backspacePress: (state) => {
			if(state.stopped) return;
			if(state.currentLetter === 0) return;
			state.lettersStates[state.currentLetter].status = 'none';
			state.lettersStates[state.currentLetter-1].status = 'none';
			state.currentLetterValue = state.lettersStates[state.currentLetter-1].value;
			state.currentLetter--;
		},
		setLetterPos: (state, action: PayloadAction<any>) => {
			state.cursorPos = action.payload;
		}
	}
})

export const {initializeText, keyPress, backspacePress, setLetterPos} = TextSlice.actions;
export default TextSlice.reducer;