import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {type Message, type Contact, type State} from './types';

const initialState: State = {
	user: ['', ''],
	contacts: [],
	activeContact: {chatId: '', number: ''},
	messages: [],
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

		setActiveContact(state, action: PayloadAction<Contact>) {
			state.activeContact = action.payload;
		},

		closeActiveContact(state) {
			state.activeContact = {chatId: '', number: ''};
		},

		setMessages(state, action: PayloadAction<Message[]>) {
			state.messages = action.payload;
		},

		addMessages(state, action: PayloadAction<Message>) {
			state.messages = [...state.messages, action.payload];
		},
	},
});

export const {setUser, setContacts, addContact, setActiveContact, closeActiveContact, setMessages, addMessages} = userSlice.actions;

export default userSlice.reducer;
