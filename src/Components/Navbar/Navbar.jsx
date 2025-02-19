import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger icons
import gsgLogo from "../../assets/gsgLogo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("about");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Left Side: Logo */}
      <img src={gsgLogo} alt="logo" className="loggo" />

      {/* Hamburger Icon (Visible on Small Screens) */}
      <div className="hamburger" onClick={() => setSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Sidebar Menu (Visible on Small Screens) */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          {["home", "about", "skills", "work", "certificates"].map((item) => (
            <li key={item}>
              <AnchorLink
                className={`anchor-link ${menu === item ? "active" : ""}`}
                href={`#${item}`}
                onClick={() => {
                  setMenu(item);
                  setSidebarOpen(false); // Close sidebar on click
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Menu (Hidden in Small Screens) */}
      <ul className="nav-menu">
        {["home", "about", "skills", "work", "certificates"].map((item) => (
          <li key={item}>
            <AnchorLink
              className={`anchor-link ${menu === item ? "active" : ""}`}
              href={`#${item}`}
              onClick={() => setMenu(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </AnchorLink>
          </li>
        ))}
      </ul>

      {/* Connect Button (Hidden in Small Screens) */}
      <div className="nav-connect">
        <AnchorLink
          className="anchor-link"
          href="#contact"
          onClick={() => setMenu("contact")}
        >
          Connect
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
