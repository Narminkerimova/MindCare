import express from 'express';
import { getUsers, register, login, confirm } from '../controller/UserController.js';
import { protect } from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.get('/', protect, getUsers);
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/confirm', confirm);

export default userRouter;
