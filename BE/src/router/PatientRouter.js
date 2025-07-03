import { Router } from "express";
import {
  findAllPatients,
  findPatientById,
  deletePatientById,
  createOnePatient,
  updatePatientById,
} from "./../controller/PatientController.js";

export const patientRouter = Router();

patientRouter.get("/", findAllPatients);
patientRouter.get("/:id", findPatientById);
patientRouter.delete("/:id", deletePatientById);
patientRouter.post("/", createOnePatient);
patientRouter.put("/:id", updatePatientById);
