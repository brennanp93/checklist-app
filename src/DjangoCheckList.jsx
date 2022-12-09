// import "./DjangoCheckList.css";
import { useState } from "react";

export default function DjangoCheckList() {
  const [djangoSteps, setDjangoSteps] = useState([
    {
      step: "Django step 1",
      website: "https://www.w3schools.com/cssref/pr_font_weight.php",
      completed: false
    },
    {
      step: "$ Django step 2",
      website: "https://expressjs.com/en/guide/using-middleware.html",
      completed: false
    },
    {
      step: "Django step 3",
      website: "https://www.w3schools.com/cssref/pr_font_weight.php",
      completed: false
    },
    {
      step: "$ Django step 4",
      website: "https://www.w3schools.com/cssref/pr_font_weight.php",
      completed: false
    }
  ]);

  function markComplete(idx) {
    const newObj = [...djangoSteps];
    newObj[idx].completed = true;
    setDjangoSteps(newObj);
  }
  return (
    <>
      <div>
        <h1>Django CheckList</h1>
        {djangoSteps.map((step, idx) => (
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
