import express from "express";

import {
  getUsers,
  register,
  login,
  confirmAccount, 
  resendConfirmationCode, 
  logout,
  updateUserRole,
  getMe,
} from "../controller/UserController.js";

import { protect, authorizeRoles } from "../middleware/authMiddleware.js"; 

const router = express.Router();


router.post("/register", register);

router.post("/login", login);

router.post("/confirm-account", confirmAccount); 

router.post("/resend-confirmation", resendConfirmationCode); 

router.post("/logout", logout);

router.get("/me", protect, getMe);

router.get("/all-users", protect, authorizeRoles("admin"), getUsers); 

router.put("/:id/role", protect, authorizeRoles("admin"), updateUserRole);

export default router;
