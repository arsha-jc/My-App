import React from 'react';
import '../styles/Home.css';

const Home = ({ startQuiz }) => {
  const fetchQuestions = () => {
    // Sample questions, replace with real data
    const questions = [
      {
        question: "How do you judge what should be added in the next version of the app?",
        options: ["Data Analysis", "User's feedback", "Copy from similar product", "Make a questionary"],
        correctAnswer: "User's feedback"
      },
      {
        question: "Which technology should be used in the project?",
        options: ["React", "Vue", "Angular", "Svelte"],
        correctAnswer: "React"
      },
      {
        question: "Which is your favorite UI design tool?",
        options: ["Figma", "Sketch", "Adobe XD", "InVision"],
        correctAnswer: "Figma"
      }
    ];
    startQuiz(questions);
  };

  return (
    <div className="home-container">
      <h1 className="title">Quiz</h1>
      <button className="start-btn" onClick={fetchQuestions}>Start</button>
    </div>
  );
};

export default Home;
