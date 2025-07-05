import QuizDetailContent from './QuizDetailContent'
import QuizDetailHeader from './QuizDetailHeader'
import QuizDetailNavigation from './QuizDetailNavigation'

function QuizDetailProgress({
  progress,
  currentQuestion,
  totalQuestions,
  timeElapsed,
  quiz,
  answers,
  onAnswerSelect,
  onPrevious,
  onNext,
  currentQuestionIndex,
  formatTime
}) {
  const currentQ = quiz?.questions?.[currentQuestionIndex];
  
  const isAnswered = answers[currentQuestionIndex] !== undefined;
  
  return (
    <>
      <QuizDetailHeader
        progress={progress}
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        timeElapsed={timeElapsed}
        formatTime={formatTime}
      />
      
      <QuizDetailContent
        currentQ={currentQ}
        answers={answers}
        handleAnswerSelect={onAnswerSelect}
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
      />
      
      <QuizDetailNavigation
        handlePrevious={onPrevious}
        handleNext={onNext}
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        isAnswered={isAnswered}
        totalQuestions={totalQuestions}
      />
    </>
  );
}

export default QuizDetailProgress;