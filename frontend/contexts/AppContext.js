import { useContext } from 'react';

import { initialState, rootReducer } from '../store/reducers/rootReducer';
import createAppContext from './createAppContext';
import { getData } from '../store/actions/dataActions';

export const { Context, AppProvider } = createAppContext(
	rootReducer,
	{ getData },
	initialState
);

export const useAppContext = () => useContext(Context);
