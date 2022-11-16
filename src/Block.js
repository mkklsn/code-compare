import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Block() {
  debugger;
  let forLoop =
    'for (int i = 0; i < 10; i++)\n{\n   Console.WritleLine("Hello World " + i);\n}';
  return (
    <div>
      <label>For loop</label>
      <SyntaxHighlighter language="csharp" style={dark} showLineNumbers={true}>
        {forLoop}
      </SyntaxHighlighter>
    </div>
  );
}

export default Block;
