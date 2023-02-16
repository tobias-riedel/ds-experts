import CookieAccept from "../Common/CookieAccept";
import Footer from "./Footer";
import GoTop from "./GoTop";
import Header from "./Header";

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
