import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter = counter + 1;
  };

  const removeValue = () => {
    setCounter = counter - 1;
  };

  return (
    <>
      <h1>React count button project</h1>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter} </button>

      <p>footer: {counter}</p>
    </>
  );
}

export default App;
