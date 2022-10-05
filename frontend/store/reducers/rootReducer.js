import combineReducers from './combineReducers';
import { initialState as dataInitialState, dataReducer } from './dataReducer';

export const initialState = {
	data: dataInitialState,
};

const rootReducer = combineReducers({
	data: dataReducer,
});

export { rootReducer };
