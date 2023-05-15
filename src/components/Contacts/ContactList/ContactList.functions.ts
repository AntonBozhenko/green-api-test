import {type Dispatch} from '@reduxjs/toolkit';
import {type Contact} from '../../../redux/types';
import {setActiveContact, setContacts} from '../../../redux/userSlice';

export function checkContacts(dispatch: Dispatch) {
	const contactsLoSt = localStorage.getItem('contacts');
	if (contactsLoSt) {
		const contacts = JSON.parse(contactsLoSt) as Contact[];
		dispatch(setContacts(contacts));
	}
}

export function makeActive(dispatch: Dispatch, chatId: string, number: string) {
	dispatch(setActiveContact({chatId, number}));
}
