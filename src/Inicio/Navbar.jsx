import { useState } from "react";
import "../css/navbar.css";
import logo from "../assets/logo.png";
import hamburger from "../assets/nav-icons/hamburger.png";
import close from "../assets/nav-icons/close.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  // const [scrolling, setScrolling] = useState(false);

  const closeMenu = () => {
    setHamburgerOpen(false);
  };

  const navItems = [
    { name: "Emergency numbers", id: "emergency-numbers" },
    { name: "Food", id: "food" },
    { name: "Activities", id: "activities" },
    { name: "Health", id: "health" },
    { name: "Shopping", id: "shopping" },
    { name: "Directory", id: "directory" },
    { name: "Contact", id: "contact" },
    { name: "blog", id: "blog" },
  ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScrolling(true);
  //     } else {
  //       setScrolling(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <nav className={`nav-component colored`}>
      <Link to="/mazatlan-gateway/">
        <img className="logo-navbar" src={logo} alt="" onClick={closeMenu} />
      </Link>

      <ul className={`nav-item-container ${hamburgerOpen ? "show" : "hidden"}`}>
        {navItems.map((navItem, index) => {
          return (
            <NavLink to={`mazatlan-gateway/${navItem.id}`}>
              <li key={index} className="nav-item" onClick={closeMenu}>
                {navItem.name}
              </li>
            </NavLink>
          );
        })}
      </ul>

      <img
        className="nav-ham"
        src={hamburgerOpen ? close : hamburger}
        alt="hamburger"
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      />
    </nav>
  );
};

export default Navbar;
