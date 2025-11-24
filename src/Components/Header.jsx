import React from "react";
import taskPandaLogo from "../assets/taskpanda.jpg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={taskPandaLogo} alt="TaskPanda Logo" className="logo" />
     <h1 className="app-title">TaskPanda</h1>
    <p className="tagline">Manage your tasks the Panda way</p>
    </header>
  );
}

export default Header;