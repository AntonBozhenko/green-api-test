import React, {type FC} from 'react';
import {useSelector} from 'react-redux';
import {type RootState} from '../../redux/store';
import ActiveChat from './ActiveChat/ActiveChat';
import NonActiveChat from './NonActiveChat/NonActiveChat';

const Chat: FC = () => {
	const {chatId} = useSelector((state: RootState) => state.user.activeContact);

	return (
		chatId ? (<ActiveChat />) : <NonActiveChat />
	);
};

export default Chat;
