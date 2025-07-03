import { Router } from "express";
import {
  findAllArticles,
  findArticleById,
  deleteArticleById,
  createOneArticle,
  updateArticleById,
} from "./../controller/ArticleController.js";

export const articleRouter = Router();

articleRouter.get("/", findAllArticles);
articleRouter.get("/:id", findArticleById);
articleRouter.delete("/:id", deleteArticleById);
articleRouter.post("/", createOneArticle);
articleRouter.put("/:id", updateArticleById);
