import React, { useState, useEffect } from "react";
import ResetButton from "../components/ResetButton";
import DraggableBlock from "../components/DraggableBlock";
import { Block } from "../utils/types";
import { defaultBlocks } from "../utils/constants";

const FreeMoveWorkspace: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>(() => {
    const saved = localStorage.getItem("blocks");
    return saved ? JSON.parse(saved) : defaultBlocks;
  });

  const [initialSize, setInitialSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Обробник зміни розміру екрану
  useEffect(() => {
    const handleResize = () => {
      setBlocks((prevBlocks) =>
        prevBlocks.map((block) => ({
          ...block,
          x: (block.x / initialSize.width) * window.innerWidth,
          y: (block.y / initialSize.height) * window.innerHeight,
          width: (block.width / initialSize.width) * window.innerWidth,
          height: (block.height / initialSize.height) * window.innerHeight,
        }))
      );
      setInitialSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialSize]);

  // Збереження блоків в localStorage
  useEffect(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks));
  }, [blocks]);

  // Функція скидання макету
  const resetLayout = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
  
    setBlocks(defaultBlocks.map((block) => ({
      ...block,
      x: (block.x / 1920) * newWidth, // Масштабування x (1920 - базова ширина)
      y: (block.y / 1080) * newHeight, // Масштабування y (1080 - базова висота)
      width: (block.width / 1920) * newWidth, // Масштабування ширини
      height: (block.height / 1080) * newHeight, // Масштабування висоти
    })));
  
    setInitialSize({ width: newWidth, height: newHeight });
  };
  

  // Оновлення даних блоку
  const updateBlock = (id: string, newData: Partial<Block>) => {
    setBlocks((prev) =>
      prev.map((block) => (block.id === id ? { ...block, ...newData } : block))
    );
  };

  // Видалення блоку
  const removeBlock = (id: string) => {
    setBlocks((prev) => prev.filter((block) => block.id !== id));
  };

  // Перенос блоку на передній план
  const bringToFront = (id: string) => {
    setBlocks((prev) => {
      const maxZIndex = Math.max(...prev.map((b) => b.zIndex));
      return prev.map((block) =>
        block.id === id ? { ...block, zIndex: maxZIndex + 1 } : block
      );
    });
  };

  return (
    <div style={{ padding: "16px" }}>
      <ResetButton resetLayout={resetLayout} />
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
    </div>
  );
};

export default FreeMoveWorkspace;
