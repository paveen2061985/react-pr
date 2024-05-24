import React from "react";
import ReactDOM from "react-dom/client";

// Title Component
const Title = () => (
  <h1 className="head" tabIndex="1">
    React is Awesome Library ❤️
  </h1>
);

// React Element
const subHeading = (
  <h2 className="sub-header" tabIndex="1">
    We Can Implement any Enterprise Application using React 👌
  </h2>
);

// React Component
// There are two ways to create a React Component
// 1. Functional Component - New way
// 2. Class based Component - Old way

// React Functional Component - It is just a JavaScript function
const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      {subHeading}
      <h1 className="head" tabIndex="1">
        React Functional Components are really Awesome 😍
      </h1>
    </div>
  );
};

// Render React Element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
