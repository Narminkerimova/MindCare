import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    position: { type: String, required: true },
    workplace: { type: String, required: true },
    about: { type: String },
    specialties: [{ type: String }],
    experienceYears: { type: Number, default: 0 },
    appointmentPrice: { type: Number, required: true },
    phone: { type: String, required: true },
    clientCount: { type: Number, default: 0 },
    photoUrl: { type: String },
    rating:{ type: Number, default: 0 }
  },
  { timestamps: true },{ id: false }
);

// Hekimin meqaleleri
doctorSchema.virtual("articles", {
  ref: "Article", // hansı modeli əlaqələndirir
  localField: "_id", // Doctor modelindəki id
  foreignField: "author", // Article modelindəki "author" sahəsi
});

// Hekimin pasiyentleri
doctorSchema.virtual("patients", {
  ref: "Patient",
  localField: "_id",
  foreignField: "doctor",
});

// Virtual sahelerin islemesi ucun:
doctorSchema.set("toObject", { virtuals: true });
doctorSchema.set("toJSON", { virtuals: true });

export const Doctor = mongoose.model("Doctor", doctorSchema);
