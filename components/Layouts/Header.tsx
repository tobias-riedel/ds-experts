import { COMPANY_FULL_NAME } from '@consts/company';
import { SCROLL_LINKS_PROPS } from '@consts/misc';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logoImg from '../../public/images/logo-ds-experts.png';

type NavLinks = {
  to: string;
  scrollTo: string;
  name: string;
};

const navLinks: NavLinks[] = [
  { to: '/', scrollTo: 'home', name: 'Home' },
  { to: '/#team', scrollTo: 'team', name: 'Team' },
  { to: '/#philosophy', scrollTo: 'philosophy', name: 'Philosophie' },
  { to: '/#competencies', scrollTo: 'competencies', name: 'Kompetenzen' },
  { to: '/#references', scrollTo: 'references', name: 'Referenzen' },
  { to: '/#contact', scrollTo: 'contact', name: 'Kontakt' },
];

const navbarHeight = 170;
const scrollThreshold = 50;

const Navbar = () => {
  const router = useRouter();

  const [menu, setMenu] = useState(true);
  const [isHomeRoute, setIsHomeRoute] = useState(false);
  const [navbarSticky, setNavbarSticky] = useState('');

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  // Make navbar sticky on scrolling down
  const toggleNavbarStickiness = (): void => {
    setNavbarSticky(window.scrollY > navbarHeight ? 'is-sticky' : '');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleNavbarStickiness);
    return () => {
      window.removeEventListener('scroll', toggleNavbarStickiness);
    };
  }, []);

  // Hide navbar on scrolling down and show on scrolling up for mobile devices
  const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState('');
    const [prevOffset, setPrevOffset] = useState(0);

    const toggleScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY > prevOffset && scrollY > scrollThreshold) {
        setScrollDirection('down');
      } else if (scrollY < prevOffset && scrollY > scrollThreshold) {
        setScrollDirection('up');
      }
      setPrevOffset(scrollY);
    };

    useEffect(() => {
      window.addEventListener('scroll', toggleScrollDirection);
      return () => {
        window.removeEventListener('scroll', toggleScrollDirection);
      };
    });
    return scrollDirection;
  };

  const scrollDirection = useScrollDirection();

  useEffect(() => {
    setIsHomeRoute(router.pathname === '/');
  }, [router]);

  const classOne = menu ? 'collapse navbar-collapse mean-menu' : 'collapse navbar-collapse show';
  const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

  return (
    <header className={`scroll-${scrollDirection || 'up'} ${menu ? 'collapse-menu--visible' : ''}`}>
      <div id="navbar" className={`navbar-area navbar-style-2 ${navbarSticky}`}>
        <nav role="navigation" className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image
                src={logoImg}
                className="black-logo logo-ds-experts"
                title={COMPANY_FULL_NAME}
                alt="Firmen-Logo"
                style={{ height: 'auto' }}
              />
              <Image
                src={logoImg}
                className="white-logo logo-ds-experts"
                title={COMPANY_FULL_NAME}
                alt="Firmen-Logo"
                style={{ height: 'auto' }}
              />
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
                        href={link.to}
                        spy={true}
                        smooth={true}
                        {...SCROLL_LINKS_PROPS}
                      >
                        {link.name}
                      </ScrollLink>
                    ) : (
                      <Link href={link.to} className="nav-link">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="ds-hidden-md">
                {isHomeRoute ? (
                  <ScrollLink href="/#join-us" className="btn btn-primary" to="join-us" {...SCROLL_LINKS_PROPS}>
                    Jetzt bewerben
                  </ScrollLink>
                ) : (
                  <Link href="/#join-us" className="btn btn-primary">
                    Jetzt bewerben
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
