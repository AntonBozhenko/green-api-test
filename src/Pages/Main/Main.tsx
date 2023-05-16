import React, {type FC} from 'react';
import Contacts from '../../components/Contacts/Contacts';
import Chat from '../../components/Chat/Chat';
import styles from './Main.module.scss';

const Main: FC = () => (
	<main className={styles.main}>
		<Contacts />
		<Chat />
	</main>
);

export default Main;
