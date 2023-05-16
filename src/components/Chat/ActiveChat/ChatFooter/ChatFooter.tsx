import React, {useState, type FC} from 'react';
import styles from './ChatFooter.module.scss';
import {useDispatch} from 'react-redux';

const ChatFooter: FC = () => {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	return (
		<article className={styles.chatfooter}>
			<input type='text' placeholder='Введите сообщение' value={text} onChange={event => {
				setText(event.target.value);
			}} />
			<button type='button'><img src='/images/send.png' alt='отправить' /></button>
		</article>
	);
};

export default ChatFooter;
