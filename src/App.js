import React from "react";
import ReactDOM from "react-dom/client";
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import Body from "./components/Body";

/* const styleCard = {
  backgroundColor: "#b9b9b9ff",
};
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
