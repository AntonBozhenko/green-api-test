import {type Dispatch} from 'react';

export type Setters = {
	setNumber: Dispatch<React.SetStateAction<string>>;
	setError: Dispatch<React.SetStateAction<string>>;
};
