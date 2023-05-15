import React, {type FC} from 'react';
import styles from './contacts.module.scss';
import {useSelector} from 'react-redux';
import {type RootState} from '../../../redux/store';

const ContactList: FC = () => {
	const {contacts} = useSelector((state: RootState) => state.user);

	return (
		<article>
			{contacts.length
				? (
					<>
						{contacts.map(({chatId, number}) => (
							<p key={chatId}>{number}</p>
						))}
					</>

				)
				: (<p>контактов нет</p>)}
		</article>
	);
};

export default ContactList;
