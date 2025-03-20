
import React from "react";
import { Rnd } from "react-rnd";
import { DraggableBlockProps } from "../utils/constants";

const DraggableBlock: React.FC<DraggableBlockProps> = ({
  block,
  updateBlock,
  removeBlock,
  bringToFront,
}) => (
  <Rnd
    key={block.id}
    size={{ width: block.width, height: block.height }}
    position={{ x: block.x, y: block.y }}
    onDragStop={(e, data) => updateBlock(block.id, { x: data.x, y: data.y })}
    onResizeStop={(e, direction, ref, delta, position) =>
      updateBlock(block.id, {
        width: ref.offsetWidth,
        height: ref.offsetHeight,
        x: position.x,
        y: position.y,
      })
    }
    minWidth={50}
    minHeight={50}
    bounds="parent"
    style={{ zIndex: block.zIndex }}
  >
    <div
      style={{
        padding: "8px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        backgroundColor: block.color,
        width: "100%",
        height: "100%",
        position: "relative",
        cursor: "move",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => bringToFront(block.id)}
    >
      <span style={{ pointerEvents: "none", fontSize: "1.5rem" }}>
        {block.id}
      </span>
      <button
        onClick={() => removeBlock(block.id)}
        style={{
          position: "absolute",
          top: "4px",
          right: "4px",
          backgroundColor: "#e74c3c",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          border: "none",
          cursor: "pointer",
          zIndex: '10',
        }}
      >
        ✖
      </button>
    </div>
  </Rnd>
);

export default DraggableBlock;
export {};
