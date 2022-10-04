import express from 'express';

const router = express.Router();

router.get('/', async (reg, res) => {
	res.send({ images: [], wordsCount: 2 });
});

export default router;
