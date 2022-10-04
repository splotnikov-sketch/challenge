import express from 'express';
import { parseContent } from '../actions/parseActions';

const router = express.Router();

router.post('/', async (req, res) => {
	const parsed = await parseContent(req.body.url);

	res.send(parsed);
});

export default router;
