import QuizDetailContent from './QuizDetailContent'
import QuizDetailHeader from './QuizDetailHeader'
import QuizDetailNavigation from './QuizDetailNavigation'

function QuizDetailProgress({
  progress,
  currentQuestion,
  totalQuestions,
  timeElapsed,
  formatTime,
  currentQ,
  answers,
  handleAnswerSelect,
  handlePrevious,
  handleNext,
  isAnswered,
}) {
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
        handleAnswerSelect={handleAnswerSelect}
        currentQuestion={currentQuestion}
      />
      <QuizDetailNavigation
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentQuestion={currentQuestion}
        isAnswered={isAnswered}
        totalQuestions={totalQuestions}
      />
    </>
  );
}

export default QuizDetailProgress;


