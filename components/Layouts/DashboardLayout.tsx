import { COMPANY_FULL_NAME } from '@consts/company';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import logoImg from '../../public/images/logo-ds-experts.png';
import GoTop from './GoTop';

interface NavLinks {
  to: string;
  name: string;
}

const DASHBOARD_URL = '/dashboard';

const navLinks: NavLinks[] = [
  { to: DASHBOARD_URL, name: 'Dashboard' },
  { to: DASHBOARD_URL + '/experts', name: 'Experten' },
  { to: DASHBOARD_URL + '/projects', name: 'Projekte' },
];

const DYNAMIC_PATH_REGEX = /\/\[(\.\.\.)?\w+\]$/gi;

const navbarHeight = 170;
const scrollThreshold = 50;

const LOGOUT_IMG_DEFAULT = 'fa-arrow-right-from-bracket';
const LOGOUT_IMG_HOVER = 'fa-person-through-window';

const DasboardLayout = (props: React.PropsWithChildren) => {
  const { data: session, status } = useSession();
  const [menu, setMenu] = useState(true);
  const [navbarSticky, setNavbarSticky] = useState('');
  const [isHoverLogoutBtn, setHoverLogoutBtn] = useState(false);

  const classOne = menu ? 'collapse navbar-collapse mean-menu' : 'collapse navbar-collapse show';
  const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

  const router = useRouter();
  const sectionPath = router.pathname.replace(DYNAMIC_PATH_REGEX, '');

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
    const [logoutImg, setLogoutImg] = useState('fa-');

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

  return (
    <>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'unauthenticated' && (
        <div className="m-4">
          <p>Access Denied</p>

          <p>
            <button onClick={() => signIn('azure-ad')} className="btn btn-primary">
              Login <i className="fas fa-arrow-right-to-bracket"></i>
            </button>
          </p>
        </div>
      )}

      {status === 'authenticated' && (
        <>
          <header className={`scroll-${scrollDirection || 'up'} ${menu ? 'collapse-menu--visible' : ''}`}>
            <div id="navbar" className={`dashboard-navbar navbar-area navbar-style-2 is-sticky  ${navbarSticky}`}>
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
                          <Link href={link.to} className={`nav-link ${sectionPath === link.to && 'active'}`}>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <span>
                      <span className="m-4 small" title={session?.user?.email}>
                        {session?.user?.name}
                      </span>
                      <button
                        onClick={() => signOut()}
                        className="btn px-2 py-0"
                        onMouseEnter={() => setHoverLogoutBtn(true)}
                        onMouseLeave={() => setHoverLogoutBtn(false)}
                        title="Log out"
                      >
                        <i
                          className={`fas ${isHoverLogoutBtn ? LOGOUT_IMG_HOVER : LOGOUT_IMG_DEFAULT}`}
                          style={{ fontSize: '2rem', width: '2rem', height: '2rem' }}
                        ></i>
                      </button>
                    </span>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          <p className="pb-100"></p>

          <main className="m-4">{props.children}</main>
        </>
      )}

      <GoTop />
    </>
  );
};

export default DasboardLayout;
