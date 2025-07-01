import { ArrowLeft, ArrowRight } from "lucide-react";
import "./style.css";

function QuizDetailNavigation({
  handlePrevious,
  handleNext,
  currentQuestion,
  isAnswered,
  totalQuestions,
}) {
  return (
    <div className="quiz-navigation">
      <button
        className="btn btn-outline"
        onClick={handlePrevious}
        disabled={currentQuestion === 0}
      >
        <ArrowLeft className="btn-icon" />
        Əvvəlki
      </button>

      <button
        className="btn btn-primary"
        onClick={handleNext}
        disabled={!isAnswered}
      >
        {currentQuestion === totalQuestions - 1 ? "Bitir" : "Növbəti"}
        <ArrowRight className="btn-icon" />
      </button>
    </div>
  );
}

export default QuizDetailNavigation;
