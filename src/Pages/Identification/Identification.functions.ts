import {type Dispatch} from '@reduxjs/toolkit';
import {type ChangeEvent, type SetStateAction} from 'react';
import {setUser} from '../../redux/userSlice';

export function identHandleChange(
	event: ChangeEvent<HTMLInputElement>,
	setData: React.Dispatch<SetStateAction<{
		idInstance: string;
		apiTokenInstance: string;
	}>>) {
	if (event.target.name === 'idInstance') {
		setData(prev => ({...prev, idInstance: event.target.value}));
	} else {
		setData(prev => ({...prev, apiTokenInstance: event.target.value}));
	}
}

export function identificate(
	data: {
		idInstance: string;
		apiTokenInstance: string;
	},
	dispatch: Dispatch,
	setErrorMessage: React.Dispatch<React.SetStateAction<string>>) {
	if (!data.idInstance || !data.apiTokenInstance) {
		setErrorMessage('заполните все поля!');
		setTimeout(() => {
			setErrorMessage('');
		}, 2000);
	} else {
		localStorage.setItem('identData', JSON.stringify(data));
		dispatch(setUser(data));
	}
}
