import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo_letters_transparent.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/products">
                Productos
              </Link>
              <Link className="navbar-item" to="/faq">
                Preguntas frecuentes
              </Link>
              <Link className="navbar-item" to="/about">
                Acerca
              </Link>
              <Link className="navbar-item" to="/contact">
                Contacto
              </Link>
            </div>
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
