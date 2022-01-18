// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Carousel } from "./components/Carousel Componect/Carousel";
import CardView from "./components/CardView";



function App() {
  return (
    <>
      <Carousel />;
      <div className="CardView">
        <CardView />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
