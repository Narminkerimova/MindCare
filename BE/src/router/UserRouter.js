import {Router} from "express"
import {createOneUser, deleteUserById, findAllUsers, findUserById, updateUserById } from "../controller/UserController.js"

export const userRouter = Router();

userRouter.get('/',findAllUsers)
userRouter.get('/:id',findUserById)
userRouter.delete('/:id',deleteUserById)
userRouter.post('/',createOneUser)
userRouter.put('/:id',updateUserById)