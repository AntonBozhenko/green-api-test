import React, {type FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate, Route, Routes} from 'react-router-dom';
import {type RootState} from './redux/store';
import ConditionElement from './components/CustomRoute/ConditionElement';
import checkIdentification from './App.functions';
import Identification from './Pages/Identification/Identification';
import Chat from './Pages/Chat/Chat';

const App: FC = () => {
	const {user} = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		checkIdentification(dispatch);
	}, []);

	return (
		<>
			<Routes>
				<Route path='/' element={<ConditionElement condition={Boolean(user[0])} redirect='/identification' element={<Chat />} />} />
				<Route path='/identification' element={<ConditionElement condition={!user[0]} redirect='/' element={<Identification />} />} />
				<Route path='*' element={<p>404</p>} />
			</Routes>
		</>

	);
};

export default App;
