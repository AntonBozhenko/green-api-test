import React, {type FC, Fragment as Fg, type ReactElement} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

type Props = {
	condition: boolean;
	redirect: string;
	element: ReactElement;
};

const ConditionElement: FC<Props> = ({condition, redirect, element}) => (
	condition ? element : <Navigate to={redirect} replace />
);

export default ConditionElement;
