import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {type Contact, type State} from './types';

const initialState: State = {
	user: ['', ''],
	contacts: [],
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<[string, string]>) {
			state.user = action.payload;
		},

		setContacts(state, action: PayloadAction<Contact[]>) {
			state.contacts = action.payload;
		},

		addContact(state, action: PayloadAction<Contact>) {
			state.contacts = [...state.contacts, action.payload];
		},
	},
});

export const {setUser, setContacts, addContact} = userSlice.actions;

export default userSlice.reducer;
