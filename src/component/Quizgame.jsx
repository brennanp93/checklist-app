import { useState } from "react";
import NextQuestion from "./NextQuestion";


export default function Quizgame({ quizlist, score, setScore, question, otherQuizlist }) {
  const [prompt, setPrompt] = useState('Good Luck!');
  const [numGuesses, setNumGuesses] = useState(0);
  const [winner, setWinner] = useState(false);
  const [hintOne, setHintOne] = useState('Hint One')
  const [setHintTwo, setHintTwosetHintTwo] = useState('Hint Two')
  const [hintThree, setHintThree] = useState('Hint Three')
  const [hintFour, setHintFour] = useState('Hint Four')
  // let quizlist = otherQuizlist[Math.floor(Math.random() * otherQuizlist.length)]
  let correctAnswer = quizlist.title;

  function handleSelection(evt) {
    evt.preventDefault();
    let selectedAnswer = evt.target.textContent;
    if (selectedAnswer != correctAnswer) {
      setNumGuesses(numGuesses + 1)
      if (numGuesses === 2) {
        setWinner(true)
        return setPrompt("YOU LOSE")
      }
    }
    if (selectedAnswer === correctAnswer && numGuesses === 0) {
      setScore(score + 4);
      setPrompt('Nice! + 4 points!')
      setWinner(true)
    } else if (selectedAnswer === correctAnswer && numGuesses === 1) {
      setScore(score + 2);
      setPrompt('Not Bad + 2 points!')
      setWinner(true)
    } else if (selectedAnswer === correctAnswer && numGuesses === 2) {
      setScore(score + 1);
      setPrompt('1 point')
      setWinner(true)
    }
  };

  return (
    <>
      <>
        <div>
          <h1>QUIZ GAME</h1>
          <div>
            <h2>{prompt}</h2>
            <div>
              <img className="image" src={quizlist.image} alt="" />
            </div>
            <p>
              <button onClick={handleSelection}>
                {quizlist.answers[0]}
              </button>
            </p>
            <p>
              <button onClick={handleSelection}>
                {quizlist.answers[1]}
              </button>
            </p>
            <p>
              <button onClick={handleSelection}>
                {quizlist.answers[2]}
              </button>
            </p>
            <p>
              <button onClick={handleSelection}>
                {quizlist.answers[3]}
              </button>
            </p>
          </div>
        </div>
      </>
      {!winner ?
        ''
        :
        <div>
          <h2>{prompt}</h2>
          <h3>The Correct Answer was {correctAnswer}</h3>
        </div>
      }
    </>
  );
}
