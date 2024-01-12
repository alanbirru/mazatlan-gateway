import { useState } from "react";
import { useEffect } from "react";
import "../css/navbar.css";
import logo from "../assets/logo.png";
import hamburger from "../assets/nav-icons/hamburger.png";
import close from "../assets/nav-icons/close.png";

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  console.log(hamburgerOpen);
  const navItems = [
    { name: "Services" },
    { name: "Activities" },
    { name: "Shopping" },
    { name: "Gateway Blog" },
    { name: "About us" },
    { name: "Contact" },
    { name: "Eng-Es" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-component ${scrolling ? "colored" : "transparent"}`}>
      <img className="logo-navbar" src={logo} alt="" />

      <ul className={`nav-item-container ${hamburgerOpen ? "show" : "hidden"}`}>
        {navItems.map((navItem, index) => {
          return (
            <a href="#">
              <li key={index} className="nav-item">
                {navItem.name}
              </li>
            </a>
          );
        })}
      </ul>

      <img
        className="nav-ham"
        src={hamburgerOpen ? close : hamburger}
        alt="hamburger"
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      />
    </div>
  );
}
