import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLinksProps {
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => {
  const location = useLocation();

  const isActiveRoute = (route: string) => location.pathname === route;

  return (
    <>
      <Link
        to="/interactive"
        style={{
          marginRight: "30px",
          color: isActiveRoute("/interactive") ? "#f1c40f" : "#fff",
          textDecoration: "none",
        }}
        onClick={onClick}
      >
        Interactive Workspace
      </Link>
      <Link
        to="/bitcoin"
        style={{
          marginRight: "30px",
          color: isActiveRoute("/bitcoin") ? "#f1c40f" : "#fff",
          textDecoration: "none",
        }}
        onClick={onClick}
      >
        Bitcoin Tracker
      </Link>
    </>
  );
};

export default NavLinks;

export {}