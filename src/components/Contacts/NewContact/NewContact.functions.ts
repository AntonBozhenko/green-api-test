import {type Dispatch} from '@reduxjs/toolkit';
import {type Contact} from '../../../redux/types';
import {addContact} from '../../../redux/userSlice';

function checkNumber(number: string): boolean {
	return Boolean(/^(\+7|8)\d{10}$/.exec(number.trim()));
}

function makeCorrectNumber(number: string): string {
	if (/^8\d{10}$/.exec(number.trim())) {
		return number.trim().replace('8', '+7');
	}

	return number;
}

function makeChatId(correctNumber: string): string {
	return `${correctNumber.slice(1)}@c.us`;
}

export function addNewContact(
	number: string,
	dispatch: Dispatch,
	setNumber: React.Dispatch<React.SetStateAction<string>>,
	setError: React.Dispatch<React.SetStateAction<string>>,
) {
	if (number) {
		if (checkNumber(number)) {
			const correctNumber = makeCorrectNumber(number);
			const chatId = makeChatId(correctNumber);

			const newContact = {
				chatId,
				number: correctNumber,
			};

			const contactsLoSt = localStorage.getItem('contacts');
			if (contactsLoSt) {
				const contacts = JSON.parse(contactsLoSt) as Contact[];

				localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));
			} else {
				localStorage.setItem('contacts', JSON.stringify([newContact]));
			}

			dispatch(addContact(newContact));
			setNumber('');
		} else {
			setError('неверный формат');
			setTimeout(() => {
				setError('');
			}, 1500);
		}
	}
}

export function numberHandleChange(
	event: React.ChangeEvent<HTMLInputElement>,
	setNumber: React.Dispatch<React.SetStateAction<string>>) {
	if (Number(event.target.value) || event.target.value === '') {
		setNumber(event.target.value);
	}
}
