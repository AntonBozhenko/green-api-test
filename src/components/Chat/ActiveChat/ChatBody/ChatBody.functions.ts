import {type Dispatch} from '@reduxjs/toolkit';
import {type Message} from '../../../../redux/types';
import {setMessages} from '../../../../redux/userSlice';

export default function checkMessages(
	chatId: string,
	dispatch: Dispatch,
) {
	const messagesLoSt = localStorage.getItem('messages');

	if (messagesLoSt) {
		const messages = JSON.parse(messagesLoSt) as Message[];

		const filteredMessages = messages.filter(msg => msg.chatId === chatId);

		if (filteredMessages.length) {
			dispatch(setMessages(filteredMessages));
		} else {
			dispatch(setMessages([]));
		}
	}
}
