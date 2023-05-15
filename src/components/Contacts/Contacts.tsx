import React, {type FC} from 'react';
import styles from './contacts.module.scss';
import NewContact from './NewContact/NewContact';
import ContactList from './ContactList/ContactList';

const Contacts: FC = () => (
	<section className={styles.contacts}>
		<NewContact />
		<ContactList />
	</section>
);

export default Contacts;
