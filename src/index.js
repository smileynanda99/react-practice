import React from "react";
import ReactDOM from "react-dom";
const name = "Rohit";
var welcomeMSG = "";
const date = new Date();
const year = date.getFullYear();
const time = date.toLocaleString("en-US", {
  hour: "2-digit",
  minute: "numeric"
});
//console.log(time);
const style = {
  color: "black",
  fontSize: "50px"
};

if ("PM" === time.slice(6, 8)) {
  style.color = "red";
  welcomeMSG = "Good Night";
} else {
  style.color = "green";
  welcomeMSG = "Good Morning";
}
ReactDOM.render(
  <div>
    <h1 style={style}>
      Hello {name} {welcomeMSG}!
    </h1>
    <p>Copyright {year}.</p>
  </div>,
  document.getElementById("root")
);
