import { CheckCircle, Users } from "lucide-react";
import "./style.css";

function QuizDetailResult({ result, quiz, score, timeElapsed, formatTime, resetQuiz }) {
  return (
    <div className="quiz-result">
      <div className="result-header">
        <CheckCircle className={`result-icon ${result.color}`} />
        <h2 className="result-title">Test Tamamlandı!</h2>
        <div className="result-score">
          <span className="score-number">{score}</span>
          <span className="score-total">/ {quiz.questions.length * 3}</span>
        </div>
      </div>

      <div className={`result-badge ${result.color}`}>{result.label}</div>

      <div className="result-content">
        <div className="result-message">
          <h3>Nəticənizin təfsiri:</h3>
          <p>{result.recommendation.message}</p>
        </div>

        <div className="result-recommendations">
          <h4>Tövsiyələr:</h4>
          <ul>
            {result.recommendation.recommendations.map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        </div>

        {result.recommendation.doctorNeeded && (
          <div
            className={`doctor-recommendation ${
              result.recommendation.urgent ? "urgent" : ""
            }`}
          >
            <div className="doctor-icon">
              <Users />
            </div>
            <div className="doctor-content">
              <h4>Həkim Tövsiyəsi</h4>
              <p>
                {result.recommendation.doctorType} ilə görüş tövsiyə olunur.
                {result.recommendation.urgent && " Bu, təcili yardım tələb edir."}
              </p>
              <button className="btn btn-outline">Həkim Tap</button>
            </div>
          </div>
        )}
      </div>

      <div className="result-stats">
        <div className="stat-item">
          <span className="stat-label">Vaxt</span>
          <span className="stat-value">{formatTime(timeElapsed)}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Dəqiqlik</span>
          <span className="stat-value">98%</span>
        </div>
      </div>

      <div className="result-actions">
        <button className="btn btn-outline" onClick={resetQuiz}>
          Yenidən Test Et
        </button>
        <button className="btn btn-primary">Nəticəni Paylaş</button>
      </div>
    </div>
  );
}

export default QuizDetailResult;
