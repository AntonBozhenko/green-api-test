import React, {type FC} from 'react';
import styles from './ChatBody.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {type RootState} from '../../../../redux/store';

const ChatBody: FC = () => {
	const dispatch = useDispatch();
	const {messages} = useSelector((state: RootState) => state.user);

	return (
		<article className={styles.chatbody}>
			{messages.length ? (
				<>
					{messages.map(({isMine, text, time}) => (
						<span key={text + time} data-time={time} className={isMine ? styles.mine : styles.incoming}>{text}</span>
					))}
				</>

			) : <p>сообщений нет</p>}
		</article>
	);
};

export default ChatBody;
