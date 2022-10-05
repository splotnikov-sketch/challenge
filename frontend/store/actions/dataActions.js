import {
	PERFORMING_REQUEST,
	SET_RESULTS,
	SET_ERRORS,
	CLEAR_ERRORS,
} from '../types';

import axios from 'axios';

const isGoodUrl = (url) => {
	const regEx =
		/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

	return url.match(regEx);
};

export const getData = (dispatch) => {
	return async (url) => {
		dispatch({ type: CLEAR_ERRORS });
		dispatch({ type: PERFORMING_REQUEST });

		if (!isGoodUrl(url)) {
			dispatch({
				type: SET_ERRORS,
				payload: { errors: 'Wrong url format' },
			});
			return;
		}

		try {
			const response = await axios({
				method: 'post',
				url: '/api/parse',
				data: {
					url: url,
				},
			});

			const { data } = response;

			dispatch({
				type: SET_RESULTS,
				payload: {
					url: url,
					images: data.images,
					wordsCount: data.wordsCount,
					words: data.words,
				},
			});
		} catch (error) {}
	};
};
