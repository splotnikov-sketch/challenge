import {
	PERFORMING_REQUEST,
	SET_RESULTS,
	SET_ERRORS,
	CLEAR_ERRORS,
} from '../types';

import axios from 'axios';

export const getData = (dispatch) => {
	return async (url) => {
		console.log(url);

		dispatch({ type: CLEAR_ERRORS });
		dispatch({ type: PERFORMING_REQUEST });

		try {
			const response = await axios({
				method: 'post',
				url: '/api/parse',
				data: {
					url: url,
				},
			});

			const { data } = response;

			console.log('response');
			console.log(response);

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
