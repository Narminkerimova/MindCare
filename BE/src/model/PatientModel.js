import mongoose from "mongoose";

const quizResultSchema = new mongoose.Schema({
  quizName: { type: String},
  score: { type: Number},
  date: { type: Date, default: Date.now }
}, { _id: false });

const patientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor"},
  notes: { type: String },
  quizResults: [quizResultSchema],
}, { timestamps: true });

export const Patient = mongoose.model("Patient", patientSchema);
