import { AlertTriangle, BookOpen, Clock, Brain, Heart, User, Flame } from "lucide-react";
import "./style.css";

function QuizDetailIntro({ quiz, onStartQuiz }) {
  console.log("QuizDetailIntro - quiz:", quiz);

  const getCategoryIcon = (category) => {
    const lowerCategory = category?.toLowerCase() || "";
    switch (lowerCategory) {
      case "depressiya":
        return <Brain className="icon" />;
      case "anxiety":
        return <Heart className="icon" />;
      case "stress":
        return <Flame className="icon" />;
      default:
        return <User className="icon" />;
    }
  };

  const formatTimeLimit = (seconds) => {
    if (!seconds) return "0";
    const minutes = Math.floor(seconds / 60);
    return `${minutes}`;
  };

  if (!quiz) {
    return (
      <div className="quiz-intro">
        <p>Quiz məlumatları yüklənir...</p>
      </div>
    );
  }

  const questionCount = quiz.questions?.length || quiz.questionCount || 0;
  const timeLimit = quiz.timeLimit || 0;
  const category = quiz.category || "Ümumi";
  const title = quiz.title || "Başlıqsız Quiz";
  const description = quiz.description || "Təsvir mövcud deyil";

  return (
    <div className="quiz-intro">
      <div className="quiz-intro-header">
        <div className={`quiz-category-badge ${category.toLowerCase()}`}>
          {getCategoryIcon(category)}
          <span>{category}</span>
        </div>
      </div>

      <h1 className="quiz-intro-title">{title}</h1>
      <p className="quiz-intro-description">{description}</p>

      <div className="quiz-intro-stats">
        <div className="stat-item">
          <div className="stat-icon">
            <BookOpen />
          </div>
          <div className="stat-content">
            <span className="stat-number">{questionCount}</span>
            <span className="stat-label">Sual</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <Clock />
          </div>
          <div className="stat-content">
            <span className="stat-number">{formatTimeLimit(timeLimit)}</span>
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

      <button 
        className="btn btn-primary btn-large" 
        onClick={onStartQuiz}
        disabled={questionCount === 0}
      >
        <Brain className="btn-icon" /> 
        {questionCount === 0 ? "Sual mövcud deyil" : "Testə Başla"}
      </button>
    </div>
  );
}

export default QuizDetailIntro;