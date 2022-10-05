import axios from 'axios';

const apiInstance = axios.create({
	baseURL: 'http://localhost:3010',
});

export default async function handler(req, res) {
	const method = req?.method;
	res.setHeader('Content-Type', 'application/json');

	switch (req.method) {
		case 'POST':
			const url = req.body.url;

			try {
				const response = await apiInstance.post(`/parse`, {
					url: url,
				});

				const { data } = response;

				res.status(200).send(JSON.stringify(data, null, 2));
			} catch (error) {
				console.log('error', error);
			}
			break;
		default:
			res.status(405).end(`Method ${method} is not allowed`);
	}
}
