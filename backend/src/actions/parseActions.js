import axios from 'axios';

const parseContent = async (url) => {
	const response = await axios.get(url);
	const html = await response.data;

	const images = html
		.match(/<img [^>]*src="[^"]*"[^>]*>/gm)
		.map((x) => x.replace(/.*src="([^"]*)".*/, '$1'));

	const bodyRegex = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
	const body = bodyRegex.exec(html);

	const bodyCleared = body[1].replace(/<[^>]*>/g, '');

	const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
	const bodyNoScript = bodyCleared.replace(scriptRegex, '');

	const bodyWords = bodyNoScript
		.split(' ')
		.map((x) => x.trim().match(/[a-zA-Z]{3,}/));

	const uniqueWords = bodyWords.reduce((acc, val) => {
		acc[val] = acc[val] === undefined ? 1 : (acc[val] += 1);
		return acc;
	}, {});

	let sortable = [];
	let wordsCount = 0;

	for (let word in uniqueWords) {
		sortable.push([word, uniqueWords[word]]);
		wordsCount += uniqueWords[word];
	}

	sortable.sort(function (a, b) {
		return b[1] - a[1];
	});

	//console.log(JSON.stringify(sortable));

	return {
		url: url,
		images: images,
		wordsCount: wordsCount,
		words: sortable,
	};
};

export { parseContent };
