import React, {type FC} from 'react';
import {Route, Routes} from 'react-router-dom';

const App: FC = () => (
	<Routes>
		<Route index element={<p>чатик</p>} />
		<Route path='/identification' element={<p>идентификация</p>}/>
	</Routes>
);

export default App;
