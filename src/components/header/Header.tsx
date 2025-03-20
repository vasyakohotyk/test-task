import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
import BurgerMenu from "./BurgerMenu";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const checkMobileView = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{
        background: "#4f4e4e",
        color: "#fff",
        padding: "25px 30px",
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "600",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isMobile && <nav><NavLinks /></nav>}
        {isMobile && <BurgerMenu onClick={toggleMenu} />}
      </div>

      <AnimatePresence>
        {isMenuOpen && isMobile && <MobileMenu onClose={closeMenu} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
