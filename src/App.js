import React from "react";
import Block from "./Block.js";

function App() {
  let csForLoop =
    'for (int i = 0; i < 10; i++)\n{\n   Console.WriteLine("Hello World " + i);\n}';

  let csIfElse =
    'if (x == 1) {\n   Console.WriteLine("x is 1");\n}\nelse if (x == 2) {\n   Console.WriteLine("x is 2");\n}\nelse {\n   Console.WriteLine("x not 1");\n}';

  return (
    <div>
      <Block title={"For Loop"} code={csForLoop} />
      <Block title={"If Else"} code={csIfElse} />
    </div>
  );
}

export default App;
