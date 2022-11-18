import React from "react";
import Block from "./Block.js";
import "./BlockGroup.css";

function BlockGroup(props) {
  return (
    <div className="block-group">
      <h3>{props.title}</h3>
      <Block title={props.forloop_title} code={props.forloop_code} />
      <Block title={props.ifelse_title} code={props.ifelse_code} />
    </div>
  );
}

export default BlockGroup;
