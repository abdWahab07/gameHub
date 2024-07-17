import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbarLinks.css";
import Catalogue from "../catalogue"; // Ensure this path is correct

const NavbarLinks = () => {
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();
  const footerRef = useRef<HTMLDivElement>(null); // Specify the type of the ref

  useEffect(() => {
    setShowLinks(true);
  }, []);

  const scrollToFooter = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ul className={`navbar-nav mb-lg-0 text-center ${showLinks ? "show" : ""}`}>
        <li className="nav-item mx-4">
          <Link className={`nav-link text-uppercase fw-bold ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
        </li>
        {Catalogue.map((link, index) => (
          <li className="nav-item mx-4 text-uppercase fw-bold" key={index}>
            {link.link === "about us" ? (
              <a
                className={`nav-link ${location.pathname === "/about-us" ? "text-danger active" : ""}`}
                href="/about-us" // Link to the about us page
                target="#"   // Open in a new tab
                rel="noopener noreferrer" // Security best practice
              >
                About Us
              </a>
            ) : (
              <Link
                className={`nav-link ${location.pathname === (link.link === "generation" ? "/generation" : "#") ? "active" : ""}`}
                to={link.link === "generation" ? "/generation" : "#"}
              >
                {link.link}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <footer ref={footerRef}>
        {/* Footer content goes here */}
      </footer>
    </>
  );
};

export default NavbarLinks;
