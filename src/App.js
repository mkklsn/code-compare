import React from "react";
import Block from "./Block.js";

function App() {
  const value = "World";
  return (
    <div>
      Hello {value}
      <Block />
    </div>
  );
}

export default App;
