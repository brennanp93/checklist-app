
import { useState } from "react";
import ExpressCheckList from "./ExpressCheckList";
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
      <h1>Checklists</h1>
      <div className="buttonBox">
        <div> Please Select a Check List</div>
        <button onClick={() => setShowList(0)}>Django</button>
        <button onClick={() => setShowList(1)}>Express</button>
        <button onClick={() => setShowList(2)}>Blank List</button>
      </div>
      {componentArray[showList]}
    </div>
  );
}


