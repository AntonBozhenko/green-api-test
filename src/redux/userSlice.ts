import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {type Message, type Contact, type State, type User} from './types';

const initialState: State = {
	user: {idInstance: '', apiTokenInstance: ''},
	contacts: [],
	activeContact: {chatId: '', number: ''},
	messages: [],
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User>) {
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

		addMessage(state, action: PayloadAction<Message>) {
			state.messages = [...state.messages, action.payload];
		},
	},
});

export const {setUser, setContacts, addContact, setActiveContact, closeActiveContact, setMessages, addMessage} = userSlice.actions;

export default userSlice.reducer;
