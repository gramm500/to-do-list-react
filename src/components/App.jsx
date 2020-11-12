import React, { useState } from "react";
import ToDoItem from "./toDoItem";
function App() {
  const [item, setItem] = useState("");
  const [doItem, setDoItem] = useState([]);

  function newItem() {
    setDoItem((prevState) => {
      return [...prevState, item];
    });
    setItem("");
  }

  function addItem(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }
  function deleteItem(id) {
    setDoItem((prevState) => {
      return prevState.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={addItem} type="text" value={item} />
        <button onClick={newItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {doItem.map((listItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                text={listItem}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
