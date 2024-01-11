import { useState } from "react";
import "../css/navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navItems = [
    { name: "Services" },
    { name: "Activities" },
    { name: "Shopping" },
    { name: "Gateway Blog" },
    { name: "About us" },
    { name: "Contact" },
    { name: "Eng-Es" },
  ];

  return (
    <div className="nav-component">
      <img className="logo-navbar" src={logo} alt="" />

      <ul className="nav-item-container">
        {navItems.map((navItem, index) => {
          return (
            <li key={index} className="nav-item">
              {navItem.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
