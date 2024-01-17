import React, { useEffect } from "react";
import Button from "../Button/Button";
import "./header.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  /* Header menu list */
  // let menuList = ["Home","Quote", "Resturants", "Foods", "Contact"];
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const location = useLocation();
  return (
    // header section
    <header className="header_container" data-aos="zoom-in">
      <div>
        <img src="https://flowbite.com/docs/images/logo.svg" />
        <h1>GeekFoods</h1>
      </div>
      <ul>
        <li>
          <Link
            to="/home"
            className={`nav_link ${
              location.pathname === "/home" ? "active-link" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/quote"
            className={`nav_link ${
              location.pathname === "/quote" ? "active-link" : ""
            }`}
          >
            Quote
          </Link>
        </li>
        <li>
          <Link
            to="/resturants"
            className={`nav_link ${
              location.pathname === "/resturants" ? "active-link" : ""
            }`}
          >
            Resturants
          </Link>
        </li>
        <li>
          <Link
            to="/foods"
            className={`nav_link ${
              location.pathname === "/foods" ? "active-link" : ""
            }`}
          >
            Foods
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav_link ${
              location.pathname === "/contact" ? "active-link" : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
      <Button buttonText="Get started" id="headerButton"></Button>
    </header>
  );
}

export default Header;
