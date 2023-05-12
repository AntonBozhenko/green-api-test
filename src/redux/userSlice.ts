import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type State = {
	user: [string, string];
};

const initialState: State = {
	user: ['', ''],
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<[string, string]>) {
			state.user = action.payload;
		},
	},
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
