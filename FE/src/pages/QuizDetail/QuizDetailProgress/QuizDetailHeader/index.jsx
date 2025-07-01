import { Clock } from "lucide-react";

function QuizDetailHeader({ progress, currentQuestion, totalQuestions }) {
  return (
    <div className="quiz-header">
      <div className="quiz-progress-container">
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="quiz-progress-text">
          {currentQuestion + 1} / {totalQuestions}
        </span>
      </div>

      <div className="quiz-header-info">
      </div>
    </div>
  );
}

export default QuizDetailHeader;
