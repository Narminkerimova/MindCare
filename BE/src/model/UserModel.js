import mongoose from "mongoose";
import "dotenv/config";

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
});

export const User = mongoose.model("User", userSchema);


