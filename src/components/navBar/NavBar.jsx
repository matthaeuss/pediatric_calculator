import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="navbar">
      <Link to="/">NavBar </Link>
      <Link to="/login">Login</Link>
    </header>
  );
}

export default NavBar;