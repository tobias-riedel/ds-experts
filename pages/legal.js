import React from "react";
import PageBanner from "../components/Common/PageBanner";
import CookiesPolicy from "../components/HomePages/DsExperts/CookiesPolicy";
import Gdpr from "../components/HomePages/DsExperts/Gdpr";
import Imprint from "../components/HomePages/DsExperts/Imprint";
import Footer from "../components/Layouts/DsFooter";
import Navbar from "../components/Layouts/NavbarDsExperts";

const Faq = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Impressum" BGImage="/images/page-banner1.jpg" />

      <section id="imprint">
        <Imprint />
      </section>

      <section id="cookies-policy">
        <CookiesPolicy />
      </section>

      <section id="gdpr">
        <Gdpr />
      </section>

      <Footer />
    </>
  );
};

export default Faq;
