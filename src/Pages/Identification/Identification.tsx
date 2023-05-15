import React, {useState, type FC} from 'react';
import styles from './Identification.module.scss';
import {identHandleChange, identificate} from './Identification.functions';
import {useDispatch} from 'react-redux';

const Identification: FC = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState({idInstance: '', apiTokenInstance: ''});
	const [errorMessage, setErrorMessage] = useState('');

	return (
		<main className={styles.indentification}>
			<h1>GREEN API TEST</h1>
			<form>
				<article>
					<input
						type='text'
						name='idInstance'
						id='idInstance'
						className={data.idInstance ? styles.filled : undefined}
						value={data.idInstance}
						onChange={event => {
							identHandleChange(event, setData);
						}} />
					<label htmlFor='idInstance'>idInstance</label>
				</article>

				<article>
					<input
						type='text'
						name='ApiTokenInstance'
						id='ApiTokenInstance'
						className={data.apiTokenInstance ? styles.filled : undefined}
						value={data.apiTokenInstance}
						onChange={event => {
							identHandleChange(event, setData);
						}} />
					<label htmlFor='ApiTokenInstance'>ApiTokenInstance</label>
				</article>

				<button type='button' onClick={() => {
					identificate(data, dispatch, setErrorMessage);
				}}>войти</button>

				<p className={styles.error}>{errorMessage}</p>
			</form>
		</main>
	);
};

export default Identification;
