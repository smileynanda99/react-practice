import React from "react";

function App() {
  const [item, setItem] = React.useState("");
  function changeHandel(event) {
    setItem(event.target.value);
  }
  const [items, setList] = React.useState([]);
  function addItem() {
    if (item !== "") {
      setList((prevList) => {
        return [...prevList, item];
      });
    } else {
      setList((prevList) => {
        return [...prevList];
      });
    }
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changeHandel} value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem) => {
            return <li>{toDoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
