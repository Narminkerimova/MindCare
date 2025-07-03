import mongoose from "mongoose";

const quizResultSchema = new mongoose.Schema({
  quizName: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  notes: { type: String },
}, { _id: false });

const patientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  notes: { type: String },
  quizResults: [quizResultSchema],
}, { timestamps: true });

export const Patient = mongoose.model("Patient", patientSchema);
