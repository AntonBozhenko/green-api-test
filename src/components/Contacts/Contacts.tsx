import React, {type FC} from 'react';
import styles from './contacts.module.scss';
import {useSelector} from 'react-redux';
import {type RootState} from '../../redux/store';
import NewContact from './NewContact/NewContact';
import ContactList from './ContactList/ContactList';

const Contacts: FC = () => {
	const {contacts} = useSelector((state: RootState) => state.user);

	return (
		<section className={styles.contacts}>
			<NewContact />
			<ContactList />
		</section>
	);
};

export default Contacts;
