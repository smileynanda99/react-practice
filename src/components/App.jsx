import React from "react";

function App() {
  setInterval(updateTime, 1000);
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  // function add() {
  //   setCount(count + 1);
  // }

  // function minus() {
  //   setCount(count - 1);
  // }
  return (
    <div className="style">
      <h1>{time}</h1>
      {/* <button className="btn" onClick={minus}>
        -
      </button>
      <button className="btn" onClick={add}>
        +
      </button> */}
    </div>
  );
}

export default App;
