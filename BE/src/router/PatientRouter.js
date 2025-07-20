import { Router } from "express";
import {
  findAllPatients,
  findPatientById,
  deletePatientById,
  createOnePatient, 
  updatePatientById,
} from "./../controller/PatientController.js";
import { protect, authorizeRoles } from '../middleware/authMiddleware.js'; 

export const patientRouter = Router();

patientRouter.get("/",findAllPatients);

patientRouter.get("/:id", protect, authorizeRoles('admin', 'doctor', 'patient'), findPatientById);

patientRouter.delete("/:id", protect, authorizeRoles('admin'), deletePatientById);

patientRouter.post("/", protect, authorizeRoles('admin', 'doctor'), createOnePatient); 

patientRouter.put("/:id", protect, authorizeRoles('admin', 'doctor', 'patient'), updatePatientById);