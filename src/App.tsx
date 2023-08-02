import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import Main from "./components/Main";

function App() {
  const [unit, setUnit] = useState<string>("");
  return (
    <div className="App">
      {unit === "" ? (
        <div>
          <p>Please select a unit</p>
          <button onClick={() => setUnit("3")}>Unit 3 JavaScript</button>
          <button onClick={() => setUnit("4")}>Unit 4 DOM</button>
          <button onClick={() => setUnit("5")}>Unit 5 Testing</button>
        </div>
      ) : (
        <Main unit={unit} />
      )}
    </div>
  );
}

export default App;
