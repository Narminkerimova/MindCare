import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },    // variant mətni
  score: { type: Number, required: true },   // bu variantın ballı
}, { _id: false });

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },    // sual mətni
  options: [optionSchema],                    // variantlar
  category: { type: String },                 // ixtisas kateqoriyası (istəyə bağlı)
}, { _id: false });

const resultSchema = new mongoose.Schema({
  minScore: { type: Number, required: true },        // minimum bal aralığı
  maxScore: { type: Number, required: true },        // maksimum bal aralığı
  message: { type: String, required: true },         // nəticə mətn
  recommendedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }, // tövsiyə olunan həkim
}, { _id: false });

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },             // quiz adı
  category: { type: String, required: true },          // kateqoriya (məsələn: stress testi)
  description: { type: String },                        // qısa açıqlama
  timeLimit: { type: Number, required: true },          // vaxt limiti (saniyə, dəqiqə)
  questionCount: { type: Number, required: true },      // sual sayı
  questions: [questionSchema],                           // suallar
  results: [resultSchema],                               // nəticələr
}, { timestamps: true });

export const Quiz = mongoose.model("Quiz", quizSchema);
