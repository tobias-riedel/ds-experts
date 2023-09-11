import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';
import GoTop from './GoTop';

interface NavLinks {
  to: string;
  name: string;
}

const DASHBOARD_URL = '/dashboard';

const navLinks: NavLinks[] = [
  { to: '/', name: 'Home' },
  { to: DASHBOARD_URL, name: 'Dashboard' },
  { to: DASHBOARD_URL + '/experts', name: 'Experten' },
  { to: DASHBOARD_URL + '/projects', name: 'Projekte' },
];

const DasboardLayout = (props: React.PropsWithChildren) => {
  const { data: session, status } = useSession();
  const [menu, setMenu] = useState(true);

  const classOne = !menu ? 'collapse navbar-collapse mean-menu' : 'collapse navbar-collapse show';
  const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

  return (
    <>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'unauthenticated' && (
        <>
          <p>Access Denied</p>

          <>
            <button onClick={() => signIn('azure-ad')} className="btn btn-primary">
              Login
            </button>
          </>
        </>
      )}

      {status === 'authenticated' && (
        <>
          <header className={`scroll-up ${menu ? 'collapse-menu--visible' : ''}`}>
            <div id="navbar" className={`navbar-area navbar-style-2 is-sticky`}>
              <nav role="navigation" className="navbar navbar-expand-md navbar-light">
                <div className="container">
                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      {navLinks.map((link, idx) => (
                        <li className="nav-item" key={idx}>
                          <Link href={link.to} className="nav-link">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span>
                    <span className="m-4 small" title={session?.user?.email}>
                      {session?.user?.name}
                    </span>
                    <button onClick={() => signOut()} className="btn btn-primary">
                      Log out
                    </button>
                  </span>
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
