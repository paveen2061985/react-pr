import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const restaurentImageStyle = {
  width: "200px",
  height: "200px",
  objectFit: "cover",
};
const RestaurentCard = (props) => {
  return (
    <div className="restaurent-card">
      <img
        style={restaurentImageStyle}
        src= {props.imageUrl}
        alt="restaurent"
      />
      <h3>{props.name}</h3>
      <p>{props.address}</p>
      <p>Rating: {props.rating}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search..." />
        &nbsp;&nbsp;
        <button>Search</button>
      </div>
      <div className="restaurent-container">
        <RestaurentCard
          imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/vnotaq2k5i2nqdigafon"
          name="Megana Foods"
          address="Hosur Road, Banglore"
          rating="4.5"
        />
        <RestaurentCard
          imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
          name="Pizza Hut"
          address="Koramangala, Banglore"
          rating="4.6"
        />
        
      </div>
    </div>
  );
};

const AppLayout = () => {
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
