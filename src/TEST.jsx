// import { testMe } from "./data";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Test({ django, express, testMe }) {
  let { checkList } = useParams();
 
  let expressSteps = express.steps.map((m) => m)
  let djangoSteps = django.steps.map((m) => m)
  let listSteps = checkList === 'express' ? expressSteps : djangoSteps;
  return (
    <>
      <h2>{checkList}</h2>
      {/* <div>{e}</div> */}
      {listSteps.map((step) => (
        <div className="listStyle">
          <div >
            <h1>{step.title}</h1>
            <p>{step.description}</p>
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