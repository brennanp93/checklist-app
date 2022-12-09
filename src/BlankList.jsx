import { useState } from "react";

// import "./BlankList.css";
// import BlankListForm from "./BlankListForm";

export default function BlankList() {
  const [checkList, setCheckList] = useState([
    {
      step: "Buy Cheese",
      website: "https://cheese.com/",
      completed: false
    }
  ]);
  console.log(checkList);
  const [newItem, setNewItem] = useState({
    step: "",
    website: "",
    completed: false
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    setCheckList([...checkList, newItem]);
  }

  function handleChange(evt) {
    const newItemList = {
      ...newItem,
      [evt.target.name]: evt.target.value,
      [evt.target.name]: evt.target.value,
      completed: false
    };
    setNewItem(newItemList);
    console.log("newItem" + newItemList);
  }

  function markComplete(idx) {
    const newObj = [...checkList];
    newObj[idx].completed = true;
    setCheckList(newObj);
  }

  return (
    <>
      <div>
        <h1>Custom CheckList</h1>
        {checkList.map((item, idx) => (
          <div className="blank-box">
            <p>{item.step}</p>
            <div>
              <a href={item.website} target="_blank">
                Additional Information
              </a>
            </div>
            <div>
              <button onClick={() => markComplete(idx)} type="submit">
                {item.completed ? "Nice work" : "click here when complete"}
              </button>
            </div>
          </div>
        ))}
        <h2>Add an Item to your checklist</h2>
        <div className="blank-box">
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              name="step"
              value={newItem.step}
              onChange={handleChange}
              placeholder="New To-Do"
              required
              pattern=".{2,}"
            />
            <input
              autoComplete="off"
              name="website"
              value={newItem.website}
              onChange={handleChange}
              placeholder="Website"
              // required
              pattern=".{2,}"
            />

            <button type="submit">Add To Do</button>
          </form>
        </div>
      </div>
    </>
  );
}
