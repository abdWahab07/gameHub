import React, { useEffect, useState } from "react";
import "./navbarLinks.css";
import Catalogue from "../catalogue";

const NavbarLinks = () => {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    setShowLinks(true);
  }, []);

  return (
    <ul className={`navbar-nav mb-lg-0 text-center ${showLinks ? "show" : ""}`}>
      {Catalogue.map((link) => (
        <li className="nav-item mx-4">
          <a className="nav-link" href="#">
            {link.link}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
