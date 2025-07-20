import { Quiz } from "../model/QuizModel.js";
import { Doctor } from "../model/DoctorModel.js";
import mongoose from "mongoose";

const handleError = (
  res,
  error,
  defaultMessage = "Daxili server xətası baş verdi.",
  statusCode = 500
) => {
  console.error("Controller xətası:", error);

  if (error instanceof mongoose.Error.CastError) {
    return res
      .status(400)
      .json({ success: false, message: "Sorğuda keçərsiz ID formatı aşkarlanmışdır." });
  }
  if (error instanceof mongoose.Error.ValidationError) {
    const errors = Object.values(error.errors).map((err) => err.message);
    return res
      .status(400)
      .json({ success: false, message: `Məlumat validasiya xətası: ${errors.join(", ")}` });
  }
  if (error.code === 11000) {
    const field = Object.keys(error.keyValue)[0];
    return res
      .status(409)
      .json({ success: false, message: `Bu ${field} artıq istifadə olunur.` });
  }

  res.status(statusCode).json({ success: false, message: defaultMessage });
};

export const findAllQuiz = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json({ success: true, data: quizzes });
  } catch (error) {
    handleError(res, error, "Quizlər gətirilərkən problem yaşandı.");
  }
};

export const findQuizById = async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id);

    if (!quiz) {
      return res.status(404).json({ success: false, message: "Axtarılan quiz tapılmadı." });
    }
    res.status(200).json({ success: true, data: quiz });
  } catch (error) {
    handleError(res, error, "Quizi axtararkən xəta baş verdi.");
  }
};

export const deleteQuizById = async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findByIdAndDelete(id);

    if (!quiz) {
      return res.status(404).json({ success: false, message: "Silinəcək quiz tapılmadı." });
    }
    res.status(200).json({ success: true, message: "Quiz uğurla silindi.", data: quiz });
  } catch (error) {
    handleError(res, error, "Quizi silərkən xəta baş verdi.");
  }
};

export const updateQuizById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedQuiz = await Quiz.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedQuiz) {
      return res.status(404).json({ success: false, message: "Yenilənəcək quiz tapılmadı." });
    }
    res.status(200).json({ success: true, data: updatedQuiz });
  } catch (error) {
    handleError(res, error, "Quizi yeniləyərkən xəta baş verdi.");
  }
};

export const createOneQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json({ success: true, data: quiz });
  } catch (error) {
    handleError(res, error, "Quiz yaradarkən xəta baş verdi.");
  }
};

export const solveQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;

    if (!quizId || !answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: "Quiz ID və cavablar tələb olunur." });
    }

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz tapılmadı." });
    }

    let totalScore = 0;
    for (let i = 0; i < answers.length; i++) {
      const question = quiz.questions[i];
      const selectedOptionIndex = answers[i];

      if (!question || selectedOptionIndex == null || !question.options[selectedOptionIndex]) {
        return res.status(400).json({ message: `Sual və ya cavab tapılmadı. Sual #${i}` });
      }

      const selectedOption = question.options[selectedOptionIndex];
      totalScore += selectedOption.score;
    }

    const result = quiz.results.find(r =>
      totalScore >= r.minScore && totalScore <= r.maxScore
    );

    if (!result) {
      return res.status(400).json({ message: "Nəticə aralığı tapılmadı." });
    }

    res.status(200).json({
  message: "Nəticə hesablandı",
  result: {
    score: totalScore,
    result: result.message,
    doctor: await Doctor.findById(result.recommendedDoctor), 
    quiz,
    answers, 
    timeElapsed: req.body.timeElapsed || null 
  }
});

  } catch (error) {
    console.error("Hesablama xətası:", error);
    res.status(500).json({ message: "Nəticə hesablanarkən xəta baş verdi.", error: error.message });
  }
};



