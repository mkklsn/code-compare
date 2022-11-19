import React from "react";
import Block from "./Block.js";
import "./BlockGroup.css";

function BlockGroup(props) {
  let blocks = props.blocks.map((b) => {
    return <Block title={b.title} code={b.code} />;
  });

  return (
    <div className="block-group">
      <span className="title">{props.title}</span>
      {blocks}
    </div>
  );
}

export default BlockGroup;
