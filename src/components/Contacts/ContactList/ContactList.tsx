import React, {useEffect, type FC} from 'react';
import styles from './ContactList.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {type RootState} from '../../../redux/store';
import {checkContacts, makeActive} from './ContactList.functions';

const ContactList: FC = () => {
	const dispatch = useDispatch();
	const {contacts, activeContact} = useSelector((state: RootState) => state.user);

	useEffect(() => {
		checkContacts(dispatch);
	}, []);

	return (
		<article className={styles.contactlist}>
			{contacts.length
				? (
					<>
						{contacts.map(({chatId, number}) => (
							<div key={chatId}
								className={chatId === activeContact.chatId ? `${styles.contact} ${styles.active}` : styles.contact}
								onClick={() => {
									makeActive(dispatch, chatId, number);
								}}
							>
								<img src='/images/avatar.jpeg' alt='аватар' />
								<p>{number}</p>
							</div>
						))}
					</>

				)
				: (<p className={styles.empty}>контактов нет</p>)}
		</article>
	);
};

export default ContactList;
