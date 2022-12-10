import { Routes, Route, Link } from "react-router-dom";
import { checkLists } from "../../data";
import CheckList from "../../component/CheckLists";
import Header from "../../Header";
import HomePage from "../Home/HomePage";
import BlankList from "../../component/BlankList";
import "../../index.css";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <div>
        <button>
          <Link to="/">HOME</Link>
        </button>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <button>
          <Link to="/express">express</Link>
        </button>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <button>
          <Link to="/django">django</Link>
        </button>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <button>
          <Link to="/react">react</Link>
        </button>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <button>
          <Link to="/blank">Blank</Link>
        </button>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <button>
          <Link to="/blank">LogIn</Link>
        </button>
      </div> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:checkList" element={<CheckList checkListSteps={checkLists} />} />
        <Route path="/blank" element={<BlankList />} />
      </Routes>
    </div>

  );
}

