import * as React from "react"
import { Link } from "gatsby"

// import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg"
import instagram from "../img/social/instagram.svg"

const Footer = () => {
  
    return (
      <footer className="footer has-background-black has-text-white-ter">
        { /*<div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "10em" }}
          />
        </div>*/ }
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-5">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/about">
                        Acerca
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Productos
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-5">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Últimas entradas
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-2 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
