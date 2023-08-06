import React from "react";
import "./App.css";
import Field from "./components/Field";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <button>Easy</button>
            </li>
            <li>
              <button>Medium</button>
            </li>
            <li>
              <button>Hard</button>
            </li>
          </ul>
          <div className="container"></div>
        </header>
      </div>
    </>
  );
}

export default App;
