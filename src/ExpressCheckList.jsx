// import "./ExpressCheckList.css";
import { useState } from "react";

export default function ExpressCheckList() {
  const [expressSteps, setExpressSteps] = useState([
    {
      step: "express step 1",
      website: "https://www.w3schools.com/cssref/pr_font_weight.php",
      completed: false
    },
    {
      step: "$ express step 2",
      website: "https://expressjs.com/en/guide/using-middleware.html",
      completed: false
    },
    {
      step: "express step 3",
      website: "https://www.w3schools.com/cssref/pr_font_weight.php",
      completed: false
    },
    {
      step: "$ express step 4",
      website: "https://www.w3schools.com/cssref/pr_font_weight.php",
      completed: false
    },
    {
      step: "express step 3",
      website: "https://www.w3schools.com/cssref/pr_font_weight.php",
      completed: false
    },
    {
      step: "express step 3",
      website: "https://www.w3schools.com/cssref/pr_font_weight.php",
      completed: false
    }
  ]);

  function markComplete(idx) {
    const newObj = [...expressSteps];
    newObj[idx].completed = true;
    setExpressSteps(newObj);
  }
  return (
    <>
      <div>
        <h1>Express CheckList</h1>
        {expressSteps.map((step, idx) => (
          <div className="step-box">
            <p>
              {step.step.includes("$")
                ? `Enter the following into Terminal: ${step.step.replace(
                    "$",
                    ""
                  )}`
                : step.step}
            </p>
            <div>
              <a href={step.website} target="_blank">
                Additional Information
              </a>
            </div>
            <div>
              <button onClick={() => markComplete(idx)} type="submit">
                {step.completed ? "Nice work" : "click here when complete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
