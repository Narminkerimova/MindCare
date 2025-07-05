import { ArrowLeft, ArrowRight } from "lucide-react";
import "./style.css";

function QuizDetailNavigation({
  handlePrevious,
  handleNext,
  currentQuestionIndex,
  isAnswered,
  totalQuestions,
}) {
  return (
    <div className="quiz-navigation">
      <button
        className="btn btn-outline"
        onClick={handlePrevious}
        disabled={currentQuestionIndex === 0}
      >
        <ArrowLeft className="btn-icon" />
        Əvvəlki
      </button>

      <button
        className="btn btn-primary"
        onClick={handleNext}
        disabled={!isAnswered}
      >
        {currentQuestionIndex === totalQuestions - 1 ? "Bitir" : "Növbəti"}
        <ArrowRight className="btn-icon" />
      </button>
    </div>
  );
}

export default QuizDetailNavigation;