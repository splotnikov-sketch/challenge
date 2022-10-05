import {
	PERFORMING_REQUEST,
	SET_RESULTS,
	SET_ERRORS,
	CLEAR_ERRORS,
} from '../types';

export const initialState = {
	url: null,
	images: [],
	wordsCount: null,
	words: [],
	isRequesting: false,
	errors: null,
};

export const dataReducer = (state = initialState, action) => {
	if (action.type === null) {
		return state;
	}

	switch (action.type) {
		case PERFORMING_REQUEST:
			return { ...initialState, isRequesting: true };

		case SET_RESULTS:
			return {
				url: action.payload.url,
				images: action.payload.images,
				wordsCount: action.payload.wordsCount,
				words: action.payload.words,
				isRequesting: false,
				errors: null,
			};

		case SET_ERRORS:
			return {
				url: null,
				images: [],
				wordsCount: null,
				words: [],
				isRequesting: false,
				errors: action.payload.errors,
			};

		case CLEAR_ERRORS: {
			return { ...state, errors: null };
		}

		default: {
			return state;
		}
	}
};
