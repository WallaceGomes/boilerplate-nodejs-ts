import { create } from '../controllers/userController';
import { Router } from 'express';

const userRouter = Router();

userRouter.post('/', create);

export default userRouter;
