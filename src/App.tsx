import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Header title="Ingredients"></Header>
      <Button label="add"></Button>
    </div>
  );
}

export default App;
