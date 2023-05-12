import React, {Fragment, type FC} from 'react';
import {useSelector} from 'react-redux';
import {Navigate, Route, Routes} from 'react-router-dom';
import {type RootState} from './redux/store';
import ConditionElement from './components/CustomRoute/ConditionElement';

const App: FC = () => {
	const {user} = useSelector((state: RootState) => state.user);
	return (
		<>
			<Routes>
				<Route path='/' element={<ConditionElement condition={Boolean(user[0])} redirect='/identification' element={<p>чатик</p>}/>}/>
				<Route path='/identification' element={<ConditionElement condition={!user[0]} redirect='/' element={<p>идентификация</p>}/>}/>
			</Routes>
		</>

	);
};

export default App;
