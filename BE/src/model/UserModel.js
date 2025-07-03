import mongoose from "mongoose";
import "dotenv/config";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export const User = mongoose.model("User", userSchema);


