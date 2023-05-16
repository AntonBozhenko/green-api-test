import React, {type FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import {type RootState} from './redux/store';
import checkIdentification from './App.functions';
import Identification from './Pages/Identification/Identification';
import Main from './Pages/Main/Main';
import ConditionElement from './components/ConditionElement/ConditionElement';

const App: FC = () => {
	const {idInstance} = useSelector((state: RootState) => state.user.user);
	const dispatch = useDispatch();

	useEffect(() => {
		checkIdentification(dispatch);
	}, []);

	return (
		<>
			<Routes>
				<Route path='/' element={<ConditionElement condition={Boolean(idInstance)} redirect='/identification' element={<Main />} />} />
				<Route path='/identification' element={<ConditionElement condition={Boolean(!idInstance)} redirect='/' element={<Identification />} />} />
				<Route path='*' element={<p>404</p>} />
			</Routes>
		</>

	);
};

export default App;
