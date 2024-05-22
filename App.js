// const heading = React.createElement('h1',{id: 'heading'},'Welcome to React');
// console.log(heading); // It is react element or javascript object

{
  /* <div id='parent'>
    <div id='child'>
        <h1>Welcome to React</h1>
        <h2>React is Awesome!</h2>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "Welcome to React!"),
      React.createElement("h2", {}, "React is Awesome!"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "React Library is Powerful"),
      React.createElement("h2", {}, "We can build performant enterprise application using react "),
    ])
  ]
);
console.log("Elements :: ", parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
