import React, {type FC} from 'react';
import styles from './ActiveChat.module.scss';
import ChatHead from './ChatHead/ChatHead';
import ChatBody from './ChatBody/ChatBody';
import ChatFooter from './ChatFooter/ChatFooter';

const ActiveChat: FC = () => (
	<section className={styles.activechat}>
		<ChatHead />
		<ChatBody />
		<ChatFooter />
	</section>
);

export default ActiveChat;
