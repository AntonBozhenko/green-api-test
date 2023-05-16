import React, {type FC} from 'react';
import styles from './NonActiveChat.module.scss';

const NonActiveChat: FC = () => (
	<section className={styles.nonactivechat}>
		<img src='/images/watsapp.png' alt='logo' />
		<h1>Green Api test</h1>
		<p>Нажатие на контакт откроет чат с ним</p>
	</section>
);

export default NonActiveChat;
