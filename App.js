import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "Welcome to React!"),
      React.createElement("h2", {}, "React is Awesome!"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "React Library is Powerful 🚀"),
      React.createElement("h2", {}, "We can build performant enterprise application using react "),
    ])
  ]
);
console.log("Elements :: ", parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
