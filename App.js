import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

const title = (
   <h1 className="Head" tabIndex="1">
    Namaste Abhi using JSX
    
  </h1>
);


const number = 100 ; 
const HeadingComp = () => (
  <div>
    {title}
    <h1>Inside HeadingComp</h1>
  </div>
);



root.render([<HeadingComp/>]);
