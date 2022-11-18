import React from "react";
import BlockGroup from "./BlockGroup.js";

function App() {
  let csForLoop =
    'for (int i = 0; i < 10; i++)\n{\n   Console.WriteLine("Hello World " + i);\n}';

  let csIfElse =
    'if (x == 1) {\n   Console.WriteLine("x is 1");\n}\nelse if (x == 2) {\n   Console.WriteLine("x is 2");\n}\nelse {\n   Console.WriteLine("x not 1");\n}';

  return (
    <div className="main">
      <BlockGroup
        title={"C#"}
        forloop_title={"For Loop"}
        forloop_code={csForLoop}
        ifelse_title={"If Else"}
        ifelse_code={csIfElse}
      />
      <BlockGroup
        title={"Go"}
        forloop_title={"For Loop"}
        forloop_code={csForLoop}
        ifelse_title={"If Else"}
        ifelse_code={csIfElse}
      />
      <BlockGroup
        title={"JavaScript"}
        forloop_title={"For Loop"}
        forloop_code={csForLoop}
        ifelse_title={"If Else"}
        ifelse_code={csIfElse}
      />
      <BlockGroup
        title={"Java"}
        forloop_title={"For Loop"}
        forloop_code={csForLoop}
        ifelse_title={"If Else"}
        ifelse_code={csIfElse}
      />
    </div>
  );
}

export default App;
