import { Router } from "express";
import {
  findAllCenters,
  findCenterById,
  deleteCenterById,
  createOneCenter,
  updateCenterById,
} from "./../controller/CenterController.js";

export const centerRouter = Router();

centerRouter.get("/", findAllCenters);
centerRouter.get("/:id", findCenterById);
centerRouter.delete("/:id", deleteCenterById);
centerRouter.post("/", createOneCenter);
centerRouter.put("/:id", updateCenterById);
