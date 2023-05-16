import React, {type FC} from 'react';
import styles from './Chat.module.scss';
import {useSelector} from 'react-redux';
import {type RootState} from '../../redux/store';
import ActiveChat from './ActiveChat/ActiveChat';
import NonActiveChat from './NonActiveChat/NonActiveChat';

const Chat: FC = () => {
	const {activeContact} = useSelector((state: RootState) => state.user);

	return (
		activeContact.chatId ? (<ActiveChat />) : <NonActiveChat />
	);
};

export default Chat;
