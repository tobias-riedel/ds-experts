import CookieAccept from "../components/Common/CookieAccept";
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="404 Error" BGImage="/images/page-banner3.jpg" />

      <ErrorContent />

      <Footer />

      <CookieAccept />
    </>
  );
};

export default Error;
