import React, { useEffect, useState } from "react";
import "./navbarLinks.css";

const NavbarLinks = () => {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    setShowLinks(true);
  }, []);

  return (
    <ul className={`navbar-nav mb-lg-0 text-center ${showLinks ? 'show' : ''}`}>
      <li className="nav-item mx-4">
        <a className="nav-link" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li className="nav-item mx-4">
        <a className="nav-link" href="#">
          News
        </a>
      </li>
      <li className="nav-item mx-4">
        <a className="nav-link" href="#">
          About Us
        </a>
      </li>
      <li className="nav-item mx-4">
        <a className="nav-link" href="#">
          Contact Us
        </a>
      </li>
    </ul>
  );
};

export default NavbarLinks;
