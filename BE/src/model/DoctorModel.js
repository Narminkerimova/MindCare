import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
      unique: true
    },
    fullName: { type: String, required: true },
    position: { type: String, required: true },
    workplace: { type: String, required: true },
    about: { type: String },
    specialties: [{ type: String }],
    experienceYears: { type: Number, default: 0 },
    appointmentPrice: { type: Number, required: true },
    phone: { type: String, required: true, unique: true },
    clientCount: { type: Number, default: 0 },
    photoUrl: { type: String },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

doctorSchema.virtual("articles", {
  ref: "Article", 
  localField: "_id", 
  foreignField: "author",
});

doctorSchema.virtual("patients", {
  ref: "Patient",
  localField: "_id",
  foreignField: "doctor",
});

doctorSchema.set("toObject", { virtuals: true });
doctorSchema.set("toJSON", { virtuals: true });

export const Doctor = mongoose.model("Doctor", doctorSchema);