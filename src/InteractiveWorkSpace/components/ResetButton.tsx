import React from "react";
import { ResetButtonProps } from "../utils/constants";

const ResetButton: React.FC<ResetButtonProps> = ({ resetLayout }) => (
  <button
    onClick={resetLayout}
    style={{
      padding: "12px 20px",
      backgroundColor: "#3498db",
      color: "white",
      borderRadius: "4px",
      marginBottom: "16px",
      border: "none",
      cursor: "pointer",
    }}
  >
    Reset
  </button>
);

export default ResetButton;
export {}