import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },    
  score: { type: Number, required: true },   
}, { _id: false });

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },    
  options: [optionSchema],                    
  category: { type: String },                 
}, { _id: false });

const resultSchema = new mongoose.Schema({
  minScore: { type: Number, required: true },       
  maxScore: { type: Number, required: true },       
  message: { type: String, required: true },         
  recommendedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }, 
}, { _id: false });

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },             
  category: { type: String, required: true },          
  description: { type: String },                        
  timeLimit: { type: Number, required: true },          
  questionCount: { type: Number, required: true },     
  questions: [questionSchema],                        
  results: [resultSchema],                             
}, { timestamps: true });

export const Quiz = mongoose.model("Quiz", quizSchema);
