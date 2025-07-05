import { Clock } from "lucide-react";
import './style.css'

function QuizDetailHeader({
  progress,
  currentQuestion,
  totalQuestions,
  timeElapsed,
  formatTime
}) {
  const displayTime = formatTime && typeof formatTime === 'function' 
    ? formatTime(timeElapsed) 
    : `${Math.floor(timeElapsed / 60)}:${(timeElapsed % 60).toString().padStart(2, '0')}`;

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
          {currentQuestion} / {totalQuestions}
        </span>
      </div>

      <div className="quiz-header-info">
        <div className="quiz-timer">
          <Clock size={18} />
          <span className="timer-text">
            {displayTime}
          </span>
        </div>
      </div>
    </div>
  );
}

export default QuizDetailHeader;