import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { quizlist, otherQuizlist } from "../../data";

import Header from "../../component/Header";
import HomePage from "../Home/HomePage";

import "../../index.css";
import './App.css';

// import Quizgame from "../../component/Quizgame";
import MovieGame from "../../component/MovieGame";
// import NextQuestion from "../../component/NextQuestion";


export default function App() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState();

  return (
    <div className="App">
      <Header score={score} setScore={setScore} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<MovieGame
          question={question}
          quizlist={quizlist}
          score={score}
          setScore={setScore}
          otherQuizlist={otherQuizlist} />} />
      </Routes>
    </div>

  );
}

