import React from "react";
import CurrencyInput from "./CurrencyInput";
import "./styles.css"


function App() {
  return (
    <div className="App">
      <h1>React Currency Input </h1>
      <h3>with react-text-mask</h3>
      <CurrencyInput placeholder={'0.00'} />
    </div>
  );
}

export default App;
