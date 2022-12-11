import { useState } from "react";
import { useParams } from "react-router-dom";

// import "./BlankList.css";
// import BlankListForm from "./BlankListForm";

// export default function NewBlankList({ newLists }) {
//   const [checkList, setCheckList] = useState([
//     {
//       step: "Buy Cheese",
//       website: "https://cheese.com/",
//       completed: false,
//       id: 1
//     }
//   ]);
//   console.log(checkList);
//   const [newItem, setNewItem] = useState({
//     step: "",
//     website: "",
//     completed: false,
//     id: Math.floor(Math.random() * 100)

//   });

// function handleSubmit(evt) {
//   evt.preventDefault();
//   setCheckList([...checkList, newItem]);
//   setNewItem({
//     step: "",
//     website: "",
//     completed: false,
//     id: Math.floor(Math.random() * 100)

//   })
// }

// function handleChange(evt) {
//   const newItemList = {
//     ...newItem,
//     [evt.target.name]: evt.target.value,
//     // [evt.target.name]: evt.target.value,
//     completed: false
//   };
//   setNewItem(newItemList);
//   // console.log("newItem" + newItemList);
// }


// function setBoolean(idx) {
//   const updatedList = [...checkList];
//   updatedList[idx].completed ? updatedList[idx].completed = false : updatedList[idx].completed = true;
//   setCheckList(updatedList);
// }

// function deleteItem(id) {
//   const removeItem = checkList.filter((item) => {
//     return item.id !== id;
//   });
//   setCheckList(removeItem)
//   console.log(removeItem)
// }

//   return (
//     <>
//       <div>
//         <h1>Custom CheckList</h1>
//         {checkList.map((item, idx) => (
//           <div className="listStyle"
//             style={{ textDecoration: item.completed ? "line-Through" : '' }}>
//             <h1>{item.step}</h1>
//             <div>
//               <a href={item.website} target="_blank">
//                 Additional Information
//               </a>
//             </div>
//             <div>
//               <button onClick={() => setBoolean(idx)} type="submit">
//                 {item.completed ? 'Undo 🔙' : 'Click to Mark as Complete ✅'}
//               </button>
//               &nbsp;|&nbsp;
//               <button onClick={() => deleteItem(item.id)} type="submit">Delete ❌</button>
//             </div>
//           </div>
//         ))}
//         <h2>Add an Item to your checklist</h2>
//         <div className="blank-box">
// <form onSubmit={handleSubmit}>
//   <input
//     autoComplete="off"
//     name="step"
//     value={newItem.step}
//     onChange={handleChange}
//     placeholder="New To-Do"
//     required
//     pattern=".{2,}"
//   />
//   <input
//     autoComplete="off"
//     name="website"
//     value={newItem.website}
//     onChange={handleChange}
//     placeholder="Website"
//     // required
//     pattern=".{2,}"
//   />

//   <button type="submit">Add To Do</button>
// </form>
//         </div>
//       </div>
//     </>
//   );
// }

export default function NewBlankList({ newLists }) {
  let { newListSteps } = useParams();
  let oneStep = newLists.find((list) => list.name === newListSteps)
  let listSteps = oneStep.steps

  const [customList, setCustomList] = useState( listSteps )
  console.log(customList)
  // console.log(listSteps)

  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    terminalCommand: null,
    completed: null,
    otherStepSpecificData: null,
    id: Math.floor(Math.random() * 100)
  });
  // console.log("newItem" + newItem);
  // const [markComplete, setMarkComplete] = useState([
  //   {
  //     "title": "",
  //     "description": "",
  //     "terminalCommand": "",
  //     "completed": "",
  //     "otherStepSpecificData": ""
  //   },
  // ])

  function handleSubmit(evt) {
    evt.preventDefault();
    setCustomList([...customList, newItem]);
    setNewItem({
      title: "",
      description: "",
      terminalCommand: null,
      completed: null,
      otherStepSpecificData: null,
      id: Math.floor(Math.random() * 100)
    })
  }


  function handleChange(evt) {
    const newItemList = {
      ...newItem,
      [evt.target.name]: evt.target.value,
      // [evt.target.name]: evt.target.value,
      // completed: false
    };
    setNewItem(newItemList);
    // console.log(newItem.title + "BPP")
    // console.log(evt.target.name)
    // console.log(evt.target.value)
  }


  function setBoolean(idx) {
    const updatedList = [...oneStep.step];
    updatedList[idx].completed ? updatedList[idx].completed = false : updatedList[idx].completed = true;
    setCustomList(updatedList);
  }

  function deleteItem(id) {
    const removeItem = customList.filter((item) => {
      return item.id !== id;
    });
    setCustomList(removeItem)
    // console.log(removeItem)
  }

  function setBoolean(idx) {
    const updatedList = [...customList];
    updatedList[idx].completed ? updatedList[idx].completed = false : updatedList[idx].completed = true;
    setNewItem(updatedList);
  }
  // console.log(oneStep.steps)

  return (
    <>
      <h2>{newListSteps} CheckList</h2>
      {customList.map((step, idx) => (
        <div className="listStyle">
          <div style={{ textDecoration: step.completed ? "line-Through" : '' }}>
            <h1 >{step.title}</h1>
            <p>{step.description}</p>
            {/* <p>{step.website}</p> */}
            <div>
              <button onClick={() => setBoolean(idx)} type="submit">
                {step.completed ? 'Undo 🔙' : 'Click to Mark as Complete ✅'}
              </button>
              <button onClick={() => deleteItem(step.id)} type="submit">Delete ❌</button>
            </div>
          </div>

        </div>
      ))}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            name="title"
            value={newItem.title}
            onChange={handleChange}
            placeholder="New To-Do"
            required
            pattern=".{2,}"
          />
          <input
            autoComplete="off"
            name="description"
            value={newItem.description}
            onChange={handleChange}
            placeholder="Description"
            // required
            pattern=".{2,}"
          />

          <button type="submit">Add To Do</button>
        </form>
      </div>
    </>
  );
}
