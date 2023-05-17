import {type Dispatch} from '@reduxjs/toolkit';
import {type Message, type Contact, type User, type State} from '../../../../redux/types';
import {addMessage, setMessages} from '../../../../redux/userSlice';
import axios from 'axios';
import url from '../url';
import {type UserData, type Data} from './ChatBody.types';
import {type RootState} from '../../../../redux/store';

export function checkMessages(
	chatId: string,
	dispatch: Dispatch,
	chatRef: React.RefObject<HTMLDivElement>,
) {
	const messagesLoSt = localStorage.getItem('messages');

	if (messagesLoSt) {
		const messages = JSON.parse(messagesLoSt) as Message[];

		const filteredMessages = messages.filter(msg => msg.chatId === chatId);

		if (filteredMessages.length) {
			dispatch(setMessages(filteredMessages));

			setTimeout(() => {
				if (chatRef.current) {
					chatRef.current.scrollTop = chatRef.current.scrollHeight;
				}
			}, 0);
		} else {
			dispatch(setMessages([]));
		}
	}
}

export async function updateMessages(
	userData: UserData,
	dispatch: Dispatch,
	chatRef: React.RefObject<HTMLDivElement>,
) {
	const {user: {idInstance, apiTokenInstance}, chatId, contacts} = userData;
	const myContactsIds = contacts.map(el => el.chatId);

	const resp = await axios.get(`${url}/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`);

	if (resp.data && (resp.data as Data).body.typeWebhook === 'incomingMessageReceived') {
		const data = resp.data as Data;

		await axios.delete(`${url}/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${data.receiptId}`);

		const {sender} = data.body.senderData;

		if (myContactsIds.includes(sender)) {
			const newMessage: Message = {
				chatId: sender,
				isMine: false,
				text: data.body.messageData.textMessageData.textMessage,
				time: new Date(data.body.timestamp * 1000).toISOString(),
			};

			const messagesLoSt = localStorage.getItem('messages');

			if (messagesLoSt) {
				const messages = JSON.parse(messagesLoSt) as Message[];

				localStorage.setItem('messages', JSON.stringify([...messages, newMessage]));
			} else {
				localStorage.setItem('messages', JSON.stringify([newMessage]));
			}

			if (sender === chatId) {
				dispatch(addMessage(newMessage));

				setTimeout(() => {
					if (chatRef.current) {
						chatRef.current.scrollTop = chatRef.current.scrollHeight;
					}
				}, 0);
			}
		}
	}
}
