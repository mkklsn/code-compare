import React from "react";
import BlockGroup from "./BlockGroup.js";

function App() {
  let csVariables =
    'var x = "x is string";\nint a = 1;\nstring s = "s is string";';

  let csForLoop =
    'for (int i = 0; i < 10; i++)\n{\n   Console.WriteLine("Hello World " + i);\n}';

  let csIfElse =
    'if (x == 1) {\n   Console.WriteLine("x is 1");\n}\nelse if (x == 2) {\n   Console.WriteLine("x is 2");\n}\nelse {\n   Console.WriteLine("x not 1");\n}';

  let csMethod = "int Sum(int a, int b) {\n   return a + b;\n}";

  let csharpBlocks = [
    { title: "Variable initialization", code: csVariables },
    { title: "For Loop", code: csForLoop },
    { title: "If Else", code: csIfElse },
    { title: "Method body", code: csMethod },
  ];

  return (
    <div className="main">
      <BlockGroup title={"C#"} blocks={csharpBlocks} />
      <BlockGroup title={"Go"} blocks={csharpBlocks} />
      <BlockGroup title={"JavaScript"} blocks={csharpBlocks} />
      <BlockGroup title={"Java"} blocks={csharpBlocks} />
    </div>
  );
}

export default App;
