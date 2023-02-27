import dynamic from 'next/dynamic';
import Footer from './Footer';
import GoTop from './GoTop';
import Header from './Header';

const CookieAccept = dynamic(import('../Common/CookieAccept'));

const Layout = (props) => {
  return (
    <>
      <Header />

      <main>{props.children}</main>

      <Footer />
      <CookieAccept />
      <GoTop />
    </>
  );
};

export default Layout;
