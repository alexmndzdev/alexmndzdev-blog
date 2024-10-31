import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo_letters_transparent.png";
import { useLocation } from '@reach/router';
import GoogleCalendarButton from "./GoogleCalendarButton";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState('')
  const toggleHamburger = () => {
    setIsActive(!isActive)
    setNavBarActiveClass(isActive ? 'is-active' : '')
  }

  const location = useLocation();
  const isActiveLink = (path) => {
    return location.pathname === path;
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            role="menuitem"
            tabIndex={0}
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`} >
          <div className="navbar-start has-text-centered">
            <Link className={`navbar-item ${isActiveLink('/blog') ? 'is-active' : ''}`} to="/blog">
              Blog
            </Link>
            <Link className={`navbar-item ${isActiveLink('/products') ? 'is-active' : ''}`} to="/products">
              Productos
            </Link>
            <Link className={`navbar-item ${isActiveLink('/faq') ? 'is-active' : ''}`} to="/faq">
              Preguntas frecuentes
            </Link>
            <Link className={`navbar-item ${isActiveLink('/about') ? 'is-active' : ''}`} to="/about">
              Acerca
            </Link>
            <Link className={`navbar-item ${isActiveLink('/contact') ? 'is-active' : ''}`} to="/contact">
              Contacto
            </Link> 
          </div>
          <div className="navbar-end" style={{
            margin: 'auto',
            'justify-items': 'center'
          }}>
            <GoogleCalendarButton/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
