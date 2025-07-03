import { useEffect, useState } from "react";
import QuizDetailIntro from "./QuizDetailIntro";
import QuizDetailResult from "./QuizDetailResult";
import QuizDetailProgress from "./QuizDetailProgress";
import "./style.css";

function QuizDetail() {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [result, setResult] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Quiz ID hardcoded, backend-dən dinamik də ola bilər
  const quizId = "beck-depression-id-from-backend"; 

  useEffect(() => {
    // Backend-dən quiz suallarını gətiririk
    fetch(`/api/quizzes/${quizId}`)
      .then((res) => res.json())
      .then((data) => setQuiz(data))
      .catch((err) => console.error("Quiz yüklənmədi:", err));
  }, [quizId]);

  useEffect(() => {
    let interval;
    if (quizStarted && !quizCompleted) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStarted, quizCompleted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      completeQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const completeQuiz = () => {
    // Backend-ə cavabları göndər və nəticəni al
    const answersArray = quiz.questions.map((q) => answers[q.id] ?? null);

    fetch("/api/quizzes/solve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quizId,
        answers: answersArray,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setQuizCompleted(true);
      })
      .catch((err) => {
        console.error("Quiz nəticəsi alınmadı:", err);
        alert("Nəticəni almaqda xəta baş verdi");
      });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setQuizStarted(false);
    setQuizCompleted(false);
    setResult(null);
    setTimeElapsed(0);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (!quiz) {
    return <div>Quiz yüklənir...</div>;
  }

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <QuizDetailIntro quiz={quiz} startQuiz={startQuiz} />
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="quiz-container">
        <QuizDetailResult
          result={result}
          quiz={quiz}
          score={result?.totalScore}
          timeElapsed={timeElapsed}
          formatTime={formatTime}
          resetQuiz={resetQuiz}
        />
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
  const currentQ = quiz.questions[currentQuestion];
  const isAnswered = answers[currentQ?.id] !== undefined;

  return (
    <div className="quiz-container">
      <QuizDetailProgress
        progress={progress}
        currentQuestion={currentQuestion}
        totalQuestions={quiz.questions.length}
        timeElapsed={timeElapsed}
        formatTime={formatTime}
        currentQ={currentQ}
        answers={answers}
        handleAnswerSelect={handleAnswerSelect}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        isAnswered={isAnswered}
      />
    </div>
  );
}

export default QuizDetail;
