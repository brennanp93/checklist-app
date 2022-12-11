import { Routes, Route, Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <button>
            <Link to="/">HOME</Link>
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button>
            <Link to="/Express">express</Link>
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button>
            <Link to="/Django">django</Link>
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button>
            <Link to="/React">react</Link>
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button>
            <Link to="/blanklist/groceries">Blank</Link>
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button>
            <Link to="/">LogIn</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
