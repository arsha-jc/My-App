import React from 'react';
import '../styles/Result.css';

const Result = ({ score, totalQuestions, restartQuiz }) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="result-container">
      <h1 className="result-heading">Your Result</h1>
      <div className="gauge-container">
        <div className="gauge">
          <div className="gauge-fill" style={{ height: `${percentage}%` }}></div>
          <div className="gauge-cover">{Math.round(percentage)}%</div>
        </div>
      </div>
      <div className="result-details">
        <p>
          <span className="correct-answers">Correct:</span> {score}
        </p>
        <p>
          <span className="incorrect-answers">Incorrect:</span> {totalQuestions - score}
        </p>
      </div>
      <button className="restart-btn" onClick={restartQuiz}>Start Again</button>
    </div>
  );
};

export default Result;
