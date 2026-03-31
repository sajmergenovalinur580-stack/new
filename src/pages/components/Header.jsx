import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      my site
      <nav
        style={{
          backgroundColor: "pink",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
        }}
      >
        <h2>Alinur</h2>
        <a href="">about me</a>
        <Link to="/contact">contact</Link>
        <Link to="/About">about</Link>
      </nav>
    </div>
  );
};
export default Header;
