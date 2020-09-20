import React, { useState } from "react";

function App() {
  const [FullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function nameChange(event) {
    const { name, value } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {FullName.fName} {FullName.lName}
      </h1>
      <form onSubmit="">
        <input
          name="fName"
          onChange={nameChange}
          value={FullName.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={nameChange}
          value={FullName.lName}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
