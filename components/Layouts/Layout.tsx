import CookieAccept from "../Common/CookieAccept";
import Footer from "./Footer";
import GoTop from "./GoTop";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <>
      <MainHeader />

      <main>{props.children}</main>

      <Footer />
      <CookieAccept />
      <GoTop />
    </>
  );
};

export default Layout;
