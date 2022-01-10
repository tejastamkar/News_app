// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import ImageCarousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import Slider from "./components/Slider";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  return (
    <>
    <Slider />;
    <div className="App">
      {/* <header className="App-header">
        <h1>This is News App Main page </h1>
      </header> */}
      <ImageCarousel breakPoints={breakPoints}>
    <Item>One</Item>
    <Item>Two</Item>
    
    <Item>Three</Item>
    <Item>Four</Item>
    <Item>Five</Item>
    <Item>Six</Item>
    <Item>Seven</Item>
    <Item>Eight</Item>
  </ImageCarousel>
    </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
