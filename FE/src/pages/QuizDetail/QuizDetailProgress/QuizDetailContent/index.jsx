import './style.css';

function QuizDetailContent({ 
  currentQ, 
  answers, 
  handleAnswerSelect, 
  currentQuestion,
  currentQuestionIndex 
}) {
  if (!currentQ) {
    return (
      <div className="quiz-content">
        <div className="loading">Sual yüklənir...</div>
      </div>
    );
  }

  return (
    <div className="quiz-content">
      <div className="question-container">
        <div className="question-number">Sual {currentQuestion}</div>
        <h2 className="question-text">{currentQ.text}</h2>

        {currentQ.image && (
          <div className="question-image">
            <img src={currentQ.image} alt="Sual şəkli" />
          </div>
        )}
        
        <div className="options-container">
          {currentQ.options?.map((option, index) => (
            <label
              key={index}
              className={`option-item ${
                answers[currentQuestionIndex]?.text === option.text ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQuestionIndex}`}
                value={option.text}
                checked={answers[currentQuestionIndex]?.text === option.text}
                onChange={() => handleAnswerSelect(currentQuestionIndex, option)}
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

export default QuizDetailContent;
