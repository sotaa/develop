import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Routing } from "./route";

function App() {
  return (
    <div className="App">
      <Router>
        <Routing />
      </Router>
    </div>
  );
}

export default App;

// TEST CI
