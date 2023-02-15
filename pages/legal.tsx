import React from "react";
import PageBanner from "../components/Common/PageBanner";
import CookiesPolicy from "../components/CookiesPolicy";
import Gdpr from "../components/Gdpr";
import Imprint from "../components/Imprint";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

const Faq = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Impressum" BGImage="/images/page-banner1.jpg" />

      <Imprint />

      <CookiesPolicy />

      <Gdpr />

      <Footer />
    </>
  );
};

export default Faq;
