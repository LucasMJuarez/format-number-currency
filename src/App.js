import React, { useState } from "react";

import "./App.css";

function formatNumber(number) {
  return new Intl.NumberFormat("ES-AR", {
    style: "currency",
    currency: "ARS",
  }).format(number);
}

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <h1>Hola Cantidad {formatNumber((number))}</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  );
}

export default App;
