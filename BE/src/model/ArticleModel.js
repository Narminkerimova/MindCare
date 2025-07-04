import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true },
  photoUrl: { type: String },
  tags: { type: [String] },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }
}, { timestamps: true });

export const Article = mongoose.model("Article", articleSchema);
