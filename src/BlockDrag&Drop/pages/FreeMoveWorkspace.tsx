import React from "react";
import ResetButton from "../components/ResetButton";
import BlockContainer from "../components/BlockContainer";
import { useBlocks } from "../hooks/useBlocks"
const FreeMoveWorkspace: React.FC = () => {
  const { blocks, resetLayout, updateBlock, removeBlock, bringToFront } = useBlocks();

  return (
    <div style={{ padding: "16px" }}>
      <ResetButton resetLayout={resetLayout} />
      <BlockContainer blocks={blocks} updateBlock={updateBlock} removeBlock={removeBlock} bringToFront={bringToFront} />
    </div>
  );
};

export default FreeMoveWorkspace;
