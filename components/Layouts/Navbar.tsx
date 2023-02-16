import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Events, Link as ScrollLink } from "react-scroll";
import Link from "../../utils/ActiveLink";

interface NavLinks {
  to: string;
  scrollTo?: string;
  name: string;
}

const navLinks: NavLinks[] = [
  { to: "/", scrollTo: "home", name: "Home" },
  { to: "/#competencies", scrollTo: "competencies", name: "Kompetenzen" },
  { to: "/#references", scrollTo: "references", name: "Referenzen" },
  { to: "/#team", scrollTo: "team", name: "Team" },
  { to: "/#philosophy", scrollTo: "philosophy", name: "Philosophie" },
  { to: "/#contact", scrollTo: "contact", name: "Kontakt" },
];

const Navbar = () => {
  const router = useRouter();

  const [menu, setMenu] = useState(true);
  const [isHomeRoute, setIsHomeRoute] = useState(false);

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

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  useEffect(() => {
    setIsHomeRoute(router.pathname === "/");
  }, [router]);

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
                {navLinks.map((link, idx) => (
                  <li className="nav-item" key={idx}>
                    {isHomeRoute ? (
                      <ScrollLink
                        activeClass="active"
                        className="click"
                        to={link.scrollTo}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={0}
                      >
                        {link.name}
                      </ScrollLink>
                    ) : (
                      <Link href={link.to} activeClassName="active">
                        <a className="nav-link">{link.name}</a>
                      </Link>
                    )}
                  </li>
                ))}
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
