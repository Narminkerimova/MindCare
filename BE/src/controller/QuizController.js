import { Quiz } from "../model/QuizModel.js";

export const findAllQuiz = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findQuizById = async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id);
    if (!quiz) return res.status(404).json({ message: "Quiz tapılmadı" });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteQuizById = async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findByIdAndDelete(id);
    if (!quiz) return res.status(404).json({ message: "Silinəcək quiz tapılmadı" });
    res.status(200).json({ message: "Quiz uğurla silindi", quiz });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateQuizById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedQuiz = await Quiz.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedQuiz) return res.status(404).json({ message: "Yenilənəcək quiz tapılmadı" });
    res.status(200).json(updatedQuiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOneQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const solveQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;

    const quiz = await Quiz.findById(quizId).populate("results.recommendedDoctor");
    if (!quiz) return res.status(404).json({ message: "Quiz tapılmadı" });

    let totalScore = 0;

    quiz.questions.forEach((question, index) => {
      const chosenIndex = answers[index];
      if (chosenIndex === undefined) return;
      const option = question.options[chosenIndex];
      if (option) totalScore += option.score;
    });

    const result = quiz.results.find(
      (r) => totalScore >= r.minScore && totalScore <= r.maxScore
    );

    if (!result) return res.status(404).json({ message: "Nəticə tapılmadı" });

    res.status(200).json({
      totalScore,
      resultMessage: result.message,
      recommendedDoctor: result.recommendedDoctor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Quiz cavablarını yoxlamaqda səhv baş verdi" });
  }
};
