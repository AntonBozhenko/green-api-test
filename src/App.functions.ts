import {type Dispatch} from '@reduxjs/toolkit';
import {setUser} from './redux/userSlice';
import {type User} from './redux/types';

export default function checkIdentification(dispatch: Dispatch): void {
	const indentDataLoSt = localStorage.getItem('identData') ?? '';

	if (indentDataLoSt) {
		const indentData = JSON.parse(indentDataLoSt) as User;

		dispatch(setUser(indentData));
	}
}
