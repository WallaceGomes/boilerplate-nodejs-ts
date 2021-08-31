import { Router } from 'express';
import userRouter from './userRoutes';

const routes = Router();

routes.use('api/users', userRouter);

export default routes;
