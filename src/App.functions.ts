import {type Dispatch} from '@reduxjs/toolkit';
import {setUser} from './redux/userSlice';

type Data = [string, string];

export default function checkIdentification(dispatch: Dispatch): void {
	const indentDataLoSt = localStorage.getItem('identData') ?? '';

	if (indentDataLoSt) {
		const indentData = JSON.parse(indentDataLoSt) as Data;

		dispatch(setUser(indentData));
	}
}
