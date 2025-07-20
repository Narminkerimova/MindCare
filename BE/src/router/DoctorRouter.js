import { Router } from "express";
import {
  findAllDoctors,
  findDoctorById,
  deleteDoctorById,
  createOneDoctor,
  updateDoctorById, 
  createDoctorProfile
} from "./../controller/DoctorController.js";
import { protect, authorizeRoles } from '../middleware/authMiddleware.js'; 

export const doctorRouter = Router();

doctorRouter.get("/", findAllDoctors); 

doctorRouter.get("/:id", findDoctorById); 

doctorRouter.delete("/:id", protect, authorizeRoles('admin'), deleteDoctorById);

doctorRouter.post("/", protect, authorizeRoles('admin'), createOneDoctor); 

doctorRouter.post('/create-profile', protect, authorizeRoles('doctor'), createDoctorProfile); 

doctorRouter.put("/:id", protect, authorizeRoles('admin', 'doctor'), updateDoctorById);