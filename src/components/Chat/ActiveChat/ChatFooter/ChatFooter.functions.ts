import {type Dispatch} from '@reduxjs/toolkit';
import axios from 'axios';
import url from '../url';
import {type Message, type State} from '../../../../redux/types';
import {addMessage} from '../../../../redux/userSlice';

export default async function sendMessage(
	user: State,
	message: string,
	dispatch: Dispatch,
	setMessage: React.Dispatch<React.SetStateAction<string>>) {
	const {user: {idInstance, apiTokenInstance}, activeContact: {chatId}} = user;

	if (message) {
		const resp = await axios.post(`${url}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
			chatId,
			message,
		});

		if (resp.statusText === 'OK') {
			const newMessage: Message = {
				chatId,
				isMine: true,
				text: message,
				time: new Date().toISOString(),
			};

			const messagesLoSt = localStorage.getItem('messages');

			if (messagesLoSt) {
				const messages = JSON.parse(messagesLoSt) as Message[];

				localStorage.setItem('messages', JSON.stringify([...messages, newMessage]));
			} else {
				localStorage.setItem('messages', JSON.stringify([newMessage]));
			}

			dispatch(addMessage(newMessage));
			setMessage('');
		}
	}
}
