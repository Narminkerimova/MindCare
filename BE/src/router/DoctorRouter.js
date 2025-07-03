import { Router } from "express";
import {
  findAllDoctors,
  findDoctorById,
  deleteDoctorById,
  createOneDoctor,
  updateDoctorById,
} from "./../controller/DoctorController.js";

export const doctorRouter = Router();

doctorRouter.get("/", findAllDoctors);
doctorRouter.get("/:id", findDoctorById);
doctorRouter.delete("/:id", deleteDoctorById);
doctorRouter.post("/", createOneDoctor);
doctorRouter.put("/:id", updateDoctorById);
