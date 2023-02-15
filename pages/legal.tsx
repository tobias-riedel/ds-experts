import CookieAccept from "../components/Common/CookieAccept";
import PageBanner from "../components/Common/PageBanner";
import CookiesPolicy from "../components/CookiesPolicy";
import Gdpr from "../components/Gdpr";
import Imprint from "../components/Imprint";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

const Legal = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Impressum" BGImage="/images/page-banner1.jpg" />

      <Imprint />

      <CookiesPolicy />

      <Gdpr />

      <Footer />

      <CookieAccept />
    </>
  );
};

export default Legal;
