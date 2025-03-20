import React from "react";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      key="mobile-menu"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      exit={{ y: -1000 }}
      transition={{ type: "tween", duration: 1 }}
      style={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        backgroundColor: "#4f4e4e",
        opacity: 0.9,
        textAlign: "center",
        zIndex: 1000,
        padding: "20px",
      }}
    >
      <div
        style={{ 
          position: "absolute",
          top: "20px",
          right: "80px", 
          cursor: "pointer",
          fontSize: "30px",
          color: "#fff", 
          fontWeight: "bold",
          zIndex: 2000, 
        }}
        onClick={onClose}
      >
        ✖
      </div>
      <div style={{ marginTop: "80px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <NavLinks onClick={onClose} />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
