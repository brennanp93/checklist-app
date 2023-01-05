import { Link } from "react-router-dom";
export default function Header({ score }) {
  return (
    <header>
      <nav>
        <div>
          <button>
            <Link to="/">HOME</Link>
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button>
            <Link to="/quiz">quiz</Link>
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button>
            <div>Current Score: {score}</div>
          </button>
        </div>
      </nav>
    </header>
  );
}
