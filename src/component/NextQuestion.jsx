import { Link, useNavigate } from 'react-router-dom'
export default function NextQuestion({ prompt, correctAnswer }) {
  const navigate = useNavigate();
  return (
    <div>
      <h2>{prompt}</h2>
      <h3>The Correct Answer was {correctAnswer}</h3>
  
        <button onClick={() => navigate('/quiz')}>Next Question</button>

    </div>
  )
}