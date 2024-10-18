import React, { useState } from 'react';
import '../styles/Question.css';

const Question = ({ question, options, currentQuestion, totalQuestions, submitAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      submitAnswer(selectedOption);
    }
  };

  return (
    <div className="question-container">
      <div className="question-header">
        <div className="question-progress">
          Question {currentQuestion}/{totalQuestions}
        </div>
        <progress className="progress-bar" value={currentQuestion} max={totalQuestions}></progress>
      </div>
      <h2 className="question">{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <label key={index} className={`option ${selectedOption === option ? 'selected' : ''}`}>
            <input
              type="checkbox"
              name="option"
              value={option}
              onChange={() => setSelectedOption(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button className="next-btn" onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Question;
