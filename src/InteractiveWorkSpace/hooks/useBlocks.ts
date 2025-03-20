import { useState, useEffect } from "react";
import { Block } from "../utils/types";
import { defaultBlocks } from "../utils/constants";

export const useBlocks = () => {
  const [blocks, setBlocks] = useState<Block[]>(() => {
    const saved = localStorage.getItem("blocks");
    return saved ? JSON.parse(saved) : defaultBlocks;
  });

  const [initialSize, setInitialSize] = useState({ width: window.innerWidth, height: window.innerHeight });

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

  useEffect(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks));
  }, [blocks]);

  const resetLayout = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    setBlocks(defaultBlocks.map((block) => ({
      ...block,
      x: (block.x / 1920) * newWidth,
      y: (block.y / 1080) * newHeight,
      width: (block.width / 1920) * newWidth,
      height: (block.height / 1080) * newHeight,
    })));

    setInitialSize({ width: newWidth, height: newHeight });
  };

  const updateBlock = (id: string, newData: Partial<Block>) => {
    setBlocks((prev) => prev.map((block) => (block.id === id ? { ...block, ...newData } : block)));
  };

  const removeBlock = (id: string) => {
    setBlocks((prev) => prev.filter((block) => block.id !== id));
  };

  const bringToFront = (id: string) => {
    setBlocks((prev) => {
      const maxZIndex = Math.max(...prev.map((b) => b.zIndex));
      return prev.map((block) => (block.id === id ? { ...block, zIndex: maxZIndex + 1 } : block));
    });
  };

  return { blocks, resetLayout, updateBlock, removeBlock, bringToFront };
};
