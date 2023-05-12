import {type Dispatch, type ChangeEvent, type SetStateAction} from 'react';

export function indentHandleChange(
	event: ChangeEvent<HTMLInputElement>,
	setData: Dispatch<SetStateAction<{
		idInstance: string;
		apiTokenInstance: string;
	}>>) {
	if (event.target.name === 'idInstance') {
		setData(prev => ({...prev, idInstance: event.target.value}));
	} else {
		setData(prev => ({...prev, apiTokenInstance: event.target.value}));
	}
}
