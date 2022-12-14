import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./Block.css";

function Block(props) {
  return (
    <div className="block">
      <span className="title">{props.title}</span>
      <SyntaxHighlighter
        language="csharp"
        style={atomOneDark}
        showLineNumbers={true}
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
}

export default Block;
