/* <div id="parent">
  <div id="child1">
    <h1></h1>
    <h2></h2>
  </div>
  <div id="child2">
    <h1></h1>
    <h2></h2>
  </div>
</div> */
// to create stucture  like this first we have to create parent element in react like below

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "I am an h1 tag of child 1"),
    React.createElement("h2", {}, "I am an h1 tag of child 1"),
  ]),  
  React.createElement("div", { id: "Child2" }, [
    React.createElement("h1", {}, "I am an h1 tag of child 2"),
    React.createElement("h2", {}, "I am an h1 tag of child 2"),
  ]),
]);

//as the above code becomes complex syntax jsx is used

console.log(parent);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
