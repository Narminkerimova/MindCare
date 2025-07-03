import { Clock } from "lucide-react";
import './style.css'

function QuizDetailHeader({ 
  progress, 
  currentQuestion, 
  totalQuestions, 
  timeElapsed, 
  formatTime 
}) {
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
        <div className="quiz-timer">
          <Clock size={18} />
          <span className="timer-text">
            {formatTime(timeElapsed)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default QuizDetailHeader;