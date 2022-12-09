import { Routes, Route, Link } from "react-router-dom";
import { expressList, djangoList, testMe } from "./data";
import { useState } from "react";
import ExpressCheckList from "./ExpressCheckList";
import Test from "./TEST";
import DjangoCheckList from "./DjangoCheckList";
import Header from "./Header";
import BlankList from "./BlankList";
import "./index.css";
import './App.css';

const componentArray = [
  <DjangoCheckList />,
  <ExpressCheckList />,
  <BlankList />
];

export default function App() {
  const [showList, setShowList] = useState(0);
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
        <Link to="/blank">Blank</Link>
        </button>
      </div>
      <Routes>
        <Route path="/:checkList" element={<Test django={djangoList} express={expressList} testMe={testMe}/>} />
        <Route path="/blank" element={<BlankList django={djangoList} express={expressList} testMe={testMe}/>} />
      </Routes>
    </div>

  );
}




{/* <div className="App">
      <Header />
      <div>
        <Link to="/">HOME</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/express">express</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/django">django</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/menu/tacos">TACOS</Link>
      </div>
      <h1>Checklists</h1>
      <div className="buttonBox">
        <div> Please Select a Check List</div>
        <button onClick={() => setShowList(0)}>Django</button>
        <button onClick={() => setShowList(1)}>Express</button>
        <button onClick={() => setShowList(2)}>Blank List</button>
      </div>
      {componentArray[showList]}
    </div> */}