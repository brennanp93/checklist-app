import { Routes, Route, Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div className="checkListBtnBox">
        <div>
          <button>
            <h2>
              <Link to="/quiz">QUIZ</Link>
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
}