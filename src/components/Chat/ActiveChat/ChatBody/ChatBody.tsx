import React, {useEffect, type FC} from 'react';
import styles from './ChatBody.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {type RootState} from '../../../../redux/store';
import checkMessages from './ChatBody.functions';
import {setMessages} from '../../../../redux/userSlice';

const ChatBody: FC = () => {
	const dispatch = useDispatch();
	const {messages, activeContact: {chatId}} = useSelector((state: RootState) => state.user);

	useEffect(() => {
		checkMessages(chatId, dispatch);

		return function () {
			dispatch(setMessages([]));
		};
	}, [chatId]);

	return (
		<article className={styles.chatbody}>
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
