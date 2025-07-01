import './style.css'

function QuizDetailContent({ currentQ, answers, handleAnswerSelect, currentQuestion }) {
  return (
    <div className="quiz-content">
      <div className="question-container">
        <div className="question-number">Sual {currentQuestion + 1}</div>
        <h2 className="question-text">{currentQ.text}</h2>
        <div className="options-container">
          {currentQ.options.map((option, index) => (
            <label
              key={index}
              className={`option-item ${
                answers[currentQ.id] === option.value ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQ.id}`}
                value={option.value}
                checked={answers[currentQ.id] === option.value}
                onChange={() => handleAnswerSelect(currentQ.id, option.value)}
              />
              <div className="option-indicator"></div>
              <span className="option-text">{option.text}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizDetailContent


