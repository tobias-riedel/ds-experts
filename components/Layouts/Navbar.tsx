import { useEffect, useState } from "react";
import Link from "../../utils/ActiveLink";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    const elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  const logoAltText = "ds-experts IT-Consulting GmbH";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-2">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">
                <img
                  src="/images/logo-ds-experts.png"
                  className="black-logo logo-ds-experts"
                  title={logoAltText}
                  alt="logo"
                />
                <img
                  src="/images/logo-ds-experts.png"
                  className="white-logo logo-ds-experts"
                  title={logoAltText}
                  alt="logo"
                />
              </a>
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                {/* Adjust links */}
                <li className="nav-item">
                  <Link href="/" activeClassName="active">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/#references" activeClassName="active">
                    <a className="nav-link">Referenzen</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/#team" activeClassName="active">
                    <a className="nav-link">Team</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/#contact" activeClassName="active">
                    <a className="nav-link">Kontakt</a>
                  </Link>
                </li>
              </ul>

              <div>
                <Link href="/#join-us">
                  <a
                    className="btn btn-primary"
                    style={{ textTransform: "initial" }}
                  >
                    Lern uns kennen
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;