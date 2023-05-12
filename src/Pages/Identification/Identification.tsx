import React, {useState, type FC} from 'react';
import styles from './Identification.module.scss';
import {indentHandleChange} from './Identification.functions';

const Identification: FC = () => {
	const [data, setData] = useState({idInstance: '', apiTokenInstance: ''});

	return (
		<main className={styles.indentification}>
			<h1>GREEN API TEST</h1>
			<form>
				<article>
					<input
						type='text'
						name='idInstance'
						className={data.idInstance ? styles.filled : undefined}
						value={data.idInstance}
						onChange={event => {
							indentHandleChange(event, setData);
						}} />
					<span>idInstance</span>
				</article>

				<article>
					<input
						type='text'
						name='ApiTokenInstance'
						className={data.apiTokenInstance ? styles.filled : undefined}
						value={data.apiTokenInstance}
						onChange={event => {
							indentHandleChange(event, setData);
						}} />
					<span>ApiTokenInstance</span>
				</article>

				<button type='button'>войти</button>
			</form>
		</main>
	);
};

export default Identification;
