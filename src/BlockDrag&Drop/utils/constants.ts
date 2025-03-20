import { Block } from "./types";

export const defaultBlocks: Block[] = [
  { id: "1", x: 10, y: 10, width: 300, height: 100, color: "#ffadad", zIndex: 1 },
  { id: "2", x: 360, y: 10, width: 300, height: 100, color: "#ffd6a5", zIndex: 2 },
  { id: "3", x: 710, y: 10, width: 300, height: 100, color: "#fdffb6", zIndex: 3 },
  { id: "4", x: 10, y: 150, width: 300, height: 100, color: "#caffbf", zIndex: 4 },
  { id: "5", x: 360, y: 150, width: 300, height: 100, color: "#9bf6ff", zIndex: 5 },
];


export interface DraggableBlockProps {
  block: Block;
  updateBlock: (id: string, newData: Partial<Block>) => void;
  removeBlock: (id: string) => void;
  bringToFront: (id: string) => void;
}

export interface ResetButtonProps {
    resetLayout: () => void;
  }
  
export {}
