import { Router } from "express";
import {
  findAllQuiz,
  findQuizById,
  deleteQuizById,
  createOneQuiz,
  updateQuizById,
  solveQuiz,          
} from "./../controller/QuizController.js";

export const quizRouter = Router();

quizRouter.get("/", findAllQuiz);
quizRouter.get("/:id", findQuizById);
quizRouter.delete("/:id", deleteQuizById);
quizRouter.post("/", createOneQuiz);
quizRouter.put("/:id", updateQuizById);

quizRouter.post("/solve", solveQuiz);
