import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


const AppLayout = () => {
  console.log("Body :: ", <Body />);
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// Render React Element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
