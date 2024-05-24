import React from "react";
import ReactDOM from "react-dom/client";


// React Element
const heading = (
  <h1 className="head" tabIndex="1">
    React is Awesome Library ❤️
  </h1>
);

// React Component

// Render React Element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
