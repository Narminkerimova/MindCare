import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { DataContext } from "../../context/DataProvider.jsx";
import QuizDetailIntro from "./QuizDetailIntro/index.jsx";
import QuizDetailResult from "./QuizDetailResult/index";
import QuizDetailProgress from "./QuizDetailProgress/index.jsx";
import "./style.css";

function QuizDetail() {
  const { id } = useParams();
  const { data, loading, error } = useContext(DataContext);

  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [result, setResult] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    if (data?.quiz) {
      let foundQuiz = data.quiz.find(
        (q) => q._id === id || String(q._id) === String(id)
      );
      setQuiz(foundQuiz);
    }
  }, [loading, data, id]);

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

  const handleAnswerSelect = (questionIndex, selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
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

  const completeQuiz = async () => {
    if (!quiz) return;

const answersArray = quiz.questions.map((question, index) => {
  const selectedOption = answers[index];
  if (!selectedOption) return -1; 

  const optionIndex = question.options.findIndex(
    (opt) => opt.text === selectedOption.text
  );

  return optionIndex >= 0 ? optionIndex : -1;
});

    try {
      const response = await fetch("/api/quiz/solve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quizId: quiz._id,
          answers: answersArray,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Server xətası");
      }

      const data = await response.json();

      const finalResult = {
        score: data.totalScore,
        message: data.resultMessage,
        recommendedDoctor: data.recommendedDoctor,
        timeElapsed: formatTime(timeElapsed),
        answers: answers,
        quiz: quiz,
      };

      setResult(finalResult);
      setQuizCompleted(true);
    } catch (error) {
      console.error("Nəticə hesablama xətası:", error);
      alert("Nəticə hesablama zamanı xəta baş verdi. Yenidən cəhd edin.");
    }
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

  if (error) {
    return (
      <div className="quiz-error">
        <h2>Xəta baş verdi</h2>
        <p>Məlumatlar yüklənərkən xəta baş verdi: {error.message}</p>
        <button onClick={() => window.location.reload()}>Yenidən Cəhd Et</button>
      </div>
    );
  }

  if (loading || !data || !data.quiz || !quiz) {
    return (
      <div className="quiz-loading">
        <div className="loading-spinner"></div>
        <p>Məlumatlar yüklənir və ya quiz tapılmadı...</p>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <QuizDetailIntro quiz={quiz} onStartQuiz={startQuiz} />
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="quiz-container">
        <QuizDetailResult
          result={result}
          onResetQuiz={resetQuiz}
          doctors={data.doctor || []}
        />
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="quiz-container">
      <QuizDetailProgress
        progress={progress}
        currentQuestion={currentQuestion + 1}
        totalQuestions={quiz.questions.length}
        timeElapsed={timeElapsed}
        timeLimit={quiz.timeLimit}
        quiz={quiz}
        answers={answers}
        onAnswerSelect={handleAnswerSelect}
        onPrevious={handlePrevious}
        onNext={handleNext}
        currentQuestionIndex={currentQuestion}
        formatTime={formatTime}
      />
    </div>
  );
}

export default QuizDetail;
