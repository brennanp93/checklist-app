import { Routes, Route, Link } from "react-router-dom";
import { checkLists } from "../../data";
import Test from "../../component/CheckLists";
import Header from "../../Header";
import BlankList from "../../component/BlankList";
import "./index.css";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <Header />
      <div>
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
      </div>
      <Routes>
        <Route path="/:checkList" element={<Test checkListSteps={checkLists} />} />
        <Route path="/blank" element={<BlankList />} />
      </Routes>
    </div>

  );
}

