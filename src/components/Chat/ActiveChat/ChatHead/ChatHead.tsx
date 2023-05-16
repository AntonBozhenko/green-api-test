import React, {type FC} from 'react';
import styles from './ChatHead.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {type RootState} from '../../../../redux/store';
import {closeActiveContact} from '../../../../redux/userSlice';

const ChatHead: FC = () => {
	const dispatch = useDispatch();
	const {chatId, number} = useSelector((state: RootState) => state.user).activeContact;

	return (
		<article className={styles.chathead}>
			<button type='button' onClick={() => {
				dispatch(closeActiveContact());
			}}>←</button>
			<img src='/images/avatar.jpeg' alt='аватар' />
			<p>{number}</p>
		</article>
	);
};

export default ChatHead;
