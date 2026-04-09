import React, { useState } from "react";
import "./NavComponent.css";

const NavComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div className="logo">
        <img src="Logo.png" alt="" />
        <div className="logo-text">Trek</div>
      </div>

      {/* NAV LINKS */}
      <div className={`nav-center ${menuOpen ? "active" : ""}`}>
        <div>Tours</div>
        <div>Destination</div>
        <div>Virtual tour</div>
        <div>Blog</div>
        <div>About</div>
        <div>Contact</div>

        <div className="english">
          <img src="globe.png" alt="globe" className="globe" />
          <div>English</div>
        </div>

        {/* Buttons inside menu on mobile */}
        <div className="button-nav mobile">
          <button className="login-button">login</button>
          <button className="signup-button">signup</button>
        </div>
      </div>

      {/* DESKTOP BUTTONS */}
      <div className="button-nav desktop">
        <button className="login-button">login</button>
        <button className="signup-button">signup</button>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </div>
  );
};

export default NavComponent;