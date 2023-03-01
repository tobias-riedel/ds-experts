import Footer from './Footer';
import GoTop from './GoTop';
import Header from './Header';

const Layout = (props) => {
  return (
    <>
      <Header />

      <main>{props.children}</main>

      <Footer />
      <GoTop />
    </>
  );
};

export default Layout;
