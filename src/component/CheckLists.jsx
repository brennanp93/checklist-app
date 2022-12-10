import { useParams } from "react-router-dom";
import { useState } from "react";

export default function CheckList({ checkListSteps }) {
  let { checkList } = useParams();
  let oneStep = checkListSteps.find((list) => list.name === checkList)
  // console.log(oneStep)
  const [markComplete, setMarkComplete] = useState([
    {
      "title": "",
      "description": "",
      "terminalCommand": "",
      "completed": "",
      "otherStepSpecificData": ""
    },
  ])

  function setBoolean(idx) {
    const updatedList = [...oneStep.steps];
    updatedList[idx].completed ? updatedList[idx].completed = false : updatedList[idx].completed = true;
    setMarkComplete(updatedList);
  }

  /*------------*/
  // let expressSteps = express.steps.map((m) => m)
  // let djangoSteps = django.steps.map((m) => m)
  // let listSteps = checkList === 'express' ? expressSteps : djangoSteps;
  /*------------*/

  return (
    <>
      <h2>{checkList} CheckList</h2>
      {/* <div>{e}</div> */}
      {oneStep.steps.map((step, idx) => (
        <div className="listStyle">
          <div style={{textDecoration: step.completed ? "line-Through" : ''}}>
            <h1 >{step.title}</h1>
            <p>{step.description}</p>
            <p>{step.website}</p>
            <div>
              <button onClick={() => setBoolean(idx)} type="submit">
                {step.completed ? 'Undo 🔙' : 'Click to Mark as Complete ✅'}
              </button>
            </div>

          </div>
        </div>
      ))}
    </>
  );
}






// function markComplete(idx) {
  //   const newObj = [...expressSteps];
  //   newObj[idx].completed = true;
  //   setExpressSteps(newObj);
  // }

// <>
//       <div>
//         <h1>Express CheckList</h1>
//         {expressSteps.map((step, idx) => (
//           <div className="step-box">
//             <p>
//               {step.step.includes("$")
//                 ? `Enter the following into Terminal: ${step.step.replace(
//                     "$",
//                     ""
//                   )}`
//                 : step.step}
//             </p>
//             <div>
//               <a href={step.website} target="_blank">
//                 Additional Information
//               </a>
//             </div>
//             <div>
//               <button onClick={() => markComplete(idx)} type="submit">
//                 {step.completed ? "Nice work" : "click here when complete"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>