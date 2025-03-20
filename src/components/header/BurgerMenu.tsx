import React from "react";

interface BurgerMenuProps {
  onClick: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "30px",
        height: "25px",
        cursor: "pointer",
        position: "absolute",
        right: "30px",
      }}
    >
      <div style={{ background: "#fff", height: "5px", width: "100%" }}></div>
      <div style={{ background: "#fff", height: "5px", width: "100%" }}></div>
      <div style={{ background: "#fff", height: "5px", width: "100%" }}></div>
    </div>
  );
};

export default BurgerMenu;
