import React, {useEffect, type FC, useState, useRef} from 'react';
import styles from './ChatBody.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {type RootState} from '../../../../redux/store';
import {checkMessages, updateMessages} from './ChatBody.functions';
import {setMessages} from '../../../../redux/userSlice';

const ChatBody: FC = () => {
	const dispatch = useDispatch();
	const [isMounted, setIsMounted] = useState(false);
	const chatRef = useRef<HTMLDivElement>(null);
	const {messages, activeContact: {chatId}, user, contacts} = useSelector((state: RootState) => state.user);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		checkMessages(chatId, dispatch, chatRef);

		return function () {
			dispatch(setMessages([]));
		};
	}, [chatId]);

	useEffect(() => {
		if (isMounted) {
			(async () => {
				await updateMessages({user, chatId, contacts}, dispatch, chatRef);
			})();

			const int = setInterval(() => {
				(async () => {
					await updateMessages({user, chatId, contacts}, dispatch, chatRef);
				})();
			}, 6000);

			return function () {
				clearInterval(int);
			};
		}
	}, [messages, isMounted]);

	return (
		<article ref={chatRef} id='chatbody' className={styles.chatbody}>
			{messages.length ? (
				<>
					{messages.map(({isMine, text, time}) => (
						<span key={text + time}
							data-time={new Date(time).toLocaleTimeString().slice(0, -3)}
							className={isMine ? styles.mine : styles.incoming}
						>
							{text}
						</span>
					))}
				</>

			) : <p>сообщений нет</p>}
		</article>
	);
};

export default ChatBody;
