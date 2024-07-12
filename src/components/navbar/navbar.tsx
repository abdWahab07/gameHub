import logo from "../../images/logo.png";
import ColorMode from "./colorMode/colorMode";
import "./navbar.css";
import NavbarLinks from "./navbarLinks/navbarLinks";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bebas">
      <div className="container-fluid">
        {/* Logo on the left */}
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            width="40%"
            height="100%"
            className="d-inline-block align-text-center"
          />
        </a>

        {/* Toggler button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav mx-auto">
            <NavbarLinks />
          </div>
          <div className="navbar-nav ms-auto">
            <ColorMode />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
