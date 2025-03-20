import React from "react";
import DraggableBlock from "./DraggableBlock";
import { Block } from "../utils/types";

interface BlockContainerProps {
  blocks: Block[];
  updateBlock: (id: string, newData: Partial<Block>) => void;
  removeBlock: (id: string) => void;
  bringToFront: (id: string) => void;
}

const BlockContainer: React.FC<BlockContainerProps> = ({ blocks, updateBlock, removeBlock, bringToFront }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        border: "1px solid #ccc",
        backgroundColor: "#f7f7f7",
        overflow: "hidden",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      {blocks.map((block) => (
        <DraggableBlock
          key={block.id}
          block={block}
          updateBlock={updateBlock}
          removeBlock={removeBlock}
          bringToFront={bringToFront}
        />
      ))}
    </div>
  );
};

export default BlockContainer;
