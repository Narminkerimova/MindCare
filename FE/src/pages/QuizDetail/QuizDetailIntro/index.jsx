import { AlertTriangle, BookOpen, Clock, Brain, Heart, User, Flame } from "lucide-react";
import "./style.css";

function QuizDetailIntro({ quiz, startQuiz }) {
  return (
    <div className="quiz-intro">
      <div className="quiz-intro-header">
        <div className={`quiz-category-badge ${quiz.category}`}>
          {quiz.category === "depression" && <Brain className="icon" />}
          {quiz.category === "anxiety" && <Heart className="icon" />}
          {quiz.category === "stress" && <Flame className="icon" />}
          {quiz.category === "personality" && <User className="icon" />}
          {quiz.category.charAt(0).toUpperCase() + quiz.category.slice(1)}
        </div>
      </div>

      <h1 className="quiz-intro-title">{quiz.title}</h1>
      <p className="quiz-intro-description">{quiz.description}</p>

      <div className="quiz-intro-stats">
        <div className="stat-item">
          <div className="stat-icon">
            <BookOpen />
          </div>
          <div className="stat-content">
            <span className="stat-number">{quiz.questions.length}</span>
            <span className="stat-label">Sual</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <Clock />
          </div>
          <div className="stat-content">
            <span className="stat-number">10-15</span>
            <span className="stat-label">Dəqiqə</span>
          </div>
        </div>
      </div>

      <div className="quiz-intro-notice">
        <AlertTriangle className="notice-icon" />
        <div className="notice-content">
          <h4>Diqqət</h4>
          <p>
            Bu test tibbi diaqnoz deyil. Həkim məsləhəti üçün müraciət edin.
          </p>
        </div>
      </div>

      <button className="btn btn-primary btn-large" onClick={startQuiz}>
        <Brain className="btn-icon" /> Testə Başla
      </button>
    </div>
  );
}

export default QuizDetailIntro;
