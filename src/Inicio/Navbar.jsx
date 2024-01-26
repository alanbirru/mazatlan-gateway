import { useState } from "react";
import { useEffect } from "react";
import "../css/navbar.css";
import logo from "../assets/logo.png";
import hamburger from "../assets/nav-icons/hamburger.png";
import close from "../assets/nav-icons/close.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  console.log(hamburgerOpen);
  const navItems = [
    { name: "Emergency numbers", id: "emergency-numbers" },
    { name: "Food", id: "food" },
    { name: "Activities", id: "activities" },
    { name: "Health", id: "health" },
    { name: "Shopping", id: "shopping" },
    { name: "Directory", id: "directory" },
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
      <Link to="/mazatlan-gateway/">
        <img className="logo-navbar" src={logo} alt="" />
      </Link>
      <ul className={`nav-item-container ${hamburgerOpen ? "show" : "hidden"}`}>
        {navItems.map((navItem, index) => {
          return (
            <Link to={`mazatlan-gateway/${navItem.id}`}>
              <li key={index} className="nav-item">
                {navItem.name}
              </li>
            </Link>
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
};

export default Navbar;
