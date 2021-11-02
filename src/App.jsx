import React from "react";
import * as cal from "./calculator";

function App() {
  return (
    <ul>
      <li>{cal.add(1, 2)}</li>
      <li>{cal.multiply(2, 3)}</li>
      <li>{cal.subtract(7, 2)}</li>
      <li>{cal.divide(5, 2)}</li>
    </ul>
  );
}
export default App;
