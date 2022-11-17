import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Block(props) {
  return (
    <div>
      <label>{props.title}</label>
      <SyntaxHighlighter language="csharp" style={dark} showLineNumbers={true}>
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
}

export default Block;
