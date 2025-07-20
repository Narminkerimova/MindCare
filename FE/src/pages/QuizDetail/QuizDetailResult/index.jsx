import { CheckCircle, Users, RefreshCw, Save } from "lucide-react";
import { Link } from "react-router"; 
import "./style.css";

function QuizDetailResult({ result, onResetQuiz }) {
  console.log(result);
  
  const getResultColor = (score) => {
    if (score <= 13) return "success";
    if (score <= 19) return "warning";
    return "danger";
  };

  const getResultLabel = (score) => {
    if (score <= 13) return "Normal";
    if (score <= 19) return "Orta";
    return "Yüksək";
  };

  const maxScore = result.quiz.questions.reduce((max, question) => {
    const maxOptionScore = Math.max(...question.options.map(option => option.score));
    return max + maxOptionScore;
  }, 0);

  const resultColor = getResultColor(result.score);
  const resultLabel = getResultLabel(result.score);
  const recommendedDoctor = result.recommendedDoctor;

  return (
    <div className="quiz-result">
      <div className="result-header">
        <CheckCircle className={`result-icon ${resultColor}`} />
        <h2 className="result-title">Test Tamamlandı!</h2>
        <div className="result-score">
          <span className="score-number">{result.score}</span>
          <span className="score-total">/ {maxScore}</span>
        </div>
      </div>

      <div className={`result-badge ${resultColor}`}>{resultLabel}</div>

      <div className="result-content">
        <div className="result-message">
          <h3>Nəticənizin təfsiri:</h3>
          <p>{result.message}</p>
        </div>

        {recommendedDoctor && (
          <div className={`doctor-recommendation ${resultColor === "danger" ? "urgent" : ""}`}>
            <div className="doctor-icon">
              <Users />
            </div>
            <div className="doctor-content">
              <h4>Həkim Tövsiyəsi</h4>
              <p>
                Tövsiyə olunan həkim: <strong>{recommendedDoctor.fullName}</strong><br />
                {resultColor === "danger" && (
                  <span> Bu, təcili yardım tələb edir.</span>
                )}
              </p>
              <Link 
                to="/doctors" 
                className="btn btn-outline"
              >
                Həkimlərimiz
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="result-stats">
        <div className="stat-item">
          <span className="stat-label">Vaxt</span>
          <span className="stat-value">{result.timeElapsed}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Cavablar</span>
          <span className="stat-value">
            {Object.keys(result.answers).length} / {result.quiz.questions.length}
          </span>
        </div>
      </div>

      <div className="result-actions">
        <button className="btn btn-outline" onClick={onResetQuiz}>
          <RefreshCw className="btn-icon" />
          Yenidən Test Et
        </button>
        <Link to="/quiz" className="btn btn-secondary">
          Digər Testlər
        </Link>
        <button 
          className="btn btn-primary" 
          onClick={() => alert("Nəticə yadda saxlanma funksionallığı hələ yoxdur")}
        >
          <Save className="btn-icon" />
          Nəticəni Yadda Saxla
        </button>
      </div>
    </div>
  );
}

export default QuizDetailResult;
