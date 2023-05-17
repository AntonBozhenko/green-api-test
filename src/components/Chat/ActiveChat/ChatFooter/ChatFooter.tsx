import React, {useState, type FC} from 'react';
import styles from './ChatFooter.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import sendMessage from './ChatFooter.functions';
import {type RootState} from '../../../../redux/store';

const ChatFooter: FC = () => {
	const [message, setMessage] = useState('');
	const {user} = useSelector((state: RootState) => state);
	const dispatch = useDispatch();

	return (
		<form className={styles.chatfooter}
			onSubmit={async event => {
				await sendMessage(user, message, dispatch, setMessage, event);
			}}>
			<input type='text' placeholder='Введите сообщение' value={message} onChange={event => {
				setMessage(event.target.value);
			}} />
			<button type='button' onClick={async () => {
				await sendMessage(user, message, dispatch, setMessage);
			}}><img src='/images/send.png' alt='отправить' /></button>
		</form>
	);
};

export default ChatFooter;
