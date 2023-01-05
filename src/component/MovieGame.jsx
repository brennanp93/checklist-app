import { createContext, useState, useEffect } from "react";
import NextQuestion from "./NextQuestion";
import Fuse from 'fuse.js'
import { answerKey } from "../data";


export default function Quizgame({ quizlist, score, setScore, question, otherQuizlist }) {
  // let remainingQuizlist = quizlist.filter(movie => movie.completed === false)
  const [remainingQuizlist, setRemainingQuizlist] = useState(quizlist)
  const [prompt, setPrompt] = useState('Good Luck!');
  const [numGuesses, setNumGuesses] = useState(3);
  const [incomingGuess, setIncomingGuess] = useState('')
  const [currentGuess, setCurrentGuess] = useState('')
  const [winner, setWinner] = useState(false);
  const [completed, setcompleted] = useState(false)
  const [index, setIndex] = useState(Math.floor(Math.random() * quizlist.length))
  const [hintOne, setHintOne] = useState('')
  const [hintTwo, setHintTwo] = useState('')
  const [hintThree, setHintThree] = useState('')
  // const [currentMovie, setCurrentMovie] = useState(quizlist[0]);
  // const [correctAnswer, setCorrectAnswer] = useState();
// console.log(otherQuizlist === false)

  // let index = Math.floor(Math.random() * quizlist.length)
  // let answeredQuestion = quizlist.completed;
  // const remainingQuizlistBool 
  // console.log(quizlist,"full list")

  let currentMovie = quizlist[index]
  let correctAnswer = currentMovie.movie;

  let minLengthAnswer = Math.floor(correctAnswer.length * .66)

  // console.log(currentMovie, "CM")
  // console.log(remainingQuizlist.splice(0,0,'ketchup'))

  function handleSubmit(evt) {
    evt.preventDefault();
    const options = {
      includeScore: true,
      keys: [{ name: 'answer' }]
    };
    const fuse = new Fuse(answerKey, options)
    const result = fuse.search(incomingGuess)[0].item.answer;
    /*------*/
    if (result === correctAnswer) {
      setWinner(true);
      setPrompt('NICE');
      setIncomingGuess('');
      currentMovie.completed = true;
      // setRemainingQuizlist(quizlist.filter(movie => movie.completed === false))
      // setRemainingQuizlist(remainingQuizlist.splice(index, 1))

      // console.log(remainingQuizlist,"remainder list top")
      if (numGuesses === 3) {
        setScore(score + 4)
      } else if (numGuesses === 2) {
        setScore(score + 3)
      } else if (numGuesses === 1) {
        setScore(score + 2)
      } else if (numGuesses === 0) {
        setScore(score + 1)
      } else if (numGuesses === -1) {
        setScore(score + 0)
      };
    } else if (result != correctAnswer && numGuesses === 3) {
      setPrompt('keep guessing');
      setNumGuesses(numGuesses - 1);
      setHintOne('Hint One: ' + currentMovie.hints[0])
      setIncomingGuess('');
    } else if (result != correctAnswer && numGuesses === 2) {
      setNumGuesses(numGuesses - 1);
      setHintOne('Hint One: ' + currentMovie.hints[0])
      setHintTwo('Hint Two: ' + currentMovie.hints[1])
      setIncomingGuess('');
    } else if (result != correctAnswer && numGuesses === 1) {
      setNumGuesses(numGuesses - 1);
      setHintOne('Hint One: ' + currentMovie.hints[0])
      setHintTwo('Hint Two: ' + currentMovie.hints[1])
      setHintThree('Hint Three: ' + currentMovie.hints[2])
      setIncomingGuess('');
    }
    if (result != correctAnswer && numGuesses === 0) {
      alert('youlose');
      setWinner(true);
      quizlist.completed = true;
    }
    // setIndex(Math.floor(Math.random() * remainingQuizlist.length))
    
    console.log(quizlist)
    // getAnswer()
  };

  function handleChange(evt) {
    const newGuess = evt.target.value
    setIncomingGuess(newGuess)
  }

  // let verifyBool = (movie) => movie.completed === false;
  // console.log(quizlist.findIndex(verifyBool))

  function nextQuestion() {

    if (!quizlist.length) {
      return setPrompt('game over');
    };
    quizlist.splice(index, 1)
    setIndex(Math.floor(Math.random() * quizlist.length));
    console.log(quizlist.length, "list bottom")
    setWinner(false);
    setNumGuesses(3);
    setHintOne('')
    setHintTwo('')
    setHintThree('')
    setIncomingGuess('');

  }

  return (
    <div>
      {prompt} &nbsp;
      {numGuesses} remaining
      <div>
        <img className="image" src={currentMovie.image} alt="" />
        <p>{hintOne}</p>
        <p>{hintTwo}</p>
        <p>{hintThree}</p>
        {!winner ?
          <div>
            <form onSubmit={handleSubmit}>
              <input
                autoComplete="off"
                name="Guess"
                value={incomingGuess}
                placeholder="enter your guess"
                onChange={handleChange}
              // minLength={minLengthAnswer}
              />
              <button type="submit">Submit Answer</button>
            </form>
          </div>
          :
          <>
            <h2>{correctAnswer}</h2>
            <button onClick={nextQuestion}>Next Question?</button>
          </>
        }
      </div>
    </div>
  )
}

// if (numGuesses === 2) {
//   setWinner(true)
//   setIncomingGuess('')
//   return setPrompt(`The correct answer was ${correctAnswer}`)
// }
// }
// if (incomingGuess.toLowerCase() === correctAnswer.toLowerCase() && numGuesses === 0) {
//   setScore(score + 4);
//   setWinner(true)
//   setIncomingGuess('')
//   setPrompt(correctAnswer)
//   return
// } else if (incomingGuess.toLowerCase() === correctAnswer.toLowerCase() && numGuesses === 1) {
//   setScore(score + 2);
//   setWinner(true)
//   setIncomingGuess('')
//   setPrompt(correctAnswer)
//   return
// } else if (incomingGuess.toLowerCase() === correctAnswer.toLowerCase() && numGuesses === 2) {
//   setScore(score + 1);
//   setWinner(true)
//   setIncomingGuess('')
//   setPrompt(correctAnswer)
//   return
// }
