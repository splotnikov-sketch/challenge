// config.js

import * as dotenv from 'dotenv';
dotenv.config();

const config = {
	PORT: process.env.PORT || 3010,
	LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'silent',
};

export default config;
