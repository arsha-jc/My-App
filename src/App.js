import React, { useState } from 'react';
import Home from './components/Home';
import Question from './components/Question';
import Result from './components/Result';
import './styles/App.css';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = (fetchedQuestions) => {
    setQuestions(fetchedQuestions);
    setCurrentScreen('question');
  };

  const submitAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setCurrentScreen('result');
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setCurrentScreen('home');
  };

  return (
    <div className="app-container">
      {currentScreen === 'home' && <Home startQuiz={startQuiz} />}
      {currentScreen === 'question' && (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          submitAnswer={submitAnswer}
        />
      )}
      {currentScreen === 'result' && (
        <Result
          score={score}
          totalQuestions={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
};

export default App;
