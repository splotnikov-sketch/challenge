import { Router } from 'express';
import parserRoutes from './parserRoutes';

const rootRouter = Router();

rootRouter.use('/parse', parserRoutes);

export default rootRouter;
