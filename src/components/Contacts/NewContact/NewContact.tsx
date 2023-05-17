import React, {useState, type FC} from 'react';
import styles from './NewContact.module.scss';
import {addNewContact, numberHandleChange} from './NewContact.functions';
import {useDispatch} from 'react-redux';

const NewContact: FC = () => {
	const dispatch = useDispatch();
	const [number, setNumber] = useState('');
	const [error, setError] = useState('');

	function zalupa(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log(1);
	}

	return (
		<form className={styles.newcontact} onSubmit={event => {
			addNewContact(number, dispatch, {setNumber, setError}, event);
		}}>
			<input type='text' placeholder='Новый чат' value={number} onChange={event => {
				numberHandleChange(event, setNumber);
			}}
			/>
			<button type='button' onClick={() => {
				addNewContact(number, dispatch, {setNumber, setError});
			}}>+</button>
			<p className={styles.error}>{error}</p>
		</form>
	);
};

export default NewContact;
