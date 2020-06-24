import React from "react";
import "./App.css";
// Поставил React-Scrollable-Anchor для красивых якорей и плавного перемещения
import Header from './components/Header.jsx';
import WheelCheckArea from "./components/WheelCheckArea.jsx";
import WheelCheckRotation from "./components/WheelCheckRotation.jsx";
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <Header/>
      <Description/>
      <WheelCheckArea/>
      <WheelCheckRotation/>
    </div>
  );
}

export default App;
